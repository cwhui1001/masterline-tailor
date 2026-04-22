import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      slug: "three-piece-suit",
      title: "Three-Piece Suit",
      desc: "The ultimate formal statement. Includes a custom-tailored jacket, trousers, and matching waistcoat for a complete look.",
      image: "/images/three.png",
      price: "From RM 2,800",
    },
    {
      slug: "two-piece-suit",
      title: "Two-Piece Suit",
      desc: "Our signature classic. A perfectly coordinated jacket and trousers tailored to your exact measurements.",
      image: "/images/two.png",
      price: "From RM 2,200",
    },
    {
      slug: "custom-batik-shirts",
      title: "Custom Batik Shirts",
      desc: "Perfectly fitting shirts with your choice of collar, cuff, and monogram. A wardrobe essential using premium batik materials.",
      image: "/images/shirt.png",
      price: "From RM 800",
    },
    {
      slug: "custom-plain-shirt",
      title: "Custom Plain Shirt",
      desc: "Impeccably tailored plain shirts for daily professional wear or formal events. Available in a variety of premium cottons.",
      image: "/images/plainShirt.png",
      price: "From RM 400",
    },
    {
      slug: "custom-blazers",
      title: "Custom Blazers",
      desc: "Versatile blazers for any occasion. Structured or unconstructed, tailored to your style and performance needs.",
      image: "/images/blazer.png",
      price: "From RM 1,800",
    },
    {
      slug: "wedding-attire",
      title: "Wedding Attire",
      desc: "Look your absolute best on your special day. Tuxedos, morning suits, and groomsmen packages available.",
      image: "/images/wedding.png",
      price: "From RM 2,200",
    },
    {
      slug: "traditional-attire",
      title: "Traditional Attire",
      desc: "Masterfully crafted Malay traditional wear including Baju Melayu, blending heritage with modern fit.",
      image: "/images/traditional.png",
      price: "From RM 800",
    },
    {
      slug: "custom-pants-slacks",
      title: "Custom Pants & Slacks",
      desc: "Tailored trousers designed for comfort and elegance. Choose from a wide range of wool, chinos, and linen fabrics.",
      image: "/images/slack.png",
      price: "From RM 450", 
    },
    {
      slug: "alterations-repairs",
      title: "Alterations & Repairs",
      desc: "Expert resizing, relining, and repairs for your existing wardrobe. We treat every garment with care.",
      image: "/images/alteration.png",
      price: "",
    },
    {
      slug: "accessories-styling",
      title: "Accessories Styling",
      desc: "Complete your look with our curated selection of ties, pocket squares, and cufflinks. ",
      image: "/images/accessories.png",
      price: "",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary text-neutral py-20 px-6 text-center">
        <h1 className="text-4xl font-bold font-serif mb-4">Our Services</h1>
        <p className="text-xl text-neutral/80 max-w-2xl mx-auto">
          Comprehensive tailoring solutions designed to meet the highest standards of quality and style.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-background border-b border-muted/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="h-full">
                <ServiceCard
                  title={service.title}
                  description={service.desc}
                  image={service.image}
                  price={service.price}
                  href={`/services/${service.slug}`}
                  badgeText={index < services.length - 2 ? "Materials Included" : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrics Section */}
      <section className="py-24 px-6 bg-neutral/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4 font-serif">Exquisite Fabric Collection</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Behind every masterpiece is the perfect foundation. Explore the world's finest cloths, 
              from Italian wools to Egyptian cottons, available for all our bespoke services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              "WhatsApp Image 2026-03-24 at 20.51.08 (1).jpeg",
              "WhatsApp Image 2026-03-24 at 20.51.08 (2).jpeg",
              "WhatsApp Image 2026-03-24 at 20.51.08.jpeg",
              "WhatsApp Image 2026-03-24 at 20.51.09.jpeg",
              "WhatsApp Image 2026-03-24 at 20.51.11.jpeg",
              "WhatsApp Image 2026-03-24 at 20.51.12 (1).jpeg",
              "WhatsApp Image 2026-03-24 at 20.51.12.jpeg",
              "WhatsApp Image 2026-03-24 at 20.51.13 (1).jpeg",
              "WhatsApp Image 2026-03-24 at 20.51.13 (2).jpeg",
              "WhatsApp Image 2026-03-24 at 20.51.13.jpeg",
              "WhatsApp Image 2026-03-24 at 20.51.14 (1).jpeg",
              "WhatsApp Image 2026-03-24 at 20.51.14 (2).jpeg",
              "WhatsApp Image 2026-03-24 at 20.51.14.jpeg"
            ].map((img, index) => (
              <div key={index} className="relative aspect-square group overflow-hidden rounded-sm bg-neutral border border-muted/5">
                <Image
                  src={`/images/${img}`}
                  alt={`Fabric Sample ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
