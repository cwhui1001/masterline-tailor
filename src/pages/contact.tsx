import { useState } from "react";
import Button from "@/components/Button";
import { Mail, MapPin, Phone, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "60126296326";
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary text-neutral py-20 px-6 text-center">
        <h1 className="text-4xl font-bold font-serif mb-4">Contact Us</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Ready to start your bespoke journey? Get in touch to schedule your private consultation.
        </p>
      </section>

      <div className="container mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-8 font-serif">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">Visit Our Shop</h3>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=4,+Jalan+SS+15/8B,+SS+15,+47500+Subang+Jaya,+Selangor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted leading-relaxed hover:text-accent transition-colors"
                  >
                    4, Jalan SS 15/8B, SS 15,<br />
                    47500 Subang Jaya, Selangor
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">Call Us</h3>
                  <a href="tel:+60126296326" className="text-muted hover:text-accent transition-colors">
                    012-629 6326
                  </a>
                  <p className="text-sm text-muted/60 mt-1">Mon-Sat, 11am - 8pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">Email Us</h3>
                  <a href="mailto:[EMAIL_ADDRESS]" className="text-muted hover:text-accent transition-colors">
                    [EMAIL_ADDRESS]
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">Opening Hours</h3>
                  <ul className="text-muted space-y-1">
                    <li className="flex justify-between w-56"><span>Mon - Sat:</span> <span>11:00 - 20:00</span></li>
                    <li className="flex justify-between w-56"><span>Sunday:</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral p-8 rounded-sm shadow-lg border border-muted/10">
            <h2 className="text-3xl font-bold text-secondary mb-6 font-serif">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wide text-secondary mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-background border border-muted/20 rounded-[2px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 placeholder:font-light text-secondary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wide text-secondary mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-background border border-muted/20 rounded-[2px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 placeholder:font-light text-secondary"
                    placeholder="012-345 6789"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-bold uppercase tracking-wide text-secondary mb-2">Subject</label>
                 <select 
                   id="subject" 
                   value={formData.subject}
                   onChange={handleChange}
                   className="w-full px-4 py-4 bg-background border border-muted/20 rounded-[2px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 text-secondary cursor-pointer"
                 >
                   <option>General Inquiry</option>
                   <option>Book Appointment</option>
                 </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wide text-secondary mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-background border border-muted/20 rounded-[2px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 placeholder:font-light text-secondary"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full mt-2 flex items-center justify-center gap-3">
                <MessageSquare size={20} /> SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
