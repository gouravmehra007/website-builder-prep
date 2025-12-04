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
    description: "A divine 9-day celebration of Navratri with special Durga bhajans and garba nights. Over 5000 devotees joined us in this spiritual journey.",
    image: "/images/concert-navratri.jpg",
    attendees: 5000,
  },
  {
    id: "2",
    title: "Janmashtami Special Kirtan",
    date: "2024-08-26",
    location: "Vrindavan, Uttar Pradesh",
    venue: "Banke Bihari Temple",
    description: "Midnight kirtan celebrating Lord Krishna's birth. A magical night filled with devotion, dance, and divine melodies.",
    image: "/images/concert-janmashtami.jpg",
    attendees: 3000,
  },
  {
    id: "3",
    title: "Maha Shivratri Concert",
    date: "2024-03-08",
    location: "Varanasi, Uttar Pradesh",
    venue: "Kashi Vishwanath Temple",
    description: "An all-night musical tribute to Lord Shiva on the auspicious occasion of Maha Shivratri. Devotees from across India gathered for this sacred event.",
    image: "/images/concert-shivratri.jpg",
    attendees: 4500,
  },
  {
    id: "4",
    title: "Ganesh Chaturthi Celebration",
    date: "2023-09-19",
    location: "Pune, Maharashtra",
    venue: "Dagdusheth Halwai Ganpati Temple",
    description: "Special bhajan sandhya during the 10-day Ganesh festival. The air was filled with chants of 'Ganpati Bappa Morya'.",
    image: "/images/concert-ganesh.jpg",
    attendees: 6000,
  },
  {
    id: "5",
    title: "Ram Navami Satsang",
    date: "2023-03-30",
    location: "Ayodhya, Uttar Pradesh",
    venue: "Ram Janmabhoomi",
    description: "A soul-stirring musical celebration of Lord Ram's birth in the holy city of Ayodhya.",
    image: "/images/concert-ramnavami.jpg",
    attendees: 8000,
  },
  {
    id: "6",
    title: "Diwali Musical Evening",
    date: "2023-11-12",
    location: "Delhi",
    venue: "Akshardham Temple",
    description: "Festival of lights celebration with devotional music, ending with a spectacular aarti and fireworks.",
    image: "/images/concert-diwali.jpg",
    attendees: 4000,
  },
];
