"use client";

import { useActionState } from "react";
import { submitQuote, type QuoteState } from "@/app/actions/quote";
import { BUDGETS, PROPERTY_TYPES, SERVICE_OPTIONS, TIMING } from "@/content/quote-options";
import { business } from "@/content/site";

const initial: QuoteState = { status: "idle" };

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [state, action, pending] = useActionState(submitQuote, initial);

  if (state.status === "success") {
    return (
      <div className="card p-8 text-center" role="status" aria-live="polite">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-holly/20 text-holly">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-5 text-2xl font-semibold">Request received</h3>
        <p className="mt-3 text-mist-dim">{state.message}</p>
        <p className="mt-6 text-sm text-mist-dim">
          Need it faster?{" "}
          <a href={business.phoneHref} className="font-semibold text-gold">
            Call or text {business.phone}
          </a>
        </p>
      </div>
    );
  }

  const err = state.errors ?? {};

  return (
    <form action={action} className="card p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={err.name}>
          <input className="input" name="name" autoComplete="name" required placeholder="Alex Rivera" aria-invalid={!!err.name} />
        </Field>
        <Field label="Phone" error={err.phone}>
          <input className="input" name="phone" type="tel" autoComplete="tel" required placeholder="(305) 555-0199" aria-invalid={!!err.phone} />
        </Field>
        <Field label="Email" error={err.email}>
          <input className="input" name="email" type="email" autoComplete="email" required placeholder="you@example.com" aria-invalid={!!err.email} />
        </Field>
        <Field label="Property address" error={err.address}>
          <input className="input" name="address" autoComplete="street-address" required placeholder="123 Palm Ave, Coral Gables" aria-invalid={!!err.address} />
        </Field>
        <Field label="Property type" error={err.propertyType}>
          <select className="input" name="propertyType" defaultValue="" required aria-invalid={!!err.propertyType}>
            <option value="" disabled>
              Select one
            </option>
            {PROPERTY_TYPES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>
        <Field label="When do you want lights up?">
          <select className="input" name="timing" defaultValue={TIMING[0]}>
            {TIMING.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-mist">What are you interested in?</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_OPTIONS.map((s) => (
            <label key={s} className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm transition hover:border-gold/50 has-[:checked]:border-gold has-[:checked]:bg-gold/10">
              <input type="checkbox" name="services" value={s} className="h-4 w-4 accent-[#f6c453]" />
              {s}
            </label>
          ))}
        </div>
        {err.services && <p className="mt-2 text-sm text-ember">{err.services}</p>}
      </fieldset>

      {!compact && (
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field label="Approximate budget (optional)">
            <select className="input" name="budget" defaultValue="">
              <option value="">Prefer not to say</option>
              {BUDGETS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </Field>
        </div>
      )}

      <div className="mt-6">
        <Field label="Anything else? Colors, style, HOA rules, gate codes…">
          <textarea className="input min-h-28" name="notes" rows={4} placeholder="We'd love warm white on the roofline and the four palms out front wrapped. Two-story, barrel tile roof." />
        </Field>
      </div>

      {/* Honeypot, hidden from humans */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && (
        <p className="mt-5 rounded-xl border border-ember/40 bg-ember/10 px-4 py-3 text-sm text-mist" role="alert">
          {state.message}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-mist-dim">
          Written quote within one business day. No obligation, no spam.
        </p>
        <button type="submit" className="btn btn-primary min-w-44" disabled={pending}>
          {pending ? "Sending…" : "Request my free quote"}
        </button>
      </div>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-mist">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-sm text-ember">{error}</span>}
    </label>
  );
}
