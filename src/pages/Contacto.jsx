export default function Contacto() {
  return (
    <div className="w-full h-screen flex items-center justify-center px-4 md:px-8 pt-10 pb-32">
      <div className="bg-[#1f0d38] border border-fuchsia-500 rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Contáctame</h2>

        {/* Íconos de contacto */}
        <div className="flex justify-center space-x-5 text-xl mb-4">
          <a href="mailto:gersalaxd@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope text-white hover:text-fuchsia-400"></i>
          </a>
          <a href="https://github.com/tu-usuario-github" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-white hover:text-fuchsia-400"></i>
          </a>
          <a href="https://www.linkedin.com/in/tu-perfil-linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-white hover:text-fuchsia-400"></i>
          </a>
        </div>

        {/* Formulario */}
        <form className="space-y-3 text-left text-sm">
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
            <button
              type="submit"
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium px-5 py-2 rounded-full transition text-sm"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
