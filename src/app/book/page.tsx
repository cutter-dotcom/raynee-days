import Link from "next/link";
import Image from "next/image";

export default function BookPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-cream)" }}>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 px-6 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, var(--color-cream) 0%, #E8F7F6 45%, var(--color-cream-dark) 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ backgroundColor: "var(--color-teal-light)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-10 right-0 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ backgroundColor: "var(--color-pink-light)" }}
          aria-hidden="true"
        />

        <p
          className="text-sm uppercase tracking-[0.25em] mb-4 opacity-60"
          style={{ color: "var(--color-teal-dark)", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          A debut collection
        </p>
        <h1
          className="text-7xl md:text-9xl leading-none mb-6"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            color: "var(--color-navy)",
            fontWeight: 300,
            fontStyle: "italic",
          }}
        >
          Whirlpool
        </h1>
        <p
          className="text-lg md:text-xl max-w-md mx-auto opacity-70 leading-relaxed"
          style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--color-navy)" }}
        >
          by Raynee
        </p>
      </section>

      {/* ── Book + Description ────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Book cover */}
          <div className="flex justify-center md:justify-end">
            <div className="glass-card w-full max-w-xs aspect-[2/3] overflow-hidden">
              <Image
                src="/art/whirlpool-cover.png"
                alt="Whirlpool by Raynee Woodworth — poetry collection cover"
                width={640}
                height={960}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Description + purchase */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <h2
                className="text-3xl md:text-4xl leading-snug"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  color: "var(--color-navy)",
                  fontWeight: 500,
                }}
              >
                About the book
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed opacity-80"
                style={{ color: "var(--color-navy)", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Whirlpool is a collection of poems written over the years — starting from my teenage
                years up until now. It holds pieces of everything I&apos;ve lived through: mental
                health struggles, grief, heartbreak, moving away, and, somewhere along the way,
                finding love. This book isn&apos;t perfectly polished or tied together with a bow —
                it&apos;s real, raw, and constantly changing, just like life. Every poem captures a
                moment, a feeling, or a version of me that existed at the time. If you&apos;ve ever
                felt like you were being pulled in every direction at once, like your emotions come
                in waves you can&apos;t always control — this book might feel a little familiar.
              </p>
            </div>

            {/* Purchase buttons */}
            <div className="flex flex-col gap-4">
              <p
                className="text-xs uppercase tracking-[0.2em] opacity-50"
                style={{ color: "var(--color-navy)", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Get Your Copy
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.amazon.ca/Whirlpool-Raynee-Woodworth/dp/B0GX9QMD5S"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn text-sm inline-flex items-center gap-2"
                  style={{ color: "var(--color-navy)", borderColor: "rgba(74,171,168,0.4)" }}
                  aria-label="Buy Whirlpool on Amazon"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                    aria-hidden="true"
                  >
                    <path d="M13.23 10.56V10c-1.94.02-3.99.2-3.99 2.28 0 .98.51 1.64 1.37 1.64.64 0 1.21-.39 1.56-1.03.43-.79.06-1.33.06-2.33M17.07 19.43c-.52.39-1.35.43-1.94.16-.78-.57-1.38-1.5-1.36-2.72 0-1.18.64-2.03 1.5-2.5.86-.47 1.97-.52 2.68-.14.01.86.01 1.64.01 2.52.03.87-.2 1.81-.89 2.68m3.47 1.84c-.66-.48-1.34-.96-2.02-1.44-.7-.5-1.21-.91-1.11-1.88-.01-1.62-.02-3.24.01-4.85.01-.94.01-1.88.01-2.82 0-.45-.04-.84-.14-1.15-.81-2.41-3.08-3.1-5.36-2.94-1.08.07-2.08.35-2.89.88-.81.53-1.37 1.33-1.37 2.33h1.59c.07-.75.58-1.33 1.5-1.58.42-.12.85-.17 1.28-.15.86.04 1.61.36 2.05 1.01.38.55.48 1.27.44 2.1-.9-.14-1.82-.19-2.63-.1-2.66.29-4.09 1.78-4.09 3.93 0 2.38 1.57 3.73 3.82 3.73 1.52 0 2.71-.72 3.43-1.95.09.5.26.97.53 1.37.31.46.76.81 1.34 1.05 1.01.43 1.95.22 2.61-.32z" />
                  </svg>
                  Buy on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────── */}
      <section className="py-16 px-6 text-center">
        <p
          className="text-2xl md:text-3xl mb-6 opacity-70"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            color: "var(--color-navy)",
            fontStyle: "italic",
          }}
        >
          If it feels familiar, it was probably written for you.
        </p>
        <Link
          href="/contact"
          className="glass-btn text-sm inline-block"
          style={{ color: "var(--color-teal-dark)" }}
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
}
