import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowLeft, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/Button";

const servicesData = {
  "three-piece-suit": {
    title: "Three-Piece Suit",
    desc: "The ultimate formal statement. Includes a custom-tailored jacket, trousers, and matching waistcoat for a complete look. Our three-piece suits are crafted with precision, ensuring each layer complements the others perfectly. Ideal for weddings, gala events, and high-stakes business meetings.",
    image: "/images/three.png",
    price: "From RM 2,800",
    gallery: ["/images/3piece(2).jpeg", "/images/3piece.jpeg"]
  },
  "two-piece-suit": {
    title: "Two-Piece Suit",
    desc: "Our signature classic. A perfectly coordinated jacket and trousers tailored to your exact measurements. The two-piece suit is the backbone of any man's wardrobe, offering versatility for both professional and social settings. Available in a wide range of premium wools and seasonal fabrics.",
    image: "/images/two.png",
    price: "From RM 2,200",
    gallery: ["/images/2piece.jpeg"]
  },
  "custom-batik-shirts": {
    title: "Custom Batik Shirts",
    desc: "Perfectly fitting shirts with your choice of collar, cuff, and monogram. A wardrobe essential using premium batik materials. Our custom batik shirts combine high-quality fabrics with impeccable tailoring to ensure comfort and style for every occasion, from office wear to formal dinners.",
    image: "/images/shirt.png",
    price: "From RM 800",
    gallery: ["/images/batik1.jpeg", "/images/batik2.png", "/images/batik3.jpeg", "/images/batik4.png", "/images/batik5.png", "/images/batik6.jpeg"]
  },
  "custom-plain-shirt": {
    title: "Custom Plain Shirt",
    desc: "Impeccably tailored plain shirts for daily professional wear or formal events. Available in a variety of premium cottons. Each shirt is designed with your choice of collar and cuff styles, ensuring a crisp and polished appearance.",
    image: "/images/plainShirt.png",
    price: "From RM 400",
    gallery: ["/images/plainShirt.png"]
  },
  "custom-blazers": {
    title: "Custom Blazers",
    desc: "Versatile blazers for any occasion. Structured or unconstructed, tailored to your style and performance needs. Whether you need a sharp navy blazer for the office or a soft linen jacket for the weekend, we craft the perfect piece for your lifestyle.",
    image: "/images/blazer.png",
    price: "From RM 1,800",
    gallery: ["/images/customerBlazer2.png", "/images/customerBlazer.jpeg", "/images/customerBlazer3.png"]
  },
  "wedding-attire": {
    title: "Wedding Attire",
    desc: "Look your absolute best on your special day. Tuxedos, morning suits, and groomsmen packages available. We understand the importance of your wedding day and provide a personalized experience to ensure you and your party are perfectly turned out. Dedicated fittings and coordination services included.",
    image: "/images/wedding.png",
    price: "From RM 2,200",
    gallery: ["/images/customerWedding.jpeg", "/images/3piece(2).jpeg"]
  },
  "traditional-attire": {
    title: "Traditional Attire",
    desc: "Masterfully crafted Malay traditional wear including Baju Melayu, blending heritage with modern fit. We pay close attention to traditional detailing while ensuring the silhouette is contemporary and sharp. Perfect for Hari Raya, weddings, and formal occasions.",
    image: "/images/traditional.png",
    price: "From RM 800",
    gallery: ["/images/traditional.png"]
  },
  "custom-pants-slacks": {
    title: "Custom Pants & Slacks",
    desc: "Tailored trousers designed for comfort and elegance. Choose from a wide range of wool, chinos, and linen fabrics. Every pair is cut to your unique specifications, ensuring the perfect drape and fit that off-the-rack alternatives simply cannot match.",
    image: "/images/slack.png",
    price: "From RM 450",
    gallery: ["/images/slack.png"]
  },
  "alterations-repairs": {
    title: "Alterations & Repairs",
    desc: "Expert resizing, relining, and repairs for your existing wardrobe. We treat every garment with care, from simple hem adjustments to complex reconstructions. Give your favorite pieces a second life with our master tailoring services.",
    image: "/images/alteration.png",
    price: "Price varies",
    gallery: ["/images/alteration.png"]
  },
  "accessories-styling": {
    title: "Accessories Styling",
    desc: "Complete your look with our curated selection of ties, pocket squares, and cufflinks. Beyond tailoring, we offer expert advice on how to pull your entire ensemble together for maximum impact. Small details make the biggest difference in a gentleman's appearance.",
    image: "/images/accessories.png",
    price: "Various",
    gallery: ["/images/accessories2.png", "/images/accessories1.png", "/images/accessories3.png"]
  }
};

export default function ServiceDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const service = servicesData[slug as keyof typeof servicesData];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!service) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % service.gallery.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-secondary mb-4">Service not found</h1>
          <Link href="/services" className="text-accent hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/60126296326?text=Hi Masterline Tailor, I'm interested in your ${service.title} service.`;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % service.gallery.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + service.gallery.length) % service.gallery.length);

  return (
    <div className="flex flex-col bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-secondary/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-7xl mx-auto">
            <Link href="/services" className="inline-flex items-center gap-2 text-neutral/80 hover:text-neutral mb-8 transition-colors">
              <ArrowLeft size={18} /> BACK TO SERVICES
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-neutral mb-6 tracking-tight">
              {service.title}
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-4 text-accent">
                <span className="text-2xl font-serif italic text-secondary">{service.price}</span>
              </div>
              
              <h2 className="text-3xl font-bold font-serif text-secondary">The Craftsmanship</h2>
              <p className="text-lg text-muted leading-relaxed whitespace-pre-wrap">
                {service.desc}
              </p>

              <div className="pt-8 border-t border-muted/20">
                <h3 className="text-xl font-bold font-serif text-secondary mb-6">Ready to proceed?</h3>
                <Link 
                  href={whatsappUrl} 
                  target="_blank" 
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-sm font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <MessageCircle size={22} fill="currentColor" /> BOOK VIA WHATSAPP
                </Link>
              </div>
            </div>

            {/* Right: Gallery Slideshow */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold font-serif text-secondary">Customer Gallery</h3>
              <div className="relative h-[1000px] rounded-sm overflow-hidden border border-muted/10 group shadow-xl bg-neutral/5">
                <div className="absolute inset-0 flex transition-opacity duration-1000">
                  {service.gallery.map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`absolute inset-0 transition-opacity duration-700 ${idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                      <Image
                        src={img}
                        alt={`${service.title} gallery ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-neutral/20 hover:bg-neutral/40 text-neutral rounded-full transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-neutral/20 hover:bg-neutral/40 text-neutral rounded-full transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Counter */}
                <div className="absolute bottom-6 left-6 text-neutral text-sm font-bold tracking-widest bg-secondary/30 px-3 py-1 backdrop-blur-md rounded-full">
                  {currentSlide + 1} / {service.gallery.length}
                </div>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {service.gallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentSlide ? 'w-8 bg-accent' : 'w-2 bg-neutral/50'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 bg-secondary text-neutral text-center">
        <div className="max-w-3xl mx-auto border-y border-neutral/10 py-12">
          <p className="text-xl font-serif italic opacity-80 mb-6">"Quality is never an accident; it is always the result of intelligent effort."</p>
          <p className="font-bold tracking-[0.2em] uppercase text-sm">Masterline Tailor Heritage</p>
        </div>
      </section>
    </div>
  );
}
