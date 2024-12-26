import Image from "next/image";
import React from "react";

export default function Icon({
  src,
  className,
  onClick,
}: {
  src: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Image
      className={`${className} inline mr-2`}
      src={src}
      alt={src}
      height={20}
      width={20}
      onClick={onClick}
    />
  );
}
