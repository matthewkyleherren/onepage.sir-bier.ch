export interface Product {
  id: string;
  name: string;
  category: "vodka" | "beers" | "seltzers" | "drivers";
  image: string;
  gradient: string;
  details: {
    source?: string;
    info?: string;
    production?: string;
    result?: string;
    description?: string;
  };
}

export const PRODUCTS: Product[] = [
  // Vodka
  {
    id: "sir-bier-classic",
    name: "SIR BIER Classic",
    category: "vodka",
    image: "/images/products/sir-bier-classic.jpg",
    gradient: "/images/gradients/gradient-02.png",
    details: {
      source: "Swiss Alps",
      info: "Premium Lager, 5.0% ABV",
      production: "Traditional Swiss brewing",
      result: "Crisp, clean, refreshing",
      description:
        "Our flagship brew. A perfect balance of malt and hops, brewed with glacier valley water from the Swiss Alps.",
    },
  },
  {
    id: "sir-bier-gold",
    name: "SIR BIER Gold",
    category: "vodka",
    image: "/images/products/sir-bier-gold.jpg",
    gradient: "/images/gradients/gradient-03.png",
    details: {
      source: "Swiss Alps",
      info: "Premium Pilsner, 4.8% ABV",
      production: "Extended lagering process",
      result: "Smooth, golden, elegant",
      description:
        "A refined pilsner with a delicate hop character and a smooth, golden finish.",
    },
  },
  // Beers
  {
    id: "alpine-wheat",
    name: "Alpine Wheat",
    category: "beers",
    image: "/images/products/alpine-wheat.jpg",
    gradient: "/images/gradients/gradient-04.png",
    details: {
      source: "Swiss Alps",
      info: "Hefeweizen, 5.2% ABV",
      production: "Traditional wheat brewing",
      result: "Fruity, refreshing, cloudy",
      description:
        "A traditional wheat beer with notes of banana and clove. Unfiltered for authentic character.",
    },
  },
  {
    id: "mountain-ipa",
    name: "Mountain IPA",
    category: "beers",
    image: "/images/products/mountain-ipa.jpg",
    gradient: "/images/gradients/gradient-05.png",
    details: {
      source: "Swiss Alps",
      info: "India Pale Ale, 6.5% ABV",
      production: "Dry-hopped",
      result: "Bold, citrusy, aromatic",
      description:
        "A bold IPA with intense citrus and pine hop aromas. For those who appreciate character.",
    },
  },
  {
    id: "dark-forest",
    name: "Dark Forest",
    category: "beers",
    image: "/images/products/dark-forest.jpg",
    gradient: "/images/gradients/gradient-02.png",
    details: {
      source: "Swiss Alps",
      info: "Dark Lager, 5.5% ABV",
      production: "Extended roasting",
      result: "Rich, smooth, complex",
      description:
        "A dark lager with notes of caramel and coffee. Surprisingly smooth and approachable.",
    },
  },
  // Seltzers
  {
    id: "alpine-citrus",
    name: "Alpine Citrus",
    category: "seltzers",
    image: "/images/products/alpine-citrus.jpg",
    gradient: "/images/gradients/gradient-03.png",
    details: {
      source: "Swiss Alps",
      info: "Hard Seltzer, 4.5% ABV",
      production: "Triple-filtered",
      result: "Light, refreshing, crisp",
      description:
        "A light and refreshing hard seltzer with natural citrus flavors. Zero sugar.",
    },
  },
  {
    id: "berry-fresh",
    name: "Berry Fresh",
    category: "seltzers",
    image: "/images/products/berry-fresh.jpg",
    gradient: "/images/gradients/gradient-04.png",
    details: {
      source: "Swiss Alps",
      info: "Hard Seltzer, 4.5% ABV",
      production: "Triple-filtered",
      result: "Fruity, light, refreshing",
      description:
        "A burst of natural berry flavors in a crisp, refreshing seltzer. Perfect for any occasion.",
    },
  },
  // Drivers (Non-alcoholic)
  {
    id: "sir-bier-free",
    name: "SIR BIER Free",
    category: "drivers",
    image: "/images/products/sir-bier-free.jpg",
    gradient: "/images/gradients/gradient-05.png",
    details: {
      source: "Swiss Alps",
      info: "Non-Alcoholic Lager, 0.0% ABV",
      production: "Dealcoholized",
      result: "Full flavor, zero alcohol",
      description:
        "All the flavor of our classic brew, with zero alcohol. Perfect for designated drivers.",
    },
  },
  {
    id: "alpine-ginger",
    name: "Alpine Ginger",
    category: "drivers",
    image: "/images/products/alpine-ginger.jpg",
    gradient: "/images/gradients/gradient-02.png",
    details: {
      source: "Swiss Alps",
      info: "Ginger Beer, 0.0% ABV",
      production: "Natural fermentation",
      result: "Spicy, refreshing, bold",
      description:
        "A bold ginger beer with real ginger root. Perfect on its own or as a mixer.",
    },
  },
];

export function getProductsByCategory(category: Product["category"]): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export const CATEGORY_INFO: Record<
  Product["category"],
  { title: string; subtitle: string; description: string }
> = {
  vodka: {
    title: "Sir Bier",
    subtitle: "Our Signature Brews",
    description:
      "The heart of our collection. Premium lagers and pilsners brewed with glacier valley water from the Swiss Alps.",
  },
  beers: {
    title: "The Beers",
    subtitle: "Craft Selection",
    description:
      "A curated selection of craft beers, each with its own unique character and story.",
  },
  seltzers: {
    title: "Seltzers",
    subtitle: "Light & Refreshing",
    description:
      "Hard seltzers made with pure Swiss mountain water. Light, refreshing, and perfect for any occasion.",
  },
  drivers: {
    title: "Drivers",
    subtitle: "Non-Alcoholic Options",
    description:
      "Full flavor, zero alcohol. Perfect for those who want to enjoy great taste without the buzz.",
  },
};
