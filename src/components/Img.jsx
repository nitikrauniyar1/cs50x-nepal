import Image from "next/image";

// Thin wrapper so every image is local and has explicit dimensions.
export default function Img({ src, alt, width, height, className = "", priority = false }) {
  return (
    <Image src={src} alt={alt} width={width} height={height} className={className} priority={priority} unoptimized />
  );
}
