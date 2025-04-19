import './App.css';
import backgroundVideo from "./assets/background-video.mp4";  // ✅ Fixed path
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills3D from "./components/Skills3D";

function App() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 min-w-full min-h-full object-cover z-[-1]"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div>
          <NavBar />
          <Home />
          <About />
          <Education />
          <Experience />
          <Skills3D /> {/* ✅ Add this line only if Skills3D exists */}
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
