
import Benefits from './benefits/Benefits';
import Features from './features/Features';
import Footer from './Footer/Footer';
import HeroSection from './HeroSection';
import LandingNavber from './navbar/LandingNavber';
import Team from './teamSection/Team';
const LandingPage = () => {
  return (
    <>
      <div>
        <LandingNavber />
      </div>

      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        className="scrollspy-example"
        tabIndex="0"
      >
       
          <HeroSection />
      

            
            <Features />
            <Benefits/>
            {/* <Team /> */}
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default LandingPage