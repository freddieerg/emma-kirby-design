"use client";

import * as Dialog from "@radix-ui/react-dialog";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {
    Children,
    cloneElement,
    isValidElement,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";

interface GalleryProps {
    slides: string[];
    children: ReactNode;
}

export default function Gallery({ slides, children }: GalleryProps) {
    const [open, setOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({ startIndex, loop: true });

    const openAtIndex = useCallback(
        (index: number) => {
            setStartIndex(index);
            setOpen(true);
            emblaApi?.reInit({ startIndex: 4 });
        },
        [emblaApi]
    );

    const chill = useMemo(
        () =>
            Children.map(children, (child, index) =>
                isValidElement(child)
                    ? cloneElement(child, {
                          ...child.props,
                          children: (
                              <button onClick={() => openAtIndex(index)}>
                                  {child.props.children}
                              </button>
                          ),
                      })
                    : child
            ),
        [children, openAtIndex]
    );

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("init", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <>
            {chill}
            <Dialog.Root open={open}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-[#121212] data-[state=open]:animate-overlayShow" />
                    <Dialog.Content
                        className="flex flex-col items-center justify-center fixed inset-0 data-[state=open]:animate-contentShow"
                        onEscapeKeyDown={() => setOpen(false)}
                    >
                        <div
                            className={
                                "flex justify-center items-center flex-col flex-grow w-full"
                            }
                        >
                            <div
                                className={
                                    "flex justify-between w-full absolute top-4 flex-shrink px-6"
                                }
                                style={{
                                    textShadow: "1px 1px 3px black",
                                }}
                            >
                                <div>
                                    {selectedIndex + 1} of {chill?.length}
                                </div>
                                <button
                                    className={""}
                                    onClick={() => setOpen(false)}
                                >
                                    <div
                                        style={{
                                            textShadow: "1px 1px 3px black",
                                        }}
                                    >
                                        Close
                                    </div>
                                </button>
                            </div>
                            <div
                                className="flex flex-grow overflow-hidden w-full h-full"
                                ref={emblaRef}
                            >
                                <div className="flex flex-grow -z-10">
                                    {slides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={
                                                "relative grow-0 shrink-0 basis-full"
                                            }
                                        >
                                            <Image
                                                src={slide}
                                                alt={""}
                                                fill
                                                className={"object-contain"}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}
