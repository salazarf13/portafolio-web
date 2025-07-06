import { image } from "framer-motion/client";

export default function Proyectos() {
  const proyectos = [
    {
      nombre: "Portafolio Personal",
      descripcion: "Mi portafolio web desarrollado con React y Tailwind CSS.",
      tecnologias: ["React", "Tailwind", "JavaScript"],
      imagen: "/src/assets/image.png",
      enlace: "https://portafolio-web-inky-sigma.vercel.app",
      codigo: "https://github.com/salazarf13/portafolio-web.git"
    },

    {
      nombre: "App de rutinas para Gynasio",
      descripcion: "Aplicación móvil para ver rutinas predefinidas y creación de propias rutinas por el usuario, creada en Kotlin.",
      tecnologias: ["Kotlin", "Firebase"],
      imagen: "https://via.placeholder.com/300x200.png?text=Proyecto+2",
      enlace: "https://github.com/salazarf13/App-Gym.git",
      codigo: "https://github.com/tu-usuario/app-rutinas"
    },

    {
      nombre: "Programa estadístico Inferencial",
      descripcion: "Aplicación de escritorio para realizar inferencias estadísticas, comparaciones de proporciones, medias y varianzas. Desarrollada con Python y Tkinter.",
      tecnologias: ["Python", "Tkinter", "SciPy", "NumPy", "Matplotlib"],
      imagen: "https://via.placeholder.com/300x200.png?text=Proyecto+3",
      enlace: "", // Si no hay demo en línea, se puede dejar vacío
      codigo: "https://github.com/tu-usuario/estadistica-inferencial"
    },

    {
      nombre: "Sistema Gestión Centro Recreativo",
      descripcion: "Aplicación de consola para la administración de clientes y actividades de un centro recreativo. Desarrollada en C++.",
      tecnologias: ["C++", "Consola", "Manejo de archivos"],
      imagen: "https://via.placeholder.com/300x200.png?text=Proyecto+4",
      enlace: "", 
      codigo: "https://github.com/tu-usuario/centro-recreativo"
    },
    
    {
      nombre: "Sistema Gestión Biblioteca Web",
      descripcion: "Aplicación web interactiva para la gestión de usuarios y libros de una biblioteca. HTML, CSS y JavaScript.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      imagen: "https://via.placeholder.com/300x200.png?text=Biblioteca",
      enlace: "https://salazarf13.github.io/mi-proyecto-web/",
      codigo: "https://github.com/salazarf13/Sistema-de-Gestion-de-Biblioteca-Web"
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-10 pb-32">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Mis Proyectos</h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.nombre}
            className="bg-[#1f0d38] border-2 border-fuchsia-600 rounded-3xl shadow-xl w-72 md:w-80 overflow-hidden flex flex-col"
          >
            {/* Imagen de portada */}
            <img src={proyecto.imagen} alt={proyecto.nombre} className="w-full h-44 object-cover" />

            {/* Contenido textual */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl text-white font-bold mb-2">{proyecto.nombre}</h3>
              <p className="text-gray-300 text-sm mb-4">{proyecto.descripcion}</p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proyecto.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="bg-fuchsia-700 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex gap-2 mt-auto">
                
                {proyecto.enlace && (
                  <a
                    href={proyecto.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-sm font-medium px-4 py-2 rounded-full text-center transition"
                  >
                    Ver Proyecto
                  </a>
                )}

                <a
                  href={proyecto.codigo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-fuchsia-600 text-white text-sm font-medium px-4 py-2 rounded-full text-center hover:bg-fuchsia-600 transition"
                >
                  Ver Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

