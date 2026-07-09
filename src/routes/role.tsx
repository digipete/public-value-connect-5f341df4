import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, BackLink } from "@/components/nhs";

export const Route = createFileRoute("/role")({
  head: () => ({ meta: [{ title: "Choose your role — Open Appointments Exchange" }] }),
  component: Role,
});

const options = [
  { id: "patient", label: "Find or manage an appointment as a patient", to: "/patient" as const },
  { id: "provider", label: "Make services discoverable as a healthcare provider", to: "/provider" as const },
  { id: "supplier", label: "Connect a supplier system", to: "/supplier" as const },
  { id: "national", label: "View national demand and performance", to: "/national" as const },
];

function Role() {
  const [choice, setChoice] = useState("patient");
  const navigate = useNavigate();
  return (
    <Layout>
      <BackLink to="/" />
      <div className="max-w-2xl">
        <h1 className="text-3xl">How do you want to use Open Appointments Exchange?</h1>
        <p className="text-[#425563] mt-3">Choose the route that best fits how you would use this service.</p>

        <fieldset className="mt-6 space-y-3">
          <legend className="sr-only">Choose your role</legend>
          {options.map((o) => (
            <label
              key={o.id}
              className="flex gap-3 items-start p-4 border-2 border-[#212b32] cursor-pointer has-[:checked]:bg-[#f0f4f5]"
            >
              <input
                type="radio"
                name="role"
                value={o.id}
                checked={choice === o.id}
                onChange={() => setChoice(o.id)}
                className="mt-1 w-5 h-5"
              />
              <span className="text-lg">{o.label}</span>
            </label>
          ))}
        </fieldset>

        <button
          className="nhs-button mt-6"
          onClick={() => {
            const target = options.find((o) => o.id === choice);
            if (target) navigate({ to: target.to });
          }}
        >
          Continue
        </button>
      </div>
    </Layout>
  );
}
