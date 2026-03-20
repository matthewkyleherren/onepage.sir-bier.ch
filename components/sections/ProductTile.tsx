"use client";

import { LazyImage } from "@/components/ui/LazyImage";
import type { Product } from "@/lib/products";

interface ProductTileProps {
  product: Product;
  onClick: () => void;
}

export function ProductTile({ product, onClick }: ProductTileProps) {
  return (
    <button
      className="c-product-tile modal-hover-scale w-full text-left"
      onClick={onClick}
      aria-label={`View ${product.name} details`}
    >
      <div className="c-product-tile_image relative aspect-[336/400] overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${product.gradient})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Product image */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
          <LazyImage
            src={product.image}
            alt={product.name}
            fill
            cover={false}
            containerClassName="w-full h-full"
          />
        </div>

        {/* Dark overlay for hover */}
        <div className="dark-cover" />
      </div>

      <div className="c-product-tile_content mt-fluid-sm">
        <h3 className="text-heading-xxs">{product.name}</h3>
        {product.details.info && (
          <p className="text-mono-xs opacity-60 mt-1">{product.details.info}</p>
        )}
      </div>
    </button>
  );
}
