import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, BackLink, InsetText } from "@/components/nhs";

export const Route = createFileRoute("/provider/improve")({
  head: () => ({ meta: [{ title: "Create improvement action — Open Appointments Exchange" }] }),
  component: Improve,
});

const actions = [
  "Add clearer preparation instructions",
  "Publish more real-time availability",
  "Add evening appointments",
  "Improve accessibility information",
  "Connect cancellation updates",
  "Add follow-up status updates",
];

const impacts = [
  "Better patient confidence",
  "Fewer failed referrals",
  "Fewer missed appointments",
  "Improved service discoverability",
];

function Improve() {
  const [chosen, setChosen] = useState(actions[0]);
  const [added, setAdded] = useState<string[]>([]);
  return (
    <Layout>
      <BackLink to="/provider" />
      <h1 className="text-3xl">Create improvement action</h1>
      <p className="text-[#425563] mt-2">Add an action to your plan for improving patient flow.</p>

      <fieldset className="mt-6 space-y-3 max-w-2xl">
        <legend className="font-bold mb-2">Choose an action</legend>
        {actions.map((a) => (
          <label key={a} className="flex gap-3 items-start p-3 border-2 border-[#212b32] cursor-pointer has-[:checked]:bg-[#f0f4f5]">
            <input type="radio" name="action" checked={chosen === a} onChange={() => setChosen(a)} className="mt-1 w-5 h-5" />
            <span>{a}</span>
          </label>
        ))}
      </fieldset>

      <div className="mt-6 border border-[#d8dde0] p-6 bg-[#f0f4f5] max-w-2xl">
        <h2 className="text-lg mb-2">Expected impact</h2>
        <ul className="list-disc pl-5 space-y-1">{impacts.map((i) => <li key={i}>{i}</li>)}</ul>
      </div>

      <button className="nhs-button mt-6" onClick={() => setAdded([...added, chosen])}>Add action to plan</button>

      {added.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl mb-3">Your improvement plan</h2>
          <ol className="list-decimal pl-5 space-y-1">{added.map((a, i) => <li key={i}>{a}</li>)}</ol>
          <InsetText>Actions are held in this prototype only.</InsetText>
        </div>
      )}
    </Layout>
  );
}
