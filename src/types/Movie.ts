
export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string[];
  director: string;
  cast: string[];
  duration: string;
  synopsis: string;
  poster: string;
  trailerUrl: string;
  videoUrl: string;
  rating: number;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  movies: Movie[];
}
