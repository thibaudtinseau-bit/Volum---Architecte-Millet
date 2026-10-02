/* eslint-disable @next/next/no-img-element */
import { imgSize, imgSrc } from "@/lib/content";

type Props = {
  slug: string;
  num: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/** Image de projet responsive (WebP 760 px + 1600 px), rendue en HTML statique. */
export function ProjectImg({ slug, num, alt, className, priority, sizes = "(max-width: 900px) 100vw, 50vw" }: Props) {
  const [w, h] = imgSize(slug, num);
  return (
    <img
      className={className}
      src={imgSrc(slug, num)}
      srcSet={`${imgSrc(slug, num, true)} 760w, ${imgSrc(slug, num)} ${w}w`}
      sizes={sizes}
      width={w}
      height={h}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
    />
  );
}
