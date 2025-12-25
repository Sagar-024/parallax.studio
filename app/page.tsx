import Hero from "./components/Shared/Hero/page";
import { LogoCloud } from "./components/Shared/Logocloud/page";
import { Features } from "./components/Shared/Features/page";
import { FeaturedProjects } from "./components/Shared/FeaturedProjects/page";
import { Process } from "./components/Shared/Process/page";
import { Testimonials } from "./components/Shared/Testimonials/page";
import { CTA } from "./components/Shared/CTA/page";
import { Footer } from "./components/Shared/Footer/page";
export default function Home() {
  return (
    <div className="min-h-screen  font-manrope">
      <Hero />
      <LogoCloud />
      <Features />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
