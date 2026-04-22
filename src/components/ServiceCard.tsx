import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  price?: string;
  href?: string;
  badgeText?: string;
}

export default function ServiceCard({ title, description, image, price, href = '/services', badgeText }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[2px] bg-neutral border border-muted/20 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-accent flex flex-col h-full">
      {image && (
        <div className="relative h-100 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/0 transition-colors duration-500" />
          
          {badgeText && (
            <div className="absolute top-4 left-4 bg-accent text-neutral text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 shadow-lg">
              {badgeText}
            </div>
          )}
        </div>
      )}
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="mb-3 text-2xl font-bold font-serif text-secondary group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="mb-6 text-muted leading-relaxed flex-grow">
          {description}
        </p>
        <div>
          {price && (
            <p className="mb-6 text-2xl font-semibold text-accent font-serif italic">
              {price}
            </p>
          )}
          <Link href={href} className="inline-flex items-center text-sm font-bold text-primary uppercase tracking-wide group-hover:underline decoration-accent decoration-2 underline-offset-4">
            Learn More &rarr;
          </Link>
        </div>
      </div>
      
      {/* Decorative accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
    </div>
  );
}
