// pages/index.tsx
import Introduction from "./components/Introduction";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import BenefitsSection from "./components/BenefitsSection";
import Footer from "./components/Footer";
import { EmblaOptionsType } from "embla-carousel";
import FeedbackCarousel from "./components/FeedbackCarousel";

const OPTIONS: EmblaOptionsType = { loop: true };

const imageSlides = [
  "/feedback1.PNG",
  "/feedback2.PNG",
  "/feedback3.PNG",
  "/feedback4.PNG",
  "/feedback5.PNG",
];

export default function Home() {
  return (
    <main className=" text-gray-900 bg-black">
      <Menu />
      <Introduction />
      <Hero />
      <FeedbackCarousel slides={imageSlides} options={OPTIONS} />
      <BenefitsSection />
      <Footer />
    </main>
  );
}
