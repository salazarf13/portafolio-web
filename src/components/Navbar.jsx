import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId;
    if (!isHome) {
      timeoutId = setTimeout(() => {
        setVisible(false);
      }, 2000);
    } else {
      setVisible(true);
    }
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (!isHome) setVisible(true);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full h-20 z-50" onMouseEnter={handleMouseEnter}>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="mx-auto w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="bg-[#1f1f2e] border border-purple-400 text-white rounded-full px-6 py-2 flex items-center space-x-6 shadow-lg">
              <motion.div
                className="bg-[#140028] border border-purple-400 rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shadow-md cursor-pointer"
                whileHover={{ scale: 1.1, boxShadow: "0 0 10px #D946EF" }}
                transition={{ duration: 0.3 }}
              >
                GS
              </motion.div>

              <Link to="/" className="hover:text-purple-400 transition">Home</Link>
              <Link to="/Skills" className="hover:text-purple-400 transition">Skills</Link>
              <Link to="/Proyectos" className="hover:text-purple-400 transition">Proyectos</Link>
              <Link to="/Contacto" className="hover:text-purple-400 transition">Contacto</Link>

              <a
                href="/cv.pdf"
                download
                className="ml-4 border border-purple-400 px-5 py-1 rounded-full text-sm hover:bg-purple-400 hover:text-black transition"
              >
                <i className="fas fa-download mr-1"></i> CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
