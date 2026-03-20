"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { getProductsByCategory, CATEGORY_INFO, type Product } from "@/lib/products";
import { ProductTile } from "@/components/sections/ProductTile";
import { ProductModal } from "@/components/modals/ProductModal";

interface ProductCatalogProps {
  category: Product["category"];
  id: string;
}

export function ProductCatalog({ category, id }: ProductCatalogProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products = getProductsByCategory(category);
  const info = CATEGORY_INFO[category];

  // Alternate theme based on category
  const theme = category === "beers" || category === "drivers" ? "dark" : "light";

  return (
    <>
      <section ref={ref} id={id} className={`c-product-catalog py-fluid-5xl ${theme}`}>
        <div className="container">
          {/* Header */}
          <div className="grid-container mb-fluid-2xl">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
              <motion.span
                className="text-mono-xs opacity-60 mb-fluid-xs block"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 0.6, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                {info.subtitle}
              </motion.span>
              <motion.h2
                className="text-heading-lg mb-fluid-md"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {info.title}
              </motion.h2>
              <motion.p
                className="text-body-md opacity-70"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 0.7, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {info.description}
              </motion.p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid-container">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="col-span-6 md:col-span-4 lg:col-span-3"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.1,
                  ease: [0.645, 0.045, 0.355, 1],
                }}
              >
                <ProductTile
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
