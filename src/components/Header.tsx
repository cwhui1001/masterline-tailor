import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Scissors } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from './Button';

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if we are on the homepage
  const isHome = router.pathname === '/';
  
  // Determine if we should use the transparent "dark mode" style (Light text on Dark BG)
  // This applies ONLY when on Home AND not scrolled.
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic classes based on state
  const headerClass = isScrolled
    ? 'bg-background/90 shadow-lg backdrop-blur-md py-4'
    : 'bg-transparent py-8';

  const logoTextClass = isTransparent ? 'text-neutral' : 'text-primary';
  const navLinkClass = isTransparent 
    ? 'text-neutral/90 hover:text-accent' 
    : 'text-secondary hover:text-primary';
  const mobileBtnClass = isTransparent ? 'text-neutral hover:text-accent' : 'text-secondary hover:text-primary';
  const infoBarClass = isTransparent ? 'text-neutral/80 border-neutral/20' : 'text-muted border-muted/20';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerClass}`}
      >
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className={`flex h-11 w-11 items-center justify-center rounded-[2px] transition-colors duration-500 ${isTransparent ? 'bg-neutral text-primary' : 'bg-primary text-neutral'}`}>
                <Scissors size={22} strokeWidth={1.5} />
              </div>
              <span className={`text-2xl font-bold font-serif tracking-tight transition-colors duration-300 ${logoTextClass}`}>
                Masterline Tailor
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${navLinkClass}`}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                href="/contact" 
                variant={isTransparent ? "outline" : "primary"} 
                size="sm"
                className={isTransparent ? "border-neutral text-neutral hover:bg-neutral hover:text-secondary" : ""}
              >
                Book Appointment
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden transition-colors duration-300 ${mobileBtnClass}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown - Always solid background for readability */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-t border-muted/20 p-6 shadow-lg md:hidden flex flex-col gap-4 animate-in slide-in-from-top-2">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Services', href: '/services' },
              { name: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-secondary hover:text-primary py-2 border-b border-muted/10 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
             <Button href="/contact" variant="primary" className="mt-2 w-full justify-center">
              Book Appointment
            </Button>
          </div>
        )}
      </header>
    </>
  );
}
