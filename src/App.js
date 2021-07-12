
import './App.css';
// import './Styles/styles.scss'
import About from './Layout/About';
import Header from './Layout/Header';
import Gallery from "./Layout/Gallery";
import Capture from "./Layout/Components/Capture";
import Benefits from './Layout/Benefits';
import Testimonials from "./Layout/Testimonials";
import Pricing from './Layout/Pricing';
import Contact from "./Layout/Contact";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* About */}
      <About />
      {/* Capture */}
      <Gallery />
      {/* Capture */}
      <Capture text={"Benefits Of Yoga"} />
      {/* Benefits Yoga */}
      <Benefits />
      {/* Testimonials */}
      <Testimonials />
      {/* Capture */}
      <Capture text={"Pricing Plans"}/>
      {/* Pricing */}
      <Pricing />
      {/* Capture */}
      <Capture text={"Contact Me"}/>
      {/* Contact Me */}
      <Contact />
    </div>
  );
}

export default App;
