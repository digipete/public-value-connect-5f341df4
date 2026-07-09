import { createFileRoute } from "@tanstack/react-router";
import { Layout, BackLink } from "@/components/nhs";

export const Route = createFileRoute("/national/impact")({
  head: () => ({ meta: [{ title: "How transparency changes behaviour — Open Appointments Exchange" }] }),
  component: Impact,
});

const before = [
  "Patients see limited or unclear options",
  "Providers are chased for adoption",
  "Suppliers integrate differently each time",
  "Demand is hidden until it becomes pressure",
  "Performance is reviewed after the fact",
];
const after = [
  "Patients see clearer appointment options",
  "Providers are pulled towards adoption through patient flow",
  "Suppliers integrate to a common object",
  "Demand is visible earlier",
  "Performance shapes choices in the moment",
];
const flow = [
  "Patient need",
  "Appointment options",
  "Provider choice",
  "Booking",
  "Preparation",
  "Attendance",
  "Follow-up",
  "Performance signal",
  "Better future options",
];

function Impact() {
  return (
    <Layout>
      <BackLink to="/national" />
      <h1 className="text-3xl">How transparency changes behaviour</h1>
      <p className="text-[#425563] mt-2 max-w-2xl">
        A comparison of coordination before and after Open Appointments Exchange, using
        illustrative examples.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <section className="border border-[#d8dde0] p-5 bg-[#f0f4f5]">
          <h2 className="text-xl mb-3">Before</h2>
          <ul className="list-disc pl-5 space-y-2">{before.map((b) => <li key={b}>{b}</li>)}</ul>
        </section>
        <section className="border border-[#d8dde0] border-b-4 border-b-[#009639] p-5 bg-white">
          <h2 className="text-xl mb-3">After</h2>
          <ul className="list-disc pl-5 space-y-2">{after.map((a) => <li key={a}>{a}</li>)}</ul>
        </section>
      </div>

      <h2 className="text-2xl mt-10 mb-4">Flow around the appointment</h2>
      <ol className="flex flex-wrap gap-2">
        {flow.map((f, i) => (
          <li key={f} className="flex items-center gap-2">
            <span className="inline-block bg-[#005eb8] text-white px-4 py-2 font-semibold">{f}</span>
            {i < flow.length - 1 && <span aria-hidden className="text-[#425563]">›</span>}
          </li>
        ))}
      </ol>
    </Layout>
  );
}
