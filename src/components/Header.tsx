"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Calendar, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { mainNav } from "@/data/navigation";
import { hospital } from "@/data/hospital";
import { telHref, cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-[color:var(--color-border-soft)] shadow-[0_4px_20px_-16px_rgba(11,59,46,0.35)]"
          : "bg-white/85 backdrop-blur border-transparent",
      )}
    >
      <div className="container-page">
        <div
          className={cn(
            "flex items-center justify-between transition-all",
            scrolled ? "h-[62px]" : "h-[76px]",
          )}
        >
          <Logo />

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-0.5">
            {mainNav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-[14.5px] font-medium rounded-md transition-colors focus-ring",
                    active
                      ? "text-[color:var(--color-navy-900)]"
                      : "text-[color:var(--color-slate-text)] hover:text-[color:var(--color-navy-900)]",
                  )}
                >
                  {item.label}
                  {active && (
                    <span aria-hidden="true" className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-[color:var(--color-gold-500)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={telHref(hospital.phone.raw)}
              className="hidden sm:inline-flex btn btn-outline !py-2.5"
              aria-label={`Call ${hospital.phone.display}`}
            >
              <Phone size={16} />
              <span className="hidden md:inline">Call Now</span>
            </a>
            <Link href="/appointment" className="btn btn-accent !py-2.5">
              <Calendar size={16} className="hidden sm:inline" />
              <span>Book Appointment</span>
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border-soft)] text-[color:var(--color-navy-900)] focus-ring"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className={cn(
            "lg:hidden fixed inset-x-0 bottom-0 z-30 bg-white overflow-y-auto",
            scrolled ? "top-[62px]" : "top-[76px]",
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="container-page py-6 flex flex-col gap-1">
            {mainNav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-4 rounded-xl text-lg font-medium border transition-colors",
                    active
                      ? "text-[color:var(--color-navy-900)] border-[color:var(--color-gold-100)] bg-[color:var(--color-gold-50)]"
                      : "text-[color:var(--color-navy-900)] border-transparent hover:border-[color:var(--color-border-soft)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-4 flex flex-col gap-3">
              <Link href="/appointment" className="btn btn-accent btn-lg justify-center">
                <Calendar size={18} />
                Book an Appointment
              </Link>
              <a href={telHref(hospital.phone.raw)} className="btn btn-outline btn-lg justify-center">
                <Phone size={18} />
                <span>{hospital.phone.display}</span>
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-[color:var(--color-border-soft)] text-sm text-[color:var(--color-muted-text)]">
              <p className="font-semibold text-[color:var(--color-navy-900)] mb-1">Visit us</p>
              <p>{hospital.address.line1}, {hospital.address.line2}, {hospital.address.city}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
