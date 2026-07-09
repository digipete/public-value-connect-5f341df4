import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, BackLink, SummaryList, Chip, InsetText } from "@/components/nhs";
import { providerOptions } from "@/lib/mock-data";

export const Route = createFileRoute("/patient/appointment")({
  validateSearch: (s: Record<string, unknown>) => ({
    providerId: (s.providerId as string) ?? "leeds-msk",
  }),
  head: () => ({ meta: [{ title: "Your appointment — Open Appointments Exchange" }] }),
  component: Appointment,
});

function Appointment() {
  const { providerId } = Route.useSearch();
  const p = providerOptions.find((x) => x.id === providerId) ?? providerOptions[0];
  const chips = ["Referral", "Booking", "Reminder", "Preparation", "Attendance", "Follow-up", "Result or outcome"];

  return (
    <Layout>
      <BackLink to="/patient/options" >Back to appointment options</BackLink>
      <h1 className="text-3xl">Your appointment</h1>
      <p className="mt-3 text-[#425563]">
        This appointment carries information that helps you, the provider and the NHS understand
        what needs to happen next.
      </p>

      <div className="mt-6 border border-[#d8dde0] p-6 bg-[#f0f4f5]">
        <h2 className="text-lg mb-3">Appointment object</h2>
        <div className="flex flex-wrap gap-2">{chips.map((c) => <Chip key={c}>{c}</Chip>)}</div>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl mb-3">Appointment summary</h2>
        <SummaryList
          rows={[
            { key: "Why you are being seen", value: "Knee pain assessment following GP referral" },
            { key: "Provider", value: p.providerName },
            { key: "Date and time", value: "Thursday 23 July 2026, 10:20am" },
            { key: "Location or joining details", value: p.mode === "Video first assessment" ? "Video appointment — link will be sent 24 hours before" : "Fictional Community Health Centre, Leeds LS1 0AA" },
          ]}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-2xl mb-3">Before the appointment</h2>
        <SummaryList
          rows={[
            { key: "What to do", value: p.preparation },
            { key: "What to bring", value: "Photo ID and a list of any current medicines" },
            { key: "Accessibility and support", value: p.stepFree },
          ]}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-2xl mb-3">After the appointment</h2>
        <SummaryList
          rows={[
            { key: "What happens next", value: "You will receive a summary and any onward referrals within 5 working days." },
            { key: "How to cancel or change", value: "Use this page, or call the provider at least 24 hours in advance." },
          ]}
        />
      </section>

      <InsetText>
        This appointment can be updated by the provider. If anything changes, you will be notified
        through your chosen communication channel.
      </InsetText>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/patient/confirmation" className="nhs-button">Book this appointment</Link>
        <Link to="/patient/options" className="nhs-button-secondary">Go back to appointment options</Link>
      </div>
    </Layout>
  );
}
