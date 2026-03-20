"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyImage } from "@/components/ui/LazyImage";
import { CTA } from "@/components/ui/CTA";
import { Icon } from "@/components/ui/Icon";
import type { Product } from "@/lib/products";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("has-modal-open");
    } else {
      document.documentElement.classList.remove("has-modal-open");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!product) return null;

  const details = [
    { label: "Source", value: product.details.source },
    { label: "Info", value: product.details.info },
    { label: "Production", value: product.details.production },
    { label: "Result", value: product.details.result },
  ].filter((d) => d.value);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="c-product-modal modal is-active"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
        >
          <motion.div
            className="c-product-modal_container"
            initial={{ clipPath: "inset(100% 20% 0)" }}
            animate={{ clipPath: "inset(0)" }}
            exit={{ clipPath: "inset(100% 20% 0)" }}
            transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
          >
            <div className="c-product-modal_inner">
              <div className="c-product-modal_content container py-fluid-2xl">
                <div className="grid-container items-center min-h-[80vh]">
                  {/* Product Image */}
                  <div className="col-span-12 md:col-span-5">
                    <motion.div
                      className="relative aspect-[336/400] overflow-hidden"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      style={{
                        backgroundImage: `url(${product.gradient})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                        <LazyImage
                          src={product.image}
                          alt={product.name}
                          fill
                          cover={false}
                          priority
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Product Details */}
                  <div className="col-span-12 md:col-span-6 md:col-start-7 mt-fluid-lg md:mt-0">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h2 className="text-heading-md mb-fluid-md">
                        {product.name}
                      </h2>

                      {product.details.description && (
                        <p className="text-body-md opacity-80 mb-fluid-lg">
                          {product.details.description}
                        </p>
                      )}

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-fluid-md mb-fluid-xl">
                        {details.map((detail) => (
                          <div key={detail.label}>
                            <span className="text-mono-xs opacity-50 block mb-1">
                              {detail.label}
                            </span>
                            <span className="text-body-sm">{detail.value}</span>
                          </div>
                        ))}
                      </div>

                      <CTA
                        href="https://www.aupalevodka.shop"
                        variant="filled"
                        external
                      >
                        Where to buy?
                      </CTA>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Close Button */}
          <motion.button
            className="c-product-modal_close absolute top-fluid-md right-fluid-md z-10"
            onClick={onClose}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            aria-label="Close product details"
          >
            <Icon name="close" size={24} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
