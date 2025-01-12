import React from "react";

export default function BenefitsSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Porquê escolher a FoxPay?
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Discover the key benefits of working with us.
          </p>
        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Benefit Item 1 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-orange-500 text-white rounded-full p-3">
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
                    d="M9 12l2 2l4-4m1 9a9 9 0 11-18 0a9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Split de pagamentos
              </h3>
              <p className="text-gray-600 mt-1">
                Divida seus recebimentos com organização e segurança
              </p>
            </div>
          </div>

          {/* Benefit Item 2 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-orange-500 text-white rounded-full p-3">
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
                    d="M3 10h11m-6 4l-2-4m10 0l2 4m-7 6V9"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Atendimento Humanizado
              </h3>
              <p className="text-gray-600 mt-1">
                Tenha um relacionamento próximo com o seu especialista FoxPay.
              </p>
            </div>
          </div>

          {/* Benefit Item 3 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-orange-500 text-white rounded-full p-3">
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
                    d="M9 12h6m-3-3v6m8 5a9 9 0 11-18 0a9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Aceite as principais bandeiras
              </h3>
              <p className="text-gray-600 mt-1">
                Trabalhamos com as principais bandeiras do mercado.
              </p>
            </div>
          </div>

          {/* Benefit Item 5 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-orange-500 text-white rounded-full p-3">
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
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Evite a bitributação.
              </h3>
              <p className="text-gray-600 mt-1">
                Declare da forma correta e evite a cobrança duplicada.
              </p>
            </div>
          </div>

          {/* Benefit Item 6 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-orange-500 text-white rounded-full p-3">
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
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Item 6</h3>
              <p className="text-gray-600 mt-1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem quo, dolorem incidunt quae, ipsa sapiente dolore
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-orange-500 text-white rounded-full p-3">
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
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Receba pagamentos à vista.
              </h3>
              <p className="text-gray-600 mt-1">
                Recebimentos antecipados, agilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
