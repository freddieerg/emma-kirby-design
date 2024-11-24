import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import classNames from "classnames";
import { ReactNode } from "react";
import SettingsProviderWrapper from "@/components/SettingsProvider/SettingsProviderWrapper";

const athelas = localFont({
    variable: "--font-athelas",
    display: "swap",
    src: [
        {
            path: "./fonts/Athelas-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/Athelas-Italic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "./fonts/Athelas-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/Athelas-BoldItalic.ttf",
            weight: "700",
            style: "italic",
        },
    ],
});

export const metadata: Metadata = {
    title: {
        default: "Emma Kirby Design",
        template: "%s | Emma Kirby Design",
    },
    description:
        "Cotswolds Design Studio based in Oxfordshire offering Interior Design, Architecture, Bespoke Furniture Design, Development Consultancy and Construction.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" className={classNames("bg-[#252525]", "text-[#b4b0a6]", athelas.variable)}>
            <body className={"font-serif antialiased"}>
                <SettingsProviderWrapper>{children}</SettingsProviderWrapper>
            </body>
        </html>
    );
}
