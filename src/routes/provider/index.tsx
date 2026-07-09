import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, BackLink, DataCard, SummaryList, InsetText } from "@/components/nhs";
import { provider, providerMetrics } from "@/lib/mock-data";

export const Route = createFileRoute("/provider/")({
  head: () => ({ meta: [{ title: "Provider workspace — Open Appointments Exchange" }] }),
  component: ProviderDashboard,
});

function ProviderDashboard() {
  return (
    <Layout>
      <BackLink to="/role" />
      <h1 className="text-3xl">Provider workspace</h1>
      <p className="text-[#425563] mt-2 text-lg">Make services discoverable and easier to use.</p>

      <div className="mt-6 border border-[#d8dde0] p-6 bg-white">
        <SummaryList
          rows={[
            { key: "Provider", value: provider.name },
            { key: "Organisation type", value: provider.organisationType },
            { key: "Integration status", value: provider.integrationStatus },
            { key: "Service visibility", value: provider.visibility },
            { key: "Patient flow impact", value: provider.patientFlowImpact },
          ]}
        />
      </div>

      <h2 className="text-2xl mt-10 mb-3">This week</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {providerMetrics.map((m) => <DataCard key={m.label} {...m} />)}
      </div>

      <InsetText>
        Providers are not ranked by commercial preference. Services become more visible when they
        publish clearer availability, support appointment updates, reduce failed referrals and make
        it easier for patients to prepare and attend.
      </InsetText>

      <h2 className="text-2xl mt-8 mb-3">Actions</h2>
      <ul className="grid sm:grid-cols-2 gap-4">
        <li><Link to="/provider/profile" className="nhs-card"><strong className="text-[#005eb8] text-lg">Manage service profile</strong><p className="text-sm mt-1 text-[#425563]">Update the information patients see when choosing an appointment.</p></Link></li>
        <li><Link to="/provider/capacity" className="nhs-card"><strong className="text-[#005eb8] text-lg">Publish appointment capacity</strong><p className="text-sm mt-1 text-[#425563]">Publish real-time or scheduled availability.</p></Link></li>
        <li><Link to="/provider/demand" className="nhs-card"><strong className="text-[#005eb8] text-lg">View demand signals</strong><p className="text-sm mt-1 text-[#425563]">See where patient need in your area is going unmet.</p></Link></li>
        <li><Link to="/provider/improve" className="nhs-card"><strong className="text-[#005eb8] text-lg">Improve integration readiness</strong><p className="text-sm mt-1 text-[#425563]">Add actions that improve patient flow and reduce failure demand.</p></Link></li>
      </ul>
    </Layout>
  );
}
