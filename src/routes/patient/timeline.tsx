import { createFileRoute } from "@tanstack/react-router";
import { Layout, BackLink, Timeline } from "@/components/nhs";

export const Route = createFileRoute("/patient/timeline")({
  head: () => ({ meta: [{ title: "Appointment timeline — Open Appointments Exchange" }] }),
  component: TimelinePage,
});

function TimelinePage() {
  return (
    <Layout>
      <BackLink to="/patient/confirmation" />
      <h1 className="text-3xl">Appointment timeline</h1>
      <p className="mt-3 text-[#425563] max-w-2xl">
        This timeline shows how an appointment can coordinate the patient, provider and system
        around one shared object.
      </p>
      <Timeline
        items={[
          { title: "Referral received", description: "GP referral for knee pain assessment", done: true },
          { title: "Options shown", description: "Three provider options presented", done: true },
          { title: "Appointment booked", description: "Leeds Community MSK Service, 23 July 2026", done: true },
          { title: "Preparation sent", description: "Movement questionnaire issued", done: true },
          { title: "Reminder scheduled", description: "SMS reminder 24 hours before" },
          { title: "Appointment due", description: "Thursday 23 July, 10:20am" },
          { title: "Follow-up pending", description: "Summary and onward referrals within 5 working days" },
        ]}
      />
    </Layout>
  );
}
