"use server";

import { sendQuoteEmail } from "@/lib/email";
import { PROPERTY_TYPES } from "@/content/quote-options";

export type QuoteState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<FieldName, string>>;
};

type FieldName = "name" | "phone" | "email" | "address" | "propertyType" | "services" | "budget" | "timing" | "notes";


function text(fd: FormData, key: string, max = 500) {
  const v = fd.get(key);
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  // Honeypot: real users never see or fill this field.
  if (text(formData, "company")) {
    return { status: "success", message: "Thanks! We'll be in touch shortly." };
  }

  const name = text(formData, "name", 120);
  const phone = text(formData, "phone", 40);
  const email = text(formData, "email", 160);
  const address = text(formData, "address", 240);
  const propertyType = text(formData, "propertyType", 60);
  const budget = text(formData, "budget", 40);
  const timing = text(formData, "timing", 60);
  const notes = text(formData, "notes", 2000);
  const services = formData
    .getAll("services")
    .filter((v): v is string => typeof v === "string")
    .map((v) => v.trim().slice(0, 60))
    .slice(0, 10);

  const errors: QuoteState["errors"] = {};
  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!/^[+()\d\s.-]{7,}$/.test(phone)) errors.phone = "Enter a phone number we can text or call.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
  if (address.length < 5) errors.address = "Enter the property address or at least the city.";
  if (!PROPERTY_TYPES.includes(propertyType as (typeof PROPERTY_TYPES)[number])) errors.propertyType = "Choose a property type.";
  if (services.length === 0) errors.services = "Pick at least one service you're interested in.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  const body = [
    `New quote request from ${name}`,
    "",
    `Phone:         ${phone}`,
    `Email:         ${email}`,
    `Address:       ${address}`,
    `Property:      ${propertyType}`,
    `Services:      ${services.join(", ")}`,
    `Budget:        ${budget || "—"}`,
    `Timing:        ${timing || "—"}`,
    "",
    "Notes:",
    notes || "—",
  ].join("\n");

  try {
    await sendQuoteEmail({ subject: `Quote request: ${name} (${address})`, text: body, replyTo: email });
  } catch (err) {
    console.error("[quote] failed to send", err);
    return {
      status: "error",
      message: "Something went wrong sending your request. Please call or text us and we'll get you booked.",
    };
  }

  return {
    status: "success",
    message: `Thanks, ${name.split(" ")[0]}! We received your request and will reply within one business day.`,
  };
}
