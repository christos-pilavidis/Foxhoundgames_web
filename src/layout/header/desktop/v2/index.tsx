'use client';

import { LinkProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { BrandLogo } from '../../../brand-logo'; // Ensure correct import path
import { useStickyHeader } from '../../utils/use-sticky-header';
import { cn } from '@/src/utils/shadcn';
import { Navigation } from '../common/navigation';
import { FaEnvelope } from 'react-icons/fa6';
import { headerData } from '@/data/layout/header/v2';

interface SubMenu {
  title: string;
  subMenuItems: LinkProps[];
}

interface ContactInfo {
  phone: string;
  mail: string;
  address: string;
}

export interface HeaderProps {
  contactInfo: ContactInfo;
  ctaBtn: LinkProps;
  menuItems: (LinkProps | SubMenu)[];
}

const addressIconParentClasses = cn('text-base/[1] text-primary flex-none');
const addressItemClasses = cn('flex items-center gap-2.5');

export function Header() {
  const isSticky = useStickyHeader(700);
  const { contactInfo, menuItems } = headerData;

  return (
    <>
      <header
        className={cn(
          'left-0 right-0 top-0 z-99 mx-auto hidden w-full lg:block',
          isSticky
            ? 'sticky-header fixed left-0 top-0 w-full animate-fadeInDown bg-white [box-shadow:0px_0px_15px_10px_rgba(58,0,81,.4)] dark:bg-accent-700'
            : 'absolute pt-30px'
        )}
      >
        <Container>
          <div className="flex bg-accent-100 dark:bg-accent-700">
            {/* Brand logo */}
            <div className="grid flex-none place-items-center bg-primary px-9 py-6 dark:bg-[#212124]">
              <BrandLogo />
            </div>

            <div className="flex-1 divide-y divide-accent-900 divide-opacity-10 dark:divide-accent-200 dark:divide-opacity-10">
              <div className="flex items-center justify-between pl-9">
                <ul
                  aria-label="contact info"
                  className="ml-auto mr-4 flex flex-wrap gap-8"
                >
                  <li className={addressItemClasses}>
                    <span className={addressIconParentClasses}>
                      <FaEnvelope />
                    </span>
                    <a href={`mailto:${contactInfo.mail}`}>
                      {contactInfo.mail}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between pl-9 pr-4">
                {menuItems && menuItems.length > 0 && (
                  <Navigation menuItems={menuItems} />
                )}
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
