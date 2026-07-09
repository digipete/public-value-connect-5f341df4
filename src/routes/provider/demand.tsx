import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, BackLink, InsetText } from "@/components/nhs";
import { demandSignals } from "@/lib/mock-data";

export const Route = createFileRoute("/provider/demand")({
  head: () => ({ meta: [{ title: "Demand signals — Open Appointments Exchange" }] }),
  component: Demand,
});

const insights = [
  "Adding two video assessment clinics could meet unmet demand.",
  "Clearer preparation instructions may reduce missed appointments.",
  "Step-free access information increases confidence for patients with mobility needs.",
];

function Demand() {
  const max = Math.max(...demandSignals.map((d) => d.value));
  return (
    <Layout>
      <BackLink to="/provider" />
      <h1 className="text-3xl">Demand signals</h1>
      <p className="text-[#425563] mt-2">What patients searched for near you this week.</p>

      <div className="mt-6 border border-[#d8dde0] p-6 bg-white">
        <ul className="space-y-4">
          {demandSignals.map((d) => (
            <li key={d.text}>
              <div className="flex justify-between">
                <span>{d.text}</span>
                <span className="font-bold">{d.value}</span>
              </div>
              <div className="h-2 bg-[#f0f4f5] mt-1">
                <div className="h-2 bg-[#005eb8]" style={{ width: `${(d.value / max) * 100}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl mt-8 mb-3">Suggested insights</h2>
      <ul className="grid md:grid-cols-3 gap-4">
        {insights.map((i) => (
          <li key={i} className="border border-[#d8dde0] border-b-4 p-4 bg-[#f0f4f5]">{i}</li>
        ))}
      </ul>

      <div className="mt-6">
        <Link to="/provider/improve" className="nhs-button">Create improvement action</Link>
      </div>

      <InsetText>Insights are illustrative and derived from mock demand data.</InsetText>
    </Layout>
  );
}
