'use client'

import Image from "next/image";
import logo from "@/public/logo.png";
import Hamburger from "hamburger-react";
import {useState} from "react";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <div className={"flex w-full items-center justify-between my-4 px-6"}>
            <div className={"flex relative h-10"}>
                <Image src={logo} alt={"Emma Kirby Design Logo"} className={"w-auto"}/>
            </div>
            <div className={"text-3xl font-[500]"}>Emma Kirby Design</div>
            <div className={"h-fit w-fit"}>
                <Hamburger toggled={open} toggle={setOpen} rounded/>
            </div>
        </div>
    )
}
