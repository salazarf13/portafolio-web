import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import flechaDerecha from "../assets/flecha-derecha.png";
import flechaIzquierda from "../assets/flecha-izquierda.png";

export default function Proyectos() {
  const proyectos = [
    {
      nombre: "Portafolio Personal",
      descripcion: "Mi portafolio web desarrollado con React y Tailwind CSS.",
      tecnologias: ["React", "Tailwind", "JavaScript"],
      imagenes: [
        "/src/assets/web1.png",
        "/src/assets/web2.png",
        "/src/assets/web3.png",
        "/src/assets/web4.png",
      ],
      enlace: "https://portafolio-web-inky-sigma.vercel.app",
      codigo: "https://github.com/salazarf13/portafolio-web.git",
    },
    {
      nombre: "App de rutinas para Gynasio",
      descripcion: "Aplicación móvil para ver rutinas predefinidas.",
      tecnologias: ["Kotlin", "Firebase"],
      imagenes: [
        "/src/assets/appgym1.jpeg",
        "/src/assets/appgym2.jpeg",
        "/src/assets/appgym3.jpeg",
        "/src/assets/appgym4.jpeg",
      ],
      enlace:
        "https://drive.google.com/file/d/1OQ647Vymlgmaq7yq9P7hdI9c1wPFrE3l/view?usp=sharing",
      codigo: "https://github.com/salazarf13/App-Gym.git",
    },
    {
      nombre: "Programa estadístico Inferencial",
      descripcion:
        "Aplicación de escritorio para realizar inferencias estadísticas, comparaciones de proporciones, medias y varianzas. Desarrollada con Python y Tkinter.",
      tecnologias: ["Python", "Tkinter", "SciPy", "NumPy", "Matplotlib"],
      imagen: "/src/assets/estadisticaInferencial.png",
      enlace:
        "https://drive.google.com/file/d/1fUuKMGoiIV1aQy7BFv-ygd2awPW9It5Y/view?usp=sharing",
      codigo: "https://github.com/salazarf13/Estad-stica-inferencial.git",
    },
    {
      nombre: "Sistema Gestión Centro Recreativo",
      descripcion:
        "Aplicación de consola para la administración de clientes y actividades de un centro recreativo. Desarrollada en C++.",
      tecnologias: ["C++", "Consola", "Manejo de archivos"],
      imagenes: [
        "/src/assets/sistemarecreativo1.png",
        "/src/assets/sistemarecreativo2.png",
        "/src/assets/sistemarecreativo3.png",
        "/src/assets/sistemarecreativo4.png",
      ],
      enlace:
        "https://drive.google.com/file/d/1tZmuf-8ZNG8G2Wa1dmgXett3TJeZHWAf/view?usp=sharing",
      codigo:
        "https://github.com/salazarf13/Ssitema-de-Gestion-para-centro-recreativo.git",
    },
    {
      nombre: "Sistema Gestión Biblioteca Web",
      descripcion:
        "Aplicación web interactiva para la gestión de usuarios y libros de una biblioteca. HTML, CSS y JavaScript.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      imagenes: [
        "/src/assets/biblioteca1.png",
        "/src/assets/biblioteca2.png",
        "/src/assets/biblioteca3.png",
        "/src/assets/biblioteca4.png",
        "/src/assets/biblioteca5.png",
        "/src/assets/biblioteca6.png",
        "/src/assets/biblioteca7.png",
      ],
      enlace: "https://salazarf13.github.io/mi-proyecto-web/",
      codigo:
        "https://github.com/salazarf13/Sistema-de-Gesti-n-de-Biblioteca-Web.git",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-10 pb-32">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
        Mis Proyectos
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {proyectos.map((proyecto) => (
          <ProyectoCard key={proyecto.nombre} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
}

// Componente para cada proyecto
function ProyectoCard({ proyecto }) {
  // Refs para las flechas
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Estado para activar la navegación después del montaje
  const [navReady, setNavReady] = useState(false);

  // Esperamos que los refs estén montados para activar la navegación
  useEffect(() => {
    setNavReady(true);
  }, []);

  const hasMultipleImages = proyecto.imagenes && proyecto.imagenes.length > 1;

  return (
    <div className="bg-[#1f0d38] border-2 border-fuchsia-600 rounded-3xl shadow-xl w-72 md:w-80 overflow-hidden flex flex-col">
      {/* Imagen o carrusel */}
      {proyecto.imagenes ? (
        <div className="relative w-full h-44 mt-2 group">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            grabCursor={true}
            navigation={
              navReady && hasMultipleImages
                ? {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }
                : false
            }
            onInit={(swiper) => {
              // Cuando el swiper se inicializa, hay que actualizar la navegación para que reconozca los botones
              if (navReady && hasMultipleImages) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            className="w-full h-full"
          >
            {proyecto.imagenes.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${proyecto.nombre} ${index + 1}`}
                  className={`w-full h-full ${
                    proyecto.nombre === "App de rutinas para Gynasio"
                      ? "object-contain"
                      : "object-cover"
                  } rounded-xl`}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {hasMultipleImages && (
            <>
              <button
                ref={prevRef}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition"
                aria-label="Anterior"
              >
                <img
                  src={flechaIzquierda}
                  alt="Flecha izquierda"
                  className="w-7 h-7 bg-white rounded-full p-1 shadow-md"
                />
              </button>
              <button
                ref={nextRef}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition"
                aria-label="Siguiente"
              >
                <img
                  src={flechaDerecha}
                  alt="Flecha derecha"
                  className="w-7 h-7 bg-white rounded-full p-1 shadow-md"
                />
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="w-full h-44 p-2">
          <img
            src={proyecto.imagen}
            alt={proyecto.nombre}
            className="w-full h-full object-contain rounded-xl border border-fuchsia-500 bg-white"
          />
        </div>
      )}

      {/* Contenido */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div className="flex flex-col justify-center flex-grow">
          <h3 className="text-xl text-white font-bold mb-2 text-center">
            {proyecto.nombre}
          </h3>
          <p className="text-gray-300 text-sm mb-4 text-center">
            {proyecto.descripcion}
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {proyecto.tecnologias.map((tech) => (
              <span
                key={tech}
                className="bg-fuchsia-700 text-white text-xs px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <a
            href={proyecto.enlace}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 ${
              proyecto.enlace === "#"
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-fuchsia-600 hover:bg-fuchsia-700"
            } text-white text-sm font-medium px-4 py-2 rounded-full text-center transition`}
          >
            Ver Proyecto
          </a>
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
  );
}
