import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  preview: string;
  bgFrom: string;
  bgTo: string;
}

const POSTS: BlogPost[] = [
  {
    slug: "on-moving-to-an-island",
    title: "On Moving to an Island",
    date: "Apr 8, 2026",
    preview:
      "Sometimes the bravest thing you do is leave everything familiar behind. I moved to Hawaii with two suitcases and a box of poems...",
    bgFrom: "#D6EEE9",
    bgTo: "#6DC4C1",
  },
  {
    slug: "why-i-started-painting-again",
    title: "Why I Started Painting Again",
    date: "Mar 22, 2026",
    preview:
      "It wasn't about being good. It was about being honest with my hands. Somewhere between losing people and finding new ones...",
    bgFrom: "#F5D5E8",
    bgTo: "#E8458B",
  },
  {
    slug: "whirlpool-behind-the-poems",
    title: "Whirlpool: Behind the Poems",
    date: "Mar 5, 2026",
    preview:
      "This book almost didn't happen. I wrote most of these poems at 2am, in airports, on napkins, in the notes app...",
    bgFrom: "#F5EDD5",
    bgTo: "#D4A853",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-cream)" }}>
      {/* ── Page header ───────────────────────────────────────────── */}
      <section
        className="pt-32 pb-14 px-6 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, var(--color-cream) 0%, #EAF5F4 50%, var(--color-cream-dark) 100%)",
        }}
      >
        <div
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ backgroundColor: "var(--color-teal)" }}
          aria-hidden="true"
        />
        <p
          className="text-xs uppercase tracking-[0.25em] mb-3 opacity-50"
          style={{ color: "var(--color-teal-dark)", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Words &amp; wanderings
        </p>
        <h1
          className="text-5xl md:text-7xl mb-5"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            color: "var(--color-navy)",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          The Journal
        </h1>
        <p
          className="max-w-md mx-auto text-base md:text-lg leading-relaxed opacity-65"
          style={{ color: "var(--color-navy)", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Thoughts on poetry, painting, island life, and everything between.
        </p>
      </section>

      {/* ── Post grid ─────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-14 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {POSTS.map((post) => (
            <article key={post.slug} className="glass-card overflow-hidden flex flex-col group">
              {/* Placeholder image */}
              <div
                className="w-full h-52 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${post.bgFrom} 0%, ${post.bgTo} 100%)`,
                }}
                aria-label={`${post.title} cover image placeholder`}
                role="img"
              >
                {/* Subtle wave pattern */}
                <svg
                  viewBox="0 0 400 200"
                  className="w-full h-full opacity-20"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  {[20, 60, 100, 140, 180].map((y) => (
                    <path
                      key={y}
                      d={`M-20 ${y} Q100 ${y - 20} 200 ${y} Q300 ${y + 20} 420 ${y}`}
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    />
                  ))}
                </svg>
              </div>

              {/* Post content */}
              <div className="p-7 flex flex-col gap-3 flex-1">
                <time
                  className="text-xs uppercase tracking-widest opacity-45"
                  dateTime={post.date}
                  style={{
                    color: "var(--color-teal-dark)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {post.date}
                </time>

                <h2
                  className="text-2xl leading-snug"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    color: "var(--color-navy)",
                    fontWeight: 500,
                  }}
                >
                  {post.title}
                </h2>

                <p
                  className="text-sm leading-relaxed opacity-65 flex-1"
                  style={{
                    color: "var(--color-navy)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {post.preview}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium inline-flex items-center gap-1.5 mt-2 transition-colors duration-200 group-hover:gap-2.5"
                  style={{ color: "var(--color-teal-dark)", fontFamily: "var(--font-dm-sans), sans-serif" }}
                  aria-label={`Read ${post.title}`}
                >
                  Read More
                  <span
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
