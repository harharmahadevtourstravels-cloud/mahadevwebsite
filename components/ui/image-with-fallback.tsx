import Image from 'next/image'
import { useState } from 'react'

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  /** Classes applied to the outer wrapper div (sizing, positioning, overflow). */
  className?: string;
  /** Classes applied to the inner Next/Image element (object-fit, hover transforms, transitions). */
  imageClassName?: string;
  priority?: boolean;
  /** Hint for the browser fetch scheduler (e.g. high for the gallery hero slide, low for off-axis thumbnails). */
  fetchPriority?: 'high' | 'low' | 'auto';
  /** Width hints for responsive srcset; required for correct optimization when using `fill`. Use ~100vw only for full-bleed images. */
  sizes?: string;
  /** Bypass Next's optimizer for already-compressed local assets that it cannot decode reliably. */
  unoptimized?: boolean;
};

export function ImageWithFallback({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  fetchPriority,
  sizes = '100vw',
  unoptimized = false
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const shouldBypassOptimization = unoptimized || src.startsWith('/images/s-49/')

  if (didError) {
    return (
      <div
        className={`relative flex items-center justify-center bg-gray-100 text-xs font-semibold text-gray-400 ${className ?? ''}`}
        aria-label={alt}
        role="img"
      >
        <span className="px-4 text-center">Image unavailable</span>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className ?? ''}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={fetchPriority}
        sizes={sizes}
        unoptimized={shouldBypassOptimization}
        className={imageClassName ?? 'object-cover'}
        onError={() => setDidError(true)}
      />
    </div>
  )
}
