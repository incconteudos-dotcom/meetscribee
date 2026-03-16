import { useEffect } from "react";
import { HeroSection, StatsSection, FeaturesSection, HowSection, FinalCTA } from "../components/landing/HeroFeatures";
import { InstallSection, PricingSection } from "../components/landing/InstallPricing";
import { RoadmapSection, FAQSection } from "../components/landing/RoadmapFAQ";
import ScrollReveal from "../components/ScrollReveal";

const Index = () => {
  useEffect(() => {
    // Re-init scroll reveal for landing page content
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowSection />
      <InstallSection />
      <PricingSection />
      <RoadmapSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
};

export default Index;
