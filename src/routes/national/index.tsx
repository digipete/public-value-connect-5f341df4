import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, BackLink, DataCard, InsetText } from "@/components/nhs";
import { nationalMetrics } from "@/lib/mock-data";

export const Route = createFileRoute("/national/")({
  head: () => ({ meta: [{ title: "National coordination view — Open Appointments Exchange" }] }),
  component: National,
});

const sections = [
  { title: "Demand", body: "Where patients are searching, what services they need, where choice is constrained." },
  { title: "Supply", body: "Which providers have available capacity, which services are discoverable, where support is needed." },
  { title: "Integration", body: "Which suppliers and providers support the common appointment object." },
  { title: "Public value", body: "Access, inclusion, waiting well, preparation, missed appointments and patient confidence." },
];

function National() {
  return (
    <Layout>
      <BackLink to="/role" />
      <h1 className="text-3xl">National coordination view</h1>
      <p className="text-[#425563] mt-2 text-lg">See how demand, supply and integration are moving.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {nationalMetrics.map((m) => <DataCard key={m.label} {...m} />)}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {sections.map((s) => (
          <section key={s.title} className="border border-[#d8dde0] border-b-4 p-5 bg-white">
            <h2 className="text-xl mb-2">{s.title}</h2>
            <p className="text-[#425563]">{s.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/national/impact" className="nhs-button">View moment of choice impact</Link>
        <Link to="/national/learning" className="nhs-button-secondary">Evidence and learning log</Link>
      </div>

      <InsetText>
        This view is designed to support coordination, not compliance. Metrics are illustrative.
      </InsetText>
    </Layout>
  );
}
