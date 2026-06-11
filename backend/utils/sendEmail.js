const nodemailer =
  require("nodemailer");

/*
  Email Transport
*/

const transporter =
  nodemailer.createTransport({
    service: "gmail",

    auth: {
      user:
        process.env.EMAIL_USER,

      pass:
        process.env.EMAIL_PASS,
    },
  });

/*
  Send Email
*/

const sendEmail = async ({
  to,
  subject,
  text,
}) => {
  await transporter.sendMail({
    from:
      process.env.EMAIL_USER,

    to,

    subject,

    text,
  });
};

module.exports = sendEmail;