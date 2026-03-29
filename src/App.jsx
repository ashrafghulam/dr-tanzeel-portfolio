import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import FocusAreas from "./components/FocusAreas";
import ComingSoon from "./components/ComingSoon";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <FocusAreas />
      <ComingSoon />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
