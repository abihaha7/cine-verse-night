
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Plus, Check, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VideoPlayer from '../components/VideoPlayer';
import MovieRow from '../components/MovieRow';
import { useWatchlist } from '../contexts/WatchlistContext';
import { movies } from '../data/movies';

const MovieDetail = () => {
  const { id } = useParams();
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  
  const movie = movies.find(m => m.id === parseInt(id || '0'));
  
  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Movie not found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedMovies = movies
    .filter(m => m.id !== movie.id && m.genre.some(g => movie.genre.includes(g)))
    .slice(0, 8);

  const handleWatchlistClick = () => {
    if (isInWatchlist(movie.id)) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="relative">
        <div className="absolute top-6 left-6 z-10">
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-white hover:bg-black/20">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>
      </div>

      {/* Video Player Section */}
      <div className="px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="max-w-6xl mx-auto">
          <VideoPlayer 
            src={movie.videoUrl}
            poster={movie.poster}
            title={movie.title}
          />
        </div>
      </div>

      {/* Movie Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-white mb-4">{movie.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-green-400 font-semibold text-lg">★ {movie.rating}</span>
              <span className="text-gray-300">{movie.year}</span>
              <span className="text-gray-300">{movie.duration}</span>
              <div className="flex gap-2">
                {movie.genre.map((genre) => (
                  <span key={genre} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                <Play className="h-5 w-5 mr-2" />
                Play Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-400 text-white hover:bg-white hover:text-black"
                onClick={handleWatchlistClick}
              >
                {isInWatchlist(movie.id) ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    In Watchlist
                  </>
                ) : (
                  <>
                    <Plus className="h-5 w-5 mr-2" />
                    Add to Watchlist
                  </>
                )}
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-gray-700">
                <Share className="h-5 w-5 mr-2" />
                Share
              </Button>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">Synopsis</h2>
              <p className="text-gray-300 leading-relaxed">{movie.synopsis}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Director</h3>
                <p className="text-gray-300">{movie.director}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cast</h3>
                <p className="text-gray-300">{movie.cast.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Movie Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Release Year:</span>
                  <span className="text-white">{movie.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">{movie.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Rating:</span>
                  <span className="text-white">★ {movie.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Genres:</span>
                  <span className="text-white">{movie.genre.length}</span>
                </div>
              </div>
            </div>

            {/* Trailer */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Trailer</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={movie.trailerUrl}
                  title={`${movie.title} Trailer`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Related Movies */}
        {relatedMovies.length > 0 && (
          <div className="mt-16">
            <MovieRow title="More Like This" movies={relatedMovies} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
