"use client";

import Image from "next/image";
import classNames from "classnames";
import { ElementType, ReactNode } from "react";
import { onLoadFadeIn } from "@/utils/images";

interface HeroCoverProps {
    image: string;
    title: string;
    titleAs?: ElementType;
    subtitle?: string | null;
    flipped?: boolean | null;
    className?: string;
    textContainerClassName?: string;
    children?: ReactNode;
}

export default function HeroCover({
    image,
    title,
    titleAs,
    subtitle,
    flipped,
    className,
    textContainerClassName,
    children,
}: HeroCoverProps) {
    const Title = titleAs ?? "div";
    return (
        <div className={className}>
            <figure className={"flex flex-col sm:flex-row flex-grow relative bg-[#333333]"}>
                <div
                    className={classNames("relative h-48 sm:h-auto sm:basis-1/3 md:basis-1/2", {
                        "sm:order-1": flipped,
                    })}
                >
                    <Image
                        src={image}
                        alt={`Cover for ${title} section`}
                        fill
                        className={"object-cover transition opacity-0"}
                        onLoad={onLoadFadeIn}
                    />
                </div>
                <figcaption
                    className={classNames(
                        "sm:basis-2/3 md:basis-1/2 flex flex-col justify-center p-8",
                        textContainerClassName
                    )}
                >
                    <Title className={"text-4xl"}>{title}</Title>
                    <hr className={"my-6 opacity-50"} />
                    <div>{children}</div>
                    <div className={"text-lg whitespace-pre-wrap"}>{subtitle}</div>
                </figcaption>
            </figure>
        </div>
    );
}
