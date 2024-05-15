import { serviceSectionData } from '@/data/service-section/v1/home-page';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { CtaSection } from '@/src/sections/cta/v1';
import { Hero } from '@/src/sections/hero/v1';
import { ServiceSection } from '@/src/sections/service/v1';
import { Metadata } from 'next';
import CookieConsent from '@/src/components/cookies/cookiesconsent';

export const metadata: Metadata = {
  title: 'Foxhound Games',
  description: 'Foxhound Games',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <Hero
        mediaSrc="/assets/images/hero/Main3.mp4"
        portraitMediaSrc="/assets/images/hero/video_mobile.mp4"
      />
      <ServiceSection className="!pb-0" {...serviceSectionData} />
      <CtaSection />
      <Footer />
      <CookieConsent />
    </>
  );
}
