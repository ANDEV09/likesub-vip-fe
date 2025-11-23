import Hero from "~/features/landingpage/components/Hero";
import Header from "~/features/landingpage/components/Header";
import Benefits from "~/features/landingpage/components/Benefits";
import Services from "~/features/landingpage/components/Services";
import Faq from "~/features/landingpage/components/Faq";
import Feedback from "~/features/landingpage/components/Feedback";
import Clients from "~/features/landingpage/components/Clients";
import Footer from "~/features/landingpage/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Faq />
      <Feedback />
      <Clients />
      <Footer />
    </div>
  );
}
