// /api/sendEmail.js
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Configuración del transporte SMTP usando Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Email de envío
        pass: process.env.EMAIL_PASS, // Contraseña de la aplicación (no la normal de tu correo)
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL, // Email destinatario
      subject: `Consulta de ${name}: ${subject}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Correo enviado con éxito.' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error enviando el correo.', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
};

