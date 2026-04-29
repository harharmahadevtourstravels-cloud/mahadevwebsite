import Image from 'next/image'
import { useState } from 'react'

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function ImageWithFallback({ src, alt, className, priority = false, sizes = '100vw' }: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  return didError ? (
    <div
      className={`relative flex items-center justify-center bg-gray-100 text-center align-middle text-xs font-semibold text-gray-500 ${className ?? ''}`}
      aria-label={alt}
    >
      Image unavailable
    </div>
  ) : (
    <span className={`relative block ${className ?? ''}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={className}
        onError={handleError}
      />
    </span>
  )
}
