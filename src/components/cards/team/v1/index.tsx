import { ImageProps } from '@/src/common-types';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { ClassValue } from 'clsx';

export interface TeamCardProps {
  slug: string;
  image: Omit<ImageProps, 'width' | 'height'>;
  name: string;
  about: string;
  contentWrapperClassName?: ClassValue;
}

export function TeamCard({ slug, image, name, about }: TeamCardProps) {
  return (
    <div className="group">
      <div
        className={cn(
          // General
          'relative z-1 mr-30px overflow-hidden rounded-5',

          // after => image overlay effect
          'after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-1 after:h-0 after:w-full after:bg-white/30 after:opacity-100',
          // hover
          'group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-400 group-hover:after:ease-linear'
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={640}
          height={712}
          sizes="
          (min-width:768px) 50vw, 
          (min-width:1024px) 33vw,
          100vw
          "
          className="object-cover transition-transform duration-500 [transform:scale(1.05)] group-hover:[transform:scale(1)]"
        />

        <h3 className="h3">
          <CustomLink
            href={slug}
            className="text-accent-900 transition-colors duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {name}
          </CustomLink>
        </h3>
        <p>{about}</p>
      </div>
    </div>
  );
}
