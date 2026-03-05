export default function Hero() {
  return (
    <section className="border-t border-zinc-900 bg-zinc-950 text-white py-24">
      <div className="container mx-auto px-6 sm:px-12 max-w-4xl">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Transforme seus negócios{" "}
          <span className="text-orange-500">com a FOXPAY</span>
        </h2>

        <p className="text-lg sm:text-xl text-zinc-300 mb-4 max-w-2xl leading-relaxed">
          A solução inteligente que divide seus pagamentos, elimina tributação
          dupla e maximiza seus lucros legalmente.
        </p>

        <p className="text-base text-zinc-500 mb-10 max-w-2xl leading-relaxed">
          Com split de pagamento, você economiza, cresce e conquista mais
          resultados financeiros sem complicações fiscais. Liberdade financeira
          começa aqui.
        </p>

        <a
          href="https://wa.me/5548996516969?text=Ol%C3%A1!%20Vim%20do%20site%20da%20FOXPAY%20e%20gostaria%20de%20saber%20mais."
          className="inline-block px-8 py-3 rounded-full border border-orange-500 text-orange-500 font-semibold text-base hover:bg-orange-500/10 hover:border-orange-400 transition-all duration-300"
        >
          Saiba mais sobre a FOXPAY
        </a>
      </div>
    </section>
  );
}
