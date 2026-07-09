import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, BackLink, StatusTag, InsetText } from "@/components/nhs";

export const Route = createFileRoute("/supplier/conformance")({
  head: () => ({ meta: [{ title: "Run mock conformance check — Open Appointments Exchange" }] }),
  component: Conformance,
});

const passed = [
  "Appointment identity present",
  "Provider details present",
  "Appointment date and time present",
  "Booking status present",
  "Cancellation supported",
];
const needsWork = [
  "Preparation tasks missing",
  "Accessibility needs not structured",
  "Follow-up status not supplied",
  "Patient communication preference not supplied",
];

function Conformance() {
  const [ran, setRan] = useState(false);
  return (
    <Layout>
      <BackLink to="/supplier" />
      <h1 className="text-3xl">Run mock conformance check</h1>
      <p className="text-[#425563] mt-2">Choose how to test a fictional appointment feed.</p>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {["Use sample appointment feed", "Paste example payload", "Connect fictional sandbox endpoint"].map((o, i) => (
          <button
            key={o}
            className="nhs-card text-left"
            onClick={() => setRan(true)}
            type="button"
          >
            <strong className="text-[#005eb8] text-lg">{o}</strong>
            <p className="text-sm mt-1 text-[#425563]">
              {i === 0 && "Runs against a pre-built fictional appointment feed."}
              {i === 1 && "Paste a JSON payload to check its shape."}
              {i === 2 && "Simulates a live connection with a mock endpoint."}
            </p>
          </button>
        ))}
      </div>

      {ran && (
        <div className="mt-10">
          <div className="border border-[#d8dde0] border-b-4 p-6 bg-white">
            <div className="flex items-center gap-4">
              <div className="text-5xl font-bold text-[#005eb8]">63%</div>
              <div>
                <div className="font-bold text-lg">Conformance score</div>
                <div className="text-[#425563] text-sm">Based on the sample appointment feed</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <section>
              <h2 className="text-xl mb-3"><StatusTag variant="green">Passed</StatusTag></h2>
              <ul className="list-disc pl-5 space-y-1">{passed.map((p) => <li key={p}>{p}</li>)}</ul>
            </section>
            <section>
              <h2 className="text-xl mb-3"><StatusTag variant="yellow">Needs work</StatusTag></h2>
              <ul className="list-disc pl-5 space-y-1">{needsWork.map((p) => <li key={p}>{p}</li>)}</ul>
            </section>
          </div>

          <InsetText>
            Your system can support basic appointment visibility, but patients and providers may
            not get the full benefit of Open Appointments until preparation, accessibility and
            follow-up information are included.
          </InsetText>

          <Link to="/supplier/changes" className="nhs-button">View recommended changes</Link>
        </div>
      )}
    </Layout>
  );
}
