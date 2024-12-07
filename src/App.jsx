import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Experience from "./Components/Experience/Experience.jsx";

import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <Experience />
      <About />
      <Footer />
    </div>
  );
}

export default App;
