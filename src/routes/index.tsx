import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, InsetText } from "@/components/nhs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Open Appointments Exchange — NHS prototype" },
      {
        name: "description",
        content:
          "A fictional NHS proof of concept exploring how patients, providers and suppliers can coordinate around a shared appointment object.",
      },
      { property: "og:title", content: "Open Appointments Exchange — NHS prototype" },
      {
        property: "og:description",
        content:
          "A fictional NHS proof of concept exploring how patients, providers and suppliers can coordinate around a shared appointment object.",
      },
    ],
  }),
  component: Start,
});

function Start() {
  return (
    <Layout>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <span className="text-sm text-[#425563] font-semibold uppercase tracking-wide">
            National coordination service
          </span>
          <h1 className="text-4xl md:text-5xl mt-2">Open Appointments Exchange</h1>
          <p className="text-xl text-[#425563] mt-3">
            Helping patients, providers and suppliers coordinate around the appointment.
          </p>

          <p className="mt-6 text-lg">
            Use this service to explore how patients, providers and suppliers could coordinate
            around a shared NHS appointment object.
          </p>
          <p className="mt-4">
            This prototype uses fictional data. It does not provide medical advice and does not use
            real patient information.
          </p>

          <div className="mt-6">
            <Link to="/role" className="nhs-button">
              Start now <span aria-hidden className="ml-2">›</span>
            </Link>
          </div>

          <h2 className="text-2xl mt-10 mb-3">Choose a route to explore</h2>
          <ul className="space-y-2">
            <li><Link to="/patient">I am a patient</Link></li>
            <li><Link to="/provider">I am a healthcare provider</Link></li>
            <li><Link to="/supplier">I am a technology supplier</Link></li>
            <li><Link to="/national">I work in a national NHS team</Link></li>
          </ul>

          <InsetText>
            <p>
              Open Appointments Exchange is not a replacement for local booking systems, the NHS
              App or existing referral services. It shows how the NHS could coordinate demand,
              supply and integration around appointments as objects of public value.
            </p>
          </InsetText>
        </div>

        <aside className="bg-[#f0f4f5] p-6 border-l-4 border-[#005eb8]">
          <h2 className="text-xl mb-3">About this prototype</h2>
          <p className="text-sm mb-3">
            A national demand and coordination service that helps patients find the right care,
            helps providers make services discoverable, and helps suppliers integrate with a shared
            NHS appointment object.
          </p>
          <p className="text-sm text-[#425563]">
            Fictional patients, providers and suppliers are used throughout. No real data is
            collected.
          </p>
        </aside>
      </div>
    </Layout>
  );
}
