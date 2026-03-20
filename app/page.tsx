import { Hero } from "@/components/sections/Hero";
import { WideHeader } from "@/components/layout/WideHeader";
import { NarrowHeader } from "@/components/layout/NarrowHeader";
import { AgeVerification } from "@/components/modals/AgeVerification";
import { Story } from "@/components/sections/Story";
import { Triptych } from "@/components/sections/Triptych";
import { ProductCatalog } from "@/components/sections/ProductCatalog";
import { Mosaic } from "@/components/sections/Mosaic";
import { Prefooter } from "@/components/sections/Prefooter";
import { Footer } from "@/components/layout/Footer";
import { Rail } from "@/components/ui/Rail";

const mosaicImages = [
  { src: "/images/mosaic-1.jpg", alt: "SIR BIER moment 1", width: 400, height: 533 },
  { src: "/images/mosaic-2.jpg", alt: "SIR BIER moment 2", width: 400, height: 300 },
  { src: "/images/mosaic-3.jpg", alt: "SIR BIER moment 3", width: 400, height: 533 },
  { src: "/images/mosaic-4.jpg", alt: "SIR BIER moment 4", width: 400, height: 300 },
  { src: "/images/mosaic-5.jpg", alt: "SIR BIER moment 5", width: 400, height: 533 },
  { src: "/images/mosaic-6.jpg", alt: "SIR BIER moment 6", width: 400, height: 300 },
  { src: "/images/mosaic-7.jpg", alt: "SIR BIER moment 7", width: 400, height: 533 },
  { src: "/images/mosaic-8.jpg", alt: "SIR BIER moment 8", width: 400, height: 300 },
  { src: "/images/mosaic-9.jpg", alt: "SIR BIER moment 9", width: 400, height: 533 },
];

const railItems = [
  "Swiss Excellence",
  "Premium Quality",
  "Crafted with Care",
  "Sustainable Future",
  "Swiss Excellence",
  "Premium Quality",
  "Crafted with Care",
  "Sustainable Future",
];

export default function Home() {
  return (
    <>
      {/* Age Verification Modal */}
      <AgeVerification />

      {/* Headers */}
      <WideHeader />
      <NarrowHeader />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Story / Philosophy Sections */}
        <Story />

        {/* The Bottle - Triptych */}
        <Triptych />

        {/* Rail Marquee */}
        <Rail items={railItems} />

        {/* Product Catalogs */}
        <ProductCatalog category="vodka" />
        <ProductCatalog category="beers" />
        <ProductCatalog category="seltzers" />
        <ProductCatalog category="drivers" />

        {/* Mosaic Gallery */}
        <Mosaic images={mosaicImages} />

        {/* Prefooter */}
        <Prefooter
          headline="Experience the Extraordinary"
          subheadline="Join Us"
          description="From exclusive tastings to curated events, discover how SIR BIER is redefining what it means to enjoy premium Swiss beverages."
          videoSrc="/videos/prefooter.mp4"
          videoPoster="/images/prefooter-poster.jpg"
          ctaText="Learn More"
          ctaHref="#contact"
        />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
