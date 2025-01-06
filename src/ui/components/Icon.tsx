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
    <span className={`  p-1.5 mr-2 ${className}`}>
      <Image
        className={`inline`}
        src={src}
        alt={src}
        height={20}
        width={20}
        onClick={onClick}
      />
    </span>
  );
}
