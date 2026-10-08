import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import LearningTips from "@/components/LearningTips";
import InteractiveStudyMethod from "@/components/InteractiveStudyMethod";

export default function Home() {
  return (<>
    <Hero></Hero>
    <AboutSection></AboutSection>
    <ProgramsSection></ProgramsSection>
    <InteractiveStudyMethod></InteractiveStudyMethod>
    <LearningTips></LearningTips>
    {/* <MentorsSection></MentorsSection> */}
    <FAQ></FAQ>
  </>
  );
}
