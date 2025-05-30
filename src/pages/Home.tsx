
import { Link } from 'react-router-dom';
import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MovieRow from '../components/MovieRow';
import { featuredMovies, categories } from '../data/movies';

const Home = () => {
  const heroMovie = featuredMovies[0];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroMovie.poster})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold text-white mb-4">
              {heroMovie.title}
            </h1>
            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              {heroMovie.synopsis}
            </p>
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-green-400 font-semibold">★ {heroMovie.rating}</span>
              <span className="text-gray-300">{heroMovie.year}</span>
              <span className="text-gray-300">{heroMovie.duration}</span>
              <span className="text-gray-300">{heroMovie.genre.join(', ')}</span>
            </div>
            <div className="flex space-x-4">
              <Link to={`/movie/${heroMovie.id}`}>
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Play Now</span>
                </Button>
              </Link>
              <Link to={`/movie/${heroMovie.id}`}>
                <Button size="lg" variant="outline" className="border-gray-400 text-white hover:bg-white hover:text-black flex items-center space-x-2">
                  <Info className="h-5 w-5" />
                  <span>More Info</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Rows */}
      <div className="py-8 space-y-8">
        <MovieRow title="Featured Movies" movies={featuredMovies} />
        
        {categories.slice(0, 6).map((category) => (
          <MovieRow 
            key={category.id} 
            title={category.name} 
            movies={category.movies.slice(0, 10)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
