/**
 * Raynee Days — Landing Page
 *
 * Sections (in order):
 *   1. Hero             — full-width, giant cursive title, cream→teal gradient
 *   2. Intro Strip      — glass card bio, warm gradient background
 *   3. Book Teaser      — two-column Whirlpool promo with cover placeholder
 *   4. Prints Carousel  — horizontally scrollable print cards (client component)
 *   5. Snail Mail Club  — newsletter / mailing signup, glass card, warm gradient
 *   6. Blog Preview     — two glass cards with journal post teasers
 */

import Link from "next/link";
import Image from "next/image";
import WaveDivider from "@/components/WaveDivider";
import PrintsCarousel from "@/components/PrintsCarousel";
import SnailMailForm from "@/components/SnailMailForm";

// ─── Section 1: Hero ─────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-0 text-center"
      style={{
        background:
          "linear-gradient(160deg, var(--color-cream) 0%, #d8eeec 55%, #c5e4e2 100%)",
      }}
    >
      {/* Decorative soft circles — purely visual depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, var(--color-gold-light) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, var(--color-teal-light) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, var(--color-pink-light) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Main title */}
      <h1
        className="relative font-[family-name:var(--font-dancing-script)] leading-none text-[var(--color-navy)] z-10"
        style={{ fontSize: "clamp(3.5rem, 10vw, 6.5rem)" }}
      >
        Raynee Days
      </h1>

      {/* Tagline */}
      <p
        className="relative z-10 mt-5 font-[family-name:var(--font-cormorant)] italic text-[var(--color-navy)]/70 tracking-widest uppercase"
        style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)", letterSpacing: "0.25em" }}
      >
        poetry, paint &amp; salt water
      </p>

      {/* Scroll nudge */}
      <div
        className="relative z-10 mt-16 flex flex-col items-center gap-2 text-[var(--color-navy)]/40"
        aria-hidden="true"
      >
        <span className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase">
          scroll
        </span>
        {/* Animated chevron */}
        <svg
          viewBox="0 0 16 24"
          className="w-4 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M8 4 L8 20 M2 14 L8 20 L14 14" />
        </svg>
      </div>

      {/* Wave transition into the next section */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <WaveDivider fillColor="var(--color-cream)" />
      </div>
    </section>
  );
}

// ─── Section 2: Intro Strip ───────────────────────────────────────────────────

function IntroSection() {
  return (
    <section
      aria-label="About Raynee"
      className="relative py-20 px-6"
      style={{
        background:
          "linear-gradient(135deg, var(--color-cream) 0%, #fce8d8 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="glass-card px-8 py-10 md:px-12 md:py-14 text-center">
          {/* Decorative opening quote mark */}
          <span
            aria-hidden="true"
            className="block font-[family-name:var(--font-dancing-script)] text-[5rem] leading-none text-[var(--color-teal)]/30 mb-2 -mt-4"
          >
            &ldquo;
          </span>
          <p
            className="font-[family-name:var(--font-cormorant)] text-[var(--color-navy)] leading-relaxed"
            style={{ fontSize: "clamp(1.2rem, 2.8vw, 1.55rem)" }}
          >
            Born between Oregon pine and Hawaiian salt air, Raynee turns feeling
            into form — through poetry that pulls you under and paintings that
            bring you back to the surface.
          </p>
          <span
            aria-hidden="true"
            className="block font-[family-name:var(--font-dancing-script)] text-[5rem] leading-none text-[var(--color-teal)]/30 mt-2 -mb-4 text-right"
          >
            &rdquo;
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: Book Teaser ───────────────────────────────────────────────────

function BookSection() {
  return (
    <section
      aria-label="Whirlpool — poetry collection"
      className="py-20 px-6 bg-[var(--color-cream)]"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Book cover */}
        <div className="glass-card aspect-[2/3] w-full max-w-[280px] mx-auto md:max-w-none overflow-hidden">
          <Image
            src="/art/whirlpool-cover.png"
            alt="Whirlpool by Raynee Woodworth — poetry collection cover"
            width={560}
            height={840}
            className="w-full h-full object-cover"
            priority={false}
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-6">
          <h2
            className="font-[family-name:var(--font-cormorant)] font-semibold text-[var(--color-navy)] leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
          >
            Whirlpool
          </h2>

          <p
            className="font-[family-name:var(--font-cormorant)] text-[var(--color-navy)]/75 leading-relaxed"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)" }}
          >
            A collection of poems born from every wave life threw — heartbreak,
            grief, moving away, and somewhere in the chaos, finding love. Raw,
            real, and unapologetically honest.
          </p>

          <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[var(--color-navy)]/50">
            Poetry collection &bull; First edition
          </p>

          <div>
            <Link
              href="/book"
              className="glass-btn inline-block text-[var(--color-navy)] font-[family-name:var(--font-dm-sans)] text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: Prints Carousel ──────────────────────────────────────────────

function PrintsSection() {
  return (
    <section
      aria-label="Art prints shop"
      className="py-20 bg-[var(--color-cream-dark)]"
    >
      {/* Section heading — padded inside the container */}
      <div className="px-6 md:px-12 mb-8">
        <h2
          className="font-[family-name:var(--font-cormorant)] font-semibold text-[var(--color-navy)] leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          From Canvas to Your Walls
        </h2>
        <p className="mt-2 font-[family-name:var(--font-dm-sans)] text-sm text-[var(--color-navy)]/55">
          Each print is a little piece of somewhere beautiful.
        </p>
      </div>

      {/* Client carousel component handles horizontal scroll */}
      <PrintsCarousel />
    </section>
  );
}

// ─── Section 5: Snail Mail Club ───────────────────────────────────────────────

function SnailMailSection() {
  return (
    <section
      aria-label="Snail Mail Club — join the mailing list"
      className="relative py-20 px-6"
      style={{
        background:
          "linear-gradient(145deg, var(--color-cream) 0%, #fce4ef 100%)",
      }}
    >
      <div className="max-w-xl mx-auto">
        <div className="glass-card px-8 py-10 md:px-12 md:py-14">
          {/* Envelope doodle */}
          <div className="flex justify-center mb-6" aria-hidden="true">
            <svg
              viewBox="0 0 48 36"
              className="w-12 h-9 text-[var(--color-pink)]/60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="1" y="1" width="46" height="34" rx="3" />
              <polyline points="1,1 24,20 47,1" />
              <line x1="1" y1="35" x2="18" y2="18" />
              <line x1="47" y1="35" x2="30" y2="18" />
            </svg>
          </div>

          <h2
            className="font-[family-name:var(--font-dancing-script)] text-[var(--color-navy)] text-center leading-tight mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}
          >
            Get poetry &amp; prints delivered to your door
          </h2>

          <p className="font-[family-name:var(--font-cormorant)] text-[var(--color-navy)]/70 text-center leading-relaxed mb-8"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
          >
            Join the Snail Mail Club — handwritten poems, mini prints, and little
            surprises mailed to you with love.
          </p>

          {/* Form extracted to a client component so event handlers work */}
          <SnailMailForm />

          <p className="mt-5 font-[family-name:var(--font-dm-sans)] text-xs text-[var(--color-navy)]/35 text-center">
            No spam, ever. Only real mail from a real human.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section 6: Blog Preview ──────────────────────────────────────────────────

const BLOG_POSTS = [
  {
    slug: "on-moving-to-an-island",
    title: "On Moving to an Island",
    preview:
      "Sometimes the bravest thing you do is leave everything familiar behind — the pine smell, the grey skies, the people who knew you before you knew yourself...",
    date: "Apr 2026",
    dateISO: "2026-04-01",
  },
  {
    slug: "why-i-started-painting-again",
    title: "Why I Started Painting Again",
    preview:
      "It wasn't about being good. It was about being honest with my hands. About letting something exist that didn't need words, didn't need to make sense...",
    date: "Mar 2026",
    dateISO: "2026-03-01",
  },
] as const;

function BlogSection() {
  return (
    <section
      aria-label="Journal — latest posts"
      className="py-20 px-6 bg-[var(--color-cream)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading row */}
        <div className="flex items-end justify-between gap-4 mb-10 flex-wrap">
          <h2
            className="font-[family-name:var(--font-cormorant)] font-semibold text-[var(--color-navy)] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Latest from the Journal
          </h2>
          <Link
            href="/blog"
            className="font-[family-name:var(--font-dm-sans)] text-sm text-[var(--color-teal)] hover:text-[var(--color-teal-dark)] transition-colors duration-200 whitespace-nowrap"
          >
            All posts &nbsp;→
          </Link>
        </div>

        {/* Post cards grid */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          role="list"
        >
          {BLOG_POSTS.map(({ slug, title, preview, date, dateISO }) => (
            <li key={slug}>
              <article className="glass-card h-full flex flex-col px-8 py-8">
                {/* Date */}
                <time
                  dateTime={dateISO}
                  className="font-[family-name:var(--font-dm-sans)] text-xs tracking-widest uppercase text-[var(--color-teal)] mb-3"
                >
                  {date}
                </time>

                {/* Title */}
                <h3
                  className="font-[family-name:var(--font-cormorant)] font-semibold text-[var(--color-navy)] leading-snug mb-3"
                  style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)" }}
                >
                  {title}
                </h3>

                {/* Preview */}
                <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[var(--color-navy)]/65 leading-relaxed flex-1">
                  {preview}
                </p>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    href={`/blog/${slug}`}
                    className="font-[family-name:var(--font-dm-sans)] text-sm font-semibold text-[var(--color-teal)] hover:text-[var(--color-teal-dark)] transition-colors duration-200 group inline-flex items-center gap-1"
                  >
                    Read More
                    <span
                      className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <BookSection />
      <PrintsSection />
      <SnailMailSection />
      <BlogSection />
    </>
  );
}
