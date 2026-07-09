import { createFileRoute } from "@tanstack/react-router";
import { Layout, BackLink, Details, InsetText } from "@/components/nhs";
import { examplePayload } from "@/lib/mock-data";

export const Route = createFileRoute("/supplier/object")({
  head: () => ({ meta: [{ title: "Common appointment object — Open Appointments Exchange" }] }),
  component: ObjectPage,
});

const sections: Array<{ title: string; fields: string[] }> = [
  { title: "Appointment identity", fields: ["appointmentId", "sourceSystem", "lastUpdated"] },
  { title: "Patient context", fields: ["patientNhsNumberMasked", "communicationPreferences"] },
  { title: "Referral context", fields: ["referralId", "serviceType"] },
  { title: "Provider and service", fields: ["providerOrganisation", "serviceType"] },
  { title: "Slot and location", fields: ["appointmentDateTime", "location", "appointmentMode"] },
  { title: "Preparation", fields: ["preparationTasks"] },
  { title: "Accessibility", fields: ["accessibilityNeeds"] },
  { title: "Communications", fields: ["communicationPreferences"] },
  { title: "Status", fields: ["appointmentStatus"] },
  { title: "Follow-up", fields: ["followUpExpected"] },
  { title: "Audit and provenance", fields: ["sourceSystem", "lastUpdated"] },
];

function ObjectPage() {
  return (
    <Layout>
      <BackLink to="/supplier" />
      <h1 className="text-3xl">Common appointment object</h1>
      <p className="text-[#425563] mt-2 max-w-2xl">
        A shared structure for information that helps patients, providers and the NHS coordinate
        around one appointment. This is an illustrative prototype schema, not an official
        specification.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {sections.map((s) => (
          <section key={s.title} className="border border-[#d8dde0] p-5 bg-white">
            <h2 className="text-lg mb-2">{s.title}</h2>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {s.fields.map((f) => <li key={f}><code className="bg-[#f0f4f5] px-1">{f}</code></li>)}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-8">
        <Details summary="Example payload (mock)">
          <pre className="bg-[#212b32] text-white p-4 overflow-x-auto text-sm">
{JSON.stringify(examplePayload, null, 2)}
          </pre>
        </Details>
      </div>

      <InsetText>Illustrative only. Field names and structure would be defined with NHS standards teams before any real integration.</InsetText>
    </Layout>
  );
}
