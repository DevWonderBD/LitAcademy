import AboutSection from "@/components/AboutSection";
import ProgrammesSection from "@/components/ProgrammesSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import LearningTips from "@/components/LearningTips";
import InteractiveStudyMethod from "@/components/InteractiveStudyMethod";

export default function Home() {
  return (<>
    <Hero></Hero>
    <AboutSection></AboutSection>
    <ProgrammesSection></ProgrammesSection>
    <InteractiveStudyMethod></InteractiveStudyMethod>
    <LearningTips></LearningTips>
    {/* <MentorsSection></MentorsSection> */}
    <FAQ></FAQ>
  </>
  );
}
