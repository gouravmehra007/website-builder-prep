import { create } from 'zustand';

export interface Track {
  id: string;
  title: string;
  file: string;
  thumbnail?: string;
  artist?: string;
  duration?: number;
}

interface AudioState {
  // Current playback state
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  
  // Playlist
  playlist: Track[];
  currentIndex: number;
  
  // Actions
  setTrack: (track: Track) => void;
  setPlaylist: (tracks: Track[], startIndex?: number) => void;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  next: () => void;
  previous: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
}

export const useAudioStore = create<AudioState>((set, get) => ({
  // Initial state
  currentTrack: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 0.8,
  playlist: [],
  currentIndex: -1,
  
  // Actions
  setTrack: (track) => {
    const { playlist } = get();
    const index = playlist.findIndex((t) => t.id === track.id);
    set({
      currentTrack: track,
      currentIndex: index >= 0 ? index : -1,
      currentTime: 0,
      isPlaying: true,
    });
  },
  
  setPlaylist: (tracks, startIndex = 0) => {
    set({
      playlist: tracks,
      currentTrack: tracks[startIndex] || null,
      currentIndex: startIndex,
      currentTime: 0,
      isPlaying: true,
    });
  },
  
  play: () => set({ isPlaying: true }),
  
  pause: () => set({ isPlaying: false }),
  
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  
  next: () => {
    const { playlist, currentIndex } = get();
    if (playlist.length === 0) return;
    
    const nextIndex = (currentIndex + 1) % playlist.length;
    set({
      currentTrack: playlist[nextIndex],
      currentIndex: nextIndex,
      currentTime: 0,
      isPlaying: true,
    });
  },
  
  previous: () => {
    const { playlist, currentIndex } = get();
    if (playlist.length === 0) return;
    
    const prevIndex = currentIndex <= 0 ? playlist.length - 1 : currentIndex - 1;
    set({
      currentTrack: playlist[prevIndex],
      currentIndex: prevIndex,
      currentTime: 0,
      isPlaying: true,
    });
  },
  
  seek: (time) => set({ currentTime: time }),
  
  setVolume: (volume) => set({ volume: Math.max(0, Math.min(1, volume)) }),
  
  setCurrentTime: (time) => set({ currentTime: time }),
  
  setDuration: (duration) => set({ duration }),
}));
