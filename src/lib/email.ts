/**
 * Minimal Resend client using fetch so there is no extra dependency.
 * If RESEND_API_KEY is not set, the message is logged to the server console
 * instead, so the quote form still works in development and on a fresh deploy.
 */
export type QuoteEmail = {
  subject: string;
  text: string;
  replyTo?: string;
};

export async function sendQuoteEmail(message: QuoteEmail): Promise<{ delivered: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  const from = process.env.QUOTE_FROM_EMAIL ?? "SoFlo Christmas Lights <quotes@resend.dev>";

  if (!apiKey || !to) {
    console.info("[quote] RESEND_API_KEY or QUOTE_TO_EMAIL not set; logging request instead:\n" + message.text);
    return { delivered: false };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: message.subject,
      text: message.text,
      ...(message.replyTo ? { reply_to: message.replyTo } : {}),
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Resend responded ${res.status}: ${body}`);
  }
  return { delivered: true };
}
