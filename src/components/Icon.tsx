import Image from "next/image";
import React from "react";

export default function Icon({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <Image className={`${className} inline mr-2`} src={src} alt={src} height={20} width={20} />
  );
}
