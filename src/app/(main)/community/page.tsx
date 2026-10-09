import { Metadata } from "next";
import CommunityContent from "@/components/community/CommunityContent";

export const metadata: Metadata = {
  title: "Community | LitAcademy",
  description: "Join the LitAcademy community. Discussion forums, study groups, NU notices, and exam preparation for English Literature students.",
};

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-bg">
      <CommunityContent />
    </main>
  );
}

