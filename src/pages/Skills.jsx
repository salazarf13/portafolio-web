export default function Skills() {
  const skills = {
    "Lenguajes de Programación": [
      { nombre: "Python", porcentaje: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { nombre: "Java", porcentaje: 65, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { nombre: "JavaScript", porcentaje: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { nombre: "HTML", porcentaje: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { nombre: "CSS", porcentaje: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { nombre: "C++", porcentaje: 55, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { nombre: "Kotlin", porcentaje: 50, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { nombre: "PHP", porcentaje: 40, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
  ],
  
  "Frameworks & Librerías": [
    { nombre: "React", porcentaje: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { nombre: "Spring Boot", porcentaje: 50, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { nombre: "Node.js", porcentaje: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { nombre: "Angular", porcentaje: 45, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { nombre: "Tailwind CSS", porcentaje: 85, logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" }
  ],

  "Bases de Datos": [
    { nombre: "MySQL", porcentaje: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { nombre: "NoSQL", porcentaje: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { nombre: "SQL Server", porcentaje: 65, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { nombre: "Firebase", porcentaje: 50, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
  ],

  "Control de Versiones": [
    { nombre: "Git", porcentaje: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { nombre: "GitHub", porcentaje: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
  ],

  "Herramientas": [
    { nombre: "Docker", porcentaje: 40, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { nombre: "Jira", porcentaje: 55, logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" },
    { nombre: "Postman", porcentaje: 65, logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" }
  ],

  "Metodologías": [
    { nombre: "Agile", porcentaje: 70, logo: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png" },
    { nombre: "Scrum", porcentaje: 75, logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" }
  ]
};
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 md:px-8 pt-10 pb-32">
      <div className="bg-[#1f0d38] border-4 border-fuchsia-600 rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Skills y Tecnologías</h2>

        {/* Secciones */}
        <div className="space-y-10">
          {Object.entries(skills).map(([categoria, items]) => (
            <div key={categoria}>
              <h3 className="text-2xl text-fuchsia-400 mb-4">{categoria}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                
                {items.map((skill) => (
                  <div
                    key={skill.nombre}
                    className="bg-[#2a1447] border-2 border-fuchsia-500 rounded-2xl shadow-lg flex flex-col items-center justify-center w-28 h-28 p-2 text-center"
                  >
                    {/* Aquí puedes colocar un logo en vez del emoji si quieres */}
                    <img src={skill.logo} alt={skill.nombre} className="w-8 h-8 mb-1" />
                    
                    <p className="text-white text-sm">{skill.nombre}</p>
                    <p className="text-fuchsia-300 text-xs mt-1">{skill.porcentaje}%</p>
                  </div>
                ))}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
