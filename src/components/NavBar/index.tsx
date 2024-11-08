"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import Hamburger from "hamburger-react";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className={
                    "flex w-full items-center justify-between my-3 px-6 z-50 pointer-events-auto"
                }
            >
                <Link href={"/"} className={"flex relative h-9"}>
                    <Image
                        src={logo}
                        alt={"Emma Kirby Design Logo"}
                        className={"w-auto"}
                    />
                </Link>
                <Link href={"/"} className={"text-3xl font-bold"}>
                    Emma Kirby Design
                </Link>
                <div className={"h-fit w-fit"}>
                    <Hamburger
                        toggled={open}
                        toggle={setOpen}
                        rounded
                        size={24}
                    />
                </div>
            </div>
            <Dialog.Root open={open}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-[#121212]" />
                    <Dialog.Content className="flex flex-col items-center justify-center fixed inset-0">
                        <ul className={"flex flex-col space-y-2 text-center"}>
                            <li
                                className={
                                    "text-2xl duration-300 hover:opacity-80"
                                }
                            >
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li
                                className={
                                    "text-2xl duration-300 hover:opacity-80"
                                }
                            >
                                <Link href={"/"}>About Us</Link>
                            </li>
                            <li
                                className={
                                    "text-2xl duration-300 hover:opacity-80"
                                }
                            >
                                <Link href={"/"}>What We Do</Link>
                            </li>
                            <li
                                className={
                                    "text-2xl duration-300 hover:opacity-80"
                                }
                            >
                                <Link href={"/"}>Projects</Link>
                            </li>
                            <li
                                className={
                                    "text-2xl duration-300 hover:opacity-80"
                                }
                            >
                                <Link href={"/"}>Contact Us</Link>
                            </li>
                        </ul>
                        <div className={"absolute bottom-0 mb-4 text-center"}>
                            <div className={"flex space-x-2 text-xl mb-4"}>
                                <Link href={"/"}>Privacy Policy</Link>
                                <span>·</span>
                                <Link href={"/"}>Terms & Conditions</Link>
                            </div>
                            <div>
                                © {new Date().getFullYear()} Emma Kirby Design
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}
