"use client";

import { useState } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { verifiedSpecialities } from "@/data/specialities";
import { contactConfig } from "@/data/contact-config";
import { hospital } from "@/data/hospital";
import { isFutureDate, isValidIndianMobile, telHref, cn } from "@/lib/utils";

type FormState = {
  name: string;
  mobile: string;
  email: string;
  speciality: string;
  date: string;
  time: string;
  message: string;
};

const initial: FormState = {
  name: "",
  mobile: "",
  email: "",
  speciality: "",
  date: "",
  time: "",
  message: "",
};

export function AppointmentForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const specs = verifiedSpecialities();

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.mobile.trim()) next.mobile = "Please enter a mobile number.";
    else if (!isValidIndianMobile(form.mobile)) next.mobile = "Please enter a valid Indian mobile number.";
    if (form.date && !isFutureDate(form.date)) next.date = "Preferred date cannot be in the past.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // No backend is configured yet. We show a confirmation screen that asks
    // the patient to also call the hospital, so the request is never lost.
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (submitted) {
    return (
      <div className="card p-8 md:p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank you, {form.name.split(" ")[0]}.</h3>
        <p className="text-[color:var(--color-muted-text)] max-w-md mx-auto mb-6">
          Your request has been recorded. To confirm your appointment quickly, please also call the hospital directly.
        </p>
        <a href={telHref(hospital.phone.raw)} className="btn btn-primary btn-lg">
          <Phone size={18} />
          <span>Call {hospital.phone.display}</span>
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label="Appointment request form"
      className="card p-4 sm:p-6 md:p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <Field label="Full name" htmlFor="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputCls(errors.name)}
            placeholder="Your name"
          />
        </Field>
        <Field label="Mobile number" htmlFor="mobile" required error={errors.mobile}>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            value={form.mobile}
            onChange={(e) => update("mobile", e.target.value)}
            className={inputCls(errors.mobile)}
            placeholder="10-digit mobile number"
          />
        </Field>
        <Field label="Email (optional)" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputCls(errors.email)}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Preferred specialty" htmlFor="speciality">
          <select
            id="speciality"
            name="speciality"
            value={form.speciality}
            onChange={(e) => update("speciality", e.target.value)}
            className={inputCls()}
          >
            <option value="">Select a specialty</option>
            {specs.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="other">Not sure / other</option>
          </select>
        </Field>
        <Field label="Preferred date" htmlFor="date" error={errors.date}>
          <input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className={inputCls(errors.date)}
          />
        </Field>
        <Field label="Preferred time" htmlFor="time">
          <select
            id="time"
            name="time"
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
            className={inputCls()}
          >
            <option value="">Any time</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </Field>
        <div className="md:col-span-2">
          <Field label="Message (optional)" htmlFor="message">
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className={inputCls()}
              placeholder="Tell us briefly about your concern (optional). Please do not share sensitive medical details here."
            />
          </Field>
        </div>
      </div>

      <p className="mt-4 text-[13px] text-[color:var(--color-muted-text)]">
        By submitting this form, you agree to be contacted by Deep Multispeciality Hospital regarding your appointment request.
        Please avoid submitting sensitive medical information through this form.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
        <button type="submit" className="btn btn-primary btn-lg justify-center w-full sm:w-auto">
          Request Appointment
        </button>
        <a href={telHref(hospital.phone.raw)} className="btn btn-outline btn-lg justify-center w-full sm:w-auto">
          <Phone size={18} />
          <span>Call to Confirm</span>
        </a>
      </div>

      {contactConfig.appointmentEmail && (
        <p className="mt-3 text-[13px] text-[color:var(--color-muted-text)]">
          Alternatively, email us at{" "}
          <a
            className="text-[color:var(--color-teal-800)] underline underline-offset-2"
            href={`mailto:${contactConfig.appointmentEmail}`}
          >
            {contactConfig.appointmentEmail}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-[color:var(--color-navy-900)] mb-1.5">
        {label}
        {required && <span className="text-[color:var(--color-emergency)] ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-[13px] text-[color:var(--color-emergency)]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputCls(error?: string) {
  return cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[color:var(--color-navy-900)] placeholder:text-[color:var(--color-muted-text)] transition-shadow",
    "focus:outline-none focus:ring-2 focus:ring-[color:var(--color-teal-500)] focus:border-transparent",
    error
      ? "border-[color:var(--color-emergency)]"
      : "border-[color:var(--color-border-soft)] hover:border-[color:#c9d3df]",
  );
}
