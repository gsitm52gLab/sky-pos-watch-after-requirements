"use client";

import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItem, allMenus, AreaType } from "@/data/menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

function MenuNode({
  item,
  depth = 0,
  onUnimplemented,
}: {
  item: MenuItem;
  depth?: number;
  onUnimplemented: () => void;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(depth === 0);
  const isLeaf = !item.children;
  const isActive = isLeaf && item.path && pathname === item.path;

  if (isLeaf && item.path) {
    return (
      <Link
        href={item.path}
        className={cn(
          "block rounded-md px-3 py-2 text-[13px] transition-colors",
          isActive
            ? "bg-[#0ea5e9]/20 text-[#7dd3fc] font-medium border-l-2 border-[#0ea5e9] ml-0"
            : "text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-[#002D56]/60",
          depth > 0 && !isActive && "ml-4",
          depth > 0 && isActive && "ml-3"
        )}
      >
        {item.label}
      </Link>
    );
  }

  if (isLeaf && !item.path) {
    return (
      <button
        onClick={onUnimplemented}
        className={cn(
          "block w-full text-left rounded-md px-3 py-2 text-[13px] transition-colors",
          "text-[#475569] hover:text-[#64748b] hover:bg-[#002D56]/30 cursor-default",
          depth > 0 && "ml-4"
        )}
      >
        {item.label}
      </button>
    );
  }

  return (
    <div className={cn(depth > 0 && "ml-2")}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-1.5 rounded-md px-3 py-2.5 text-[13px] font-medium text-[#cbd5e1] transition-colors hover:bg-[#002D56]/60 hover:text-white"
      >
        {item.icon && <span className="text-sm opacity-70">{item.icon}</span>}
        <span className="flex-1 text-left">{item.label}</span>
        <svg
          width="12" height="12" viewBox="0 0 12 12"
          className={cn("text-[#64748b] transition-transform duration-200", open && "rotate-90")}
          fill="currentColor"
        >
          <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </button>
      {open && item.children && (
        <div className="mt-0.5 space-y-0.5">
          {item.children.map((child) => (
            <MenuNode key={child.id} item={child} depth={depth + 1} onUnimplemented={onUnimplemented} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar({ area }: { area: AreaType }) {
  const menu = allMenus[area] || [];
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showTooltip = useCallback(() => {
    setTooltipVisible(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setTooltipVisible(false), 3000);
  }, []);

  return (
    <div className="h-full">
      <ScrollArea className="h-full">
        <div className="border-b border-[#1e3a5f] p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#64748b]">
            Navigation
          </p>
        </div>
        <nav className="space-y-0.5 p-2">
          {menu.map((item) => (
            <MenuNode key={item.id} item={item} onUnimplemented={showTooltip} />
          ))}
        </nav>
      </ScrollArea>

      {tooltipVisible && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] pointer-events-none">
          <div className="relative bg-[#1a3a5c] text-white text-[13px] font-medium px-5 py-3 rounded-xl shadow-2xl border border-[#2d5a8e] whitespace-nowrap">
            <span
              className="absolute -top-[9px] left-1/2 -translate-x-1/2"
              style={{
                width: 0,
                height: 0,
                borderLeft: "9px solid transparent",
                borderRight: "9px solid transparent",
                borderBottom: "9px solid #1a3a5c",
              }}
            />
            구현 예정인 화면입니다.
          </div>
        </div>
      )}
    </div>
  );
}
