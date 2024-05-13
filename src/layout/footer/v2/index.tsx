import { footerSectionData } from '@/data/layout/footer/v2';
import { ImageProps, LinkProps, SectionProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import { BrandLogo } from 'src/layout/brand-logo';
import { FaEnvelope } from 'react-icons/fa6';
import { ClassValue } from 'clsx';

interface RecentBlog {
  slug: string;
  image: Omit<ImageProps, 'width' | 'height'>;
  date: string;
  title: string;
}

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

export interface FooterSectionProps {
  socialLinks: SocialLinkProps[];
  columnOne: {
    title: string;
    links: LinkProps[];
  };
  columnTwo: {
    title: string;
    links: LinkProps[];
  };
  columnThree: {
    title: string;
    blogs: RecentBlog[];
  };
  columnFour: {
    title: string;
    location: string;
    mail: string;
    phoneNumber: string;
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
  ' text-primary flex-none leading-none self-start relative top-2'
);
const addressItemClasses = cn('flex gap-5');
const textColor = cn(
  'transition-colors duration-300 hover:text-primary dark:hover:text-white'
);

interface Props extends SectionProps {
  footerTopClassName?: ClassValue;
}

export function Footer({ className, footerTopClassName }: Props) {
  const { columnFour, footerBottom } = footerSectionData;
  return (
    <footer
      className={cn(
        'overflow-hidden bg-accent-100 text-accent-800 dark:bg-accent-700 dark:text-body',
        className
      )}
    >
      <Container>
        {/* Footer top  */}
        <div
          className={cn(
            'flex items-center justify-between gap-x-20 gap-y-4 pb-5 pt-[60px] lg:pt-20',
            footerTopClassName
          )}
        >
          <BrandLogo />
        </div>

        {/* Footer middle  */}
        <div className="border-y border-accent-800 border-opacity-30 py-[60px] dark:border-accent-100 dark:border-opacity-30">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Column one  */}
            <div data-aos="fade-up" data-aos-delay="200"></div>

            {/* Column Two  */}
            <div data-aos="fade-up" data-aos-delay="400"></div>

            {/* Column three  */}
            <div data-aos="fade-up" data-aos-delay="600"></div>

            {/* Column Four  */}
            <div data-aos="fade-up" data-aos-delay="800">
              <h3 className={titleClasses}>{columnFour.title}</h3>
              <ul aria-label="addresses" className="grid gap-5">
                <li className={addressItemClasses}>
                  <span className={addressIconParentClasses}>
                    <FaEnvelope />
                  </span>
                  <a href={`mailto:${columnFour.mail}`} className={textColor}>
                    {columnFour.mail}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom  */}
        <div className="flex min-h-[90px] items-center py-5">
          <Container>
            <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 md:gap-x-10">
              <p>{footerBottom.copyrightText}</p>
              {footerBottom.links && footerBottom.links.length > 0 && (
                <nav aria-label="footer bottom navigation">
                  <ul className="flex flex-wrap items-center gap-x-4  md:gap-x-7">
                    {footerBottom.links.map((link) => (
                      <li key={link.label}>
                        <CustomLink
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
      </Container>
    </footer>
  );
}
