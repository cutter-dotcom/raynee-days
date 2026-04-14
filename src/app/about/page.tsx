import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Raynee Days",
  description:
    "From Oregon rain to Hawaiian sun — the story behind Raynee Days, her poetry, her paintings, and why she still sends real mail.",
};

// Inline SVG icons for the "What I'm Into" list
function LeafIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

const INTO_ITEMS = [
  { emoji: "🌊", text: "Morning surf before coffee" },
  { emoji: "🎨", text: "Oil pastels on anything flat" },
  { emoji: "✉️", text: "Sending real mail to real people" },
  { emoji: "🌧️", text: "Rain on tin roofs (Oregon forever)" },
  { emoji: "🪴", text: "Trying to keep plants alive" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-32 pb-20 px-6 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, var(--color-cream) 0%, var(--color-teal-light) 60%, var(--color-cream) 100%)",
        }}
      >
        {/* Soft decorative blob */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(232,69,139,0.08) 0%, transparent 70%)",
          }}
        />

        <p
          className="relative text-sm uppercase tracking-[0.25em] text-[var(--color-teal-dark)] font-medium mb-3"
          style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
        >
          a little backstory
        </p>
        <h1
          className="relative text-6xl md:text-7xl text-[var(--color-navy)] leading-tight"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          About
        </h1>
        <div
          className="relative mx-auto mt-4 w-16 h-0.5 rounded-full"
          style={{ backgroundColor: "var(--color-gold)" }}
        />
      </section>

      {/* ── Main two-column section ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left: portrait */}
          <div className="flex flex-col gap-4">
            <div
              className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, var(--color-teal) 0%, var(--color-teal-light) 35%, var(--color-cream-dark) 70%, var(--color-cream) 100%)",
                boxShadow:
                  "0 20px 60px rgba(74, 171, 168, 0.2), 0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              <Image
                src="/art/raynee-portrait.png"
                alt="Raynee — portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Subtle caption beneath the placeholder */}
            <p
              className="text-center text-xs text-[var(--color-teal-dark)] tracking-wide opacity-70"
              style={{ fontFamily: "var(--font-dancing-script), cursive" }}
            >
              somewhere between Oregon and the ocean
            </p>
          </div>

          {/* Right: bio */}
          <div className="flex flex-col gap-8">
            <div>
              <h2
                className="text-5xl md:text-6xl text-[var(--color-navy)] leading-tight mb-6"
                style={{ fontFamily: "var(--font-dancing-script), cursive" }}
              >
                Hey, I&apos;m Raynee
              </h2>

              <div
                className="space-y-4 text-[17px] leading-relaxed text-[var(--color-navy)] opacity-80"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                <p>
                  I grew up in Oregon, where the rain comes sideways and the
                  evergreens go on forever. I loved it — the grey mornings, the
                  quiet, the way everything stayed so green. That stillness is
                  still in me somewhere, even now.
                </p>
                <p>
                  Then Hawaii happened. The ocean, the light, the way time moves
                  differently when you&apos;re close to the water. I slowed down.
                  I started creating again — really creating, not just filling
                  notebooks out of habit.
                </p>
                <p>
                  I&apos;ve been writing poetry since I was a teenager, using words
                  to figure out the things I couldn&apos;t say out loud. Painting
                  came later — oil pastels mostly, because they&apos;re messy and
                  forgiving and they force you to commit to a color.
                  <em> Whirlpool</em> is my first book, and it feels like all
                  those years finally landing somewhere.
                </p>
                <p>
                  I make prints and stickers because art shouldn&apos;t just live
                  on a wall. It should travel with you, live in your wallet, end
                  up on a water bottle. The Snail Mail Club is my way of keeping
                  things personal — real envelopes, real stamps, real handwriting
                  in a world that moves too fast.
                </p>
              </div>
            </div>

            {/* "What I'm Into" glass card */}
            <div className="glass-card p-6">
              <h3
                className="text-xl text-[var(--color-teal-dark)] mb-4 font-medium"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                What I&apos;m Into
              </h3>
              <ul className="flex flex-col gap-3">
                {INTO_ITEMS.map(({ emoji, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-3 text-[var(--color-navy)]"
                    style={{
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      fontSize: "0.9375rem",
                    }}
                  >
                    <span
                      className="text-lg leading-none"
                      role="img"
                      aria-hidden="true"
                    >
                      {emoji}
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 px-6 text-center"
        style={{
          background:
            "linear-gradient(180deg, var(--color-cream) 0%, var(--color-cream-dark) 100%)",
        }}
      >
        <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <p
            className="text-3xl md:text-4xl text-[var(--color-navy)]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Want to work together or just say hi?
          </p>
          <p
            className="text-base text-[var(--color-navy)] opacity-60 leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
          >
            I&apos;m always happy to hear from people — whether it&apos;s about a
            print, a poem, or just a good conversation.
          </p>
          <Link
            href="/contact"
            className="glass-btn text-[var(--color-navy)] font-semibold text-sm tracking-wide hover:text-[var(--color-teal-dark)] transition-colors"
            style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  );
}
