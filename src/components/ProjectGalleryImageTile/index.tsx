"use client";

import Image from "next/image";

interface ProjectGalleryImageTileProps {
    thumbnailUrl: string;
    alt: string;
}

export default function ProjectGalleryImageTile({ thumbnailUrl, alt }: ProjectGalleryImageTileProps) {
    return (
        <Image
            src={thumbnailUrl}
            alt={alt}
            fill
            className={"object-cover transition opacity-0 -z-10"}
            onLoad={(element) => element.currentTarget.classList.add("opacity-100")}
        />
    );
}
