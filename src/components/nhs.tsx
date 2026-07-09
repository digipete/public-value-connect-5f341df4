import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function NHSHeader() {
  return (
    <header className="bg-[#005eb8] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3 !text-white no-underline hover:no-underline">
          <div className="bg-white text-[#005eb8] font-bold px-2 py-1 text-lg tracking-tight">
            NHS
          </div>
          <span className="font-semibold text-lg hidden sm:inline">Open Appointments Exchange</span>
        </Link>
        <span className="text-sm hidden md:inline">Prototype</span>
      </div>
    </header>
  );
}

export function PhaseBanner() {
  return (
    <div className="border-b border-[#d8dde0] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3 flex-wrap text-sm">
        <span className="nhs-tag">Prototype</span>
        <span className="text-[#425563]">
          This is a fictional proof of concept. It does not use real patient data and is not a
          live NHS service.
        </span>
      </div>
    </div>
  );
}

export function BackLink({ to, children = "Back" }: { to: string; children?: ReactNode }) {
  return (
    <div className="mb-4">
      <Link to={to} className="text-[#005eb8] inline-flex items-center gap-1">
        <span aria-hidden>‹</span> {children}
      </Link>
    </div>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col bg-white">
      <NHSHeader />
      <PhaseBanner />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
      </main>
      <footer className="bg-[#f0f4f5] border-t border-[#d8dde0] mt-16">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-[#425563]">
          <p className="font-semibold text-[#212b32] mb-1">Open Appointments Exchange — prototype</p>
          <p>
            A fictional proof of concept exploring how the NHS could coordinate demand, supply and
            supplier integration around a shared appointment object.
          </p>
        </div>
      </footer>
    </div>
  );
}

export function InsetText({ children }: { children: ReactNode }) {
  return <div className="nhs-inset-text">{children}</div>;
}

export function WarningCallout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="nhs-warning-callout">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

type TagVariant = "blue" | "grey" | "green" | "yellow" | "red" | "purple";
export function StatusTag({ children, variant = "blue" }: { children: ReactNode; variant?: TagVariant }) {
  const cls =
    variant === "grey" ? "nhs-tag nhs-tag-grey" :
    variant === "green" ? "nhs-tag nhs-tag-green" :
    variant === "yellow" ? "nhs-tag nhs-tag-yellow" :
    variant === "red" ? "nhs-tag nhs-tag-red" :
    variant === "purple" ? "nhs-tag nhs-tag-purple" :
    "nhs-tag";
  return <span className={cls}>{children}</span>;
}

export function SummaryList({ rows }: { rows: Array<{ key: string; value: ReactNode; action?: ReactNode }> }) {
  return (
    <dl className="border-t border-[#d8dde0]">
      {rows.map((r) => (
        <div key={r.key} className="nhs-summary-row">
          <dt className="font-bold">{r.key}</dt>
          <dd>{r.value}</dd>
          <dd>{r.action}</dd>
        </div>
      ))}
    </dl>
  );
}

export function DataCard({ label, value, meta }: { label: string; value: ReactNode; meta?: string }) {
  return (
    <div className="border border-[#d8dde0] border-b-4 p-5 bg-white">
      <div className="text-sm text-[#425563] font-semibold uppercase tracking-wide">{label}</div>
      <div className="text-3xl font-bold text-[#005eb8] mt-2">{value}</div>
      {meta && <div className="text-sm text-[#425563] mt-1">{meta}</div>}
    </div>
  );
}

export function Timeline({ items }: { items: Array<{ title: string; description?: string; done?: boolean }> }) {
  return (
    <ol className="border-l-4 border-[#005eb8] pl-6 space-y-6 mt-6">
      {items.map((it, i) => (
        <li key={i} className="relative">
          <span
            className={`absolute -left-[34px] top-1 w-5 h-5 rounded-full border-4 border-white ${
              it.done ? "bg-[#009639]" : "bg-[#768692]"
            }`}
            aria-hidden
          />
          <div className="font-bold">{it.title}</div>
          {it.description && <div className="text-[#425563] text-sm mt-1">{it.description}</div>}
        </li>
      ))}
    </ol>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block border-2 border-[#005eb8] text-[#005eb8] px-3 py-1 rounded-full text-sm font-semibold bg-white">
      {children}
    </span>
  );
}

export function Details({ summary, children }: { summary: string; children: ReactNode }) {
  return (
    <details className="my-4 border-b border-[#d8dde0] pb-2">
      <summary className="cursor-pointer text-[#005eb8] font-semibold underline decoration-1">
        {summary}
      </summary>
      <div className="mt-3">{children}</div>
    </details>
  );
}
