import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { TeamSection } from '@/src/sections/team/grid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Foxhound Games',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Games"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Games',
          },
        ]}
      />
      <TeamSection />
      <Footer />
    </>
  );
}
