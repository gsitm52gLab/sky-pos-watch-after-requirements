"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

const btnBase =
  "inline-flex items-center gap-1.5 rounded border border-[#b8c9db] bg-[#f0f5fa] px-3 py-1.5 text-[12px] font-semibold text-[#1e3a5f] hover:bg-[#e2eaf4]";

const btnActive =
  "inline-flex items-center gap-1.5 rounded border border-[#1e3a5f] bg-[#1e3a5f] px-3 py-1.5 text-[12px] font-semibold text-white hover:bg-[#162e4d] active:bg-[#162e4d]";

const DEPOSIT_ROWS = [
  {
    customerCode: "5060065",
    customerName: "스타벅스커피코리아",
    contractNo: "3210-0000-0916",
    bizArea: "BA15",
    startDate: "2024.01.01",
    endDate: "2024.12.31",
    deposit: "300,000,000",
    addDeposit: "",
    bank: "신한은행",
    account: "100-010-123456",
    transferDate: "2023.12.15",
    status: "정상",
  },
  {
    customerCode: "5045832",
    customerName: "롯데GRS(주)",
    contractNo: "3210-0000-0832",
    bizArea: "BA15",
    startDate: "2024.03.01",
    endDate: "2025.02.28",
    deposit: "150,000,000",
    addDeposit: "50,000,000",
    bank: "국민은행",
    account: "010-9999-887766",
    transferDate: "2024.02.20",
    status: "정상",
  },
];

export default function ScrKac001() {
  const [showDeposit, setShowDeposit] = useState(false);

  const [depositForm, setDepositForm] = useState({
    companyCode: "KAC1",
    bizArea: "BA15",
    customerCode: "",
    contractNo: "",
    contractType: "본계약",
  });

  const handleDepositChange = (field: string, value: string) => {
    setDepositForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-3">
      {/* Title */}
      <div className="border-b border-[#e7eef5] pb-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">임대계약관리</div>
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">[RT] 가계약마스터 생성</h1>
      </div>

      {/* Button bar — always visible */}
      <div className="rounded-[14px] border border-[#d7e2ee] bg-white px-4 py-2.5 shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
        <div className="flex items-center gap-2">
          <button className={btnBase} onClick={() => setShowDeposit(false)}>💾 저장</button>
          <button className={btnBase} onClick={() => setShowDeposit(false)}>✏️ 변경</button>
          <button
            className={showDeposit ? btnActive : btnBase}
            onClick={() => setShowDeposit((v) => !v)}
          >
            🏦 임대보증금 및 담보관리
          </button>
        </div>
      </div>

      {/* ── 기존 scr-kac-001 메인 컨텐츠 ── */}
      <div className={showDeposit ? "hidden" : "space-y-3"}>
        {/* 기본 계약정보 + 담당자 이력관리용 메모장 (side by side) */}
        <div className="flex gap-3">
          {/* LEFT: 기본 계약정보 */}
          <div className="min-w-0 flex-1 rounded-[14px] border border-[#d7e2ee] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
            <div className="border-b border-[#e7eef5] px-4 py-2.5">
              <div className="text-[13px] font-semibold text-[#0f172a]">기본 계약정보</div>
            </div>
            <div className="px-4 py-3">
              <table className="w-full border-collapse text-[12px]">
                <tbody>
                  {/* Row 1 */}
                  <tr className="border-b border-[#f1f5f9]">
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">년도</td>
                    <td className="py-2 pr-4">
                      <Input value="2026" readOnly className="h-6 w-14 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">계약번호</td>
                    <td className="py-2 pr-4">
                      <Input value="0000040993" readOnly className="h-6 w-24 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">계약 차수</td>
                    <td className="py-2 pr-4">
                      <Input value="00" readOnly className="h-6 w-10 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">상태</td>
                    <td className="py-2 pr-4">
                      <Input value="가계약" readOnly className="h-6 w-16 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">년도구분</td>
                    <td className="py-2">
                      <Input value="1차년도" readOnly className="h-6 w-16 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="border-b border-[#f1f5f9]">
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">고객코드</td>
                    <td className="py-2 pr-4">
                      <div className="flex items-center gap-1">
                        <Input className="h-6 w-20 border-[#d6e0ea] text-[12px]" />
                        <button className="rounded border border-[#d6e0ea] bg-white px-1 py-0.5 text-[11px] text-[#475569] hover:bg-[#f8fbff]">□</button>
                        <Input className="h-6 w-28 border-[#d6e0ea] text-[12px]" />
                      </div>
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">용도 구분</td>
                    <td className="py-2 pr-4">
                      <Input value="업무시설" readOnly className="h-6 w-20 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">상업부대시설</td>
                    <td className="py-2" colSpan={5}>
                      <input type="checkbox" className="accent-[#002D56]" />
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="border-b border-[#f1f5f9]">
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">입찰구분</td>
                    <td className="py-2 pr-4">
                      <select className="h-6 rounded border border-[#d6e0ea] px-1 text-[12px] text-[#334155] bg-white">
                        <option>-선택-</option>
                      </select>
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">고지구분</td>
                    <td className="py-2 pr-4">
                      <select className="h-6 rounded border border-[#d6e0ea] px-1 text-[12px] text-[#334155] bg-white">
                        <option>-선택-</option>
                      </select>
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">담당자사번</td>
                    <td className="py-2 pr-4">
                      <div className="flex items-center gap-1">
                        <Input className="h-6 w-16 border-[#d6e0ea] text-[12px]" />
                        <Input className="h-6 w-16 border-[#d6e0ea] text-[12px]" readOnly />
                      </div>
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">사용여부</td>
                    <td className="py-2" colSpan={3}>
                      <Input value="사용중" readOnly className="h-6 w-16 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="border-b border-[#f1f5f9]">
                    <td className="py-2" colSpan={10}>
                      <label className="flex items-center gap-1.5 cursor-pointer text-[12px] text-[#334155]">
                        <input type="checkbox" className="accent-[#002D56]" />
                        예외사항 : 전대승인자인증
                      </label>
                    </td>
                  </tr>

                  {/* Row 5: 전자계약 추가항목 header */}
                  <tr className="border-b border-[#f1f5f9] bg-[#f8fbff]">
                    <td className="py-1.5 pl-1 text-[11px] font-semibold text-[#64748b]" colSpan={10}>
                      [전자계약 추가항목]
                    </td>
                  </tr>

                  {/* Row 6 */}
                  <tr>
                    <td className="py-2" colSpan={2}>
                      <label className="flex items-center gap-1.5 cursor-pointer text-[12px] text-[#334155]">
                        <input type="checkbox" className="accent-[#002D56]" />
                        전자계약대상 제외
                      </label>
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">구내영업요율</td>
                    <td className="py-2 pr-4">
                      <Input className="h-6 w-28 border-[#d6e0ea] text-[12px]" />
                    </td>
                    <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">보증금 납부방법</td>
                    <td className="py-2" colSpan={5}>
                      <select className="h-6 rounded border border-[#d6e0ea] px-1 text-[12px] text-[#334155] bg-white">
                        <option>-선택-</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT: 담당자 이력관리용 메모장 */}
          <div className="w-[280px] flex-shrink-0 rounded-[14px] border border-[#d7e2ee] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
            <div className="border-b border-[#e7eef5] px-4 py-2.5">
              <div className="text-[13px] font-semibold text-[#0f172a]">담당자 이력관리용 메모장</div>
            </div>
            <div className="px-4 py-3">
              <div className="flex gap-1.5 mb-2">
                <button className={btnBase}>🔲 행추가</button>
                <button className={btnBase}>🔲 행삭제</button>
              </div>
              <table className="w-full border-collapse text-[12px]">
                <thead>
                  <tr className="border-b border-[#e7eef5] bg-[#f8fbff]">
                    <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b] w-6">행</th>
                    <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b] w-10">순번</th>
                    <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b]">메모장</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3].map((i) => (
                    <tr key={i} className="border-b border-[#f1f5f9] h-8">
                      <td className="px-2 py-1"></td>
                      <td className="px-2 py-1"></td>
                      <td className="px-2 py-1"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 상세 계약정보 */}
        <div className="rounded-[14px] border border-[#d7e2ee] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
          <div className="border-b border-[#e7eef5] px-4 py-2.5">
            <div className="text-[13px] font-semibold text-[#0f172a]">상세 계약정보</div>
          </div>
          <div className="px-4 py-3">
            <div className="flex gap-1.5 mb-2">
              <button className={btnBase}>🔲 행추가</button>
              <button className={btnBase}>🔲 행삭제</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[12px]">
                <thead>
                  <tr className="border-b border-[#e7eef5] bg-[#f8fbff]">
                    {["순번", "자산번호", "자산내역", "자산구분", "무상여부", "임대료산정", "사용목적", "면적", "단가", "신청시작일", "신청종료일"].map((h) => (
                      <th key={h} className="px-2 py-2 text-left text-[11px] font-semibold text-[#64748b] whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((i) => (
                    <tr key={i} className="border-b border-[#f1f5f9] h-8">
                      {Array(11).fill(null).map((_, j) => (
                        <td key={j} className="px-2 py-1 text-[12px] text-[#334155]"></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 임대료 및 임대보증금 합계 */}
        <div className="rounded-[14px] border border-[#d7e2ee] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
          <div className="border-b border-[#e7eef5] px-4 py-2.5">
            <div className="text-[13px] font-semibold text-[#0f172a]">임대료 및 임대보증금 합계</div>
          </div>
          <div className="px-4 py-3">
            <table className="border-collapse text-[12px]">
              <tbody>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">면적</td>
                  <td className="py-2 pr-5">
                    <Input value="0.00" readOnly className="h-6 w-20 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                  </td>
                  <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">단가</td>
                  <td className="py-2">
                    <Input value="0" readOnly className="h-6 w-20 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">기간임대료</td>
                  <td className="py-2 pr-4">
                    <Input value="0" readOnly className="h-6 w-20 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                  </td>
                  <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">월간임대료</td>
                  <td className="py-2 pr-4">
                    <Input value="0" readOnly className="h-6 w-20 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                  </td>
                  <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">연간임대료</td>
                  <td className="py-2 pr-4">
                    <Input value="0" readOnly className="h-6 w-20 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                  </td>
                  <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">임대보증금</td>
                  <td className="py-2 pr-4">
                    <Input value="0" readOnly className="h-6 w-20 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                  </td>
                  <td className="py-2 pr-3 font-semibold text-[#64748b] whitespace-nowrap">임대보증금 자동계산</td>
                  <td className="py-2">
                    <Input value="0" readOnly className="h-6 w-20 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 하단 3열 */}
        <div className="grid grid-cols-3 gap-3">
          {/* 계약문서관리 */}
          <div className="rounded-[14px] border border-[#d7e2ee] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
            <div className="border-b border-[#e7eef5] px-4 py-2.5">
              <div className="text-[13px] font-semibold text-[#0f172a]">계약문서관리</div>
            </div>
            <div className="px-4 py-3">
              <div className="flex gap-1.5 mb-2">
                <button className={btnBase}>🔲 신규</button>
                <button className={btnBase}>🗑️ 파일삭제</button>
                <button className={btnBase}>⬇️ 다운로드</button>
              </div>
              <table className="w-full border-collapse text-[12px]">
                <thead>
                  <tr className="border-b border-[#e7eef5] bg-[#f8fbff]">
                    <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b] w-6">행</th>
                    <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b] w-10">순번</th>
                    <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b]">도면선택</th>
                    <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b]">파일명</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2].map((i) => (
                    <tr key={i} className="border-b border-[#f1f5f9] h-8">
                      <td className="px-2 py-1"></td>
                      <td className="px-2 py-1"></td>
                      <td className="px-2 py-1"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SKY-NET 문서관리 */}
          <div className="rounded-[14px] border border-[#d7e2ee] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
            <div className="border-b border-[#e7eef5] px-4 py-2.5">
              <div className="text-[13px] font-semibold text-[#0f172a]">SKY-NET 문서관리</div>
            </div>
            <div className="px-4 py-3">
              <div className="flex gap-1.5 mb-2">
                <button className={btnBase}>🔲 문서추가 방법</button>
                <button className={btnBase}>🔄 새로고침</button>
                <button className={btnBase}>🗑️ 삭제</button>
              </div>
              <table className="w-full border-collapse text-[12px]">
                <thead>
                  <tr className="border-b border-[#e7eef5] bg-[#f8fbff]">
                    <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b] w-6">행</th>
                    <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b] w-10">순번</th>
                    <th className="px-2 py-1.5 text-left text-[11px] font-semibold text-[#64748b]">문서제목</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2].map((i) => (
                    <tr key={i} className="border-b border-[#f1f5f9] h-8">
                      <td className="px-2 py-1"></td>
                      <td className="px-2 py-1"></td>
                      <td className="px-2 py-1"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 소속시 계약담당자 연락처 */}
          <div className="rounded-[14px] border border-[#d7e2ee] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
            <div className="border-b border-[#e7eef5] px-4 py-2.5">
              <div className="text-[13px] font-semibold text-[#0f172a]">고객사 계약담당자 연락처</div>
            </div>
            <div className="px-4 py-3">
              <table className="w-full border-collapse text-[12px]">
                <tbody>
                  {[
                    "계약담당자 성명",
                    "계약담당자 전화번호",
                    "계약담당자 핸드폰번호",
                    "계약담당자 E-MAIL주소",
                    "계약담당자 팩스번호",
                  ].map((label) => (
                    <tr key={label} className="border-b border-[#f1f5f9]">
                      <td className="py-1.5 pr-3 font-semibold text-[#64748b] whitespace-nowrap w-36">{label}</td>
                      <td className="py-1.5">
                        <Input className="h-6 w-full border-[#d6e0ea] text-[12px]" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ── scr-kac-027 귀속 영역 (임대보증금 신규/추가) ── */}
      <div className={showDeposit ? "space-y-3" : "hidden"}>

        {/* 입력조건 — 수평 1행 레이아웃 (33p.jpg 기준) */}
        <div className="rounded-[14px] border border-[#d7e2ee] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
          <div className="border-b border-[#e7eef5] px-4 py-2.5">
            <div className="text-[13px] font-semibold text-[#0f172a]">입력조건</div>
          </div>
          <div className="px-4 py-3">
            <div className="flex flex-wrap items-end gap-x-5 gap-y-2">
              {/* 회사코드 */}
              <div className="flex items-center gap-1.5">
                <span className="text-[12px] font-semibold text-[#64748b] whitespace-nowrap">회사코드</span>
                <Input value={depositForm.companyCode} readOnly className="h-6 w-14 border-[#d6e0ea] text-[12px] bg-[#f8fbff]" />
                <span className="text-[12px] text-[#334155]">한국공항공사</span>
              </div>
              {/* 사업영역 */}
              <div className="flex items-center gap-1.5">
                <span className="text-[12px] font-semibold text-[#64748b] whitespace-nowrap">사업영역</span>
                <Input
                  value={depositForm.bizArea}
                  onChange={(e) => handleDepositChange("bizArea", e.target.value)}
                  className="h-6 w-16 border-[#d6e0ea] text-[12px]"
                />
                <button className="flex h-6 w-6 items-center justify-center rounded border border-[#d6e0ea] bg-[#f8fbff] text-[#64748b] hover:bg-[#f0f4f8]">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                </button>
              </div>
              {/* 고객코드 */}
              <div className="flex items-center gap-1.5">
                <span className="text-[12px] font-semibold text-[#64748b] whitespace-nowrap">고객코드</span>
                <Input
                  value={depositForm.customerCode}
                  onChange={(e) => handleDepositChange("customerCode", e.target.value)}
                  className="h-6 w-24 border-[#d6e0ea] text-[12px]"
                  placeholder="고객코드"
                />
                <button className="flex h-6 w-6 items-center justify-center rounded border border-[#d6e0ea] bg-[#f8fbff] text-[#64748b] hover:bg-[#f0f4f8]">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                </button>
              </div>
              {/* 계약번호 */}
              <div className="flex items-center gap-1.5">
                <span className="text-[12px] font-semibold text-[#64748b] whitespace-nowrap">계약번호</span>
                <Input
                  value={depositForm.contractNo}
                  onChange={(e) => handleDepositChange("contractNo", e.target.value)}
                  className="h-6 w-36 border-[#d6e0ea] text-[12px]"
                  placeholder="계약번호"
                />
              </div>
              {/* 계약유형 */}
              <div className="flex items-center gap-1.5">
                <span className="text-[12px] font-semibold text-[#64748b] whitespace-nowrap">계약유형</span>
                {["가계약", "본계약"].map((v) => (
                  <label key={v} className="flex items-center gap-1 cursor-pointer text-[12px] text-[#334155]">
                    <input
                      type="radio"
                      name="depositContractType"
                      value={v}
                      checked={depositForm.contractType === v}
                      onChange={() => handleDepositChange("contractType", v)}
                      className="accent-[#002D56]"
                    />
                    {v}
                  </label>
                ))}
              </div>
              {/* 조회 버튼 */}
              <button className="rounded-[8px] bg-[#002D56] px-4 py-1 text-[12px] font-semibold text-white hover:bg-[#00254a]">
                조회
              </button>
            </div>
          </div>
        </div>

        {/* 임대보증금 신규/추가 목록 (33p.jpg 기준 테이블) */}
        <div className="rounded-[14px] border border-[#d7e2ee] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
          <div className="flex items-center justify-between border-b border-[#e7eef5] px-4 py-2.5">
            <div className="text-[13px] font-semibold text-[#0f172a]">임대보증금 신규/추가 목록</div>
            <div className="flex items-center gap-1.5">
              <button className={btnBase}>🔲 신규</button>
              <button className={btnBase}>➕ 추가</button>
              <button className="inline-flex items-center gap-1.5 rounded border border-[#002D56] bg-[#002D56] px-3 py-1.5 text-[12px] font-semibold text-white hover:bg-[#00254a]">
                💾 저장
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[12px]">
              <thead>
                <tr className="border-b border-[#e7eef5] bg-[#f8fbff]">
                  {["고객번호", "고객명", "계약번호", "사업영역", "기산일", "종료일", "보증금", "추가보증금", "은행명", "계좌번호", "이체일", "상태"].map((h) => (
                    <th key={h} className="px-3 py-2.5 text-left text-[11px] font-semibold text-[#64748b] whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DEPOSIT_ROWS.map((row, idx) => (
                  <tr key={idx} className="border-b border-[#f1f5f9] hover:bg-[#f8fbff] cursor-pointer">
                    <td className="px-3 py-2 text-[12px] text-[#334155]">{row.customerCode}</td>
                    <td className="px-3 py-2 text-[12px] text-[#334155] whitespace-nowrap">{row.customerName}</td>
                    <td className="px-3 py-2 text-[12px] text-[#334155] font-mono">{row.contractNo}</td>
                    <td className="px-3 py-2 text-[12px] text-[#334155]">{row.bizArea}</td>
                    <td className="px-3 py-2 text-[12px] text-[#334155]">{row.startDate}</td>
                    <td className="px-3 py-2 text-[12px] text-[#334155]">{row.endDate}</td>
                    <td className="px-3 py-2 text-right text-[12px] text-[#334155]">{row.deposit}</td>
                    <td className="px-3 py-2 text-right text-[12px] text-[#334155]">{row.addDeposit}</td>
                    <td className="px-3 py-2 text-[12px] text-[#334155]">{row.bank}</td>
                    <td className="px-3 py-2 text-[12px] text-[#334155] font-mono">{row.account}</td>
                    <td className="px-3 py-2 text-[12px] text-[#334155]">{row.transferDate}</td>
                    <td className="px-3 py-2">
                      <span className="inline-block rounded-full bg-[#dcfce7] px-2 py-0.5 text-[10px] font-semibold text-[#166534]">{row.status}</span>
                    </td>
                  </tr>
                ))}
                {/* 합계 행 */}
                <tr className="border-t-2 border-[#d7e2ee] bg-[#f8fbff] font-semibold">
                  <td className="px-3 py-2 text-[12px] text-[#0f172a]" colSpan={6}>합계</td>
                  <td className="px-3 py-2 text-right text-[12px] text-[#0f172a]">450,000,000</td>
                  <td className="px-3 py-2 text-right text-[12px] text-[#0f172a]">50,000,000</td>
                  <td className="px-3 py-2 text-[12px]" colSpan={4}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
