import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="text-4xl text-gold mb-4 block">🙏</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gradient-devotional mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you. Reach out for bookings, collaborations, or just to share your experience with our music.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="animate-fade-in-up">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-devotional flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <a href="mailto:contact@sachinjatin.com" className="text-muted-foreground hover:text-saffron transition-colors">
                        contact@sachinjatin.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-devotional flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Phone</h3>
                      <a href="tel:+919876543210" className="text-muted-foreground hover:text-saffron transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-devotional flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Location</h3>
                      <p className="text-muted-foreground">
                        Vrindavan, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-devotional flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Response Time</h3>
                      <p className="text-muted-foreground">
                        Usually within 24-48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="font-medium text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-gold/50 hover:bg-gold/10 transition-all"
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-gold/50 hover:bg-gold/10 transition-all"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-gold/50 hover:bg-gold/10 transition-all"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="bg-card/60 rounded-2xl border border-border/50 p-6 md:p-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Production CTA */}
      <section className="py-12 bg-gradient-to-r from-saffron/5 via-gold/5 to-maroon/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Looking for Music Production?
            </h2>
            <p className="text-muted-foreground">
              We also produce devotional music for other singers and artists. If you're looking to 
              create your own bhajan or spiritual album, select "Music Production Collaboration" 
              in the contact form and tell us about your project.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
