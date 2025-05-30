
import { useState } from 'react';
import { Grid, List, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MovieCard from '../components/MovieCard';
import { useWatchlist } from '../contexts/WatchlistContext';
import { Link } from 'react-router-dom';

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  if (watchlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Your Watchlist is Empty</h1>
          <p className="text-gray-400 mb-8">Start adding movies to your watchlist to see them here</p>
          <Link to="/">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Browse Movies
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">My Watchlist</h1>
            <p className="text-gray-400">{watchlist.length} movies saved</p>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Button
              size="sm"
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant={viewMode === 'list' ? 'default' : 'outline'}
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Movies */}
        <div className={
          viewMode === 'grid' 
            ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
            : "space-y-4"
        }>
          {watchlist.map((movie) => (
            viewMode === 'grid' ? (
              <MovieCard key={movie.id} movie={movie} size="small" />
            ) : (
              <div key={movie.id} className="flex bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  className="w-24 h-36 object-cover"
                />
                <div className="flex-1 p-4">
                  <h3 className="text-white text-xl font-semibold mb-2">{movie.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{movie.year} • {movie.duration}</p>
                  <p className="text-gray-300 text-sm line-clamp-2">{movie.synopsis}</p>
                  <div className="flex items-center mt-3 space-x-4">
                    <span className="text-yellow-400">★ {movie.rating}</span>
                    <span className="text-gray-400">{movie.genre.join(', ')}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center px-4 space-y-2">
                  <Link to={`/movie/${movie.id}`}>
                    <Button variant="outline" size="sm">
                      Watch
                    </Button>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => removeFromWatchlist(movie.id)}
                    className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
