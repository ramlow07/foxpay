// components/Introduction.tsx
import logo from "@/app/ui/images/logo.png";
import Button from "@mui/material/Button";

export default function Introduction() {
  return (
    <section className="relative h-screen">
      {/* Background Video */}
      <video
        className="opacity-10  absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/creditcard-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-md">
          Welcome to FoxPay
        </h1>
        <p className="text-lg mb-6 drop-shadow-sm">
          Empowering Your Business with Smart Payment Solutions.
        </p>
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
          Learn More
        </Button>
      </div>
    </section>
  );
}
