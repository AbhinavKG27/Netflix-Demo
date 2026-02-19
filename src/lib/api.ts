const API_KEY = "1db10670";
const BASE_URL = "https://www.omdbapi.com";

export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

export interface MovieDetails extends Movie {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  BoxOffice?: string;
}

export interface SearchResponse {
  Search?: Movie[];
  totalResults?: string;
  Response: string;
  Error?: string;
}

export async function searchMovies(query: string, page = 1): Promise<SearchResponse> {
  const res = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`);
  if (!res.ok) throw new Error("Network error");
  return res.json();
}

export async function getMovieDetails(imdbID: string): Promise<MovieDetails> {
  const res = await fetch(`${BASE_URL}/?apikey=${API_KEY}&i=${imdbID}&plot=full`);
  if (!res.ok) throw new Error("Network error");
  const data = await res.json();
  if (data.Response === "False") throw new Error(data.Error || "Movie not found");
  return data;
}

export const FALLBACK_POSTER = "https://via.placeholder.com/300x450/1a1a1a/666?text=No+Poster";

export const CATEGORIES = [
  { title: "Trending Now", query: "avengers" },
  { title: "Top Rated", query: "dark knight" },
  { title: "Action Movies", query: "mission impossible" },
  { title: "Comedy", query: "comedy" },
  { title: "Sci-Fi", query: "interstellar" },
] as const;
