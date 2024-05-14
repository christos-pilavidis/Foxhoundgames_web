// Import styles, components, and utilities
import { SectionProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import Image from 'next/image';

export interface CtaSectionProps {
  title: string;
}

const ctaSectionData: CtaSectionProps = {
  title: 'Have a question? Feel Free To Ask',
};

export function CtaSection({ className }: SectionProps) {
  const { title } = ctaSectionData;
  // Added `mt-10` for top margin, adjust '10' to increase or decrease the space
  return (
    <section className={`${className} mb-20 mt-40`}>
      <Container>
        <div className="relative overflow-hidden rounded-5 bg-primary px-6 py-14">
          <div className="relative z-10 mx-auto max-w-[630px] rounded-5 text-center">
            <h2 className="mx-auto max-w-[490px] font-secondary text-xl font-bold capitalize leading-[1.25] text-white md:text-2xl">
              {title}
            </h2>
          </div>
          <Image
            src="/assets/images/cta/pattern-1.png"
            alt="cta section bg pattern"
            width={520}
            height={316}
            className="pointer-events-none absolute -right-30px bottom-0 z-1 h-full animate-float-bob-x object-cover opacity-60"
            sizes="100vw"
          />
        </div>
      </Container>
    </section>
  );
}
