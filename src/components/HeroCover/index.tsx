import Image from "next/image";
import classNames from "classnames";

interface HeroCoverProps {
    image: string;
    title: string;
    subtitle?: string | null;
    flipped?: boolean | null;
    className?: string;
    textContainerClassName?: string;
}

export default function HeroCover({
    image,
    title,
    subtitle,
    flipped,
    className,
    textContainerClassName,
}: HeroCoverProps) {
    return (
        <div className={className}>
            <figure className={"flex flex-grow relative bg-[#333333]"}>
                <div
                    className={classNames("relative basis-1/2", {
                        "order-1": flipped,
                    })}
                >
                    <Image
                        src={image}
                        alt={"Cover Image"}
                        fill
                        className={"object-cover"}
                    />
                </div>
                <figcaption
                    className={classNames(
                        "basis-1/2 flex flex-col justify-center p-8",
                        textContainerClassName
                    )}
                >
                    <div className={"text-4xl"}>{title}</div>
                    <hr className={"my-6 opacity-50"} />
                    <div className={"text-xl whitespace-pre-wrap"}>
                        {subtitle}
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}
