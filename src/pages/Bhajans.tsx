import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import BhajanCard from "@/components/BhajanCard";
import { bhajans, categories } from "@/data/bhajans";
import { useAudioStore } from "@/stores/audioStore";
import { Button } from "@/components/ui/button";
import { Play, Music } from "lucide-react";

const Bhajans = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { setPlaylist, playlist } = useAudioStore();

  const filteredBhajans = activeCategory === "all" 
    ? bhajans 
    : bhajans.filter(b => b.category === activeCategory);

  const handlePlayAll = () => {
    setPlaylist(bhajans, 0);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="text-4xl text-gold mb-4 block">🎵</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gradient-devotional mb-4">
              Divine Bhajans
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Immerse yourself in the sacred melodies that uplift the soul and connect you with the divine
            </p>
            
            <Button 
              onClick={handlePlayAll}
              size="lg" 
              className="bg-gradient-devotional hover:shadow-glow transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" fill="currentColor" />
              Play All Bhajans
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-6 border-b border-border/50 bg-card/30 sticky top-16 z-30 backdrop-blur-md">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id 
                  ? "bg-gradient-devotional" 
                  : "border-border/50 hover:border-gold/50 hover:bg-gold/5"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Bhajans Grid */}
      <section className="py-12">
        <div className="container">
          {filteredBhajans.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBhajans.map((bhajan, index) => (
                <div 
                  key={bhajan.id} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <BhajanCard track={bhajan} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Music className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">No bhajans found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-card/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
              About Our Collection
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Each bhajan in our collection is carefully composed to invoke devotion and peace. 
              From traditional aartis to soul-stirring kirtans, our music spans the rich tapestry 
              of Hindu devotional traditions. Click on any bhajan to start playing, and use the 
              persistent player at the bottom to control playback as you browse.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bhajans;
