import { NextApiRequest, NextApiResponse } from 'next';
import { renderToStaticMarkup } from 'react-dom/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.eu',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

interface MessageReqInterface {
  name: string;
  email: string;
  tel: string;
  subject: string;
  message: string;
}

const renderCallbackReqBody = (data: MessageReqInterface): string => {
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
        {data.message.split('\n').map((item, key) => {
          return (
            <span key={key}>
              {item}
              <br />
            </span>
          );
        })}
      </span>
    </>,
  );
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { name, email, subject }: MessageReqInterface = req.body;
  await transporter.sendMail({
    from: `"${name}" <mail-bot@emmakirbydesign.co.uk>`,
    to: process.env.STAGE === 'dev' ? 'freddie.erg@outlook.com' : 'enquiries@emmakirbydesign.co.uk',
    subject: subject,
    replyTo: email,
    html: renderCallbackReqBody(req.body),
  });
  res.status(200).send(null);
};
