"use client";

import Link from "next/link";
import Image from "next/image";

const PRINTS = [
  { title: "Blueberry Morning", bg: "bg-[var(--color-pink)]/15", image: "/art/blueberry-toast.jpg" },
  { title: "Surfer's Hymn", bg: "bg-[var(--color-teal)]/20", image: "/art/surfer-girl.jpg" },
];

export default function PrintsCarousel() {
  return (
    /* Outer wrapper: full-bleed with side padding so edge cards peek */
    <div className="relative">
      <div
        className="carousel-scroll flex gap-5 overflow-x-auto px-6 md:px-12 pb-4"
        role="list"
        aria-label="Art prints available in the shop"
      >
        {PRINTS.map(({ title, bg, image }) => (
          <div
            key={title}
            className="carousel-item glass-card w-[260px] md:w-[280px] overflow-hidden"
            role="listitem"
          >
            {/* Painting image */}
            <div className={`aspect-square w-full ${bg} relative overflow-hidden`}>
              <Image
                src={image}
                alt={`${title} — painting by Raynee`}
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>

            {/* Card footer */}
            <div className="px-4 py-4 flex flex-col gap-1">
              <p
                className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[var(--color-navy)] leading-snug"
              >
                {title}
              </p>
              <p className="text-sm text-[var(--color-navy)]/60 font-[family-name:var(--font-dm-sans)]">
                From $35
              </p>
            </div>
          </div>
        ))}

        {/* "View All" card — sits inline at the end of the scroll */}
        <div className="carousel-item w-[180px] md:w-[200px] flex-shrink-0 flex items-center justify-center">
          <Link
            href="/shop"
            className="glass-btn text-[var(--color-navy)] text-sm font-[family-name:var(--font-dm-sans)] whitespace-nowrap"
          >
            View All Prints&nbsp;→
          </Link>
        </div>
      </div>

      {/* Fade-out mask at right edge to hint more content */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[var(--color-cream)] to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
