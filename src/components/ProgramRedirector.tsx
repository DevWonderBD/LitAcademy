"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProgramRedirector() {
  const router = useRouter();

  useEffect(() => {
    // Only redirect if they haven't been redirected in this session
    const hasRedirected = sessionStorage.getItem('lit_has_redirected');
    
    if (!hasRedirected) {
      sessionStorage.setItem('lit_has_redirected', 'true');
      
      const savedProgram = localStorage.getItem('lit_selected_program');
      if (savedProgram) {
        try {
          const parsed = JSON.parse(savedProgram);
          if (parsed && parsed.href) {
            router.push(parsed.href);
          }
        } catch (e) {
          console.error("Error parsing saved program", e);
        }
      }
    }
  }, [router]);

  return null;
}
