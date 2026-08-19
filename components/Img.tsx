import Image from "next/image";
import type { CSSProperties } from "react";

type ImgProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** aspect ratio as width/height, e.g. "4/3" */
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  style?: CSSProperties;
};

/**
 * Responsive, SEO-friendly image wrapper using next/image with `fill`.
 * Provide the container an aspect ratio via the `aspect` prop.
 */
export function Img({
  src,
  alt,
  className = "",
  imgClassName = "",
  aspect = "4/3",
  sizes = "100vw",
  priority = false,
  style,
}: ImgProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: aspect, ...style }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
