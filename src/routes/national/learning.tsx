import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, BackLink, InsetText } from "@/components/nhs";
import { hypotheses, testMeasures } from "@/lib/mock-data";

export const Route = createFileRoute("/national/learning")({
  head: () => ({ meta: [{ title: "Evidence and learning log — Open Appointments Exchange" }] }),
  component: Learning,
});

function Learning() {
  const [note, setNote] = useState("");
  const [log, setLog] = useState<Array<{ date: string; note: string }>>([
    { date: "9 July 2026", note: "Patients using the video first path completed preparation more often than face to face." },
  ]);
  return (
    <Layout>
      <BackLink to="/national" />
      <h1 className="text-3xl">Evidence and learning log</h1>
      <p className="text-[#425563] mt-2 max-w-2xl">This prototype is designed for test-and-learn discovery. Findings are captured openly.</p>

      <h2 className="text-2xl mt-8 mb-3">Hypotheses</h2>
      <ul className="list-disc pl-5 space-y-2 max-w-3xl">
        {hypotheses.map((h) => <li key={h}>{h}</li>)}
      </ul>

      <h2 className="text-2xl mt-8 mb-3">Test measures</h2>
      <ul className="grid sm:grid-cols-2 gap-2 max-w-3xl">
        {testMeasures.map((m) => (
          <li key={m} className="border-l-4 border-[#005eb8] pl-3 py-1">{m}</li>
        ))}
      </ul>

      <h2 className="text-2xl mt-8 mb-3">Add learning</h2>
      <form
        className="max-w-2xl"
        onSubmit={(e) => {
          e.preventDefault();
          if (!note.trim()) return;
          setLog([{ date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }), note }, ...log]);
          setNote("");
        }}
      >
        <label htmlFor="note" className="block font-bold mb-2">What did you learn?</label>
        <textarea id="note" value={note} onChange={(e) => setNote(e.target.value)} rows={4} className="nhs-input w-full" />
        <button className="nhs-button mt-3" type="submit">Add learning</button>
      </form>

      <h2 className="text-2xl mt-10 mb-3">Learning log</h2>
      <ul className="space-y-3 max-w-3xl">
        {log.map((l, i) => (
          <li key={i} className="border border-[#d8dde0] p-4 bg-white">
            <div className="text-sm text-[#425563]">{l.date}</div>
            <div className="mt-1">{l.note}</div>
          </li>
        ))}
      </ul>

      <InsetText>Learning entries are held in this prototype only and not saved to any server.</InsetText>
    </Layout>
  );
}
