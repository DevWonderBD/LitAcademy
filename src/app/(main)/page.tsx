import About1 from "@/components/About1";
import About2 from "@/components/About2";
import About3 from "@/components/About3";
import ProgrammesSection from "@/components/ProgrammesSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import LearningTips from "@/components/LearningTips";
import MentorsSection from "@/components/MentorsSection";
import MostReadSection from "@/components/MostReadSection";

export default function Home() {
  return (<>
    <Hero></Hero>
    <About1></About1>
    <About2></About2>
    <About3></About3>
    <ProgrammesSection></ProgrammesSection>
    <LearningTips></LearningTips>
    <MostReadSection></MostReadSection>
    <MentorsSection></MentorsSection>
    <FAQ></FAQ>
  </>
  );
}
