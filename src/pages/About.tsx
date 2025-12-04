import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Heart, Music, Users, Star } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="text-5xl text-gold mb-4 block">ॐ</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-gradient-devotional mb-6">
              About Sachin-Jatin
            </h1>
            <p className="text-xl text-muted-foreground">
              Two souls united by devotion, spreading divine melodies across hearts
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 bg-card/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <SectionHeading 
                title="Our Journey" 
                subtitle="From Humble Beginnings to Divine Calling"
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sachin and Jatin, two brothers bound not just by blood but by an unwavering devotion to the divine, 
                  began their musical journey in the sacred lanes of Vrindavan. Growing up in a family where morning 
                  prayers were accompanied by harmonium and tabla, music became their language of worship.
                </p>
                <p>
                  Their grandmother, a renowned kirtan singer of her time, planted the seeds of bhakti in their hearts. 
                  By the age of 10, both brothers were performing at local temples, their young voices carrying the 
                  ancient wisdom of Sanskrit shlokas with remarkable depth.
                </p>
                <p>
                  Today, after over 15 years of dedicated practice and performance, Sachin-Jatin have become 
                  synonymous with soulful devotional music that transcends religious boundaries and touches 
                  the spiritual core of every listener.
                </p>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-saffron/20 to-gold/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-8xl text-gold/40">🙏</span>
                  <p className="mt-4 text-muted-foreground italic">Photo of Sachin-Jatin</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-devotional rounded-full blur-3xl opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container">
          <SectionHeading 
            title="Our Mission" 
            subtitle="Spreading Divine Music Through Devotion"
          />
          
          <div className="max-w-3xl mx-auto mt-10 p-8 bg-card/60 rounded-2xl border border-border/50 text-center animate-fade-in-up">
            <blockquote className="text-xl md:text-2xl font-heading text-foreground italic leading-relaxed">
              "We believe that music is the purest form of prayer. Through our bhajans, we aim to create a 
              bridge between the earthly and the divine, helping souls find peace, purpose, and connection 
              with the supreme consciousness."
            </blockquote>
            <div className="mt-6 flex justify-center">
              <div className="w-16 h-1 bg-gradient-devotional rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-saffron/5 via-gold/5 to-maroon/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Music, value: "200+", label: "Bhajans Composed" },
              { icon: Users, value: "50K+", label: "Lives Touched" },
              { icon: Star, value: "500+", label: "Live Concerts" },
              { icon: Heart, value: "15+", label: "Years of Devotion" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-saffron" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient-devotional">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Bhajans Connect */}
      <section className="py-16">
        <div className="container">
          <SectionHeading 
            title="Why Our Bhajans Connect" 
            subtitle="The Essence of Our Music"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              {
                title: "Authentic Tradition",
                description: "Rooted in classical ragas and ancient mantras, our bhajans carry the authentic essence of Vedic traditions.",
              },
              {
                title: "Heartfelt Devotion",
                description: "Every note we sing comes from a place of deep bhakti, making our music resonate with spiritual seekers.",
              },
              {
                title: "Universal Appeal",
                description: "While honoring tradition, we create melodies that speak to modern souls seeking peace and purpose.",
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-card/60 rounded-xl border border-border/50 hover:border-gold/30 transition-all duration-300 animate-fade-in-up card-hover"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
