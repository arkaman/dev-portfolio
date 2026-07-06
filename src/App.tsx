import DarkVeil from './components/DarkVeil';
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { DockContact } from './components/dock-contact';
import Navbar from './components/navbar';
import ScrollIndicator from './components/scroll-indicator';
import { MapPin } from 'lucide-react';

export function App() {
  
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0.5}
          warpAmount={0}
        />
      </div>

      <Navbar />

      <main className="relative z-10">
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-20 px-8 md:flex-row">
            <div className="max-w-xl space-y-2">
              {/* Me */}
              <h1 className="text-6xl font-bold tracking-tight text-white">
                Arkayan Manna
              </h1>

              <p className="text-2xl font-semibold text-neutral-300">
                Full Stack Developer
              </p>

              <p className=" text-neutral-300 flex gap-1 items-center">
                <MapPin className="inline-block h-4 w-4" />
                Kolkata, India
              </p>
              
              <div className="mt-7">
                <DockContact />
              </div>
            </div>

            <div className="hidden md:block">
              {/* Terminal */}
              <Terminal className="w-125 h-75 max-md:w-full font-mono">
                <TypingAnimation delay={0}>$ whoami</TypingAnimation>
                <AnimatedSpan delay={800} className="text-amber-400">
                  arkayanmanna
                </AnimatedSpan>
                <TypingAnimation delay={1600}>$ cat mission.txt</TypingAnimation>
                <AnimatedSpan delay={2400} className="text-blue-200">
                  Turning ideas into reliable software
                </AnimatedSpan>
                <AnimatedSpan delay={3200} className="text-blue-200">
                  through thoughtful engineering.
                </AnimatedSpan>
                <TypingAnimation delay={4800}>$ ls portfolio/</TypingAnimation>
                <AnimatedSpan delay={5600} className="text-blue-500">
                  about.md
                </AnimatedSpan>
                <AnimatedSpan delay={6200} className="text-green-500">
                  projects/
                </AnimatedSpan>
                <AnimatedSpan delay={6800} className="text-blue-500">
                  contact.sh
                </AnimatedSpan>
              </Terminal>
            </div>
          </div>

          <div className="hidden md:block">
            <ScrollIndicator />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
