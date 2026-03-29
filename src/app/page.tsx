import EventsSection from "./components/EventsSection";
import HeroSection from "./components/HeroSection";
import NewsletterSection from "./components/NewsletterSection";
import ProgramsSection from "./components/ProgramsSection";
import QuoteSection from "./components/QuoteSection";
import WisdomSection from "./components/WisdomSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <WisdomSection /> */}
      <ProgramsSection />
      <QuoteSection />
      <EventsSection />
      {/* <NewsletterSection /> */}
    </main>
  );
}
