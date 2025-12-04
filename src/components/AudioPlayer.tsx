import { useRef, useEffect, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useAudioStore } from "@/stores/audioStore";
import { cn } from "@/lib/utils";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [localCurrentTime, setLocalCurrentTime] = useState(0);
  const [localDuration, setLocalDuration] = useState(0);
  
  const {
    currentTrack,
    isPlaying,
    volume,
    playlist,
    pause,
    play,
    togglePlay,
    next,
    previous,
    setVolume,
  } = useAudioStore();
  
  // Handle play/pause
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.play().catch(() => pause());
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack, pause]);
  
  // Handle volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  
  // Handle track change
  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.src = currentTrack.file;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => pause());
      }
    }
  }, [currentTrack, isPlaying, pause]);
  
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setLocalCurrentTime(audioRef.current.currentTime);
    }
  };
  
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setLocalDuration(audioRef.current.duration);
    }
  };
  
  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setLocalCurrentTime(value[0]);
    }
  };
  
  const handleEnded = () => {
    next();
  };
  
  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  
  // Don't render if no track
  if (!currentTrack) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border shadow-lg">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
      
      {/* Progress Bar */}
      <div className="w-full h-1 bg-muted">
        <div
          className="h-full bg-gradient-devotional transition-all duration-100"
          style={{ width: `${(localCurrentTime / localDuration) * 100 || 0}%` }}
        />
      </div>
      
      <div className="container py-3">
        <div className="flex items-center gap-4">
          {/* Track Info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-saffron/20 to-gold/20">
              {currentTrack.thumbnail ? (
                <img
                  src={currentTrack.thumbnail}
                  alt={currentTrack.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-xl text-gold/60">ॐ</span>
                </div>
              )}
            </div>
            
            <div className="min-w-0">
              <h4 className="font-heading text-sm font-semibold text-foreground truncate">
                {currentTrack.title}
              </h4>
              {currentTrack.artist && (
                <p className="text-xs text-muted-foreground truncate">
                  {currentTrack.artist}
                </p>
              )}
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={previous}
              className="hidden sm:flex hover:text-saffron"
            >
              <SkipBack className="w-5 h-5" />
            </Button>
            
            <Button
              size="icon"
              onClick={togglePlay}
              className={cn(
                "w-10 h-10 rounded-full bg-gradient-devotional hover:shadow-glow transition-all",
                isPlaying && "animate-glow-pulse"
              )}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" fill="currentColor" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="hidden sm:flex hover:text-saffron"
            >
              <SkipForward className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Seek Bar - Desktop */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md">
            <span className="text-xs text-muted-foreground w-10 text-right">
              {formatTime(localCurrentTime)}
            </span>
            <Slider
              value={[localCurrentTime]}
              max={localDuration || 100}
              step={1}
              onValueChange={handleSeek}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground w-10">
              {formatTime(localDuration)}
            </span>
          </div>
          
          {/* Volume - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setVolume(volume === 0 ? 1 : 0)}
              className="hover:text-saffron"
            >
              {volume === 0 ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </Button>
            <Slider
              value={[volume]}
              max={1}
              step={0.01}
              onValueChange={(v) => setVolume(v[0])}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
