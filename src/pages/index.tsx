import Image from "next/image";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Bespoke Suit Fabric"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-neutral pt-20">
          <h1 className="mb-8 max-w-5xl text-5xl font-semibold font-serif leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl animate-in fade-in zoom-in duration-1000">
            Precision in Every <span className="italic font-light">Stitch</span>. <br />
            Elegance in Every <span className="text-accent italic font-light">Detail</span>.
          </h1>
          <p className="mb-12 max-w-2xl text-lg font-light tracking-wide text-neutral/90 sm:text-xl animate-in slide-in-from-bottom-5 duration-1000 delay-300 leading-relaxed">
            Experience the art of bespoke tailoring. Crafted exclusively for you, 
            defining your style with timeless sophistication and modern flair.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row animate-in slide-in-from-bottom-5 duration-1000 delay-500">
            <Button href="/contact" size="lg" className="min-w-[200px]">
              Book Consultation
            </Button>
            <Button href="/services" variant="outline" size="lg" className="min-w-[200px] border-neutral text-neutral hover:bg-neutral hover:text-secondary">
              Explore Collections
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce duration-2000 text-neutral/60">
          <div className="h-10 w-[1px] bg-neutral/60 mx-auto mb-2" />
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        </div>
      </section>

      {/* Intro / Value Prop */}
      <section className="py-24 px-6 bg-neutral">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-8 text-4xl font-bold font-serif text-secondary lg:text-5xl">
              Where Tradition Meets <span className="text-primary italic">Modern Style</span>
            </h2>
            <p className="mb-8 text-lg text-muted leading-relaxed font-light">
              At Masterline Tailor, we believe that a suit is more than just clothing—it's a statement of character. 
              Our master tailors combine generations of craftsmanship with contemporary aesthetics 
              to create garments that fit your body and your lifestyle perfectly.
            </p>
            <ul className="mb-10 space-y-5">
              {['Hand-stitched details & Italian Fabrics', 'Perfect fit guarantee with 3 fittings', 'Personalized styling consultation', 'Lifecycle garment care'].map((item) => (
                <li key={item} className="flex items-center gap-4 text-secondary font-medium group">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-neutral transition-colors">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/about" variant="secondary" className="px-10">
              Read Our Story
            </Button>
          </div>
          <div className="relative h-[600px] w-full rounded-[2px] overflow-hidden shadow-2xl border-8 border-white/50">
             <Image
              src="/images/about.png"
              alt="Master Tailor at Work"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-secondary text-neutral relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <span className="text-accent uppercase tracking-widest text-sm font-bold mb-3 block">Our Craft</span>
            <h2 className="mb-6 text-4xl font-bold font-serif text-neutral lg:text-5xl">Bespoke Services</h2>
            <div className="mx-auto h-[2px] w-24 bg-accent" />
            <p className="mt-6 text-neutral/60 max-w-2xl mx-auto font-light leading-relaxed">
              From the initial consultation to the final fitting, our services are designed to provide 
              an unparalleled clothing experience tailored to your unique requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <ServiceCard 
              title="Bespoke Suits" 
              description="Fully canvassed, hand-cut, and tailored to your exact measurements for an impeccable fit and silhouette."
              image="/images/three.png"
              href="/services"
            />
            <ServiceCard 
              title="Custom Shirts" 
              description="Choose from hundreds of premium cottons and collar styles to create the perfect shirt for any occasion."
              image="/images/plainShirt.png"
              href="/services"
            />
             <ServiceCard 
              title="Expert Alterations" 
              description="Revitalize your wardrobe with our precision alteration services, breathing new life into your favorite garments."
              image="/images/alteration.png"
              href="/services"
            />
          </div>
          <div className="mt-16 text-center">
            <Button href="/services" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-secondary min-w-[200px]">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6 bg-primary text-neutral text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="mb-8 text-4xl font-bold font-serif lg:text-5xl leading-tight">Ready to Elevate Your Style?</h2>
          <p className="mb-12 text-xl text-neutral/90 max-w-2xl mx-auto font-light leading-relaxed">
            Book your private consultation today and start the journey to your perfect garment.
          </p>
          <Button href="/contact" size="lg" className="bg-white text-primary hover:bg-white/80 border-transparent shadow-2xl min-w-[240px]">
            Schedule Appointment
          </Button>
        </div>
      </section>
    </div>
  );
}
