import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAudioStore, Track } from "@/stores/audioStore";

interface BhajanCardProps {
  track: Track;
  className?: string;
}

const BhajanCard = ({ track, className }: BhajanCardProps) => {
  const { currentTrack, isPlaying, playlist, setTrack, setPlaylist, togglePlay } = useAudioStore();
  
  const isCurrentTrack = currentTrack?.id === track.id;
  const isCurrentlyPlaying = isCurrentTrack && isPlaying;
  
  const handlePlay = () => {
    if (isCurrentTrack) {
      togglePlay();
    } else {
      // Add track to playlist if not already there
      const trackExists = playlist.some((t) => t.id === track.id);
      if (!trackExists) {
        setPlaylist([...playlist, track], playlist.length);
      } else {
        setTrack(track);
      }
    }
  };
  
  return (
    <div
      className={cn(
        "group relative rounded-xl overflow-hidden bg-card border border-border/50",
        "hover:shadow-devotional hover:border-gold/30 transition-all duration-300",
        "hover:-translate-y-1",
        isCurrentTrack && "ring-2 ring-saffron/50 border-saffron/30",
        className
      )}
    >
      {/* Thumbnail */}
      <div className="relative aspect-square overflow-hidden">
        {track.thumbnail ? (
          <img
            src={track.thumbnail}
            alt={track.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-saffron/20 to-gold/20 flex items-center justify-center">
            <span className="text-6xl text-gold/40">ॐ</span>
          </div>
        )}
        
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-maroon/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            onClick={handlePlay}
            size="lg"
            className={cn(
              "rounded-full w-16 h-16 bg-saffron hover:bg-saffron-dark",
              "shadow-glow scale-90 group-hover:scale-100 transition-all duration-300"
            )}
          >
            {isCurrentlyPlaying ? (
              <Pause className="w-6 h-6" fill="currentColor" />
            ) : (
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            )}
          </Button>
        </div>
        
        {/* Playing Indicator */}
        {isCurrentlyPlaying && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1">
            <span className="flex gap-0.5">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="w-1 bg-saffron rounded-full animate-pulse"
                  style={{
                    height: `${12 + Math.random() * 8}px`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-heading text-lg font-semibold text-foreground truncate group-hover:text-saffron transition-colors">
          {track.title}
        </h3>
        {track.artist && (
          <p className="text-sm text-muted-foreground truncate mt-1">
            {track.artist}
          </p>
        )}
        {track.duration && (
          <p className="text-xs text-muted-foreground/70 mt-2">
            {Math.floor(track.duration / 60)}:{String(track.duration % 60).padStart(2, '0')}
          </p>
        )}
      </div>
    </div>
  );
};

export default BhajanCard;
