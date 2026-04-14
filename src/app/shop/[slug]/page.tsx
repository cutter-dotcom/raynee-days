"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getItemBySlug } from "../items";

export default function ShopItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const item = getItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const matchingSticker = item.matchingStickerSlug
    ? getItemBySlug(item.matchingStickerSlug)
    : null;
  const isSticker = item.category === "stickers";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-cream)" }}>
      {/* Hero header */}
      <section
        className="pt-28 pb-10 px-6 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, var(--color-cream) 0%, #E8F7F6 60%, var(--color-cream-dark) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <Link
            href="/shop"
            className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            style={{
              color: "var(--color-navy)",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            ← Back to shop
          </Link>
        </div>
      </section>

      {/* Main item */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Image */}
          <div
            className="glass-card overflow-hidden relative aspect-[4/5]"
            style={{
              background: `linear-gradient(135deg, ${item.bgFrom} 0%, ${item.bgTo} 100%)`,
            }}
          >
            {item.image && (
              <Image
                src={item.image}
                alt={`${item.title} — artwork by Raynee`}
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6 md:pt-4">
            <div>
              <p
                className="text-xs uppercase tracking-widest opacity-50 mb-3"
                style={{
                  color: "var(--color-teal-dark)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                {isSticker ? "Sticker" : "Fine art print"}
              </p>
              <h1
                className="text-5xl md:text-6xl mb-4"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  color: "var(--color-navy)",
                  fontWeight: 400,
                  fontStyle: "italic",
                }}
              >
                {item.title}
              </h1>
              <p
                className="text-2xl font-semibold"
                style={{
                  color: "var(--color-teal-dark)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                ${item.price}
              </p>
            </div>

            {item.description && (
              <p
                className="text-base md:text-lg leading-relaxed opacity-75"
                style={{
                  color: "var(--color-navy)",
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                }}
              >
                {item.description}
              </p>
            )}

            <p
              className="text-sm opacity-60 leading-relaxed"
              style={{
                color: "var(--color-navy)",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              {isSticker
                ? "Waterproof vinyl · 3\" die-cut · weatherproof, because island life."
                : "Archival giclée print · signed by the artist · printed on museum-quality paper."}
            </p>

            <Link
              href="/contact"
              className="glass-btn text-base inline-block text-center"
              style={{
                color: "white",
                backgroundColor: "var(--color-teal)",
                borderColor: "var(--color-teal)",
                padding: "0.875rem 2rem",
              }}
            >
              Inquire to purchase
            </Link>
          </div>
        </div>

        {/* Matching sticker */}
        {matchingSticker && (
          <div className="mt-20 pt-12 border-t border-black/10">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs uppercase tracking-widest font-medium px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "var(--color-gold)",
                  color: "white",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                + matching sticker
              </span>
              <p
                className="text-sm opacity-60"
                style={{
                  color: "var(--color-navy)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                This painting has a little sibling.
              </p>
            </div>

            <Link
              href={`/shop/${matchingSticker.slug}`}
              className="glass-card overflow-hidden flex flex-col sm:flex-row group hover:-translate-y-1 transition-transform duration-200 max-w-2xl"
            >
              <div
                className="relative sm:w-64 aspect-square sm:aspect-auto flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${matchingSticker.bgFrom} 0%, ${matchingSticker.bgTo} 100%)`,
                }}
              >
                {matchingSticker.image && (
                  <Image
                    src={matchingSticker.image}
                    alt={`${matchingSticker.title} sticker`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, 256px"
                  />
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col gap-2 justify-center">
                <h3
                  className="text-2xl"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    color: "var(--color-navy)",
                    fontWeight: 500,
                  }}
                >
                  {matchingSticker.title}
                </h3>
                <p
                  className="text-base font-semibold"
                  style={{
                    color: "var(--color-teal-dark)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  ${matchingSticker.price}
                </p>
                <p
                  className="text-sm opacity-60"
                  style={{
                    color: "var(--color-navy)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  View sticker →
                </p>
              </div>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
