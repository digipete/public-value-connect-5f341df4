import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, BackLink, StatusTag } from "@/components/nhs";

export const Route = createFileRoute("/supplier/changes")({
  head: () => ({ meta: [{ title: "Recommended changes — Open Appointments Exchange" }] }),
  component: Changes,
});

const recs = [
  { title: "Add structured preparation tasks", why: "Helps patients arrive ready and reduces rework." },
  { title: "Add accessibility fields", why: "Helps patients choose appointments they can attend." },
  { title: "Add follow-up status", why: "Helps patients understand what happens after the appointment." },
  { title: "Add cancellation and change events", why: "Helps release unused capacity back into the system." },
  { title: "Add provenance and update timestamps", why: "Helps national and provider teams trust the data." },
];

function Changes() {
  const [planned, setPlanned] = useState<string[]>([]);
  const mark = (t: string) => setPlanned((p) => p.includes(t) ? p : [...p, t]);
  return (
    <Layout>
      <BackLink to="/supplier/conformance" />
      <h1 className="text-3xl">Recommended changes</h1>
      <p className="text-[#425563] mt-2">Improvements that would increase your conformance score.</p>

      <ul className="mt-6 space-y-4">
        {recs.map((r) => (
          <li key={r.title} className="border border-[#d8dde0] border-b-4 p-5 bg-white">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-xl">{r.title}</h2>
                <p className="text-sm text-[#425563] mt-1">{r.why}</p>
              </div>
              {planned.includes(r.title) ? (
                <StatusTag variant="green">Planned</StatusTag>
              ) : (
                <button className="nhs-button-reverse" onClick={() => mark(r.title)}>Mark as planned</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
