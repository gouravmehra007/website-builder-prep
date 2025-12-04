import { Track } from "@/stores/audioStore";

export const bhajans: Track[] = [
  {
    id: "1",
    title: "Shri Ganesh Vandana",
    file: "/audio/ganesh-vandana.mp3",
    thumbnail: "/images/ganesh.jpg",
    artist: "Sachin-Jatin",
    duration: 312,
  },
  {
    id: "2",
    title: "Om Jai Jagdish Hare",
    file: "/audio/om-jai-jagdish.mp3",
    thumbnail: "/images/vishnu.jpg",
    artist: "Sachin-Jatin",
    duration: 285,
  },
  {
    id: "3",
    title: "Hanuman Chalisa",
    file: "/audio/hanuman-chalisa.mp3",
    thumbnail: "/images/hanuman.jpg",
    artist: "Sachin-Jatin",
    duration: 420,
  },
  {
    id: "4",
    title: "Shiv Tandav Stotram",
    file: "/audio/shiv-tandav.mp3",
    thumbnail: "/images/shiva.jpg",
    artist: "Sachin-Jatin",
    duration: 356,
  },
  {
    id: "5",
    title: "Krishna Bhajan - Radhe Krishna",
    file: "/audio/radhe-krishna.mp3",
    thumbnail: "/images/krishna.jpg",
    artist: "Sachin-Jatin",
    duration: 298,
  },
  {
    id: "6",
    title: "Durga Aarti",
    file: "/audio/durga-aarti.mp3",
    thumbnail: "/images/durga.jpg",
    artist: "Sachin-Jatin",
    duration: 245,
  },
  {
    id: "7",
    title: "Ram Bhajan - Raghupati Raghav",
    file: "/audio/raghupati-raghav.mp3",
    thumbnail: "/images/ram.jpg",
    artist: "Sachin-Jatin",
    duration: 275,
  },
  {
    id: "8",
    title: "Lakshmi Aarti",
    file: "/audio/lakshmi-aarti.mp3",
    thumbnail: "/images/lakshmi.jpg",
    artist: "Sachin-Jatin",
    duration: 230,
  },
];

export const categories = [
  { id: "all", label: "All Bhajans" },
  { id: "aarti", label: "Aarti" },
  { id: "bhajan", label: "Bhajan" },
  { id: "kirtan", label: "Kirtan" },
];
