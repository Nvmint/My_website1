import './App.css'
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="App bg-orange-3 m-0">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;