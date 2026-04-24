import Link from 'next/link';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-neutral pt-24 pb-12 border-t border-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-16">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-3xl font-bold font-serif text-neutral mb-6">Masterline</h3>
            <p className="text-neutral/70 leading-relaxed mb-8 font-light">
              Bespoke tailoring for the modern gentleman. We craft more than just suits; we craft confidence, legacy, and style.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/masterline_manshop?igsh=eG50NnZvczRyNHNm" },
                { Icon: Facebook, href: "https://www.facebook.com/share/18nquiSCP4/" }
              ].map(({ Icon, href }, i) => (
                 <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral/10 text-neutral hover:bg-accent hover:text-secondary transition-all duration-300">
                    <Icon size={18} />
                 </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-serif text-neutral mb-6 tracking-wide">Explore</h4>
            <ul className="space-y-4">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Services', href: '/services' },
                { label: 'Contact', href: '/contact' },
                { label: 'Pricing', href: '/services' } // Assuming pricing is on services or separate
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-neutral/70 hover:text-accent transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="h-[1px] w-0 bg-accent group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-serif text-neutral mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4">
              {['Three-Piece Suit', 'Two-Piece Suit', 'Traditional Attire', 'Custom Shirts', 'Custom Pants & Slacks', 'Custom Blazers', 'Expert Alterations'].map((service) => (
                <li key={service} className="text-neutral/70 hover:text-neutral transition-colors cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold font-serif text-neutral mb-6 tracking-wide">Visit Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-neutral/70">
                <MapPin size={22} className="text-accent shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=4,+Jalan+SS+15/8B,+SS+15,+47500+Subang+Jaya,+Selangor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-accent transition-colors"
                >
                  4, Jalan SS 15/8B, SS 15,<br />47500 Subang Jaya, Selangor
                </a>
              </li>
              <li className="flex items-center gap-4 text-neutral/70 hover:text-accent transition-colors">
                <Phone size={22} className="text-accent shrink-0" />
                <a href="tel:+60126296326">012-629 6326</a>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral/50 font-light">
          <p>&copy; {new Date().getFullYear()} Masterline Tailor. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
