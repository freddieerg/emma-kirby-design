"use client";

import * as ReactDialog from "@radix-ui/react-dialog";
import ContactForm from "@/components/ContactForm";
import { ReactNode } from "react";

interface DialogProps {
    children: ReactNode;
}

export default function ContactFormDialog({ children }: DialogProps) {
    return (
        <ReactDialog.Root>
            <ReactDialog.Trigger
                className={
                    "flex items-center border border-white border-opacity-40 rounded px-2 py-1 mb-4 transition hover:opacity-80"
                }
            >
                <>{children}</>
            </ReactDialog.Trigger>
            <ReactDialog.Portal>
                <ReactDialog.Overlay className="fixed inset-0 bg-[#121212] data-[state=open]:animate-overlayShow" />
                <ReactDialog.Content className="flex flex-col items-center sm:justify-center fixed inset-0 data-[state=open]:animate-contentShow overflow-auto">
                    <div className={"overflow-scroll max-w-screen-lg p-8 w-full"}>
                        <ContactForm />
                    </div>
                </ReactDialog.Content>
            </ReactDialog.Portal>
        </ReactDialog.Root>
    );
}
