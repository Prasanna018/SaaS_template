import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"
import { BackgroundAnimation } from "@/components/background-animation"

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundAnimation />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Services />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

