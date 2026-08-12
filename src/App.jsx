import ErrorBoundary from "./components/common/ErrorBoundary";
import SocialFab from "./components/common/SocialFab";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./pages/Hero";
import AiFilmSection from "./pages/AiFilmSection";
import FilmSection from "./pages/FilmSection";
import IllustratorSection from "./pages/IllustratorSection";
import ModellingSection from "./pages/ModellingSection";
import ContactSection from "./pages/ContactSection";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-black">
        <Header />
        <main className="bg-black">
          <Hero />
          <AiFilmSection />
          <FilmSection />
          <IllustratorSection />
          <ModellingSection />
          <ContactSection />
        </main>
        <Footer />
        {/* <SocialFab /> */}
      </div>
    </ErrorBoundary>
  );
}
