"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".hero-content > *",
  ".audience-section .section-heading",
  ".audience-card",
  ".guide-copy > *",
  ".guide-steps > div",
  ".home-official-section .section-heading",
  ".home-access-grid article",
  ".home-service-row article",
  ".home-network-strip",
  ".home-blog-grid article",
  ".home-digital-band article > *",
  ".home-benefits-grid article",
  ".home-app-showcase > *",
  ".home-plan-grid > a",
  ".home-foundation > *",
  ".home-about-copy > *",
  ".benefits-section .section-heading",
  ".benefit-grid article",
  ".home-links > div",
  ".home-link-grid a",
  ".final-cta > *",
  ".page-hero-copy > *",
  ".content-section:not(.blog-listing) > *",
  ".sales-hero-copy > *",
  ".sales-title-row > *",
  ".sales-segments",
  ".sales-segment-heading",
  ".sales-plan-card",
  ".sales-assurance > *",
  ".business-hero-copy > *",
  ".business-hero-image",
  ".business-product-intro > *",
  ".business-product-layout > *",
  ".about-hero-copy > *",
  ".about-numbers article",
  ".about-story > *",
  ".about-timeline article",
  ".about-ecosystem-heading > *",
  ".about-ecosystem-grid article",
  ".about-values-grid article",
  ".about-purpose > *",
  ".wizard-aside",
  ".service-grid article",
  ".benefits-hub article",
  ".client-actions > *",
  ".journey-panel > *",
  ".network-section > *",
  ".network-kind-grid",
  ".network-finder > *",
  ".network-help-grid article",
  ".site-footer > *",
  ".mh50-hero-content > *",
  ".mh50-hero-glass",
  ".mh50-stats-intro > *",
  ".mh50-stat",
  ".mh50-story-panel",
  ".mh50-benefits-intro > *",
  ".mh50-benefits-grid article",
  ".mh50-extra-intro > *",
  ".mh50-extra-category",
  ".mh50-extra-grid article",
  ".mh50-foundation-media",
  ".mh50-foundation-copy > *",
  ".mh50-cta-copy > *",
  ".mh50-cta-contact",
].join(",");

const imageSelectors = [
  ".hero-image",
  ".sales-hero > img",
  ".about-hero > img",
  ".business-hero-image img",
  ".page-hero-media",
  ".mh50-hero-image",
  ".mh50-foundation-image",
].join(",");

export function MotionOrchestrator() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));
    const images = Array.from(document.querySelectorAll<HTMLElement>(imageSelectors));

    document.documentElement.classList.add("motion-ready");

    nodes.forEach((node) => {
      node.dataset.reveal = "";
      const siblings = node.parentElement
        ? Array.from(node.parentElement.children).filter((item) => (item as HTMLElement).matches?.(revealSelectors))
        : [];
      const position = Math.max(0, siblings.indexOf(node));
      node.style.setProperty("--reveal-delay", `${Math.min(position, 4) * 70}ms`);
    });

    images.forEach((image) => image.dataset.premiumMedia = "");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      images.forEach((image) => image.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    images.forEach((image) => observer.observe(image));

    // Red de seguridad: si por cualquier motivo (secciones muy altas, cambio
    // de página, timing del navegador) el observer no revela un elemento a
    // tiempo, se fuerza su aparición para que nada se quede invisible.
    const safetyTimer = window.setTimeout(() => {
      nodes.forEach((node) => node.classList.add("is-visible"));
      images.forEach((image) => image.classList.add("is-visible"));
    }, 900);

    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        if (rect.bottom < -80 || rect.top > window.innerHeight + 80) return;
        const offset = Math.max(-16, Math.min(16, (rect.top + rect.height / 2 - viewportCenter) * -0.025));
        image.style.setProperty("--premium-shift", `${offset.toFixed(2)}px`);
      });
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };
    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.clearTimeout(safetyTimer);
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
