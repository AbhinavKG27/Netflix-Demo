export interface Movie {
  id: number;
  title: string;
  thumbnail: string;
  rating: string;
  year: number;
  duration: string;
  genres: string[];
  description: string;
  match: number;
}

import thumb1 from "@/assets/thumb1.jpg";
import thumb2 from "@/assets/thumb2.jpg";
import thumb3 from "@/assets/thumb3.jpg";
import thumb4 from "@/assets/thumb4.jpg";
import thumb5 from "@/assets/thumb5.jpg";
import thumb6 from "@/assets/thumb6.jpg";
import thumb7 from "@/assets/thumb7.jpg";
import thumb8 from "@/assets/thumb8.jpg";
import thumb9 from "@/assets/thumb9.jpg";
import thumb10 from "@/assets/thumb10.jpg";
import thumb11 from "@/assets/thumb11.jpg";
import thumb12 from "@/assets/thumb12.jpg";

export const allMovies: Movie[] = [
  { id: 1, title: "Dark Horizon", thumbnail: thumb1, rating: "TV-MA", year: 2024, duration: "2h 14m", genres: ["Sci-Fi", "Action"], description: "A rogue scientist unravels the fabric of time to save a dying future.", match: 98 },
  { id: 2, title: "Dragon's Oath", thumbnail: thumb2, rating: "TV-14", year: 2023, duration: "2h 32m", genres: ["Fantasy", "Adventure"], description: "An ancient dragon awakens, and a young hero must forge an unlikely alliance.", match: 95 },
  { id: 3, title: "Midnight Code", thumbnail: thumb3, rating: "TV-MA", year: 2024, duration: "1h 52m", genres: ["Crime", "Thriller"], description: "A detective follows a trail of cryptic messages through neon-lit streets.", match: 92 },
  { id: 4, title: "The Haunting", thumbnail: thumb4, rating: "TV-MA", year: 2023, duration: "1h 44m", genres: ["Horror", "Mystery"], description: "A family moves into a house with a dark secret buried beneath its walls.", match: 89 },
  { id: 5, title: "Last Summer", thumbnail: thumb5, rating: "TV-PG", year: 2024, duration: "1h 58m", genres: ["Drama", "Romance"], description: "Two strangers meet on opposite ends of loss and find unexpected connection.", match: 87 },
  { id: 6, title: "Titan Rising", thumbnail: thumb6, rating: "PG-13", year: 2024, duration: "2h 22m", genres: ["Action", "Superhero"], description: "Earth's last defenders unite against an unstoppable cosmic force.", match: 94 },
  { id: 7, title: "Wonder Realm", thumbnail: thumb7, rating: "PG", year: 2023, duration: "1h 38m", genres: ["Animation", "Family"], description: "A magical world is threatened by darkness, and only laughter can save it.", match: 91 },
  { id: 8, title: "Agent Zero", thumbnail: thumb8, rating: "TV-MA", year: 2024, duration: "2h 08m", genres: ["Action", "Spy"], description: "A disavowed spy goes off-grid to stop a global assassination network.", match: 96 },
  { id: 9, title: "Wastelands", thumbnail: thumb9, rating: "TV-MA", year: 2023, duration: "2h 18m", genres: ["Sci-Fi", "Survival"], description: "In a world without water, survival means everything — and trust means nothing.", match: 88 },
  { id: 10, title: "The Last Battle", thumbnail: thumb10, rating: "TV-14", year: 2023, duration: "2h 41m", genres: ["War", "History"], description: "The untold story of a forgotten regiment that changed the course of history.", match: 93 },
  { id: 11, title: "Laugh Track", thumbnail: thumb11, rating: "TV-PG", year: 2024, duration: "1h 32m", genres: ["Comedy", "Drama"], description: "A stand-up comedian navigates fame, family, and a totally chaotic life.", match: 85 },
  { id: 12, title: "Blue Planet: Depths", thumbnail: thumb12, rating: "TV-G", year: 2024, duration: "1h 22m", genres: ["Documentary", "Nature"], description: "Dive into the ocean's most mysterious and unexplored territories.", match: 90 },
];

export const trendingNow = allMovies.slice(0, 6);
export const topPicksForYou = [...allMovies].reverse().slice(0, 6);
export const continueWatching = allMovies.slice(3, 9);
export const newReleases = [...allMovies].sort(() => 0.5 - Math.random()).slice(0, 6);
export const actionThriller = allMovies.filter(m => m.genres.includes("Action") || m.genres.includes("Thriller"));
