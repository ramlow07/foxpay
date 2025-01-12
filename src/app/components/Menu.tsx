import Button from "@mui/material/Button";
export default function Menu() {
  return (
    <header className="flex justify-between items-center p-4 bg-white text-black border-orange-600">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="FoxPay Logo" className="h-16 w-auto" />
        <span className="ml-2 font-bold text-lg">FoxPay</span>
      </div>

      {/* Buttons */}
      <nav className="flex space-x-4 sm:space-x-2">
        <Button className="opacity px-6 py-3 bg-zinc-600 text-white rounded-full hover:bg-orange-600 focus:outline-none transition-colors">
          About Us
        </Button>
        <Button variant="outlined" color="primary">
          Outlined Button
        </Button>
      </nav>
    </header>
  );
}
