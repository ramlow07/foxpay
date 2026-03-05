export default function Menu() {
  return (
    <header className="header_menu flex justify-between items-center px-6 py-4 bg-black text-white border-b border-zinc-900">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="FoxPay Logo" className="h-14 w-auto" />
      </div>

      {/* Buttons */}
      <nav className="flex items-center gap-3">
        <a
          href="#about"
          className="menu_button px-5 py-2 rounded-full border border-zinc-700 text-zinc-300 text-sm font-medium hover:border-zinc-500 hover:text-white transition-all duration-300"
        >
          Sobre nós
        </a>
        <a
          href="#analise"
          className="menu_button px-5 py-2 rounded-full border border-orange-500 text-orange-500 text-sm font-semibold hover:bg-orange-500/10 hover:border-orange-400 transition-all duration-300"
        >
          Fale conosco
        </a>
      </nav>
    </header>
  );
}
