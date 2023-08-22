import AboutUs from "./components/AboutUs";
import Faq from "./components/Faq";
import Feature from "./components/Feature";
import Hero from "./components/Hero";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Feature />
      <AboutUs />
      <Faq />
    </main>
  )
}
