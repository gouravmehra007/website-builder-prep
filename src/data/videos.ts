export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  description?: string;
  category?: string;
}

export const videos: Video[] = [
  {
    id: "1",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
    title: "Ganesh Vandana - Live at Siddhivinayak Temple",
    description: "A soulful rendition of Ganesh Vandana performed live during Ganesh Chaturthi celebrations.",
    category: "Live Performance",
  },
  {
    id: "2",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
    title: "Shiv Tandav Stotram",
    description: "Powerful rendition of the ancient Shiv Tandav Stotram dedicated to Lord Shiva.",
    category: "Devotional",
  },
  {
    id: "3",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
    title: "Hanuman Chalisa - Studio Recording",
    description: "Our studio recording of the beloved Hanuman Chalisa with traditional instruments.",
    category: "Studio",
  },
  {
    id: "4",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
    title: "Krishna Bhajan Medley",
    description: "A beautiful medley of Krishna bhajans including Achyutam Keshavam and Hare Krishna.",
    category: "Live Performance",
  },
  {
    id: "5",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
    title: "Durga Aarti - Navratri Special",
    description: "Special Durga Aarti performed during Navratri celebrations at a community gathering.",
    category: "Aarti",
  },
  {
    id: "6",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
    title: "Behind the Scenes - Music Production",
    description: "Take a look at how we create devotional music in our studio.",
    category: "Behind the Scenes",
  },
];

export const videoCategories = [
  { id: "all", label: "All Videos" },
  { id: "Live Performance", label: "Live Performances" },
  { id: "Devotional", label: "Devotional" },
  { id: "Studio", label: "Studio Sessions" },
  { id: "Aarti", label: "Aarti" },
  { id: "Behind the Scenes", label: "Behind the Scenes" },
];
