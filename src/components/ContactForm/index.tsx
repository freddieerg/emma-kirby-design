"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { XMarkIcon } from "@heroicons/react/16/solid";

export default function ContactForm() {
    return (
        <form className={"grid grid-cols-6 gap-6 w-full"}>
            <div className={"flex items-center justify-between col-span-6 text-3xl mb-8"}>
                <div>Send Us a Message</div>
                <Dialog.Close>
                    <XMarkIcon className={"size-8"} />
                </Dialog.Close>
            </div>
            <div className={"flex col-span-6 sm:col-span-3 flex-col"}>
                <label htmlFor={"name"} className={"mb-2"}>
                    Name
                </label>
                <input
                    name={"name"}
                    type={"text"}
                    required
                    className={"bg-white bg-opacity-10 rounded p-2 border border-white border-opacity-20"}
                />
            </div>
            <div className={"flex col-span-6 sm:col-span-3 flex-col"}>
                <label htmlFor={"email"} className={"mb-2"}>
                    Email
                </label>
                <input
                    name={"email"}
                    type={"email"}
                    required
                    className={"bg-white bg-opacity-10 rounded p-2 border border-white border-opacity-20"}
                />
            </div>
            <div className={"flex col-span-6 sm:col-span-2 flex-col"}>
                <label htmlFor={"contactNumber"} className={"mb-2"}>
                    Contact Number
                </label>
                <input
                    type={"text"}
                    name={"contactNumber"}
                    className={"bg-white bg-opacity-10 rounded p-2 border border-white border-opacity-20"}
                />
            </div>
            <div className={"flex col-span-6 sm:col-span-4 flex-col"}>
                <label htmlFor={"subject"} className={"mb-2"}>
                    Subject
                </label>
                <input
                    name={"subject"}
                    type={"text"}
                    className={"bg-white bg-opacity-10 rounded p-2 border border-white border-opacity-20"}
                />
            </div>
            <div className={"flex col-span-6 sm:col-span-6 flex-col"}>
                <label htmlFor={"message"} className={"mb-2"}>
                    Message
                </label>
                <textarea
                    name={"message"}
                    required
                    className={"bg-white bg-opacity-10 rounded p-2 border border-white border-opacity-20"}
                    rows={6}
                />
            </div>
            <div className={"flex justify-between col-span-6 gap-x-4"}>
                <Dialog.Close className={"px-10 py-1 border border-white border-opacity-30 rounded"}>
                    Cancel
                </Dialog.Close>
                <button type={"submit"} className={"px-10 border border-white border-opacity-30 rounded"}>
                    Send
                </button>
            </div>
        </form>
    );
}
