import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });


  export const sendEmail = async (to: string, subject: string, body: string) => {
    try {
      await transporter.sendMail({
        from: process.env.FROM_EMAIL,
        to: to, 
        subject: subject,
        html: body, 
      });
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  

