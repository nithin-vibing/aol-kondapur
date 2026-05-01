import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BackBreadcrumb } from '@/components/back-breadcrumb';
import { FreeIntroSection } from '@/components/sections/free-intro-section';
import type { Metadata } from 'next';
import { CENTRE } from '@/config/centre';

export const metadata: Metadata = {
  title: 'Free Session — Art of Living Kondapur',
  description:
    'Attend a free introductory session on yoga and meditation before committing to any program. Art of Living Kondapur, Hyderabad.',
  openGraph: {
    title: 'Free Session — Art of Living Kondapur',
    description: 'Free introductory session — no fees, no commitment. Kondapur, Hyderabad.',
    url: `${CENTRE.siteUrl}/free-intro`,
  },
};

export default function FreeIntroPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BackBreadcrumb />
        <FreeIntroSection />
      </main>
      <Footer />
    </div>
  );
}
