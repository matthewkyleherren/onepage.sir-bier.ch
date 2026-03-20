"use client";

import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { CTA } from "@/components/ui/CTA";
import { Icon } from "@/components/ui/Icon";
import { Rail } from "@/components/ui/Rail";

const SOCIAL_LINKS = [
  { href: "https://instagram.com/sirbier", icon: "instagram" as const, label: "Instagram" },
  { href: "https://facebook.com/sirbier", icon: "facebook" as const, label: "Facebook" },
  { href: "https://twitter.com/sirbier", icon: "twitter" as const, label: "Twitter" },
];

const FOOTER_LINKS = [
  { href: "/pages/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/pages/privacy-policy", label: "Privacy Policy" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate newsletter signup
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="c-footer dark">
      {/* Rail / Marquee */}
      <Rail items={["Taste the Tradition", "SIR BIER", "Swiss Crafted", "Premium Quality"]} />

      <div className="container">
        {/* Logo */}
        <div className="c-footer_logo">
          <Logo showLogotype className="-logotype-visible" />
        </div>

        {/* Newsletter */}
        <div className="c-footer_newsletter text-center">
          <h3 className="text-heading-xxs mb-fluid-sm">Stay Connected</h3>
          <p className="text-body-sm opacity-70 mb-fluid-md">
            Subscribe to receive updates on new releases and exclusive offers.
          </p>

          {isSubmitted ? (
            <p className="text-body-md">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubmit} className="c-newsletter">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="c-newsletter_input text-center"
              />
              <CTA
                variant="outline"
                className="c-newsletter_submit mx-auto"
                onClick={() => {}}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </CTA>
            </form>
          )}
        </div>

        {/* Social Links */}
        <div className="c-footer_links">
          {SOCIAL_LINKS.map((link) => (
            <CTA
              key={link.href}
              href={link.href}
              variant="text"
              external
              className="opacity-70 hover:opacity-100"
            >
              <Icon name={link.icon} size={24} />
              <span className="sr-only">{link.label}</span>
            </CTA>
          ))}
        </div>

        {/* Where to Buy CTA */}
        <div className="flex justify-center mb-fluid-2xl">
          <CTA
            href="https://www.aupalevodka.shop"
            variant="filled"
            external
          >
            Where to buy?
          </CTA>
        </div>

        {/* Bottom Links */}
        <div className="c-footer_bottom">
          <span>&copy; {new Date().getFullYear()} SIR BIER. All rights reserved.</span>
          {FOOTER_LINKS.map((link) => (
            <CTA key={link.href} href={link.href} variant="text">
              {link.label}
            </CTA>
          ))}
        </div>
      </div>
    </footer>
  );
}
