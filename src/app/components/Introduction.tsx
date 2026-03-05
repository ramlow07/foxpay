// components/Introduction.tsx
export default function Introduction() {
  return (
    <section className="relative h-screen">
      {/* Background Video */}
      <video
        className="opacity-50 absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/creditcard-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-6 justify-center items-center text-center">
        <span className="mb-6 inline-block text-xs font-semibold tracking-[0.3em] uppercase text-orange-400 border border-orange-500/40 rounded-full px-4 py-1.5 bg-orange-500/5">
          Soluções Financeiras
        </span>

        <h1 className="text-[clamp(4rem,12vw,9rem)] font-extrabold tracking-widest text-white leading-none mb-4 drop-shadow-xl">
          FOXPAY
        </h1>

        <p className="font-light text-white/80 text-xl sm:text-2xl mb-10 max-w-xl leading-relaxed">
          A{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 font-semibold">
            liberdade
          </span>{" "}
          da sua empresa começa{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 font-semibold">
            agora.
          </span>
        </p>

        <a
          href="https://wa.me/5548996516969?text=Ol%C3%A1!%20Vim%20do%20site%20da%20FoxPay%20e%20gostaria%20de%20saber%20mais."
          className="px-8 py-3 rounded-full border border-orange-500 text-orange-500 font-semibold text-base hover:bg-orange-500/10 hover:border-orange-400 transition-all duration-300"
        >
          Saiba mais
        </a>
      </div>
    </section>
  );
}
