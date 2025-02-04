import { EmailTemplate } from '../../../components/email-template/email-template';
import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_Vc3zJ8Gn_NnTkbH33odLnv2fcf528ARx3");

export async function SendEmail() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Obaidah Shop <noreply@obaidahshop.42web.io>',
      to: ['muhammad.talal.murad@gmail.com'],
      subject: 'An Item Sold form Obaidah Shop',
      react: EmailTemplate({ firstName: 'Customer' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
