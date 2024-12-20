"use client";

import Image from "next/image";
import { sample } from "lodash";
import { useMemo } from "react";
import classNames from "classnames";
import { onLoadFadeIn } from "@/utils/images";

interface RandomImageProps {
    images: string[];
}

export default function RandomImage({ images }: RandomImageProps) {
    const image = useMemo(() => sample(images), [images]);

    if (!image) return null;

    return (
        <Image
            src={image}
            alt={""}
            fill
            className={classNames("object-cover opacity-0 transition")}
            onLoad={onLoadFadeIn}
        />
    );
}
