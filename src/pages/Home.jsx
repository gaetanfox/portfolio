import { ThemeToggle } from '@/components/ThemeToggle';
import { StarBackground } from '@/components/StarBackground';
import { HeroSection } from '@/components/HeroSection';
import { Navbar } from '@/components/Navbar';
import { About } from '../components/About';
import {SkillsSection} from '../components/SkillsSection'

export const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* Theme toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <About />
        <SkillsSection/>
      </main>
      {/* Footer */}
    </div>
  );
};
