import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    "Lenguajes de Programación": [
      { nombre: "Python", nivel: "Avanzado", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { nombre: "Java", nivel: "Intermedio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { nombre: "JavaScript", nivel: "Intermedio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { nombre: "HTML", nivel: "Avanzado", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { nombre: "CSS", nivel: "Avanzado", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { nombre: "C++", nivel: "Avanzado", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { nombre: "Kotlin", nivel: "Avanzado", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { nombre: "PHP", nivel: "Básico", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
    ],
    "Frameworks & Librerías": [
      { nombre: "React", nivel: "Básico", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { nombre: "Spring Boot", nivel: "Básico", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { nombre: "Node.js", nivel: "Básico", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { nombre: "Angular", nivel: "Básico", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { nombre: "Tailwind CSS", nivel: "Básico", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" }
    ],
    "Bases de Datos": [
      { nombre: "MySQL", nivel: "Intermedio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { nombre: "NoSQL", nivel: "Básico", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { nombre: "SQL Server", nivel: "Básico", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      { nombre: "Firebase", nivel: "Avanzado", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
    ],
    "Control de Versiones": [
      { nombre: "Git", nivel: "Básico", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { nombre: "GitHub", nivel: "Básico", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ],
    "Herramientas": [
      { nombre: "Docker", nivel: "Básico", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { nombre: "Jira", nivel: "Intermedio", logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" },
      { nombre: "Postman", nivel: "Intermedio", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" }
    ],
    "Metodologías": [
      { nombre: "Agile", nivel: "Básico", logo: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png" },
      { nombre: "Scrum", nivel: "Básico", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" }
    ]
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 md:px-8 pt-10 pb-32">
      <motion.div
        className="bg-[#1f0d38] border-4 border-fuchsia-600 rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-5xl text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Skills y Tecnologías</h2>

        <div className="space-y-10">
          {Object.entries(skills).map(([categoria, items]) => (
            <motion.div
              key={categoria}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl text-fuchsia-400 mb-4">{categoria}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {items.map((skill, index) => (
                  <motion.div
                    key={skill.nombre}
                    className="bg-[#2a1447] border-2 border-fuchsia-500 rounded-2xl shadow-lg flex flex-col items-center justify-center w-28 h-28 p-2 text-center cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 15px #D946EF" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.img
                      src={skill.logo}
                      alt={skill.nombre}
                      className="w-8 h-8 mb-1"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                    <p className="text-white text-sm">{skill.nombre}</p>
                    <p className="text-fuchsia-300 text-xs mt-1">{skill.nivel}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
