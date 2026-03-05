"use client";

import React, { useState } from "react";

type FormData = {
  nome: string;
  whatsapp: string;
  segmento: string;
  simplesNacional: string;
  faturamento: string;
  pagarImpostoAlto: string;
  instagram: string;
};

function RadioGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: keyof FormData;
  options: string[];
  value: string;
  onChange: (name: keyof FormData, val: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => {
        const selected = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(name, option)}
            className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all duration-200 ${
              selected
                ? "border-orange-500 bg-orange-500/10 text-white"
                : "border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-zinc-500 hover:text-white"
            }`}
          >
            <span
              className={`inline-block w-3 h-3 rounded-full border-2 mr-3 align-middle transition-all duration-200 ${
                selected
                  ? "border-orange-500 bg-orange-500"
                  : "border-zinc-500 bg-transparent"
              }`}
            />
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default function AnalysisForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    whatsapp: "",
    segmento: "",
    simplesNacional: "",
    faturamento: "",
    pagarImpostoAlto: "",
    instagram: "",
  });
  const [outroSegmento, setOutroSegmento] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleRadio = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.segmento ||
      !formData.simplesNacional ||
      !formData.faturamento ||
      !formData.pagarImpostoAlto
    ) {
      alert("Por favor, responda todas as perguntas antes de enviar.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          segmento:
            formData.segmento === "Outro"
              ? `Outro: ${outroSegmento}`
              : formData.segmento,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors text-sm";

  return (
    <section id="analise" className="border-t border-zinc-900 py-16 bg-black">
      <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-3">
            Solicite uma análise estratégica para a sua empresa pagar menos
            imposto
          </h2>
          <p className="text-zinc-500 text-sm">
            Nem todas as empresas são aprovadas.
          </p>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Step 1 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-orange-500 font-semibold text-lg">
                1. Nome + WhatsApp
              </h3>
              <input
                type="text"
                name="nome"
                placeholder="Nome completo"
                value={formData.nome}
                onChange={handleInput}
                className={inputClass}
                required
              />
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp com DDD"
                value={formData.whatsapp}
                onChange={handleInput}
                className={inputClass}
                required
              />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-orange-500 font-semibold text-lg">
                2. Qual é o seu segmento?
              </h3>
              <RadioGroup
                name="segmento"
                options={[
                  "Comércio de Eletrônicos",
                  "Bares ou Restaurantes",
                  "Outros",
                ]}
                value={formData.segmento}
                onChange={handleRadio}
              />
              {formData.segmento === "Outro" && (
                <input
                  type="text"
                  placeholder="Qual é o seu segmento?"
                  value={outroSegmento}
                  onChange={(e) => setOutroSegmento(e.target.value)}
                  className={inputClass}
                  required
                />
              )}
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-orange-500 font-semibold text-lg">
                3. Sua empresa é optante do Simples Nacional?
              </h3>
              <RadioGroup
                name="simplesNacional"
                options={["Sim", "Não", "Não sei informar"]}
                value={formData.simplesNacional}
                onChange={handleRadio}
              />
            </div>

            {/* Step 4 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-orange-500 font-semibold text-lg">
                4. Qual seu faturamento médio mensal?
              </h3>
              <RadioGroup
                name="faturamento"
                options={[
                  "Até R$ 50 mil",
                  "R$ 50 mil a R$ 150 mil",
                  "Acima de R$ 150 mil",
                ]}
                value={formData.faturamento}
                onChange={handleRadio}
              />
            </div>

            {/* Step 5 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-orange-500 font-semibold text-lg">
                5. Você sente que paga imposto alto sobre o que vende?
              </h3>
              <RadioGroup
                name="pagarImpostoAlto"
                options={["Sim", "Não", "Não sei"]}
                value={formData.pagarImpostoAlto}
                onChange={handleRadio}
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-orange-500 font-semibold text-lg">
                6. Qual o Instagram da sua empresa?
              </h3>
              <input
                type="text"
                name="instagram"
                placeholder="Instagram da empresa"
                value={formData.instagram}
                onChange={handleInput}
                className={inputClass}
                required
              />
            </div>

            {/* Submit */}
            {status === "success" ? (
              <div className="w-full bg-green-600/20 border border-green-500 text-green-400 font-semibold py-4 rounded-lg text-center text-lg">
                Solicitação enviada! Entraremos em contato em breve.
              </div>
            ) : (
              <>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg text-lg transition-colors duration-300"
                >
                  {status === "loading" ? "Enviando..." : "Quero minha análise"}
                </button>
                {status === "error" && (
                  <p className="text-center text-red-400 text-sm">
                    Ocorreu um erro ao enviar. Tente novamente.
                  </p>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
