import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contacto() {
  const [status, setStatus] = useState(""); // Para el mensaje de confirmación

  const sendEmail = (e) => {
    e.preventDefault(); // evita recarga de página
    setStatus(""); // limpia mensaje anterior

    emailjs
      .sendForm(
        "service_w598qyx",       // reemplaza con tu serviceID de EmailJS
        "template_lbnntjn",      // reemplaza con tu templateID de EmailJS
        e.target,
        "R36CUG-uY4NVLKeHA"        // reemplaza con tu userID/publicKey de EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("¡Correo enviado correctamente! ✅");
          e.target.reset(); // limpia los campos del formulario
        },
        (error) => {
          console.error(error.text);
          setStatus("Hubo un error al enviar el correo. ❌");
        }
      );
  };

  return (
    <div className="w-full h-screen flex items-center justify-center px-4 md:px-8 pt-10 pb-32">
      <motion.div
        className="bg-[#1f0d38] border border-fuchsia-500 rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-md text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-2xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Contáctame
        </motion.h2>

        <motion.div
          className="flex justify-center space-x-5 text-xl mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gersalaxd@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope text-white hover:text-purple-400"></i>
          </a>
          <a href="https://github.com/salazarf13" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-white hover:text-purple-400"></i>
          </a>
          <a href="https://www.linkedin.com/in/germansalazar13" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-white hover:text-purple-400"></i>
          </a>
        </motion.div>

        <motion.form
          className="space-y-3 text-left text-sm"
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div>
            <label className="block text-fuchsia-300 mb-1">Nombre</label>
            <input
              type="text"
              name="name" // clave para usar en el template de EmailJS
              placeholder="Tu nombre"
              required
              className="w-full rounded-lg px-3 py-2 bg-[#2a1447] border border-fuchsia-500 text-white focus:outline-none focus:ring-1 focus:ring-fuchsia-400"
            />
          </div>
          <div>
            <label className="block text-fuchsia-300 mb-1">Email</label>
            <input
              type="email"
              name="email" // clave para usar en el template de EmailJS
              placeholder="tucorreo@email.com"
              required
              className="w-full rounded-lg px-3 py-2 bg-[#2a1447] border border-fuchsia-500 text-white focus:outline-none focus:ring-1 focus:ring-fuchsia-400"
            />
          </div>
          <div>
            <label className="block text-fuchsia-300 mb-1">Mensaje</label>
            <textarea
              rows="3"
              name="message" // clave para usar en el template de EmailJS
              placeholder="Escribe tu mensaje..."
              required
              className="w-full rounded-lg px-3 py-2 bg-[#2a1447] border border-fuchsia-500 text-white focus:outline-none focus:ring-1 focus:ring-fuchsia-400"
            ></textarea>
          </div>
          <div className="text-center pt-1">
            <motion.button
              type="submit"
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium px-5 py-2 rounded-full transition text-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Enviar mensaje
            </motion.button>
          </div>
          {status && (
            <p className="text-center text-green-400 text-sm pt-2">{status}</p>
          )}
        </motion.form>
      </motion.div>
    </div>
  );
}
