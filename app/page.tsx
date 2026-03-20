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
        <Hero />
        <Story />
        <Triptych />
        <ProductCatalog category="vodka" id="vodka" />
        <ProductCatalog category="beers" id="beers" />
        <ProductCatalog category="seltzers" id="seltzers" />
        <ProductCatalog category="drivers" id="drivers" />
        <Mosaic />
        <Prefooter />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
