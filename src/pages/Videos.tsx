import { useState } from "react";
import { Play, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { videos, videoCategories } from "@/data/videos";
import { cn } from "@/lib/utils";

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const filteredVideos =
    activeCategory === "all"
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-saffron/5 to-transparent">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/10 text-saffron mb-6">
              <Youtube className="w-5 h-5" />
              <span className="text-sm font-medium">Video Gallery</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Watch Our{" "}
              <span className="text-gradient-devotional">Divine Performances</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Experience the devotion through our video collection featuring live
              performances, studio recordings, and behind-the-scenes moments.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40 py-4 bg-background/95 backdrop-blur border-b border-border/40">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {videoCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full transition-all",
                  activeCategory === category.id
                    ? "bg-gradient-devotional shadow-glow"
                    : "hover:border-saffron/50 hover:text-saffron"
                )}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="group rounded-xl overflow-hidden bg-card border border-border/50 hover:shadow-devotional hover:border-gold/30 transition-all duration-300"
                >
                  {/* Video Thumbnail / Player */}
                  <div className="relative aspect-video bg-muted">
                    {playingVideo === video.id ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                        title={video.title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            // Fallback to lower quality thumbnail if maxresdefault not available
                            e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                          }}
                        />
                        {/* Play Overlay */}
                        <button
                          onClick={() => setPlayingVideo(video.id)}
                          className="absolute inset-0 flex items-center justify-center bg-maroon/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <div className="w-16 h-16 rounded-full bg-saffron flex items-center justify-center shadow-glow scale-90 group-hover:scale-100 transition-transform duration-300">
                            <Play className="w-7 h-7 ml-1 text-primary-foreground" fill="currentColor" />
                          </div>
                        </button>
                        {/* YouTube Badge */}
                        <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                          <Youtube className="w-4 h-4 text-red-500" />
                          <span className="text-xs font-medium">YouTube</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Video Info */}
                  <div className="p-4">
                    <span className="text-xs font-medium text-saffron/80 uppercase tracking-wider">
                      {video.category}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-foreground mt-1 group-hover:text-saffron transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {video.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Youtube className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">
                No videos found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-transparent to-saffron/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              title="Subscribe for More"
              subtitle="Follow us on YouTube for the latest bhajans, live performances, and spiritual content."
              centered
            />
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 mt-6"
              onClick={() => window.open("https://youtube.com/@SachinJatin", "_blank")}
            >
              <Youtube className="w-5 h-5 mr-2" />
              Subscribe on YouTube
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
