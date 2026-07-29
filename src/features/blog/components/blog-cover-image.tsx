import Image from 'next/image';
import { cn } from '@/lib/cn';

type BlogCoverImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

export function BlogCoverImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
  imageClassName,
}: BlogCoverImageProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn('object-contain', imageClassName)}
      />
    </div>
  );
}
