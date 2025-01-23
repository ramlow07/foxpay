import Button from "@mui/material/Button";

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center text-white py-24">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black "></div>

      {/* Text Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-12 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-extralight text-orange-500 sm:text-5xl mb-6 leading-tight">
          Transforme seus negócios com a FOXPAY
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
          A solução inteligente que divide seus pagamentos, elimina tributação
          dupla e maximiza seus lucros legalmente.
        </p>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto font-thin leading-tight">
          Com split de pagamento, você economiza, cresce e conquista mais
          resultados financeiros sem complicações fiscais. Liberdade financeira
          começa aqui!
        </p>

        {/* Call to Action Button */}
        <Button
          variant="outlined"
          color="primary"
          component="a"
          href="https://wa.me/5548996516969?text=Ol%C3%A1!%20Vim%20do%20site%20da%20FOXPAY%20e%20gostaria%20de%20saber%20mais."
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
          Saiba Mais Sobre FOXPAY
        </Button>
      </div>
    </section>
  );
}
