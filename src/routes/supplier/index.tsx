import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, BackLink, DataCard, StatusTag, InsetText } from "@/components/nhs";
import { supplier, supplierCapabilities } from "@/lib/mock-data";

export const Route = createFileRoute("/supplier/")({
  head: () => ({ meta: [{ title: "Supplier integration workbench — Open Appointments Exchange" }] }),
  component: SupplierHome,
});

function SupplierHome() {
  return (
    <Layout>
      <BackLink to="/role" />
      <h1 className="text-3xl">Supplier integration workbench</h1>
      <p className="text-[#425563] mt-2 text-lg">Connect systems to the shared appointment object.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <DataCard label="Supplier" value={supplier.name} meta={supplier.product} />
        <DataCard label="Current readiness" value={supplier.readiness} />
        <DataCard label="Connected providers" value={supplier.connectedProviders} meta="fictional providers" />
        <DataCard label="Conformance score" value={`${supplier.conformanceScore}%`} />
      </div>

      <h2 className="text-2xl mt-8 mb-3">Supported capabilities</h2>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {supplierCapabilities.map((c) => (
          <li key={c.name} className="border border-[#d8dde0] border-b-4 p-4 bg-white flex flex-col gap-2">
            <span className="font-bold">{c.name}</span>
            <StatusTag variant={c.status === "Supported" ? "green" : c.status === "Partial" ? "yellow" : "grey"}>
              {c.status}
            </StatusTag>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl mt-10 mb-3">Actions</h2>
      <ul className="grid sm:grid-cols-2 gap-4">
        <li><Link to="/supplier/object" className="nhs-card"><strong className="text-[#005eb8] text-lg">View appointment object</strong><p className="text-sm mt-1 text-[#425563]">See the fields and structure of the shared appointment object.</p></Link></li>
        <li><Link to="/supplier/conformance" className="nhs-card"><strong className="text-[#005eb8] text-lg">Run mock conformance check</strong><p className="text-sm mt-1 text-[#425563]">Test a sample appointment feed against the shared expectations.</p></Link></li>
        <li><Link to="/supplier/changes" className="nhs-card"><strong className="text-[#005eb8] text-lg">Register supplier capability</strong><p className="text-sm mt-1 text-[#425563]">Declare which parts of the appointment object your system supports.</p></Link></li>
        <li><Link to="/supplier/object" className="nhs-card"><strong className="text-[#005eb8] text-lg">View integration guide</strong><p className="text-sm mt-1 text-[#425563]">Illustrative patterns for availability, booking, updates, cancellation and follow-up.</p></Link></li>
      </ul>

      <InsetText>
        Suppliers are participants in a shared public object, not owners of the appointment
        relationship. This prototype does not exchange any real data.
      </InsetText>
    </Layout>
  );
}
