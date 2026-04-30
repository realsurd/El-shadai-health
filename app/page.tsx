import Navbar from "./components/navbar";
import Hero from "./components/hero";
import TrustBadges from "./components/trust-badges";
import Services from "./components/services";
import WhyUs from "./components/whyus";
import Gallery from "./components/gallery";
import Reviews from "./components/reviews";
import CTA from "./components/cta";
import Footer from "./components/footer";

function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <TrustBadges />
      <Services />
      <WhyUs />
      <Gallery />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
