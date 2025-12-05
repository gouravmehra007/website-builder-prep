// Import images
import navratriImg from "@/assets/concert-navratri.jpg";
import janmashtamiImg from "@/assets/concert-janmashtami.jpg";
import shivratriImg from "@/assets/concert-shivratri.jpg";

export interface Concert {
  id: string;
  title: string;
  date: string;
  location: string;
  venue: string;
  description: string;
  image?: string;
  attendees?: number;
}

export const concerts: Concert[] = [
  {
    id: "1",
    title: "Navratri Mahotsav 2024",
    date: "2024-10-15",
    location: "Mumbai, Maharashtra",
    venue: "ISKCON Temple",
    description: "A divine 9-day celebration of Navratri with special Durga bhajans and garba nights. Over 5000 devotees joined us in this spiritual journey, singing and dancing in devotion to Maa Durga.",
    image: navratriImg,
    attendees: 5000,
  },
  {
    id: "2",
    title: "Janmashtami Special Kirtan",
    date: "2024-08-26",
    location: "Vrindavan, Uttar Pradesh",
    venue: "Banke Bihari Temple",
    description: "Midnight kirtan celebrating Lord Krishna's birth in the holy land of Vrindavan. A magical night filled with devotion, dance, and divine melodies that transported devotees to the era of Krishna.",
    image: janmashtamiImg,
    attendees: 3000,
  },
  {
    id: "3",
    title: "Maha Shivratri Concert",
    date: "2024-03-08",
    location: "Varanasi, Uttar Pradesh",
    venue: "Kashi Vishwanath Temple",
    description: "An all-night musical tribute to Lord Shiva on the auspicious occasion of Maha Shivratri. Devotees from across India gathered in the ancient city of Varanasi for this sacred event.",
    image: shivratriImg,
    attendees: 4500,
  },
  {
    id: "4",
    title: "Ganesh Chaturthi Celebration",
    date: "2023-09-19",
    location: "Pune, Maharashtra",
    venue: "Dagdusheth Halwai Ganpati Temple",
    description: "Special bhajan sandhya during the 10-day Ganesh festival at the famous Dagdusheth temple. The air was filled with chants of 'Ganpati Bappa Morya' as thousands gathered in devotion.",
    attendees: 6000,
  },
  {
    id: "5",
    title: "Ram Navami Satsang",
    date: "2023-03-30",
    location: "Ayodhya, Uttar Pradesh",
    venue: "Ram Janmabhoomi",
    description: "A soul-stirring musical celebration of Lord Ram's birth in the holy city of Ayodhya. This historic event was attended by devotees from across the nation celebrating the divine birth.",
    attendees: 8000,
  },
  {
    id: "6",
    title: "Diwali Musical Evening",
    date: "2023-11-12",
    location: "Delhi",
    venue: "Akshardham Temple",
    description: "Festival of lights celebration with devotional music at the magnificent Akshardham Temple. The evening concluded with a spectacular aarti and the lighting of thousands of diyas.",
    attendees: 4000,
  },
];
