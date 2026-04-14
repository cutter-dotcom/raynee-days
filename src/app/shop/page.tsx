"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SHOP_ITEMS } from "./items";

type Category = "all" | "prints" | "stickers";

const FILTER_TABS: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Prints", value: "prints" },
  { label: "Stickers", value: "stickers" },
];

export default function ShopPage() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? SHOP_ITEMS : SHOP_ITEMS.filter((item) => item.category === active);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-cream)" }}>
      {/* ── Page header ───────────────────────────────────────────── */}
      <section
        className="pt-32 pb-12 px-6 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, var(--color-cream) 0%, #E8F7F6 60%, var(--color-cream-dark) 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ backgroundColor: "var(--color-gold-light)" }}
          aria-hidden="true"
        />
        <h1
          className="text-5xl md:text-7xl mb-5"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            color: "var(--color-navy)",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          Shop
        </h1>
        <p
          className="max-w-lg mx-auto text-base md:text-lg leading-relaxed opacity-70"
          style={{ color: "var(--color-navy)", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Every piece starts as paint on canvas or ink on paper. Prints are made on archival-quality
          paper. Stickers are waterproof and weatherproof — because island life.
        </p>
      </section>

      {/* ── Filter tabs ───────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <div className="flex items-center gap-2 flex-wrap" role="tablist" aria-label="Filter shop items">
          {FILTER_TABS.map((tab) => {
            const isActive = active === tab.value;
            return (
              <button
                key={tab.value}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab.value)}
                className="glass-btn text-sm transition-all duration-200"
                style={{
                  color: isActive ? "white" : "var(--color-navy)",
                  backgroundColor: isActive
                    ? "var(--color-teal)"
                    : "rgba(255,255,255,0.2)",
                  borderColor: isActive
                    ? "var(--color-teal)"
                    : "rgba(255,255,255,0.3)",
                  padding: "0.5rem 1.5rem",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Grid ──────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => {
            const isSticker = item.category === "stickers";

            return (
              <Link
                key={item.id}
                href={`/shop/${item.slug}`}
                className="glass-card overflow-hidden flex flex-col relative group hover:-translate-y-1 transition-transform duration-200"
              >
                {/* Matching sticker badge */}
                {item.matchingStickerSlug && (
                  <span
                    className="absolute top-3 right-3 z-10 text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--color-gold)",
                      color: "white",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    + sticker
                  </span>
                )}

                {/* Image area */}
                <div
                  className={`w-full relative overflow-hidden ${
                    isSticker ? "h-40" : "aspect-[4/3]"
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${item.bgFrom} 0%, ${item.bgTo} 100%)`,
                  }}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.title} — artwork by Raynee`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg
                        viewBox="0 0 120 80"
                        className="opacity-20"
                        style={{ width: isSticker ? 60 : 80, height: "auto" }}
                        aria-hidden="true"
                      >
                        {isSticker ? (
                          <circle cx="60" cy="40" r="32" fill="white" />
                        ) : (
                          <>
                            <ellipse cx="60" cy="50" rx="40" ry="25" fill="white" />
                            <ellipse cx="60" cy="30" rx="20" ry="18" fill="white" />
                          </>
                        )}
                      </svg>
                    </div>
                  )}
                </div>

                {/* Card content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h2
                      className="text-lg leading-tight"
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        color: "var(--color-navy)",
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                    </h2>
                    <span
                      className="text-base font-semibold whitespace-nowrap"
                      style={{
                        color: "var(--color-teal-dark)",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      ${item.price}
                    </span>
                  </div>

                  <p
                    className="text-xs opacity-50 leading-relaxed"
                    style={{
                      color: "var(--color-navy)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    {isSticker
                      ? "Waterproof vinyl · 3\" die-cut"
                      : "Archival giclée print · signed"}
                  </p>

                  <div className="mt-auto pt-2">
                    <span
                      className="glass-btn text-sm inline-block w-full text-center group-hover:bg-white/40 transition-colors duration-200"
                      style={{
                        color: "var(--color-teal-dark)",
                        borderColor: "rgba(74,171,168,0.35)",
                      }}
                    >
                      View details
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p
            className="text-center opacity-40 py-24 text-lg"
            style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--color-navy)" }}
          >
            Nothing here yet — check back soon.
          </p>
        )}
      </section>
    </div>
  );
}
