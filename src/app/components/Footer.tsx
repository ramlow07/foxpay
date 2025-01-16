import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Footer Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre a FoxPay</h3>
            <p className="text-black">
              A FoxPay é sua parceira confiável para soluções de pagamento
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
                  href="#about"
                  className="hover:text-orange-500 transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#services"
                  className="hover:text-orange-500 transition-colors"
                >
                  Nossos Serviços
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#contact"
                  className="hover:text-orange-500 transition-colors"
                >
                  Fale Conosco
                </a>
              </li>
              <li>
                <a
                  href="#help"
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
              <li className="mb-2">Email: suporte@foxpay.com</li>
              <li className="mb-2">Telefone: +1 (555) 123-4567</li>
              <li>Endereço: Rua FoxPay, 123, Tech City</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} FoxPay. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
