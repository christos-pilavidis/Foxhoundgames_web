import { FooterSectionProps } from '@/src/layout/footer/v1';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  columnOne: {
    title: 'Responsible Gaming',
    links: [
      {
        label: 'Gamble Aware',
        href: 'https://www.gambleaware.org/',
        openNewTab: true,
      },
      {
        label: 'GamStop',
        href: 'https://www.gamstop.co.uk/',
        openNewTab: true,
      },
      {
        label: 'GamCare',
        href: 'https://www.gamcare.org.uk/',
        openNewTab: true,
      },
    ],
  },
  columnTwo: {
    title: '',
    location: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
    mails: ['info@foxhoundgames.com'],
    phoneNumbers: ['(405) 555-0128', '(629) 555-0129'],
  },
  columnThree: {
    title: 'Recent Blog',
    blogs: [
      {
        image: {
          src: '/assets/images/blog/blog-sm-1.jpg',
          alt: 'We provide a range of IT solutions',
        },
        title: 'We provide a range of IT solutions',
        date: 'january 11, 2024',
        slug: './blog-details',
      },
      {
        image: {
          src: '/assets/images/blog/blog-sm-2.jpg',
          alt: 'IT solutions enhance efficiency',
        },
        title: 'IT solutions enhance efficiency',
        date: 'january 11, 2024',
        slug: './blog-details',
      },
    ],
  },
  footerBottom: {
    copyrightText: '© Foxhoundgames 2024 | All Rights Reserved',
    links: [
      {
        label: '',
        href: '/',
        openNewTab: false,
      },
      {
        label: '',
        href: '/',
        openNewTab: false,
      },
    ],
  },
};
