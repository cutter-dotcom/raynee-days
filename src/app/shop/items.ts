export interface ShopItem {
  id: number;
  slug: string;
  title: string;
  price: number;
  category: "prints" | "stickers";
  bgFrom: string;
  bgTo: string;
  image?: string;
  description?: string;
  /** Slug of the sticker that pairs with this print */
  matchingStickerSlug?: string;
}

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 1,
    slug: "blueberry-morning",
    title: "Blueberry Morning",
    price: 40,
    category: "prints",
    bgFrom: "#F5D5E8",
    bgTo: "#E8458B",
    image: "/art/blueberry-toast.jpg",
    description:
      "A quiet Oregon morning on a plate — blueberries, butter, and the kind of light that makes you linger.",
  },
  {
    id: 2,
    slug: "surfers-hymn",
    title: "Surfer's Hymn",
    price: 50,
    category: "prints",
    bgFrom: "#D6EEE9",
    bgTo: "#4AABA8",
    image: "/art/surfer-girl.jpg",
    description:
      "Saltwater devotion. A love letter to the line-up and the quiet moments between sets.",
    matchingStickerSlug: "hibiscus-sticker",
  },
  {
    id: 3,
    slug: "hibiscus-sticker",
    title: "Hibiscus",
    price: 5,
    category: "stickers",
    bgFrom: "#FCE0E6",
    bgTo: "#E85A6E",
    image: "/art/flower-sticker.png",
    description: "Pairs with Surfer's Hymn.",
  },
  {
    id: 4,
    slug: "birthday-martini",
    title: "Birthday Martini",
    price: 45,
    category: "prints",
    bgFrom: "#F5D5E8",
    bgTo: "#C97BA8",
    image: "/art/birthday-martini.jpg",
    description:
      "Cake, candle, and a dirty martini. A little still-life ode to celebrating exactly how you want.",
    matchingStickerSlug: "dirty-martini-olives",
  },
  {
    id: 5,
    slug: "dirty-martini-olives",
    title: "Dirty Martini Olives",
    price: 5,
    category: "stickers",
    bgFrom: "#E8F0D8",
    bgTo: "#A8C070",
    image: "/art/olives-sticker.png",
    description: "Pairs with Birthday Martini.",
  },
];

export function getItemBySlug(slug: string): ShopItem | undefined {
  return SHOP_ITEMS.find((item) => item.slug === slug);
}
