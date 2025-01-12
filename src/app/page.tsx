// pages/index.tsx
import Introduction from "./components/Introduction";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import BenefitsSection from "./components/BenefitsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-900">
      <Menu />
      <Introduction />
      <Hero />
      <BenefitsSection />
      <Footer />
    </main>
  );
}
