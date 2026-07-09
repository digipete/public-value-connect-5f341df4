import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, BackLink, StatusTag, Details, InsetText } from "@/components/nhs";
import { providerOptions } from "@/lib/mock-data";

export const Route = createFileRoute("/patient/options")({
  head: () => ({ meta: [{ title: "Choose an appointment — Open Appointments Exchange" }] }),
  component: Options,
});

const filters = [
  "Soonest available",
  "Closest to me",
  "Step-free access",
  "Video appointments",
  "Evening appointments",
  "Providers with full digital updates",
];

function Options() {
  const [active, setActive] = useState<string[]>([]);
  const toggle = (f: string) =>
    setActive((a) => (a.includes(f) ? a.filter((x) => x !== f) : [...a, f]));
  return (
    <Layout>
      <BackLink to="/patient" />
      <h1 className="text-3xl">Choose an appointment</h1>
      <p className="mt-3 text-[#425563]">
        These options are not adverts. They are shown because the provider has made appointment
        information available and can support this type of referral.
      </p>

      <div className="grid md:grid-cols-[260px_1fr] gap-8 mt-6">
        <aside className="border border-[#d8dde0] p-4">
          <h2 className="text-lg mb-3">Filter options</h2>
          <fieldset className="space-y-2">
            <legend className="sr-only">Filter appointment options</legend>
            {filters.map((f) => (
              <label key={f} className="flex gap-2 items-start text-sm">
                <input
                  type="checkbox"
                  className="mt-1 w-5 h-5"
                  checked={active.includes(f)}
                  onChange={() => toggle(f)}
                />
                <span>{f}</span>
              </label>
            ))}
          </fieldset>
        </aside>

        <div className="space-y-4">
          {providerOptions.map((o) => (
            <article key={o.id} className="border border-[#d8dde0] border-b-4 p-5 bg-white">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl">{o.providerName}</h2>
                  <p className="text-[#425563]">{o.serviceName}</p>
                </div>
                <StatusTag variant={o.integration.startsWith("Full") ? "green" : o.integration.startsWith("Basic") ? "grey" : "blue"}>
                  {o.integration}
                </StatusTag>
              </div>

              <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-4 text-sm">
                <div><dt className="font-bold inline">Earliest appointment: </dt><dd className="inline">{o.earliestDays} days</dd></div>
                <div><dt className="font-bold inline">Appointment type: </dt><dd className="inline">{o.mode}</dd></div>
                {o.distanceMiles !== undefined && (
                  <div><dt className="font-bold inline">Distance: </dt><dd className="inline">{o.distanceMiles} miles</dd></div>
                )}
                <div><dt className="font-bold inline">Step-free access: </dt><dd className="inline">{o.stepFree}</dd></div>
                <div className="sm:col-span-2"><dt className="font-bold inline">Preparation: </dt><dd className="inline">{o.preparation}</dd></div>
              </dl>

              <Details summary="Why this option is shown">
                <p className="text-sm">{o.whyShown}</p>
              </Details>

              <div className="mt-3">
                <Link
                  to="/patient/appointment"
                  search={{ providerId: o.id }}
                  className="nhs-button"
                >
                  Choose this appointment
                </Link>
              </div>
            </article>
          ))}

          <InsetText>
            Providers appear here because they publish appointment information the NHS can use.
            They are not ranked by commercial preference.
          </InsetText>
        </div>
      </div>
    </Layout>
  );
}
