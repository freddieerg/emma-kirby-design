"use server";

import nodemailer from "nodemailer";

export interface SendMessageRequest {
    name: string;
    email: string;
    tel: string;
    subject: string;
    message: string;
}

export const sendMessage = async (prevState: boolean | null, formData: FormData) => {
    const data: SendMessageRequest = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        tel: formData.get("tel") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
    };

    await transporter.sendMail({
        from: `"${data.name}" <mail-bot@emmakirbydesign.co.uk>`,
        to: process.env.STAGE === "dev" ? "freddie@emmakirbydesign.co.uk" : "enquiries@emmakirbydesign.co.uk",
        subject: data.subject,
        replyTo: data.email,
        html: await renderBodyHtml(data),
    });

    return true;
};

const transporter = nodemailer.createTransport({
    host: "smtp-relay.gmail.com",
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

const renderBodyHtml = async (data: SendMessageRequest): Promise<string> => {
    const { renderToStaticMarkup } = (await import("react-dom/server")).default;

    return renderToStaticMarkup(
        <>
            <b>Name:</b> {data.name}
            <br />
            <b>Email:</b> {data.email}
            <br />
            <b>Contact Number:</b> {data.tel}
            <br />
            <b>Subject:</b> {data.subject}
            <br />
            <br />
            <span>
                {data.message.split("\n").map((item, key) => {
                    return (
                        <span key={key}>
                            {item}
                            <br />
                        </span>
                    );
                })}
            </span>
        </>
    );
};
