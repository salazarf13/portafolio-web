export default function Navbar() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#1f1f2e] text-white rounded-full px-6 py-2 flex space-x-4 shadow-lg z-50">
      <a href="#home" className="hover:text-purple-400 transition">Home</a>
      <a href="#about" className="hover:text-purple-400 transition">About</a>
      <a href="#portfolio" className="hover:text-purple-400 transition">Portfolio</a>
      <a href="#contact" className="hover:text-purple-400 transition">Contancto</a>
      <a
        href="/cv.pdf"
        download
        className="ml-4 border border-purple-400 px-3 py-1 rounded-full text-sm hover:bg-purple-400 hover:text-black transition"
      >
        <i className="fas fa-download mr-1"></i> CV
      </a>
    </nav>
  );
}
