import { MdCallSplit } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { FaPeopleArrows } from "react-icons/fa";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { SiCashapp } from "react-icons/si";
import { MdOutlineAccountBalance } from "react-icons/md";

export default function BenefitsSection() {
  return (
    <section id="about" className="border-t border-zinc-900 py-16 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Por que escolher a FOXPAY?
          </h2>
          <p className="text-zinc-400 text-lg">
            Descubra os benefícios de trabalhar conosco.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: <MdCallSplit className="w-5 h-5" />,
              title: "Split de pagamentos",
              description: "Divida seus recebimentos com organização e segurança.",
            },
            {
              icon: <FaPeopleArrows className="w-5 h-5" />,
              title: "Atendimento Humanizado",
              description: "Tenha um relacionamento próximo com o seu especialista FOXPAY.",
            },
            {
              icon: <CiCreditCard1 className="w-5 h-5" />,
              title: "Aceite as principais bandeiras",
              description: "Trabalhamos com as principais bandeiras do mercado.",
            },
            {
              icon: <HiOutlineReceiptTax className="w-5 h-5" />,
              title: "Tributação correta",
              description: "Declare corretamente e evite tributação duplicada. Recebimentos em D1.",
            },
            {
              icon: <MdOutlineAccountBalance className="w-5 h-5" />,
              title: "Conta Digital",
              description: "Acompanhe todas as suas vendas em tempo real. Autonomia total na palma da mão.",
            },
            {
              icon: <SiCashapp className="w-5 h-5" />,
              title: "Receba à vista",
              description: "Recebimentos antecipados com agilidade e sem burocracia.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border border-zinc-800 hover:border-orange-500 rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex-shrink-0">
                <div className="bg-orange-500 text-white rounded-full p-3 group-hover:bg-orange-400 transition-colors duration-300">
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
