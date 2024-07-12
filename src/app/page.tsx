import HeroSection from "@/components/HeroSection";
import { HeroSection2 } from "@/components/HeroSection2";
import { MacBook } from "@/components/MacBook";
import { Reveal } from "@/components/Reveal";
import { AnimatedTooltipPreview } from "@/components/Team";
import { TracingBeam1 } from "@/components/TracingBeam";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mt-24">
        {/* Hero Sections */}
        <section>
          <HeroSection />
        </section>
        <section>
          <HeroSection2 />
        </section>

        {/* Showcase Section */}
        <section>
          <MacBook />
        </section>

        {/* Animation Section */}
        <section>
          <TracingBeam1 />
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Scroll Over To Reveal</h2>
          <Reveal />
        </section>

        {/* Team Section */}
        <section className="bg-zinc-950 text-center text-white py-8">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <AnimatedTooltipPreview />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white py-8 text-center">
        <div className="container mx-auto">
          <p className="mb-4">
            &copy; 2024 Coder-Stop-beta. All rights reserved.
          </p>
          <nav>
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/roshan-jha-20m10/" target="_blank"
                  className="hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </main>
  );
}
