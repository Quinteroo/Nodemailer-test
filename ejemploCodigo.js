const nodemailer = require('nodemailer');

// Configura el transporte SMTP
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'tucorreo@gmail.com', // Coloca aquí tu dirección de correo electrónico
    pass: 'tucontraseña' // Coloca aquí tu contraseña
  }
});

// Configura los datos del correo electrónico
const mailOptions = {
  from: 'tucorreo@gmail.com', // Dirección de correo electrónico del remitente
  to: 'destinatario@example.com', // Dirección de correo electrónico del destinatario
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


//! TODA LA INFO EN WEB NODEMAILER
//* https://www.nodemailer.com/