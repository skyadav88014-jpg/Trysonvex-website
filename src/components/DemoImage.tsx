import { useState, useRef, useEffect, ReactNode } from 'react';

interface DemoImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  eager?: boolean;
  fallbackGradient?: string;
  children?: ReactNode;
}

export default function DemoImage({
  src,
  alt,
  className = '',
  fallbackGradient = 'from-gray-800 to-gray-900',
  eager = false,
  children,
}: DemoImageProps) {
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setError(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient}`} />
      {!error && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => {
            setError(true);
            if (import.meta.env.DEV) console.warn('[DemoImage] Failed to load:', src);
          }}
          className="relative h-full w-full object-cover"
        />
      )}
      {children}
    </div>
  );
}
