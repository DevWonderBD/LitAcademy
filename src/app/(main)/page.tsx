import AboutCombined from "@/components/AboutCombined";
import ProgrammesSection from "@/components/ProgrammesSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import LearningTips from "@/components/LearningTips";
import InteractiveStudyMethod from "@/components/InteractiveStudyMethod";
import MostReadSection from "@/components/MostReadSection";

export default function Home() {
  return (<>
    <Hero></Hero>
    <AboutCombined></AboutCombined>
    <ProgrammesSection></ProgrammesSection>
    <LearningTips></LearningTips>
    <InteractiveStudyMethod></InteractiveStudyMethod>
    <MostReadSection></MostReadSection>
    {/* <MentorsSection></MentorsSection> */}
    <FAQ></FAQ>
  </>
  );
}
