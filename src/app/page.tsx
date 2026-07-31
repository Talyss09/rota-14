import Image from 'next/image';
import { Header } from '@/components/Header';
import { AboutSection } from '@/components/about'
import { FaqSection } from '@/components/FAQ'
import { ContactSection } from '@/components/contacts'
import { ProjectsCarousel } from '@/components/projects'
import { ReviewsSection } from '@/components/reviews'
import { WhyChooseUsSection } from "@/components/whyUs"
import { ServicesSection } from '@/components/services'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/Hero'


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#ffffff]">
      <Header />

      <main>
    
        <section id="hero">
          <Hero/>
        </section>

        <section id="about">
            <AboutSection/>
        </section>

        <section id="projects">
          <ProjectsCarousel/>
        </section>


        <section id="whyUs">
            <WhyChooseUsSection/>
        </section>

        <section id="services">
            <ServicesSection/>
        </section>

        <section id="reviews">
          <ReviewsSection/>
        </section>

        <section id="faq">
            <FaqSection />
        </section>
        
        <section id="contact">
            <ContactSection />
        </section>

      </main>

      <Footer/>
      
    </div>


  );
}