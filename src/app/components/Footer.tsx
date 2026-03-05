import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Footer Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">Sobre a FOXPAY</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              A FOXPAY é sua parceira confiável para soluções de pagamento
              inteligentes e eficientes. Impulsione seu negócio e economize com
              taxas desnecessárias.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">Links Rápidos</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://wa.me/5548996516969?text=Ol%C3%A1!%20Vim%20do%20site%20da%20FoxPay%20e%20gostaria%20de%20saber%20mais."
                  className="text-zinc-400 text-sm hover:text-orange-500 transition-colors"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5548996516969?text=Ol%C3%A1!%20Vim%20do%20site%20da%20FoxPay%20e%20gostaria%20de%20saber%20mais."
                  className="text-zinc-400 text-sm hover:text-orange-500 transition-colors"
                >
                  Fale Conosco
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5548996516969?text=Ol%C3%A1!%20Vim%20do%20site%20da%20FoxPay%20e%20gostaria%20de%20saber%20mais."
                  className="text-zinc-400 text-sm hover:text-orange-500 transition-colors"
                >
                  Central de Ajuda
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">Contato</h3>
            <ul className="flex flex-col gap-2 text-zinc-400 text-sm">
              <li>contato@foxpagamentos.com.br</li>
              <li>(48) 9 9651-6969</li>
              <li>Palhoça — SC</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">Siga-nos</h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/foxpayy?igsh=eGUydjR6anJseGI2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-700 text-zinc-400 hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-zinc-900 mt-10 pt-6 text-center">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} FOXPAY. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
