import React from 'react';
import { notFound } from 'next/navigation';
import TermDetailsContent from '@/components/TermDetailsContent';
import { literaryTermsData } from '@/lib/data/literary-terms';

export async function generateMetadata({ params }: { params: Promise<{ term: string }> }) {
  const { term } = await params;
  const termData = literaryTermsData.find((t) => t.id === term);

  if (termData) {
    return {
      title: `${termData.term} - Literary Terms | LitAcademy`,
      description: termData.shortDescription,
    };
  }

  return {
    title: 'Term Not Found',
  };
}

export default async function LiteraryTermPage({ params }: { params: Promise<{ term: string }> }) {
  const { term } = await params;
  const termData = literaryTermsData.find((t) => t.id === term);

  if (!termData) {
    notFound();
  }

  return <TermDetailsContent term={termData} />;
}
