import React from "react";
import { MdCallSplit } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { FaPeopleArrows } from "react-icons/fa";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { SiCashapp } from "react-icons/si";
import { MdOutlineAccountBalance } from "react-icons/md";

export default function BenefitsSection() {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            Porquê escolher a FOXPAY?
          </h2>
          <p className="text-lg text-white mt-2">
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
                "Divida seus recebimentos com organização e segurança.",
            },
            {
              icon: <FaPeopleArrows className="w-6 h-6" />,
              title: "Atendimento Humanizado",
              description:
                "Tenha um relacionamento próximo com o seu especialista FOXPAY.",
            },
            {
              icon: <CiCreditCard1 className="w-6 h-6" />,
              title: "Aceite as principais bandeiras",
              description:
                "Trabalhamos com as principais bandeiras do mercado.",
            },
            {
              icon: <HiOutlineReceiptTax className="w-6 h-6" />,
              title: "Declare de forma correta e evite a tributação duplicada.",
              description: "Recebimentos em D1 com agilidade.",
            },
            {
              icon: <MdOutlineAccountBalance className="h-6 w-6" />,
              title: "Conta Digital",
              description:
                "Acesso a conta digital para acompanhamento em tempo real de todas as suas vendas. AUTONOMIA TOTAL na palma da sua mão.",
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
                <div className="bg-orange-500 text-white rounded-full p-3">
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="text-white mt-1">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
