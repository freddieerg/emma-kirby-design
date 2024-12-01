"use client";

import Image from "next/image";
import Hamburger from "hamburger-react";
import { useContext, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import classNames from "classnames";
import { SettingsContext } from "@/components/SettingsProvider";

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const settings = useContext(SettingsContext);

    return (
        <>
            <nav
                className={classNames("flex w-full items-center justify-between my-3 px-6 pointer-events-auto", {
                    "z-10": open,
                })}
            >
                <Link href={"/"} className={"flex relative h-9 w-24"}>
                    <Image
                        src={settings!.logo!.url}
                        alt={"Emma Kirby Design Logo"}
                        className={"w-auto"}
                        width={settings!.logo!.width ?? 0}
                        height={settings!.logo!.height ?? 0}
                    />
                </Link>
                <Link href={"/"} className={"text-2xl md:text-3xl font-bold"}>
                    Emma Kirby Design
                </Link>
                <div className={"flex justify-end h-fit -mr-3 w-24"}>
                    <Hamburger toggled={open} toggle={setOpen} rounded size={24} label={"Open Navigation Menu"} />
                </div>
            </nav>
            <Dialog.Root open={open}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-[#121212] data-[state=open]:animate-overlayShow" />
                    <Dialog.Content
                        className="flex flex-col items-center justify-center fixed inset-0 data-[state=open]:animate-contentShow"
                        onEscapeKeyDown={() => setOpen(false)}
                    >
                        <ul className={"flex flex-col space-y-2 text-center"}>
                            <li className={"text-2xl duration-300 hover:opacity-80"}>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li className={"text-2xl duration-300 hover:opacity-80"}>
                                <Link href={"/about-us"}>About Us</Link>
                            </li>
                            <li className={"text-2xl duration-300 hover:opacity-80"}>
                                <Link href={"/what-we-do"}>What We Do</Link>
                            </li>
                            <li className={"text-2xl duration-300 hover:opacity-80"}>
                                <Link href={"/projects"}>Projects</Link>
                            </li>
                            <li className={"text-2xl duration-300 hover:opacity-80"}>
                                <Link href={"/contact-us"}>Contact Us</Link>
                            </li>
                        </ul>
                        <div className={"absolute bottom-0 mb-4 text-center"}>
                            <div className={"flex space-x-2 text-xl mb-4"}>
                                <Link href={"/privacy"}>Privacy Policy</Link>
                                <span>·</span>
                                <Link href={"/terms"}>Terms & Conditions</Link>
                            </div>
                            <div>© {new Date().getFullYear()} Emma Kirby Design</div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}
