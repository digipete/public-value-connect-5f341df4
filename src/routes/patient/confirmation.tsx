import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, BackLink, SummaryList, InsetText } from "@/components/nhs";

export const Route = createFileRoute("/patient/confirmation")({
  head: () => ({ meta: [{ title: "Appointment booked — Open Appointments Exchange" }] }),
  component: Confirmation,
});

function Confirmation() {
  return (
    <Layout>
      <BackLink to="/patient/appointment" />
      <div className="nhs-panel-confirmation">
        <h1 className="text-3xl text-white">Appointment booked</h1>
        <p className="mt-2 text-white">You have booked an appointment with Leeds Community MSK Service.</p>
      </div>

      <div className="mt-6">
        <SummaryList
          rows={[
            { key: "Date", value: "Thursday 23 July 2026" },
            { key: "Time", value: "10:20am" },
            { key: "Location", value: "Fictional Community Health Centre, Leeds" },
            { key: "Preparation", value: "Complete the movement questionnaire at least 24 hours before your appointment" },
          ]}
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" className="nhs-button">Add to calendar</button>
        <button type="button" className="nhs-button-secondary">Complete preparation questionnaire</button>
        <button type="button" className="nhs-button-reverse">Change appointment</button>
        <button type="button" className="nhs-button-reverse">Cancel appointment</button>
        <Link to="/patient/timeline" className="nhs-button-reverse">View appointment timeline</Link>
      </div>

      <InsetText>
        You will receive updates if anything changes. You can also use this page to check what you
        need to do before your appointment.
      </InsetText>
    </Layout>
  );
}
