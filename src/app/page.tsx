import Hero from "@/components/Hero";
import InfixAcronym from "@/components/InfixAcronym";
import InfixTechContent from "@/components/InfixTechContent";
import TechStackMarquee from "@/components/TechStackMarquee";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <InfixAcronym />
      <TechStackMarquee />
      <InfixTechContent />
    </main>
  );
}
