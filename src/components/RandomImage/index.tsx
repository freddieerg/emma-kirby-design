"use client";

import Image from "next/image";
import { sample } from "lodash";
import { useState } from "react";
import classNames from "classnames";

interface RandomImageProps {
    images: string[];
}

export default function RandomImage({ images }: RandomImageProps) {
    const image = sample(images);
    const [loaded, setLoaded] = useState(false);

    if (!image) return null;

    return (
        <Image
            src={image}
            alt={""}
            fill
            className={classNames("object-cover opacity-0 transition", {
                "opacity-100": loaded,
            })}
            onLoad={() => setLoaded(true)}
        />
    );
}
