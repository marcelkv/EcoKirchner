import emailjs from "@emailjs/browser";
import { IEmailService, OrderEmailParams } from "./email-service.interface";

const SERVICE_ID = process.env.VUE_APP_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.VUE_APP_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.VUE_APP_EMAILJS_PUBLIC_KEY ?? "";

export class EmailService implements IEmailService {
  constructor() {
    if (PUBLIC_KEY) {
      emailjs.init({ publicKey: PUBLIC_KEY });
    }
  }

  async sendOrderEmailsAsync(params: OrderEmailParams): Promise<void> {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) return;
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      ...params,
      to_email: params.customer_email,
    });
  }
}
