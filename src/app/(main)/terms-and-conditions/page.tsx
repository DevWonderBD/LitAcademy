import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | LitAcademy',
  description: 'Rules and guidelines for using the LitAcademy platform.',
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="bg-surface border border-border rounded-2xl p-8 md:p-12 shadow-sm space-y-12">
          
          <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl text-primary-dark">
            <p className="font-medium">
              Welcome to LitAcademy. By creating an account and using our platform, you agree to abide by the following terms. Please read them carefully.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Account Usage & Sharing
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Each LitAcademy account is intended for <strong>single-user access only</strong>. Sharing your account credentials with multiple people is strictly prohibited. 
              </p>
              <p>
                If our system detects suspicious login activities across multiple distant locations simultaneously, your account may be temporarily locked or permanently suspended to prevent abuse.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. AI (Pythia) Limitations & Disclaimer
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong>Pythia</strong> is an artificial intelligence language model designed to assist you in understanding literature. While we strive for accuracy, AI models can occasionally produce incorrect or hallucinated information.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You should never rely solely on Pythia&apos;s output for your final university exams. Always cross-reference with your primary textbooks and syllabus.</li>
                <li>LitAcademy is not responsible for any academic grading outcomes resulting from the use of AI-generated answers.</li>
                <li>Do not submit Pythia-generated text directly as your own academic assignments (plagiarism).</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Community Conduct
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                LitAcademy aims to maintain a healthy, academic environment. When participating in study groups or forums, you must not:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Post abusive, harassing, or discriminatory content.</li>
                <li>Spam the community with irrelevant links or promotional material.</li>
                <li>Share illegal or copyrighted content.</li>
              </ul>
              <p>
                Violating these community standards will result in an immediate ban from the platform.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Intellectual Property
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                All study materials, topic notes, platform designs, and original summaries provided on LitAcademy are the intellectual property of LitAcademy. 
              </p>
              <p>
                You may use these materials for your personal study. However, you may <strong>not</strong> copy, scrape, redistribute, or commercially sell our content elsewhere. Public-domain literary quotes used within the platform remain in the public domain.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Account Termination
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                LitAcademy reserves the right to suspend or terminate your account without prior notice if we find that you have violated any of these Terms and Conditions.
              </p>
            </div>
          </section>

          <hr className="border-border" />

          <div className="text-center">
            <p className="text-muted-foreground">
              For any legal inquiries regarding these terms, please contact us at <a href="mailto:support@litacademy.info" className="text-accent hover:underline">support@litacademy.info</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
