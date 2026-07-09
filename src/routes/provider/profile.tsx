import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, BackLink, InsetText } from "@/components/nhs";

export const Route = createFileRoute("/provider/profile")({
  head: () => ({ meta: [{ title: "Manage service profile — Open Appointments Exchange" }] }),
  component: Profile,
});

function Profile() {
  const [form, setForm] = useState({
    name: "Leeds Community MSK Service",
    type: "MSK assessment clinic",
    conditions: "Adult MSK — knee, hip, shoulder, back",
    locations: "Fictional Community Health Centre, Leeds LS1 0AA",
    types: "Face to face, Video first assessment",
    accessibility: "Step-free access, hearing loop, quiet room available",
    preparation: "Complete movement questionnaire at least 24 hours before appointment",
    exclusions: "Under 18s, acute red-flag symptoms (route via urgent care)",
    contact: "0113 555 0100 — Monday to Friday, 8am to 6pm",
    integration: "CareSlot PAS Connector",
  });
  const [saved, setSaved] = useState(false);
  const set = <K extends keyof typeof form>(k: K, v: string) => setForm({ ...form, [k]: v });

  const field = (label: string, k: keyof typeof form, textarea = false) => (
    <div>
      <label htmlFor={k} className="block font-bold mb-1">{label}</label>
      {textarea ? (
        <textarea id={k} value={form[k]} onChange={(e) => set(k, e.target.value)} rows={3} className="nhs-input w-full" />
      ) : (
        <input id={k} value={form[k]} onChange={(e) => set(k, e.target.value)} className="nhs-input w-full" />
      )}
    </div>
  );

  return (
    <Layout>
      <BackLink to="/provider" />
      <h1 className="text-3xl">Manage service profile</h1>
      <p className="text-[#425563] mt-2">This information appears to patients when they choose an appointment.</p>

      <form className="mt-6 space-y-5 max-w-2xl" onSubmit={(e) => { e.preventDefault(); setSaved(true); }}>
        {field("Service name", "name")}
        {field("Service type", "type")}
        {field("Conditions or referral reasons supported", "conditions", true)}
        {field("Locations", "locations", true)}
        {field("Appointment types supported", "types")}
        {field("Accessibility information", "accessibility", true)}
        {field("Preparation instructions", "preparation", true)}
        {field("Exclusions or referral criteria", "exclusions", true)}
        {field("Contact details for support", "contact")}
        {field("Integration method", "integration")}

        <button type="submit" className="nhs-button">Save and preview</button>
      </form>

      {saved && (
        <div className="mt-8">
          <h2 className="text-2xl mb-3">Preview — how patients will see this service</h2>
          <article className="border border-[#d8dde0] border-b-4 p-5 bg-white max-w-2xl">
            <h3 className="text-xl">{form.name}</h3>
            <p className="text-[#425563] text-sm">{form.type}</p>
            <dl className="grid sm:grid-cols-2 gap-2 mt-3 text-sm">
              <div><dt className="font-bold inline">Locations: </dt><dd className="inline">{form.locations}</dd></div>
              <div><dt className="font-bold inline">Appointment types: </dt><dd className="inline">{form.types}</dd></div>
              <div className="sm:col-span-2"><dt className="font-bold inline">Accessibility: </dt><dd className="inline">{form.accessibility}</dd></div>
              <div className="sm:col-span-2"><dt className="font-bold inline">Preparation: </dt><dd className="inline">{form.preparation}</dd></div>
            </dl>
          </article>
          <InsetText>Preview only. Saved locally in this prototype.</InsetText>
        </div>
      )}
    </Layout>
  );
}
