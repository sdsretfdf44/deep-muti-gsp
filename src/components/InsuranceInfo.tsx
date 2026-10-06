import { CreditCard, HelpCircle, Phone } from "lucide-react";
import Link from "next/link";
import { hospital } from "@/data/hospital";
import { telHref } from "@/lib/utils";

export function InsuranceInfo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
      <div className="lg:col-span-5">
        <span className="eyebrow">Insurance & Payments</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
          Straightforward billing, clear conversations.
        </h2>
        <p className="mt-4 text-[color:var(--color-muted-text)] text-lg leading-relaxed max-w-md">
          For the most up-to-date information on payment options, insurance queries or cashless facilities, please speak with the hospital directly.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href={telHref(hospital.phone.raw)} className="btn btn-primary">
            <Phone size={16} /> Call {hospital.phone.display}
          </a>
          <Link href="/insurance" className="btn btn-outline">
            View payment info
          </Link>
        </div>
      </div>
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card p-6">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-gold-50)] text-[color:var(--color-gold-700)]">
            <CreditCard size={20} />
          </span>
          <h3 className="mt-4 font-semibold text-lg">Multiple payment options</h3>
          <p className="mt-1 text-[14.5px] text-[color:var(--color-muted-text)] leading-relaxed">
            The hospital accepts common payment methods. Please confirm current options at the front desk.
          </p>
        </div>
        <div className="card p-6">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]">
            <HelpCircle size={20} />
          </span>
          <h3 className="mt-4 font-semibold text-lg">Have an insurance query?</h3>
          <p className="mt-1 text-[14.5px] text-[color:var(--color-muted-text)] leading-relaxed">
            Call ahead so the front desk can guide you on paperwork, cashless facility (subject to confirmation) and receipts.
          </p>
        </div>
      </div>
    </div>
  );
}
