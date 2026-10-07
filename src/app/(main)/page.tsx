import AboutUs from "@/components/AboutUs";
import ProgrammesSection from "@/components/ProgrammesSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import LearningTips from "@/components/LearningTips";
import MentorsSection from "@/components/MentorsSection";
import MostReadSection from "@/components/MostReadSection";

export default function Home() {
  return (<>
    <Hero></Hero>
    <AboutUs></AboutUs>
    <ProgrammesSection></ProgrammesSection>
    <LearningTips></LearningTips>
    <MostReadSection></MostReadSection>
    <MentorsSection></MentorsSection>
    <FAQ></FAQ>
  </>
  );
}
