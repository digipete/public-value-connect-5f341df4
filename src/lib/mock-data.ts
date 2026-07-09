// Mock data for Open Appointments Exchange prototype.
// All data is fictional.

export const patient = {
  name: "Amira Khan",
  age: 42,
  maskedNhsNumber: "***  ***  4821",
  referral: "Knee pain assessment",
  referralSource: "GP referral",
  status: "Ready to choose an appointment",
  supportNeeds: "Step-free access preferred",
  location: "Leeds",
};

export type ProviderOption = {
  id: string;
  providerName: string;
  serviceName: string;
  earliestDays: number;
  distanceMiles?: number;
  mode: "Face to face" | "Video first assessment" | "Telephone";
  stepFree: string;
  preparation: string;
  integration: string;
  whyShown: string;
};

export const providerOptions: ProviderOption[] = [
  {
    id: "leeds-msk",
    providerName: "Leeds Community MSK Service",
    serviceName: "MSK assessment clinic",
    earliestDays: 9,
    distanceMiles: 2.4,
    mode: "Face to face",
    stepFree: "Yes",
    preparation: "Complete movement questionnaire before attending",
    integration: "Full appointment updates supported",
    whyShown:
      "This service accepts GP MSK referrals for adults and publishes real-time capacity that matches your area.",
  },
  {
    id: "wy-icc",
    providerName: "West Yorkshire Integrated Care Clinic",
    serviceName: "Video first MSK assessment",
    earliestDays: 16,
    mode: "Video first assessment",
    stepFree: "Not applicable",
    preparation: "Upload photos and complete pain questionnaire",
    integration: "Preparation and follow-up supported",
    whyShown:
      "This service offers video first assessment and supports preparation and follow-up information for the same referral type.",
  },
  {
    id: "nl-oah",
    providerName: "North Leeds Orthopaedic Assessment Hub",
    serviceName: "Orthopaedic assessment",
    earliestDays: 23,
    distanceMiles: 5.8,
    mode: "Face to face",
    stepFree: "Limited parking, step-free entrance",
    preparation: "Bring previous scan letters if available",
    integration: "Basic availability only",
    whyShown:
      "This service accepts the same referral type and publishes weekly availability. Some appointment updates are not yet supported.",
  },
];

export const provider = {
  name: "Leeds Community MSK Service",
  organisationType: "Community provider",
  integrationStatus: "Full appointment updates supported",
  visibility: "High",
  patientFlowImpact: "+18% appropriate referrals (mock data)",
};

export const providerMetrics = [
  { label: "Demand this week", value: "238", meta: "MSK searches in your area" },
  { label: "Available capacity", value: "42 slots", meta: "next 14 days" },
  { label: "Missed appointment rate", value: "6.1%", meta: "12 week rolling" },
  { label: "Referral bounce rate", value: "3.4%", meta: "returned referrals" },
  { label: "Preparation completion", value: "78%", meta: "patients completing prep" },
  { label: "Integration health", value: "Good", meta: "4 of 5 events supported" },
];

export const demandSignals = [
  { value: 238, text: "patients searched for MSK appointments this week" },
  { value: 61, text: "needed step-free access" },
  { value: 44, text: "preferred video first appointments" },
  { value: 31, text: "searched outside working hours" },
  { value: 17, text: "could not find an appointment within 14 days" },
  { value: 12, text: "abandoned because preparation requirements were unclear" },
];

export const supplier = {
  name: "CareSlot Systems",
  product: "CareSlot PAS Connector",
  readiness: "Partial",
  connectedProviders: 7,
  conformanceScore: 63,
};

export type Capability = {
  name: string;
  status: "Supported" | "Partial" | "Not supported";
};

export const supplierCapabilities: Capability[] = [
  { name: "Appointment availability", status: "Supported" },
  { name: "Booking confirmation", status: "Supported" },
  { name: "Appointment updates", status: "Partial" },
  { name: "Cancellation", status: "Supported" },
  { name: "Preparation instructions", status: "Not supported" },
  { name: "Attendance status", status: "Partial" },
  { name: "Follow-up status", status: "Not supported" },
  { name: "Accessibility information", status: "Not supported" },
];

export const nationalMetrics = [
  { label: "Patients using the service this week", value: "18,420" },
  { label: "Participating providers", value: "126" },
  { label: "Supplier systems connected", value: "18" },
  { label: "Appointment options shown", value: "42,100" },
  { label: "Appointments booked", value: "12,870" },
  { label: "Missed appointment rate", value: "6.8%" },
  { label: "Referral bounce rate", value: "4.1%" },
  { label: "Preparation completion", value: "72%" },
  { label: "Providers with full appointment updates", value: "38%" },
];

export const examplePayload = {
  appointmentId: "appt_9f2c1e",
  referralId: "ref_3a71b8",
  patientNhsNumberMasked: "***  ***  4821",
  appointmentStatus: "booked",
  serviceType: "MSK assessment",
  providerOrganisation: "Leeds Community MSK Service",
  appointmentDateTime: "2026-07-23T10:20:00+01:00",
  location: {
    name: "Fictional Community Health Centre",
    city: "Leeds",
    postcode: "LS1 0AA",
  },
  appointmentMode: "face-to-face",
  preparationTasks: [
    { id: "prep_movement", label: "Complete movement questionnaire", required: true },
  ],
  accessibilityNeeds: ["step-free-access"],
  communicationPreferences: { channel: "sms", language: "en-GB" },
  cancellationPolicy: { latestCancelHours: 24 },
  followUpExpected: true,
  sourceSystem: "CareSlot PAS Connector",
  lastUpdated: "2026-07-09T14:12:03Z",
};

export const hypotheses = [
  "If patients see clearer appointment options, they will be more likely to choose an appropriate service.",
  "If providers can see demand signals, they will be more likely to publish better capacity and service information.",
  "If supplier integration quality is visible, suppliers will improve support for the common appointment object.",
  "If preparation is attached to the appointment, missed appointments and avoidable rework may fall.",
  "If transparency is applied at the moment of choice, adoption may become demand-led rather than compliance-led.",
];

export const testMeasures = [
  "Patient completion rate",
  "Patient confidence score",
  "Abandoned searches",
  "Appointments booked from options shown",
  "Preparation completion",
  "Cancellation before appointment",
  "Missed appointment rate",
  "Provider service profile completeness",
  "Supplier conformance score",
  "Providers publishing real-time availability",
];
