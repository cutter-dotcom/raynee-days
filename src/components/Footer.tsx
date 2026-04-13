"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

// Simple inline SVG icons — no external dependency needed
function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Book", href: "/book" },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/rayneedays",
    icon: <InstagramIcon />,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@rayneedays",
    icon: <TikTokIcon />,
  },
  {
    label: "Email",
    href: "mailto:hello@rayneedays.com",
    icon: <MailIcon />,
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    // TODO: wire up to a real email list provider (Mailchimp, ConvertKit, etc.)
    console.log("Subscribe:", email);
    setStatus("success");
    setEmail("");
  }

  return (
    <footer
      style={{ backgroundColor: "var(--color-teal-dark)" }}
      className="text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top row: wordmark + nav links */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-10 border-b border-white/15">
          {/* Wordmark + tagline */}
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="font-[family-name:var(--font-dancing-script)] text-3xl text-white/90 hover:text-white transition-colors duration-200"
            >
              Raynee Days
            </Link>
            <p
              className="text-sm text-white/55 max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Poetry, paint &amp; salt water — from Oregon roots to Hawaiian shores.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Middle row: social + newsletter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 py-10 border-b border-white/15">
          {/* Social links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-white/40 font-medium">
              Follow along
            </span>
            <ul className="flex items-center gap-4" role="list">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={label}
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {icon}
                    <span className="text-sm">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter signup */}
          <div className="flex flex-col gap-3 md:max-w-sm w-full">
            <label
              htmlFor="footer-email"
              className="text-xs uppercase tracking-widest text-white/40 font-medium"
            >
              Stay in the loop
            </label>
            <form
              onSubmit={handleSubscribe}
              className="flex items-center gap-2"
              noValidate
            >
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("idle");
                }}
                placeholder="your@email.com"
                className="flex-1 min-w-0 px-4 py-2.5 rounded-full text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/35 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-200"
                autoComplete="email"
              />
              <button
                type="submit"
                className="glass-btn text-sm text-white whitespace-nowrap"
                style={{ padding: "0.625rem 1.25rem" }}
              >
                Subscribe
              </button>
            </form>

            {/* Status feedback */}
            {status === "success" && (
              <p className="text-xs text-[var(--color-gold-light)]">
                You&apos;re in — thank you!
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-pink-300">
                Please enter a valid email address.
              </p>
            )}
          </div>
        </div>

        {/* Bottom row: copyright */}
        <div className="pt-8 text-center">
          <p className="text-xs text-white/35 tracking-wide">
            &copy; 2026 Raynee Days. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
