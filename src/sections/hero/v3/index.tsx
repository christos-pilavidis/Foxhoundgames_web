'use client';

import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import bannerImage from 'public/assets/images/hero/banner.png';
import mobileBannerImage from 'public/assets/images/hero/banner800x800.png';

interface BreadcrumbItem {
  href?: string;
  label: string;
}

export interface HeroSectionProps {
  title: string;
  breadcrumbItems: BreadcrumbItem[];
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = () => setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

export function HeroSection({ title, breadcrumbItems }: HeroSectionProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      className={`section-padding-primary relative flex items-center ${isMobile ? 'min-h-[350px]' : 'min-h-[450px]'}`}
    >
      <Image
        priority
        src={isMobile ? mobileBannerImage.src : bannerImage.src}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} banner ${isMobile ? 'mobile' : 'desktop'}`}
        layout="fill"
        objectFit="cover"
        className="pointer-events-none object-cover"
      />

      <span className="absolute inset-0 bg-gradient-1 from-white/0 to-white dark:from-accent-900/0 dark:to-accent-900"></span>

      <Container>
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-x-20 gap-y-8 text-white lg:pt-[137px]">
          <h1 className="font-secondary text-xl font-bold lg:w-1/2">{title}</h1>
          {breadcrumbItems && breadcrumbItems.length > 0 && (
            <Breadcrumb breadcrumbItems={breadcrumbItems} />
          )}
        </div>
      </Container>
    </section>
  );
}

const breadcrumbItemClasses = cn('h3 font-secondary');

function Breadcrumb({
  breadcrumbItems,
}: Pick<HeroSectionProps, 'breadcrumbItems'>) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="inline-flex items-center gap-5">
        {breadcrumbItems.map((menuItem, index) => (
          <React.Fragment key={index}>
            {menuItem.href ? (
              <li className={breadcrumbItemClasses}>
                <CustomLink
                  href={menuItem.href}
                  className="transition-colors hover:text-primary"
                >
                  {menuItem.label}
                </CustomLink>
                <span className="ml-5">/</span>
              </li>
            ) : (
              <li className={breadcrumbItemClasses} aria-current="page">
                {menuItem.label}
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
