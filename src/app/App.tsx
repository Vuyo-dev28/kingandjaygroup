import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Philosophy } from './components/Philosophy';
import { MissionVision } from './components/MissionVision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Philosophy />
      <MissionVision />
      <Contact />
      <Footer />
    </div>
  );
}
