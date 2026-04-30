import Navbar from "./components/navbar";
import HomePage from "./home/page";
import ServicesPage from "./services/page";
import GalleryPage from "./gallery/page";
import ContactPage from "./contact-us/page";
import Footer from "./components/footer";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HomePage />
        <ServicesPage />
        <GalleryPage />
        <ContactPage />
      </main>

      <Footer />
    </div>
  );
}

export default App;
