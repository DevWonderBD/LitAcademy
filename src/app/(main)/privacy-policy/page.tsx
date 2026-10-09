import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | LitAcademy',
  description: 'How we collect, use, and protect your data at LitAcademy.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="bg-surface border border-border rounded-2xl p-8 md:p-12 shadow-sm space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Information We Collect
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At LitAcademy, we believe in collecting only what is strictly necessary to enhance your learning experience. We collect:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, university/college name, and your current academic program (Honours/Masters).</li>
                <li><strong>Usage Data:</strong> Basic analytics such as which topics you read, quiz scores, and study progress to personalize your dashboard.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Security of Your Personal Notes
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                LitAcademy provides a personal note-taking feature alongside the syllabus content. <strong>Your personal notes are completely private.</strong> 
              </p>
              <p>
                We do not use your personal study notes for advertising, nor do our administrators access them under normal circumstances. They are securely stored in our database strictly for your own use.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. AI (Pythia) Chat Data
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                When you interact with <strong>Pythia</strong>, our AI study guide, your chat history is temporarily saved to maintain the context of your conversation. 
              </p>
              <p>
                <strong>Retention Policy:</strong> All chat sessions with Pythia are automatically deleted after <strong>90 days</strong>. You also have the option to manually clear your chat history at any time from your settings.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. No Third-Party Selling
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We respect your privacy. LitAcademy does <strong>not</strong> sell, rent, or trade your personal information, study habits, or email address to any third-party advertising companies. 
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Data Export and Deletion
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                You own your data. At any point, you can request an export of all your personal notes and account data.
              </p>
              <p>
                If you decide to leave LitAcademy, you can permanently delete your account. This action will irreversibly erase your profile, notes, quiz scores, and chat history from our servers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Cookies
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We use strictly necessary cookies to keep you logged in and to remember your preferences (such as your selected Program and dark mode settings). We do not use intrusive tracking cookies.
              </p>
            </div>
          </section>

          <hr className="border-border" />

          <div className="text-center">
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@litacademy.info" className="text-primary hover:underline">support@litacademy.info</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
