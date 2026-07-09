import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, BackLink, SummaryList, InsetText } from "@/components/nhs";
import { patient } from "@/lib/mock-data";

export const Route = createFileRoute("/patient/")({
  head: () => ({ meta: [{ title: "Find the right appointment — Open Appointments Exchange" }] }),
  component: PatientContext,
});

function PatientContext() {
  return (
    <Layout>
      <BackLink to="/role" />
      <h1 className="text-3xl">Find the right appointment</h1>
      <p className="mt-3 text-lg">
        Amira has been referred for a knee pain assessment. Open Appointments Exchange can show
        available appointment options from participating providers. These options are based on
        fictional data for this prototype.
      </p>

      <div className="mt-6 border border-[#d8dde0] p-6 bg-white">
        <h2 className="text-xl mb-4">Referral summary</h2>
        <SummaryList
          rows={[
            { key: "Name", value: patient.name },
            { key: "Age", value: patient.age },
            { key: "NHS number", value: patient.maskedNhsNumber },
            { key: "Referral", value: patient.referral },
            { key: "Referral source", value: patient.referralSource },
            { key: "Status", value: patient.status },
            { key: "Support needs", value: patient.supportNeeds },
            { key: "Location", value: patient.location },
          ]}
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/patient/options" className="nhs-button">View appointment options</Link>
        <a href="#help" className="nhs-button-secondary">I need help using this service</a>
      </div>

      <InsetText>
        If you need urgent help, call 111 or in an emergency call 999. This service is not for
        urgent or emergency care.
      </InsetText>
    </Layout>
  );
}
