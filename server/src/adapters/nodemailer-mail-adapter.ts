import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "./mail.adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3491d78dea935f",
      pass: "810bc9a0d30ed3"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail( { subject, body}: SendMailData ) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to:   'Matheus Nascimento <mn909118 @gmail.com>',
            subject,
            html: body,
    });
    };
}