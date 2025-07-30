"use client";
import React from "react";
import Image from "next/image";

interface CommonBreadcrumbProps {
  imageUrl: string;
  altText?: string;
}

export default function CommonBreadcrumb({
  imageUrl,
  altText = "Breadcrumb Background",
}: CommonBreadcrumbProps) {
  return (
    <div className="relative w-full aspect-[16/7] sm:aspect-[16/6] lg:aspect-[15/4]">
      <Image
        src={imageUrl}
        alt={altText}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className=" shadow-md"
      />
    </div>
  );
}
