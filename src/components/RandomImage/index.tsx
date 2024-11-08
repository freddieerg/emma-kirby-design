"use client";

import Image from "next/image";
import { sample } from "lodash";

interface RandomImageProps {
    images: string[];
}

export default function RandomImage({ images }: RandomImageProps) {
    const image = sample(images);

    console.log("=>", image);

    if (!image) return null;

    return <Image src={image} alt={""} fill />;
}
