
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Plus, Check } from 'lucide-react';
import { Movie } from '../types/Movie';
import { useWatchlist } from '../contexts/WatchlistContext';
import { Button } from '@/components/ui/button';

interface MovieCardProps {
  movie: Movie;
  size?: 'small' | 'medium' | 'large';
}

const MovieCard = ({ movie, size = 'medium' }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

  const handleWatchlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWatchlist(movie.id)) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-40 h-60';
      case 'large':
        return 'w-80 h-96';
      default:
        return 'w-60 h-80';
    }
  };

  return (
    <div
      className={`${getSizeClasses()} relative group cursor-pointer transition-transform duration-300 hover:scale-105`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/movie/${movie.id}`} className="block w-full h-full">
        {/* Movie Poster */}
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Hover Content */}
          {isHovered && (
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-bold mb-1 line-clamp-2">{movie.title}</h3>
              <p className="text-sm text-gray-300 mb-2">{movie.year}</p>
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  className="bg-white text-black hover:bg-gray-200 flex items-center space-x-1"
                >
                  <Play className="h-4 w-4" />
                  <span>Play</span>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-400 text-white hover:bg-white hover:text-black flex items-center space-x-1"
                  onClick={handleWatchlistClick}
                >
                  {isInWatchlist(movie.id) ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          )}
          
          {/* Rating Badge */}
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            ⭐ {movie.rating}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
