import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import Highmap from "../components/Highmap";
import MarqueeSection from "../components/MarqueeSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      
      <AboutSection />
      <ServicesSection />
      <MarqueeSection />
      <Highmap />
    </div>
  )
}

export default Home;
