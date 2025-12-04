import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import ConcertCard from "@/components/ConcertCard";
import { concerts } from "@/data/concerts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";

const Concerts = () => {
  // Sort concerts by date (most recent first)
  const sortedConcerts = [...concerts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const totalAttendees = concerts.reduce((sum, c) => sum + (c.attendees || 0), 0);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="text-4xl text-gold mb-4 block">🎤</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gradient-devotional mb-4">
              Concert History
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              A journey through sacred spaces and divine gatherings where music meets devotion
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 border-b border-border/50 bg-card/50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5 text-saffron" />
              <span className="font-heading font-semibold text-foreground">{concerts.length}</span>
              <span>Events</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="font-heading font-semibold text-foreground">
                {new Set(concerts.map(c => c.location.split(',')[1]?.trim())).size}
              </span>
              <span>States</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-maroon" />
              <span className="font-heading font-semibold text-foreground">
                {(totalAttendees / 1000).toFixed(0)}K+
              </span>
              <span>Devotees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Concerts Timeline/Grid */}
      <section className="py-12">
        <div className="container">
          <SectionHeading 
            title="Past Events" 
            subtitle="Memorable moments from our spiritual journey"
          />
          
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedConcerts.map((concert, index) => (
              <div 
                key={concert.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ConcertCard concert={concert} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-saffron/5 via-gold/5 to-maroon/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Invite Us for Your Event
            </h2>
            <p className="text-muted-foreground mb-8">
              Looking to organize a kirtan, satsang, or devotional concert? We would be honored 
              to bring the gift of divine music to your temple, community, or special occasion.
            </p>
            <Button asChild size="lg" className="bg-gradient-devotional hover:shadow-glow transition-all duration-300">
              <Link to="/contact">Book for Concert/Kirtan</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Concerts;
