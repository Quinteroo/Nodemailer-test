const nodemailer = require('nodemailer');
require("dotenv").config()


function sendEmail(userMail) {
  // Configura el transporte SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "hello.quinteroo@gmail.com",
      pass: `${process.env.API_TEST_NODEMAILER}`,
    },
  });

  // Configura los datos del correo electrónico
  const mailOptions = {
    from: "hello.quinteroo@gmail.com", // Dirección de correo electrónico del remitente
    to: `${userMail}`, // Dirección de correo electrónico del destinatario
    subject: 'Prueba de Nodemailer', // Asunto del correo electrónico
    text: 'Hola, este es un correo de prueba enviado con Nodemailer.' // Cuerpo del correo electrónico
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
    }
  });

}

module.exports = { sendEmail }
