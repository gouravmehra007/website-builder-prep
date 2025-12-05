import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import BhajanCard from "@/components/BhajanCard";
import { bhajans } from "@/data/bhajans";
import { Button } from "@/components/ui/button";
import { Play, Music, Mic, Users, ArrowRight } from "lucide-react";
import productionStudioImg from "@/assets/production-studio.jpg";

const Index = () => {
  // Featured bhajans (first 4)
  const featuredBhajans = bhajans.slice(0, 4);

  return (
    <Layout>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Featured Bhajans Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
        
        <div className="container relative z-10">
          <SectionHeading 
            title="Featured Bhajans"
            subtitle="Listen to our most beloved devotional songs that have touched thousands of hearts"
          />
          
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBhajans.map((bhajan, index) => (
              <div 
                key={bhajan.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BhajanCard track={bhajan} />
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="border-gold/50 hover:bg-gold/10">
              <Link to="/bhajans" className="flex items-center gap-2">
                <Music className="w-5 h-5" />
                View All Bhajans
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Music Production Services */}
      <section className="py-16 bg-gradient-to-r from-saffron/5 via-gold/5 to-maroon/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
                For Artists & Singers
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Professional Music Production Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Are you a singer looking to create your own devotional music? Sachin-Jatin offer professional 
                music production services for bhajans, aartis, and spiritual albums. With over 15 years of experience 
                and state-of-the-art recording facilities, we bring your devotional vision to life with authenticity and excellence.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Professional studio recording with premium equipment",
                  "Custom composition & arrangement in classical ragas",
                  "Traditional & contemporary fusion styles",
                  "Full album production & mastering",
                  "Guidance from experienced devotional musicians",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-gradient-devotional hover:shadow-glow transition-all">
                <Link to="/contact" className="flex items-center gap-2">
                  <Mic className="w-5 h-5" />
                  Discuss Your Project
                </Link>
              </Button>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={productionStudioImg} 
                  alt="Sachin-Jatin Music Production Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-saffron/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Quick Links / About Preview */}
      <section className="py-16">
        <div className="container">
          <SectionHeading 
            title="Our Journey"
            subtitle="Two souls united by devotion, spreading divine melodies across India"
          />
          
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Music,
                title: "200+ Bhajans",
                description: "A vast collection of devotional songs spanning various traditions — from ancient Vedic hymns to soulful Krishna bhajans.",
                link: "/bhajans",
                linkText: "Listen Now",
              },
              {
                icon: Users,
                title: "500+ Concerts",
                description: "Performed at sacred temples, spiritual festivals, and gatherings across India — from Vrindavan to Varanasi.",
                link: "/concerts",
                linkText: "View History",
              },
              {
                icon: Play,
                title: "15+ Years",
                description: "Dedicated to the art of devotional music, spreading spiritual harmony and connecting hearts through sacred melodies.",
                link: "/about",
                linkText: "Our Story",
              },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group p-6 bg-card/60 rounded-xl border border-border/50 hover:border-gold/30 transition-all duration-300 animate-fade-in-up card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-10 h-10 text-saffron mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
                  {item.linkText}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <span className="text-4xl mb-4 block">🙏</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Connect With Us
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you want to book us for a temple kirtan, collaborate on music production, 
              or simply share your experience with our bhajans — we'd love to hear from you. 
              Every message is a blessing to us.
            </p>
            <Button asChild size="lg" className="bg-gradient-devotional hover:shadow-glow transition-all">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
