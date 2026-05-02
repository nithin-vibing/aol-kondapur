import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BackBreadcrumb } from '@/components/back-breadcrumb';
import { AboutSection } from '@/components/sections/about-section';
import type { Metadata } from 'next';
import { CENTRE } from '@/config/centre';

export const metadata: Metadata = {
  title: 'About Us — Art of Living Kondapur',
  description:
    'Learn about the Art of Living Foundation, Gurudev Sri Sri Ravi Shankar, and our centre in Kondapur, Hyderabad.',
  openGraph: {
    title: 'About Us — Art of Living Kondapur',
    description: 'A global movement for peace, founded in 1981. Active in 182 countries, 80 crore+ lives touched.',
    url: `${CENTRE.siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BackBreadcrumb />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
