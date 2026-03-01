/**
 * Cloudflare Pages Function — Contact Form Handler
 * Endpoint: POST /api/contact
 *
 * Required environment variable (set in Cloudflare Pages dashboard):
 *   RESEND_API_KEY  — API key from resend.com
 *
 * The "from" address must belong to a domain verified in Resend.
 * Verify linkedcv.codebylucio.dev in Resend → Domains before deploying.
 */

const ALLOWED_ORIGIN = "https://linkedcv.codebylucio.dev";
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const TO_EMAIL = "contacto@codebylucio.dev";
const FROM_EMAIL = "LinkedCV Contact <contact@linkedcv.codebylucio.dev>";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: "Invalid JSON" }, 400);
  }

  const { name, email, subject, message } = body ?? {};

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return json({ success: false, error: "All fields are required" }, 400);
  }

  if (!isValidEmail(email)) {
    return json({ success: false, error: "Invalid email address" }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return json({ success: false, error: "Server configuration error" }, 500);
  }

  const htmlBody = `
    <h2>New contact message from LinkedCV</h2>
    <table>
      <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td><strong>Subject:</strong></td><td>${subject}</td></tr>
    </table>
    <hr>
    <p>${message.replace(/\n/g, "<br>")}</p>
  `;

  let resendRes;
  try {
    resendRes = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        reply_to: email,
        subject: `[LinkedCV] ${subject}`,
        html: htmlBody,
      }),
    });
  } catch {
    return json({ success: false, error: "Failed to reach email service" }, 502);
  }

  if (!resendRes.ok) {
    return json({ success: false, error: "Email service error" }, 502);
  }

  return json({ success: true });
}
