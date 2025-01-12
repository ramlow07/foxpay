import Button from "@mui/material/Button";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/fotos-gratis/conceito-de-pagamento-sem-contato-feminino-segurando-cartao-de-credito-perto-da-tecnologia-nfc-no-cliente-de-balcao-fazer-transacao-pagar-conta-no-terminal-rfid-caixa-eletronico-na-loja-do-restaurante-vista-de-perto_657921-515.jpg?t=st=1736208192~exp=1736211792~hmac=cbc37ab82a9b201656d1906c07aa4b8a63fd7f3f9c0535c7b34faaf9bac57198&w=2000')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Text Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-12 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Como empresário, você trabalha duro para crescer sua empresa e atender
          seus clientes.
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
          Mas você sabia que poderia estar perdendo milhares de reais por ano em
          impostos desnecessários sobre as taxas de processamento de seus
          cartões de crédito?
        </p>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto font-semibold">
          Apresentamos FoxPay - a solução de processamento de cartões de crédito
          que o ajuda a minimizar legalmente sua responsabilidade fiscal e
          aumentar seus lucros.
        </p>

        {/* Call to Action Button */}
        <Button
          variant="outlined"
          color="primary"
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
