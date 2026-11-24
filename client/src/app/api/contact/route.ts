const LIMITS = { name: 100, email: 200, company: 150, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const str = (k: string) =>
    typeof body[k] === "string" ? (body[k] as string).trim() : "";

  const name = str("name");
  const email = str("email");
  const company = str("company");
  const message = str("message");
  const meeting = str("meeting");

  // Honeypot
  if (str("website")) return Response.json({ ok: true });
  // Bot timing check
  const startedAt = Number(body.startedAt);
  if (Number.isFinite(startedAt) && Date.now() - startedAt < 3000)
    return Response.json({ ok: true });

  if (!name || !email || !message) {
    return Response.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { error: "That email address doesn't look right." },
      { status: 400 },
    );
  }
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    company.length > LIMITS.company ||
    message.length > LIMITS.message
  ) {
    return Response.json({ error: "One of the fields is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set.");
    return Response.json({ error: "The form isn't set up yet." }, { status: 503 });
  }

  const to = process.env.CONTACT_TO || "tim@timhuitt.com";
  const from = process.env.CONTACT_FROM || "Portfolio contact <contact@timhuitt.com>";

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "(not given)"}`,
    `Prefers: ${meeting || "Not specified"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: oneLine(`Portfolio contact: ${company || name}`),
      text,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: Resend returned", res.status, await res.text());
    return Response.json({ error: "Your message couldn't be sent." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
