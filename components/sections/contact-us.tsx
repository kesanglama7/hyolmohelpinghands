'use client';
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";



const ContactSection = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Your message has been sent successfully!");
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hyolmohelpinghands@gmail.com",
      href: "mailto:hyolmohelpinghands@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9841-XXXXXX",
      href: "tel:+9779841000000",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Tinchuli, Kathmandu, Nepal",
      href: "https://share.google/uEuH8mXRkDZGca4MY",
    },
  ];

  return (
    <section id="contact" className=" bg-muted/50">
      <div className="container mx-auto px-4 py-14">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-8">
              Whether you want to volunteer, partner with us, or simply learn more 
              about our work, we're here to help. Reach out through any of the 
              channels below.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-card card-elevated hover:bg-card/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{info.label}</span>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 card-elevated">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  required
                  className="bg-background resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
