"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function ScrKac004() {
  const [mode, setMode] = useState<"ref" | "new">("ref");

  return (
    <div className="space-y-4">
      <div className="border-b border-[#e7eef5] pb-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">임대계약관리</div>
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">[RT] 계약마스터 생성</h1>
      </div>

      <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
        <div className="border-b border-[#e7eef5] px-5 py-3">
          <div className="text-sm font-semibold text-[#0f172a]">입력조건</div>
        </div>
        <div className="px-5 py-4 space-y-3">
          <label className="flex items-center gap-2 cursor-pointer text-sm text-[#334155]">
            <input
              type="radio"
              name="mode"
              value="ref"
              checked={mode === "ref"}
              onChange={() => setMode("ref")}
              className="accent-[#002D56]"
            />
            가계약코드를 참조하여 생성
            <Input className="h-7 w-32 border-[#d6e0ea] text-sm ml-2" placeholder="" />
          </label>

          <table className="text-sm border-collapse ml-4">
            <tbody>
              <tr className="border-b border-[#e7eef5]">
                <td className="w-28 py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">가계약코드</td>
                <td className="py-2.5">
                  <Input className="h-7 w-32 border-[#d6e0ea] text-sm" />
                </td>
              </tr>
              <tr className="border-b border-[#e7eef5]">
                <td className="w-28 py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">년도</td>
                <td className="py-2.5">
                  <Input value="2026" readOnly className="h-7 w-20 border-[#d6e0ea] text-sm bg-[#f8fbff]" />
                </td>
              </tr>
              <tr>
                <td className="w-28 py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">사업영역</td>
                <td className="py-2.5">
                  <Input value="BA15" readOnly className="h-7 w-16 border-[#d6e0ea] text-sm bg-[#f8fbff]" />
                </td>
              </tr>
            </tbody>
          </table>

          <label className="flex items-center gap-2 cursor-pointer text-sm text-[#334155]">
            <input
              type="radio"
              name="mode"
              value="new"
              checked={mode === "new"}
              onChange={() => setMode("new")}
              className="accent-[#002D56]"
            />
            신규 생성(가계약코드 없음)
          </label>
        </div>
      </div>

      <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
        <div className="flex min-h-[80px] items-center justify-center text-[13px] text-[#94a3b8]">
          No Data
        </div>
      </div>
    </div>
  );
}
