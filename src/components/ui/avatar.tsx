import Image from 'next/image';
import { cn } from '@/utils';

type AvatarProps = {
  src: string;
  alt: string;
  className?: string;
  size?: number;
};

// Circular avatar with the face anchored near the top of the photo,
// so only the visible portion is the face (not the full image).
export function Avatar({
  src,
  alt,
  className,
  size = 40,
}: AvatarProps) {
  return (
    <span
      className={cn(
        'border-line ring-bg relative inline-block shrink-0 overflow-hidden rounded-full border ring-2',
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover"
        style={{ objectPosition: '50% 18%' }}
        priority
      />
    </span>
  );
}
