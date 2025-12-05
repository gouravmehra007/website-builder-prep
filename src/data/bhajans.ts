import { Track } from "@/stores/audioStore";

// Import images
import ganeshImg from "@/assets/bhajan-ganesh.jpg";
import vishnuImg from "@/assets/bhajan-vishnu.jpg";
import hanumanImg from "@/assets/bhajan-hanuman.jpg";
import shivaImg from "@/assets/bhajan-shiva.jpg";
import krishnaImg from "@/assets/bhajan-krishna.jpg";
import durgaImg from "@/assets/bhajan-durga.jpg";
import ramImg from "@/assets/bhajan-ram.jpg";
import lakshmiImg from "@/assets/bhajan-lakshmi.jpg";

export const bhajans: Track[] = [
  {
    id: "1",
    title: "Shri Ganesh Vandana",
    file: "/audio/ganesh-vandana.mp3",
    thumbnail: ganeshImg,
    artist: "Sachin-Jatin",
    duration: 312,
    category: "bhajan",
  },
  {
    id: "2",
    title: "Om Jai Jagdish Hare",
    file: "/audio/om-jai-jagdish.mp3",
    thumbnail: vishnuImg,
    artist: "Sachin-Jatin",
    duration: 285,
    category: "aarti",
  },
  {
    id: "3",
    title: "Hanuman Chalisa",
    file: "/audio/hanuman-chalisa.mp3",
    thumbnail: hanumanImg,
    artist: "Sachin-Jatin",
    duration: 420,
    category: "bhajan",
  },
  {
    id: "4",
    title: "Shiv Tandav Stotram",
    file: "/audio/shiv-tandav.mp3",
    thumbnail: shivaImg,
    artist: "Sachin-Jatin",
    duration: 356,
    category: "bhajan",
  },
  {
    id: "5",
    title: "Krishna Bhajan - Radhe Krishna",
    file: "/audio/radhe-krishna.mp3",
    thumbnail: krishnaImg,
    artist: "Sachin-Jatin",
    duration: 298,
    category: "kirtan",
  },
  {
    id: "6",
    title: "Durga Aarti",
    file: "/audio/durga-aarti.mp3",
    thumbnail: durgaImg,
    artist: "Sachin-Jatin",
    duration: 245,
    category: "aarti",
  },
  {
    id: "7",
    title: "Ram Bhajan - Raghupati Raghav",
    file: "/audio/raghupati-raghav.mp3",
    thumbnail: ramImg,
    artist: "Sachin-Jatin",
    duration: 275,
    category: "bhajan",
  },
  {
    id: "8",
    title: "Lakshmi Aarti",
    file: "/audio/lakshmi-aarti.mp3",
    thumbnail: lakshmiImg,
    artist: "Sachin-Jatin",
    duration: 230,
    category: "aarti",
  },
];

export const categories = [
  { id: "all", label: "All Bhajans" },
  { id: "aarti", label: "Aarti" },
  { id: "bhajan", label: "Bhajan" },
  { id: "kirtan", label: "Kirtan" },
];
