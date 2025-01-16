import Button from "@mui/material/Button";

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center text-black py-24">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white "></div>

      {/* Text Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-12 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-extralight text-orange-500 sm:text-5xl mb-6 leading-tight">
          Como empresário, você trabalha duro para crescer sua empresa e atender
          seus clientes.
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
          Mas você sabia que poderia estar perdendo milhares de reais por ano em
          impostos desnecessários sobre as taxas de processamento de seus
          cartões de crédito?
        </p>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto font-thin leading-tight">
          Apresentamos FoxPay - a solução de processamento de cartões de crédito
          que o ajuda a minimizar legalmente sua responsabilidade fiscal e
          aumentar seus lucros.
        </p>

        {/* Call to Action Button */}
        <Button
          variant="outlined"
          color="primary"
          component="a"
          href="https://wa.me/5548996516969?text=Ol%C3%A1!%20Vim%20do%20site%20da%20FoxPay%20e%20gostaria%20de%20saber%20mais."
          sx={{
            borderColor: "orange",
            color: "orange",
            px: 4,
            py: 1.5,
            borderRadius: "9999px", // Full rounded
            fontWeight: "bold",
            fontSize: "1rem",
            "&:hover": {
              borderColor: "darkorange",
              backgroundColor: "rgba(255, 165, 0, 0.1)", // Slight orange background on hover
            },
            transition: "all 0.3s ease",
          }}
        >
          Saiba Mais Sobre FoxPay
        </Button>
      </div>
    </section>
  );
}
