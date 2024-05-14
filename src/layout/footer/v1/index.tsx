import { footerSectionData } from '@/data/layout/footer/v1';
import { ImageProps, LinkProps, SectionProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import { BrandLogo } from 'src/layout/brand-logo';
import { FaEnvelope } from 'react-icons/fa6';

interface RecentBlog {
  slug: string;
  image: Omit<ImageProps, 'width' | 'height'>;
  date: string;
  title: string;
}

export interface FooterSectionProps {
  columnOne: {
    title: string;
    links: LinkProps[];
  };
  columnTwo: {
    title: string;
    location: string;
    mails: string[];
    phoneNumbers: string[];
  };
  columnThree: {
    title: string;
    blogs: RecentBlog[];
  };
  footerBottom: {
    copyrightText: string;
    links: LinkProps[];
  };
}

const titleClasses = cn(
  'text-gray-900 dark:text-white  text-md font-bold  leading-[1.25] md:text-lg mb-5 md:mb-[1.875rem]'
);
const addressIconParentClasses = cn(
  'w-10 h-10 rounded-5 inline-grid place-items-center dark:bg-accent-700 border border-accent-800 dark:border-transparent text-primary flex-none'
);
const addressItemClasses = cn('flex items-center gap-5');
const textColor = cn(
  'transition-colors duration-300 hover:text-primary dark:hover:text-white'
);

export function Footer({ className }: SectionProps) {
  const { columnTwo, footerBottom } = footerSectionData;
  return (
    <footer
      className={cn(
        'overflow-hidden bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-body',
        className
      )}
    >
      <div className="py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-2  xl:grid-cols-4">
            {/* About  */}
            <div data-aos="fade-up" data-aos-delay="200">
              <BrandLogo />
            </div>

            {/* Column one  */}
            <div data-aos="fade-up" data-aos-delay="400"></div>

            {/* Column one  */}
            <div data-aos="fade-up" data-aos-delay="400"></div>

            {/* Column Two  */}
            <div data-aos="fade-up" data-aos-delay="600">
              <h3 className={titleClasses}>{columnTwo.title}</h3>
              <ul aria-label="addresses" className="grid gap-5">
                <li className={addressItemClasses}>
                  <span className={addressIconParentClasses}>
                    <FaEnvelope />
                  </span>
                  {columnTwo.mails && columnTwo.mails.length > 0 && (
                    <div className="grid gap-1">
                      {columnTwo.mails.map((mail, index) => (
                        <a
                          key={index}
                          href={`mailto:${mail}`}
                          className={textColor}
                        >
                          {mail}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="flex min-h-[90px] items-center border-t border-accent-800 border-opacity-20 py-5 dark:border-body dark:border-opacity-20">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 md:gap-x-10">
            <p>{footerBottom.copyrightText}</p>
            {footerBottom.links && footerBottom.links.length > 0 && (
              <nav aria-label="footer bottom navigation">
                <ul className="flex flex-wrap items-center gap-x-4  md:gap-x-7">
                  {footerBottom.links.map((link) => (
                    <li key={link.label}>
                      <CustomLink
                        aria-label={`Go to page ${link.label}`}
                        href={link.href}
                        openNewTab={link.openNewTab}
                        className={textColor}
                      >
                        {link.label}
                      </CustomLink>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </Container>
      </div>
    </footer>
  );
}
