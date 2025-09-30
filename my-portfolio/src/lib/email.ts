import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export interface EmailData {
  name: string;
  email: string;
  message: string;
  budget?: string;
}

export async function sendContactEmail(data: EmailData) {
  const { name, email, message, budget } = data;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_FROM, // Send to yourself
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #EC4899;">New Contact Form Submission</h2>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
          <p><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #EC4899;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <p style="color: #666; font-size: 14px;">
          This email was sent from your portfolio contact form.
        </p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}