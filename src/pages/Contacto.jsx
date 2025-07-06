import { motion } from "framer-motion";

export default function Contacto() {
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
          <a href="mailto:gersalaxd@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope text-white hover:text-fuchsia-400"></i>
          </a>
          <a href="https://github.com/tu-usuario-github" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-white hover:text-fuchsia-400"></i>
          </a>
          <a href="https://www.linkedin.com/in/tu-perfil-linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-white hover:text-fuchsia-400"></i>
          </a>
        </motion.div>

        <motion.form
          className="space-y-3 text-left text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div>
            <label className="block text-fuchsia-300 mb-1">Nombre</label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full rounded-lg px-3 py-2 bg-[#2a1447] border border-fuchsia-500 text-white focus:outline-none focus:ring-1 focus:ring-fuchsia-400"
            />
          </div>
          <div>
            <label className="block text-fuchsia-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="tucorreo@email.com"
              className="w-full rounded-lg px-3 py-2 bg-[#2a1447] border border-fuchsia-500 text-white focus:outline-none focus:ring-1 focus:ring-fuchsia-400"
            />
          </div>
          <div>
            <label className="block text-fuchsia-300 mb-1">Mensaje</label>
            <textarea
              rows="3"
              placeholder="Escribe tu mensaje..."
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
        </motion.form>
      </motion.div>
    </div>
  );
}