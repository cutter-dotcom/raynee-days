import Link from "next/link";
import { notFound } from "next/navigation";

// ── Static post data ──────────────────────────────────────────────────────────
// When real CMS/MDX is wired up, swap this out. Each entry maps a slug to its
// full article content. Keeping it here means zero database calls at build time.

interface Post {
  slug: string;
  title: string;
  date: string;
  body: React.ReactNode;
}

// Helper: a simple paragraph component so the JSX stays readable
function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-base md:text-lg leading-relaxed opacity-75 mb-5"
      style={{ color: "var(--color-navy)", fontFamily: "var(--font-dm-sans), sans-serif" }}
    >
      {children}
    </p>
  );
}

const POSTS: Post[] = [
  {
    slug: "on-moving-to-an-island",
    title: "On Moving to an Island",
    date: "April 8, 2026",
    body: (
      <>
        <P>
          Sometimes the bravest thing you do is leave everything familiar behind. I moved to Hawaii
          with two suitcases and a box of poems, and I&apos;ll be honest — I cried in the airport
          parking lot before I even got to the gate. Not because I was scared (though I was), but
          because leaving somewhere you&apos;ve known your whole life feels like losing a version of
          yourself you&apos;re not totally ready to let go of.
        </P>
        <P>
          Oregon had been home for as long as I could remember. The rain, the trees, the way the
          coast smells like salt and pine all at once. There&apos;s a kind of beauty in grey skies
          that people who grew up under them understand — it&apos;s quieter, more introspective. It
          matches a certain kind of mood I carry around like a coat I can&apos;t take off.
        </P>
        <P>
          But something in me needed warmth. Not just sunshine — actual warmth. In people, in place,
          in the way the ocean looks when it&apos;s teal instead of slate. I needed to find out if I
          could build something new in a place that didn&apos;t already know my story.
        </P>
        <P>
          The first week was disorienting in the best way. Everything smelled different. The birds
          were wrong — in the most wonderful sense. I ate a mango off a tree in someone&apos;s yard
          and thought: okay. Maybe this is it. Maybe this is what I was trying to get to.
        </P>
        <P>
          I&apos;m still figuring it out. But I write more here. I paint more here. And I think
          that&apos;s the truest measure of whether a place is right for you.
        </P>
      </>
    ),
  },
  {
    slug: "why-i-started-painting-again",
    title: "Why I Started Painting Again",
    date: "March 22, 2026",
    body: (
      <>
        <P>
          It wasn&apos;t about being good. It was about being honest with my hands. Somewhere
          between losing people and finding new ones, I had let painting become something I did
          "when I had time," which is another way of saying never. I picked up a brush again almost
          by accident — a half-empty tube of cerulean, a piece of card stock, nothing particular to
          say.
        </P>
        <P>
          The first thing I painted was terrible. A wonky flower with no composition and too much
          blue. I stared at it for a minute and then kept going. That&apos;s the thing about making
          art when no one&apos;s watching — there&apos;s no reason to stop.
        </P>
        <P>
          I think I stopped painting the first time because I started caring too much what people
          thought. I was sharing things online before I even knew what I was trying to say. That
          kind of attention, even when it&apos;s kind, can make you second-guess the raw version of
          a thing. And the raw version is usually the most important part.
        </P>
        <P>
          Now I paint in the morning before anything else happens. Before coffee, before my phone.
          Just light and color and whatever the last dream left in my hands. Most of it
          doesn&apos;t go anywhere. Some of it turns into a print. All of it turns into something
          I needed.
        </P>
        <P>
          That&apos;s enough.
        </P>
      </>
    ),
  },
  {
    slug: "whirlpool-behind-the-poems",
    title: "Whirlpool: Behind the Poems",
    date: "March 5, 2026",
    body: (
      <>
        <P>
          This book almost didn&apos;t happen. I wrote most of these poems at 2am, in airports, on
          napkins, in the notes app of a phone I dropped in a river and had to replace. There was
          never a plan. There was just this thing I couldn&apos;t stop doing.
        </P>
        <P>
          When I finally started pulling everything together into something that resembled a
          collection, I was sitting on the floor surrounded by printed pages, trying to remember who
          I was when I wrote each one. Some of them I remembered instantly — the circumstances were
          so specific I could feel the air from that room again. Others were strangers. Written by a
          version of me I&apos;d quietly outgrown.
        </P>
        <P>
          I almost didn&apos;t include the early ones. The teenage-years poems, the ones about grief
          and panic and loving people who weren&apos;t good for me. They felt raw in a way that made
          me want to reach back in time and apologize for them.
        </P>
        <P>
          But that&apos;s exactly why they&apos;re in there. Because the whole point of this book is
          that growth isn&apos;t a straight line. You&apos;re allowed to be a mess and still be
          worth reading. The whirlpool doesn&apos;t resolve — it just eventually gets quieter.
          Sometimes.
        </P>
        <P>
          I hope you find something in here that sounds like a thing you&apos;ve felt but
          couldn&apos;t name. That&apos;s all I was ever trying to do.
        </P>
      </>
    ),
  },
];

// ── generateStaticParams ──────────────────────────────────────────────────────
// Next.js 16 App Router: return the slugs to pre-render at build time.
export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

// ── Page component ────────────────────────────────────────────────────────────
// In Next.js 16, params is a Promise — must be awaited before use.
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-cream)" }}>
      {/* ── Decorative hero strip ─────────────────────────────────── */}
      <div
        className="pt-28 pb-14 px-6 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, var(--color-cream) 0%, #EAF5F4 60%, var(--color-cream-dark) 100%)",
        }}
      >
        <div
          className="absolute -top-20 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ backgroundColor: "var(--color-teal)" }}
          aria-hidden="true"
        />

        {/* Back link */}
        <div className="max-w-3xl mx-auto mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm opacity-55 hover:opacity-90 transition-opacity duration-200"
            style={{
              color: "var(--color-navy)",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            <span aria-hidden="true">&larr;</span>
            Back to The Journal
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          <time
            className="block text-xs uppercase tracking-widest opacity-45 mb-4"
            style={{
              color: "var(--color-teal-dark)",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            {post.date}
          </time>
          <h1
            className="text-4xl md:text-6xl leading-tight"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              color: "var(--color-navy)",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            {post.title}
          </h1>
          <div
            className="mt-6 h-px opacity-20 max-w-xs"
            style={{ backgroundColor: "var(--color-teal)" }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ── Article body ──────────────────────────────────────────── */}
      <article className="max-w-3xl mx-auto px-6 py-14 pb-28">
        <div className="glass-card p-8 md:p-12">{post.body}</div>

        {/* Bottom nav */}
        <div className="mt-12 pt-8 border-t border-[var(--color-teal)]/10 flex justify-between items-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm opacity-55 hover:opacity-90 transition-opacity duration-200"
            style={{
              color: "var(--color-navy)",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            <span aria-hidden="true">&larr;</span>
            All posts
          </Link>
          <Link
            href="/book"
            className="glass-btn text-sm"
            style={{ color: "var(--color-teal-dark)" }}
          >
            Read Whirlpool
          </Link>
        </div>
      </article>
    </div>
  );
}
