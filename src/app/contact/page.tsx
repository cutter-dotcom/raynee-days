"use client";

import { useState, FormEvent } from "react";

// Inline SVG icons — no external dependency
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

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "#",
    icon: <InstagramIcon />,
  },
  {
    label: "TikTok",
    href: "#",
    icon: <TikTokIcon />,
  },
  {
    label: "Email",
    href: "mailto:hello@rayneedays.com",
    icon: <MailIcon />,
  },
];

const TOPIC_OPTIONS = [
  { value: "", label: "What's this about?" },
  { value: "general", label: "General" },
  { value: "print-inquiry", label: "Print Inquiry" },
  { value: "sticker-inquiry", label: "Sticker Inquiry" },
  { value: "snail-mail-club", label: "Snail Mail Club" },
  { value: "collaboration", label: "Collaboration" },
  { value: "just-saying-hi", label: "Just Saying Hi" },
];

type FormStatus = "idle" | "success" | "error";

// Shared input class strings — kept as constants to stay DRY
const INPUT_BASE =
  "w-full rounded-xl px-4 py-3 text-sm text-[var(--color-navy)] placeholder:text-[var(--color-navy)] placeholder:opacity-35 border transition-all duration-200 outline-none focus:ring-2 focus:ring-[var(--color-teal)] focus:ring-offset-1 focus:border-[var(--color-teal)]";

const INPUT_BG =
  "bg-[var(--color-cream)] border-[var(--color-cream-dark)] hover:border-[var(--color-teal-light)]";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Basic client-side validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    // TODO: wire up to a real form backend (Formspree, Resend, n8n webhook, etc.)
    console.log("Contact form submitted:", { name, email, topic, message });

    setStatus("success");
    setName("");
    setEmail("");
    setTopic("");
    setMessage("");
  }

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-32 pb-20 px-6 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, var(--color-cream) 0%, var(--color-pink-light) 50%, var(--color-cream) 100%)",
        }}
      >
        {/* Soft blob overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 45%, rgba(74,171,168,0.10) 0%, transparent 70%)",
          }}
        />

        <p
          className="relative text-sm uppercase tracking-[0.25em] text-[var(--color-pink)] font-medium mb-3"
          style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
        >
          say hello
        </p>
        <h1
          className="relative text-6xl md:text-7xl text-[var(--color-navy)] leading-tight"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Get in Touch
        </h1>
        <div
          className="relative mx-auto mt-4 w-16 h-0.5 rounded-full"
          style={{ backgroundColor: "var(--color-pink)" }}
        />
        <p
          className="relative mt-6 text-lg md:text-xl text-[var(--color-navy)] opacity-65 max-w-lg mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Whether it&apos;s about a print, a poem, or just to say aloha —
          I&apos;d love to hear from you.
        </p>
      </section>

      {/* ── Form section ── */}
      <section className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <div className="glass-card p-8 md:p-10">
          {status === "success" ? (
            /* Success state */
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <span className="text-5xl" role="img" aria-label="Letter with heart">
                💌
              </span>
              <h2
                className="text-3xl text-[var(--color-navy)]"
                style={{ fontFamily: "var(--font-dancing-script), cursive" }}
              >
                It&apos;s on its way!
              </h2>
              <p
                className="text-base text-[var(--color-navy)] opacity-65 max-w-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1.0625rem",
                }}
              >
                Thanks for reaching out. I read every message and I&apos;ll get
                back to you soon. Promise.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="glass-btn text-sm text-[var(--color-teal-dark)] font-semibold mt-2"
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                }}
              >
                Send Another
              </button>
            </div>
          ) : (
            /* Form */
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-xs uppercase tracking-widest font-medium text-[var(--color-navy)] opacity-50"
                  style={{
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  }}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className={`${INPUT_BASE} ${INPUT_BG}`}
                  style={{
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  }}
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-xs uppercase tracking-widest font-medium text-[var(--color-navy)] opacity-50"
                  style={{
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  }}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className={`${INPUT_BASE} ${INPUT_BG}`}
                  style={{
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  }}
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-topic"
                  className="text-xs uppercase tracking-widest font-medium text-[var(--color-navy)] opacity-50"
                  style={{
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  }}
                >
                  Topic
                </label>
                <select
                  id="contact-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className={`${INPUT_BASE} ${INPUT_BG} cursor-pointer`}
                  style={{
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    // Make the select arrow consistent with the color palette
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%231A2744' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 6l4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "1rem",
                    appearance: "none",
                    WebkitAppearance: "none",
                    paddingRight: "2.5rem",
                  }}
                >
                  {TOPIC_OPTIONS.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs uppercase tracking-widest font-medium text-[var(--color-navy)] opacity-50"
                  style={{
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="What's on your mind?"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className={`${INPUT_BASE} ${INPUT_BG} resize-none`}
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.0625rem",
                    lineHeight: "1.7",
                  }}
                  required
                />
              </div>

              {/* Validation error */}
              {status === "error" && (
                <p
                  className="text-sm text-[var(--color-pink)] -mt-1"
                  role="alert"
                  style={{
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  }}
                >
                  Please fill in your name, email, and message before sending.
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="glass-btn w-full text-sm font-semibold text-[var(--color-navy)] tracking-wide"
                  style={{
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    background:
                      "linear-gradient(135deg, rgba(74,171,168,0.2) 0%, rgba(255,255,255,0.25) 100%)",
                  }}
                >
                  Send It
                </button>
              </div>
            </form>
          )}
        </div>

        {/* ── Social links ── */}
        <div className="mt-12 flex flex-col items-center gap-5">
          <p
            className="text-xs uppercase tracking-[0.25em] text-[var(--color-navy)] opacity-40 font-medium"
            style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
          >
            Find me elsewhere
          </p>
          <ul className="flex items-center gap-6" role="list">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="flex items-center gap-2 text-[var(--color-navy)] opacity-50 hover:opacity-100 hover:text-[var(--color-teal)] transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  }}
                >
                  {icon}
                  <span className="text-sm">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
