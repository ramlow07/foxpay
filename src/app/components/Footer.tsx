import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Footer Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre a FOXPAY</h3>
            <p className="text-white">
              A FOXPAY é sua parceira confiável para soluções de pagamento
              inteligentes e eficientes. Impulsione seu negócio e economize com
              taxas desnecessárias.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="https://wa.me/5548996516969?text=Ol%C3%A1!%20Vim%20do%20site%20da%20FoxPay%20e%20gostaria%20de%20saber%20mais."
                  className="hover:text-orange-500 transition-colors"
                >
                  Nossos Serviços
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://wa.me/5548996516969?text=Ol%C3%A1!%20Vim%20do%20site%20da%20FoxPay%20e%20gostaria%20de%20saber%20mais."
                  className="hover:text-orange-500 transition-colors"
                >
                  Fale Conosco
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5548996516969?text=Ol%C3%A1!%20Vim%20do%20site%20da%20FoxPay%20e%20gostaria%20de%20saber%20mais."
                  className="hover:text-orange-500 transition-colors"
                >
                  Central de Ajuda
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul>
              <li className="mb-2">Email: contato@foxpagamentos.com.br</li>
              <li className="mb-2">Telefone: 48996516969</li>
              <li>Endereço: Palhoça - SC</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/foxpayy?igsh=eGUydjR6anJseGI2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} FOXPAY. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
