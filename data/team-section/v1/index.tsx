import { TeamSectionProps } from '@/src/sections/team/v1';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa6';

export const teamSectionData: TeamSectionProps = {
  sectionHeading: {
    subtitle: '',
    title: '',
  },
  cards: [
    {
      slug: '#',
      image: {
        src: '/assets/images/team/thumbnailmo.png',
        alt: 'Mortal Oath',
      },

      name: 'Mortal Oath',
      about: 'Coming Soon..',
    },
  ],
};
