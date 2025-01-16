// pages/index.tsx
import Introduction from "./components/Introduction";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import BenefitsSection from "./components/BenefitsSection";
import Footer from "./components/Footer";
import { EmblaOptionsType } from "embla-carousel";
import FeedbackCarousel from "./components/FeedbackCarousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const imageSlides = ["/feedback1.PNG", "/feedback2.PNG", "/feedback3.PNG"];

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-900">
      <Menu />
      <Introduction />
      <Hero />
      <FeedbackCarousel slides={imageSlides} options={OPTIONS} />
      <BenefitsSection />
      <Footer />
    </main>
  );
}
