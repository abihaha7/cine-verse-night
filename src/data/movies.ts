
import { Movie, Category } from '../types/Movie';

export const movies: Movie[] = [
  // Action Movies
  {
    id: 1,
    title: "The Dark Knight",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    duration: "2h 32m",
    synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400",
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 9.0,
    featured: true
  },
  {
    id: 2,
    title: "Avengers: Endgame",
    year: 2019,
    genre: ["Action", "Adventure", "Drama"],
    director: "Anthony Russo, Joe Russo",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    duration: "3h 1m",
    synopsis: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions.",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400",
    trailerUrl: "https://www.youtube.com/embed/TcMBFSGVi1c",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 8.4
  },
  {
    id: 3,
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: ["Action", "Adventure", "Sci-Fi"],
    director: "George Miller",
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
    duration: "2h",
    synopsis: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners.",
    poster: "https://images.unsplash.com/photo-1594736797933-d0d18174ec84?w=400",
    trailerUrl: "https://www.youtube.com/embed/hEJnMQG9ev8",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 8.1
  },
  {
    id: 4,
    title: "John Wick",
    year: 2014,
    genre: ["Action", "Crime", "Thriller"],
    director: "Chad Stahelski",
    cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
    duration: "1h 41m",
    synopsis: "An ex-hit-man comes out of retirement to track down the gangsters that took everything from him.",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400",
    trailerUrl: "https://www.youtube.com/embed/C0BMx-qxsP4",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 7.4
  },
  {
    id: 5,
    title: "Mission: Impossible - Fallout",
    year: 2018,
    genre: ["Action", "Adventure", "Thriller"],
    director: "Christopher McQuarrie",
    cast: ["Tom Cruise", "Henry Cavill", "Ving Rhames"],
    duration: "2h 27m",
    synopsis: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400",
    trailerUrl: "https://www.youtube.com/embed/wb49-oV0F78",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 7.7
  },

  // Sci-Fi Movies
  {
    id: 6,
    title: "Inception",
    year: 2010,
    genre: ["Action", "Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
    duration: "2h 28m",
    synopsis: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into a CEO's mind.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 8.8,
    featured: true
  },
  {
    id: 7,
    title: "Interstellar",
    year: 2014,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    duration: "2h 49m",
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400",
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 8.6
  },
  {
    id: 8,
    title: "Avatar",
    year: 2009,
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    duration: "2h 42m",
    synopsis: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    poster: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400",
    trailerUrl: "https://www.youtube.com/embed/5PSNL1qE6VY",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 7.8
  },
  {
    id: 9,
    title: "Blade Runner 2049",
    year: 2017,
    genre: ["Drama", "Mystery", "Sci-Fi"],
    director: "Denis Villeneuve",
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
    duration: "2h 44m",
    synopsis: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    trailerUrl: "https://www.youtube.com/embed/gCcx85zbxz4",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 8.0
  },
  {
    id: 10,
    title: "The Matrix",
    year: 1999,
    genre: ["Action", "Sci-Fi"],
    director: "Lana Wachowski, Lilly Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    duration: "2h 16m",
    synopsis: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400",
    trailerUrl: "https://www.youtube.com/embed/vKQi3bBA1y8",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 8.7
  },

  // Fantasy Movies
  {
    id: 11,
    title: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    genre: ["Adventure", "Family", "Fantasy"],
    director: "Chris Columbus",
    cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
    duration: "2h 32m",
    synopsis: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    trailerUrl: "https://www.youtube.com/embed/VyHV0BRtdxo",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 7.6,
    featured: true
  },
  {
    id: 12,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    genre: ["Adventure", "Drama", "Fantasy"],
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    duration: "2h 58m",
    synopsis: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    trailerUrl: "https://www.youtube.com/embed/V75dMMIW2B4",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 8.8
  },
  {
    id: 13,
    title: "Pan's Labyrinth",
    year: 2006,
    genre: ["Drama", "Fantasy", "War"],
    director: "Guillermo del Toro",
    cast: ["Ivana Baquero", "Ariadna Gil", "Sergi López"],
    duration: "1h 58m",
    synopsis: "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
    poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    trailerUrl: "https://www.youtube.com/embed/EqYiSlkvRuw",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 8.2
  },
  {
    id: 14,
    title: "The Shape of Water",
    year: 2017,
    genre: ["Adventure", "Drama", "Fantasy"],
    director: "Guillermo del Toro",
    cast: ["Sally Hawkins", "Octavia Spencer", "Michael Shannon"],
    duration: "2h 3m",
    synopsis: "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
    poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    trailerUrl: "https://www.youtube.com/embed/XFYWazblaUA",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 7.3
  },
  {
    id: 15,
    title: "Doctor Strange",
    year: 2016,
    genre: ["Action", "Adventure", "Fantasy"],
    director: "Scott Derrickson",
    cast: ["Benedict Cumberbatch", "Chiwetel Ejiofor", "Rachel McAdams"],
    duration: "1h 55m",
    synopsis: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
    poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    trailerUrl: "https://www.youtube.com/embed/HSzx-zryEgM",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 7.5
  },

  // Comedy Movies
  {
    id: 16,
    title: "Superbad",
    year: 2007,
    genre: ["Comedy"],
    director: "Greg Mottola",
    cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"],
    duration: "1h 53m",
    synopsis: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
    poster: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400",
    trailerUrl: "https://www.youtube.com/embed/4eaZ_48ZYog",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 7.6
  },
  {
    id: 17,
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: ["Adventure", "Comedy", "Crime"],
    director: "Wes Anderson",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    duration: "1h 39m",
    synopsis: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    poster: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400",
    trailerUrl: "https://www.youtube.com/embed/1Fg5iWmQjwk",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 8.1
  },
  {
    id: 18,
    title: "Knives Out",
    year: 2019,
    genre: ["Comedy", "Crime", "Drama"],
    director: "Rian Johnson",
    cast: ["Daniel Craig", "Chris Evans", "Ana de Armas"],
    duration: "2h 10m",
    synopsis: "A detective investigates the death of a patriarch of an eccentric, combative family.",
    poster: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400",
    trailerUrl: "https://www.youtube.com/embed/qGqiHJTsRkQ",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 7.9
  },
  {
    id: 19,
    title: "Deadpool",
    year: 2016,
    genre: ["Action", "Comedy"],
    director: "Tim Miller",
    cast: ["Ryan Reynolds", "Morena Baccarin", "T.J. Miller"],
    duration: "1h 48m",
    synopsis: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
    poster: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400",
    trailerUrl: "https://www.youtube.com/embed/9vN6DHB6bJc",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 8.0
  },
  {
    id: 20,
    title: "Guardians of the Galaxy",
    year: 2014,
    genre: ["Action", "Adventure", "Comedy"],
    director: "James Gunn",
    cast: ["Chris Pratt", "Vin Diesel", "Bradley Cooper"],
    duration: "2h 1m",
    synopsis: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    poster: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400",
    trailerUrl: "https://www.youtube.com/embed/d96cjJhvlMA",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 8.0
  },

  // Horror Movies
  {
    id: 21,
    title: "Get Out",
    year: 2017,
    genre: ["Horror", "Mystery", "Thriller"],
    director: "Jordan Peele",
    cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
    duration: "1h 44m",
    synopsis: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    poster: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400",
    trailerUrl: "https://www.youtube.com/embed/DzfpyUB60YY",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 7.7
  },
  {
    id: 22,
    title: "A Quiet Place",
    year: 2018,
    genre: ["Drama", "Horror", "Sci-Fi"],
    director: "John Krasinski",
    cast: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"],
    duration: "1h 30m",
    synopsis: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
    poster: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400",
    trailerUrl: "https://www.youtube.com/embed/WR7cc5t7tv8",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 7.5
  },
  {
    id: 23,
    title: "Hereditary",
    year: 2018,
    genre: ["Drama", "Horror", "Mystery"],
    director: "Ari Aster",
    cast: ["Toni Collette", "Milly Shapiro", "Gabriel Byrne"],
    duration: "2h 7m",
    synopsis: "A grieving family is haunted by tragedy and disturbing secrets.",
    poster: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400",
    trailerUrl: "https://www.youtube.com/embed/V6wWKNij_1M",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 7.3
  },
  {
    id: 24,
    title: "The Conjuring",
    year: 2013,
    genre: ["Horror", "Mystery", "Thriller"],
    director: "James Wan",
    cast: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"],
    duration: "1h 52m",
    synopsis: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    poster: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400",
    trailerUrl: "https://www.youtube.com/embed/k10ETZ41q5o",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 7.5
  },
  {
    id: 25,
    title: "It",
    year: 2017,
    genre: ["Horror"],
    director: "Andy Muschietti",
    cast: ["Bill Skarsgård", "Jaeden Martell", "Finn Wolfhard"],
    duration: "2h 15m",
    synopsis: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry.",
    poster: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400",
    trailerUrl: "https://www.youtube.com/embed/FnCdOQsX5kc",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 7.3
  },

  // Romance Movies
  {
    id: 26,
    title: "La La Land",
    year: 2016,
    genre: ["Comedy", "Drama", "Music", "Romance"],
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone", "Rosemarie DeWitt"],
    duration: "2h 8m",
    synopsis: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    trailerUrl: "https://www.youtube.com/embed/0pdqf4P9MB8",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 8.0
  },
  {
    id: 27,
    title: "The Notebook",
    year: 2004,
    genre: ["Drama", "Romance"],
    director: "Nick Cassavetes",
    cast: ["Ryan Gosling", "Rachel McAdams", "James Garner"],
    duration: "2h 3m",
    synopsis: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    trailerUrl: "https://www.youtube.com/embed/FC6biTjEyZw",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 7.8
  },
  {
    id: 28,
    title: "Her",
    year: 2013,
    genre: ["Drama", "Romance", "Sci-Fi"],
    director: "Spike Jonze",
    cast: ["Joaquin Phoenix", "Scarlett Johansson", "Amy Adams"],
    duration: "2h 6m",
    synopsis: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    trailerUrl: "https://www.youtube.com/embed/ne6p6MfLBxc",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 8.0
  },
  {
    id: 29,
    title: "Before Sunset",
    year: 2004,
    genre: ["Drama", "Romance"],
    director: "Richard Linklater",
    cast: ["Ethan Hawke", "Julie Delpy", "Vernon Dobtcheff"],
    duration: "1h 20m",
    synopsis: "Nine years after Jesse and Celine first met, they encounter each other again on the French leg of Jesse's book tour.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    trailerUrl: "https://www.youtube.com/embed/yTcWg4VdKpU",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 8.1
  },
  {
    id: 30,
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    genre: ["Drama", "Romance", "Sci-Fi"],
    director: "Michel Gondry",
    cast: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst"],
    duration: "1h 48m",
    synopsis: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    trailerUrl: "https://www.youtube.com/embed/07-QBnEkgXU",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    rating: 8.3
  }
];

export const categories: Category[] = [
  {
    id: 'action',
    name: 'Action',
    movies: movies.filter(movie => movie.genre.includes('Action'))
  },
  {
    id: 'sci-fi',
    name: 'Sci-Fi',
    movies: movies.filter(movie => movie.genre.includes('Sci-Fi'))
  },
  {
    id: 'fantasy',
    name: 'Fantasy',
    movies: movies.filter(movie => movie.genre.includes('Fantasy'))
  },
  {
    id: 'comedy',
    name: 'Comedy',
    movies: movies.filter(movie => movie.genre.includes('Comedy'))
  },
  {
    id: 'horror',
    name: 'Horror',
    movies: movies.filter(movie => movie.genre.includes('Horror'))
  },
  {
    id: 'romance',
    name: 'Romance',
    movies: movies.filter(movie => movie.genre.includes('Romance'))
  },
  {
    id: 'drama',
    name: 'Drama',
    movies: movies.filter(movie => movie.genre.includes('Drama'))
  },
  {
    id: 'thriller',
    name: 'Thriller',
    movies: movies.filter(movie => movie.genre.includes('Thriller'))
  }
];

export const featuredMovies = movies.filter(movie => movie.featured);
