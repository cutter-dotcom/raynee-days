import shopData from "../../../content/shop-items.json";

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

export const SHOP_ITEMS: ShopItem[] = shopData.items as ShopItem[];

export function getItemBySlug(slug: string): ShopItem | undefined {
  return SHOP_ITEMS.find((item) => item.slug === slug);
}
