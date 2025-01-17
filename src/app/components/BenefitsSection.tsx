import React from "react";
import { MdCallSplit } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { FaPeopleArrows } from "react-icons/fa";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { SiCashapp } from "react-icons/si";

export default function BenefitsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black">
            Porquê escolher a FoxPay?
          </h2>
          <p className="text-lg text-black mt-2">
            Descubra os benefícios de trabalhar conosco.
          </p>
        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Benefit Items */}
          {[
            {
              icon: <MdCallSplit className="w-6 h-6" />,
              title: "Split de pagamentos",
              description:
                "Divida seus recebimentos com organização e segurança",
            },
            {
              icon: <FaPeopleArrows className="w-6 h-6" />,
              title: "Atendimento Humanizado",
              description:
                "Tenha um relacionamento próximo com o seu especialista FoxPay.",
            },
            {
              icon: <CiCreditCard1 className="w-6 h-6" />,
              title: "Aceite as principais bandeiras",
              description:
                "Trabalhamos com as principais bandeiras do mercado.",
            },
            {
              icon: <HiOutlineReceiptTax className="w-6 h-6" />,
              title: "Evite a bitributação.",
              description:
                "Declare da forma correta e evite a cobrança duplicada.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m2-4h.01M12 3c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 18.5 2 13 6.5 3 12 3z"
                  />
                </svg>
              ),
              title: "Item 6",
              description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, dolorem incidunt quae, ipsa sapiente dolore.",
            },
            {
              icon: <SiCashapp className="w-6 h-6" />,
              title: "Receba pagamentos à vista.",
              description: "Recebimentos antecipados, agilidade.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 transform transition-transform duration-300 hover:scale-105 border border-transparent hover:border-orange-500 rounded-lg p-4"
            >
              <div className="flex-shrink-0">
                <div className="bg-orange-500 text-black rounded-full p-3">
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black">
                  {benefit.title}
                </h3>
                <p className="text-black mt-1">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
