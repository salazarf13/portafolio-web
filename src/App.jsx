import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import { motion } from "framer-motion";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#140028] to-[#1c002e] text-white font-sans">
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-full h-screen flex items-center justify-center px-6 md:px-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="w-full max-w-7xl bg-[#18002b] border-4 border-fuchsia-600 rounded-2xl shadow-lg relative flex flex-col md:flex-row items-center justify-between p-10 md:p-16"
                >

                  {/* Círculos superiores estilo ventana */}
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  {/* Información textual animada */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-center md:text-left md:flex-grow"
                  >
                    <p className="text-white text-lg font-semibold mb-2">Hola soy</p>
                    <h1 className="text-white font-extrabold text-5xl md:text-6xl leading-tight mb-2">German Salazar</h1>
                    <p className="text-fuchsia-300 text-lg md:text-xl mb-6">Desarrollador Junior Freelance | Estudiante en Ingeniera en Sitemas</p>
                    <motion.a
                      href="mailto:gersalaxd@gmail.com"
                      className="text-blue-400 hover:underline text-base block mb-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      gersalaxd@gmail.com
                    </motion.a>
                    <p className="text-gray-400 text-base">Quetzaltenango, Guatemala</p>

                    {/* Iconos animados */}
                    <motion.div
                      className="flex justify-center md:justify-start space-x-5 mt-6 text-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8, duration: 0.5 }}
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
                  </motion.div>

                  {/* Imagen con animación */}
                  <motion.div
                    className="mt-10 md:mt-0 md:ml-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    <img
                      src="/yo.png"
                      alt="Perfil"
                      className="rounded-full border-4 border-fuchsia-600 w-56 h-56 md:w-64 md:h-64 object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>
            }
          />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Navbar />
      </div>
    </Router>
  );
}
