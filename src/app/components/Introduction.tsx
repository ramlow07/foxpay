// components/Introduction.tsx
import Button from "@mui/material/Button";

export default function Introduction() {
  return (
    <section className="relative h-screen">
      {/* Background Video */}
      <video
        className="opacity-30  absolute inset-0 w-full h-full object-cover "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/creditcard-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0  bg-gradient-to-b from-black/50 to-black"></div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col h-full text-orange-500 text-center px-6">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 overflow-hidden text-3xl font-extralight mb-4 drop-shadow-md self-center py-5 tracking-wider">
          Seja bem vindo à
        </h1>

        <div className="flex flex-col flex-grow justify-center items-center">
          <h1 className="text-7xl font-bold mb-4 drop-shadow-md">FOXPAY</h1>
          <p className="font-extralight tracking-wider text-white text-4xl mb-6 drop-shadow-sm">
            A{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500">
              liberdade
            </span>{" "}
            da sua empresa começa{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 tracking-wider">
              agora.
            </span>
          </p>
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
              borderRadius: "9999px",
              fontWeight: "bold",
              fontSize: "1rem",
              "&:hover": {
                borderColor: "darkorange",
                backgroundColor: "rgba(255, 165, 0, 0.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Saiba mais
          </Button>
        </div>
      </div>
    </section>
  );
}
