import { Header } from "../shared/ui/Header";
import { Footer } from "../shared/ui/Footer";
import { HeroSection } from "../domain/home/HeroSection";
import { AboutSection } from "../domain/about/AboutSection";
import { ServicesSection } from "../domain/services/ServicesSection";
import { PortfolioSection } from "../domain/portfolio/PortfolioSection";
import { QuoteSection } from "../domain/quote/QuoteSection";
import { FAQSection } from "../domain/faq/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <QuoteSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
