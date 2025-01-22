import Button from "@mui/material/Button";

export default function Menu() {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white border-orange-600">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="FoxPay Logo" className="h-16 w-auto" />
      </div>
      <div className="container flex sm:flex-wrap p-4 justify-center align-center">
        {/* Buttons */}
        <nav className="flex justify-center space-x-4 sm:space-x-2">
          <Button
            variant="outlined"
            color="primary"
            component="a"
            href="https://wa.me/5548996516969?text=Ol%C3%A1!%20Vim%20do%20site%20da%20FoxPay%20e%20gostaria%20de%20saber%20mais."
            sx={{
              borderColor: "orange",
              color: "orange",
              px: 3,
              py: 1,
              borderRadius: "9999px", // Full rounded
              fontWeight: "bold",
              fontSize: "1rem",
              "&:hover": {
                borderColor: "darkorange",
                backgroundColor: "rgba(255, 165, 0, 0.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Fale conosco
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component="a"
            href="https://wa.me/5548996516969?text=Ol%C3%A1!%20Vim%20do%20site%20da%20FoxPay%20e%20gostaria%20de%20saber%20mais."
            sx={{
              borderColor: "orange",
              color: "orange",
              px: 3,
              py: 1,
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
            Sobre nós
          </Button>
        </nav>
      </div>
    </header>
  );
}
