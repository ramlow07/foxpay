// components/Introduction.tsx
import logo from "@/app/ui/images/logo.png";
import Button from "@mui/material/Button";

export default function Introduction() {
  return (
    <section className="relative h-screen">
      {/* Background Video */}
      <video
        className="opacity-10  absolute inset-0 w-full h-full object-cover "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/creditcard-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-md">
          Seja bem vindo à FoxPay.
        </h1>
        <p className="text-lg mb-6 drop-shadow-sm">
          Empoderando seu negócio com sistemas inteligentes de pagamento.
        </p>
        <Button
          variant="outlined"
          color="primary"
          component="a" // Makes the button render as an anchor tag
          href="https://wa.me/5548996516969?text=Ol%C3%A1!%20Vim%20do%20site%20da%20FoxPay%20e%20gostaria%20de%20saber%20mais." // Replace with your desired link
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
          Saiba mais
        </Button>
      </div>
    </section>
  );
}
