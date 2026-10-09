import React from 'react';
import { Metadata } from 'next';
import StudyMethodContent from '@/components/study-method/StudyMethodContent';

export const metadata: Metadata = {
  title: 'Study Methods for Literature | LitAcademy',
  description: 'Learn effective study methods like Active Recall, Spaced Repetition, and the Feynman Technique specifically tailored for English Literature students.',
};

export default function StudyMethodPage() {
  return <StudyMethodContent />;
}
