import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, BackLink, StatusTag, InsetText } from "@/components/nhs";

export const Route = createFileRoute("/provider/capacity")({
  head: () => ({ meta: [{ title: "Publish appointment capacity — Open Appointments Exchange" }] }),
  component: Capacity,
});

type Row = { date: string; type: string; slots: number; earliest: string; prep: string; status: "Published" | "Draft" };

const initial: Row[] = [
  { date: "Mon 13 Jul", type: "Face to face", slots: 8, earliest: "09:00", prep: "Movement questionnaire", status: "Published" },
  { date: "Tue 14 Jul", type: "Video first", slots: 6, earliest: "10:00", prep: "Pain questionnaire + photos", status: "Published" },
  { date: "Wed 15 Jul", type: "Face to face", slots: 10, earliest: "08:30", prep: "Movement questionnaire", status: "Published" },
  { date: "Thu 16 Jul", type: "Face to face", slots: 4, earliest: "13:00", prep: "Movement questionnaire", status: "Draft" },
  { date: "Fri 17 Jul", type: "Video first", slots: 5, earliest: "11:00", prep: "Pain questionnaire", status: "Published" },
];

function Capacity() {
  const [rows, setRows] = useState(initial);

  return (
    <Layout>
      <BackLink to="/provider" />
      <h1 className="text-3xl">Publish appointment capacity</h1>
      <p className="text-[#425563] mt-2">Update the appointment availability shown to patients.</p>

      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-[#212b32] text-left">
              <th className="p-3">Date</th>
              <th className="p-3">Appointment type</th>
              <th className="p-3">Available slots</th>
              <th className="p-3">Earliest slot</th>
              <th className="p-3">Preparation</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-[#d8dde0]">
                <td className="p-3 font-semibold">{r.date}</td>
                <td className="p-3">{r.type}</td>
                <td className="p-3">
                  <input
                    type="number"
                    value={r.slots}
                    min={0}
                    className="nhs-input w-20"
                    onChange={(e) => {
                      const next = [...rows];
                      next[i] = { ...r, slots: Number(e.target.value) };
                      setRows(next);
                    }}
                  />
                </td>
                <td className="p-3">{r.earliest}</td>
                <td className="p-3 text-sm">{r.prep}</td>
                <td className="p-3">
                  <StatusTag variant={r.status === "Published" ? "green" : "grey"}>{r.status}</StatusTag>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button type="button" className="nhs-button mt-4">Update capacity</button>

      <div className="mt-10 border border-[#d8dde0] p-6 bg-[#f0f4f5]">
        <h2 className="text-xl mb-3">Integration quality</h2>
        <ul className="space-y-2">
          {[
            ["Real-time availability", "Supported"],
            ["Booking confirmation", "Supported"],
            ["Cancellation updates", "Supported"],
            ["Preparation status", "Supported"],
            ["Follow-up status", "Not yet supported"],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-[#d8dde0] pb-2">
              <span>{k}</span>
              <StatusTag variant={v === "Supported" ? "green" : "grey"}>{v}</StatusTag>
            </li>
          ))}
        </ul>
      </div>

      <InsetText>
        The more complete and reliable the appointment information, the easier it is for patients
        to choose and prepare. This can increase appropriate demand and reduce avoidable failure
        demand.
      </InsetText>
    </Layout>
  );
}
