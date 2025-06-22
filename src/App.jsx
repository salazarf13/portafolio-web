import './index.css';
import Navbar from './components/Navbar'; // Asegúrate de que Navbar esté en esta ruta

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f1c] text-white font-sans pb-16"> {/* padding abajo para que el navbar no tape el contenido */}


    
          {/* Header */}
      <header className="text-center py-10 px-4 flex flex-col items-center justify-center">
        <div className="w-full mx-4">
          <div className="bg-gradient-to-br from-[#2b0c4b] via-[#0d0a1b] to-[#4a0f6a] bg-opacity-70 rounded-xl p-6 md:p-8 shadow-lg flex flex-col md:flex-row items-center justify-center gap-20"> {/* Aumentamos el 'gap' a gap-10 */}
            <img
              src="https://sdmntprwestus.oaiusercontent.com/files/00000000-10ac-6230-a1a9-790cc8380ef4/raw?se=2025-06-22T04%3A44%3A20Z&sp=r&sv=2024-08-04&sr=b&scid=c9738d37-460b-58e4-b5ef-881658e578d2&skoid=71e8fa5c-90a9-4c17-827b-14c3005164d6&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-21T17%3A38%3A53Z&ske=2025-06-22T17%3A38%3A53Z&sks=b&skv=2024-08-04&sig=9wV/oqgxGXHyefdqCa1pzs9R2oKiRx3t0vPSxuvT4VI%3D"
              alt="Perfil"
              className="rounded-full border-4 border-purple-600 w-32 h-32 md:w-48 md:h-48 object-cover"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">German Salazar</h1>
              <p className="text-purple-400">Ingeniero en sistemas</p>
              <a href="mailto:gersalaxd@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline block mt-2">gersalaxd@gmail.com</a>
              <p className="text-sm text-gray-400">Quetzaltenango, Guatemala</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="mailto:gersalaxd@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope text-white"></i></a>
                <a href="https://github.com/tu-usuario-github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-white"></i></a>
                <a href="https://www.linkedin.com/in/tu-perfil-linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin text-white"></i></a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* About My Resume */}
      <section id="about" className="bg-[#1a1a2e] rounded-xl p-6 mx-4 mb-6">
        <h2 className="text-2xl font-bold text-center mb-6">Sobre mi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p><strong>Edad:</strong> 22</p>
            <p><strong>País:</strong> USA</p>
            <p><strong>Dirección:</strong> 80 Broome Street, Some Town</p>
            <p><strong>Email:</strong> gersalaxd@gmail.com</p>
            <p><strong>Freelance:</strong> Disponible</p>
          </div>
          <img
            src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-1ff8-61f8-ad58-100bca207761/raw?se=2025-06-22T05%3A25%3A07Z&sp=r&sv=2024-08-04&sr=b&scid=b95c28ca-c67c-5d53-a070-141bdb18e843&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-21T17%3A38%3A48Z&ske=2025-06-22T17%3A38%3A48Z&sks=b&skv=2024-08-04&sig=Y8nsNH6sAEPDSqSLnkXN650mZLZhS%2B7JqMozTRK5EMQ%3D"
            alt="Team"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 pb-20">
        {[
          { label: 'Graphic Design', percent: 50 },
          { label: 'Web Development', percent: 75 },
          { label: 'Marketing', percent: 38 },
          { label: 'UI/UX', percent: 63 },
        ].map(skill => (
          <div key={skill.label} className="bg-[#1f1f2e] rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-purple-400">{skill.percent}%</p>
            <p className="text-sm mt-2 text-white">{skill.label}</p>
          </div>
        ))}
      </section>

      {/* Navbar fija en la parte inferior */}
      <Navbar />
    </div>
  );
}
