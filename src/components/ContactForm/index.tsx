import * as Dialog from "@radix-ui/react-dialog";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { sendMessage } from "@/actions/send-message";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";

export default function ContactForm() {
    const [isPending, setIsPending] = useState(false);
    const [isSuccess, formAction] = useFormState(sendMessage, null);

    useEffect(() => {
        if (isSuccess === null) return;
        setIsPending(false);
    }, [isSuccess]);

    return (
        <form className={"grid grid-cols-6 gap-6 w-full"} action={formAction} onSubmit={() => setIsPending(true)}>
            <div className={"flex items-center justify-between col-span-6 text-3xl mb-8"}>
                <div>{isSuccess ? "Message Sent" : "Send Us a Message"}</div>
                <Dialog.Close>
                    <XMarkIcon className={"size-8"} />
                </Dialog.Close>
            </div>
            {isSuccess ? (
                <>
                    <div className={"flex col-span-6 flex-col text-xl"}>
                        Your message has been received and a member of our team will get back to you as soon as
                        possible.
                    </div>
                    <div>
                        <Dialog.Close
                            className={"px-10 col-span-6 py-1 border border-white border-opacity-30 rounded mt-8"}
                        >
                            Close
                        </Dialog.Close>
                    </div>
                </>
            ) : (
                <>
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
                        <label htmlFor={"tel"} className={"mb-2"}>
                            Contact Number
                        </label>
                        <input
                            type={"text"}
                            name={"tel"}
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
                        <button
                            disabled={isPending}
                            type={"submit"}
                            className={"px-10 border border-white border-opacity-30 rounded"}
                        >
                            {isPending ? "Sending..." : "Send"}
                        </button>
                    </div>
                </>
            )}
        </form>
    );
}
