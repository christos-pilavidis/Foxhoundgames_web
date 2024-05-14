import { aboutSectionData } from '@/data/about-section/v1';
import { ImageProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';

export interface AboutSectionProps {
  images: {
    image1: ImageProps;
    image2: ImageProps;
    image3: ImageProps;
    image4: ImageProps;
  };
  sectionHeading: SectionHeadingWithoutStylingProps;
  keyPoints: {
    icon: React.ReactNode;
    title: string;
  }[];
  description?: string;
}

export function AboutSection() {
  const { sectionHeading } = aboutSectionData;

  return (
    <section className="section-padding-primary flex items-center justify-start overflow-hidden text-left">
      <Container>
        <div className="grid justify-items-start gap-12 lg:grid-cols-1 2xl:gap-20">
          <div
            className="max-w-1/2 mx-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <SectionHeading {...sectionHeading} />
          </div>
        </div>
      </Container>
    </section>
  );
}
