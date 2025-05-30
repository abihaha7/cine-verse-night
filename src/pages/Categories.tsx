
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MovieCard from '../components/MovieCard';
import { categories } from '../data/movies';

const Categories = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const selectedCategory = categories.find(cat => cat.id === category);
  const displayCategories = selectedCategory ? [selectedCategory] : categories;

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              {selectedCategory ? selectedCategory.name : 'All Categories'}
            </h1>
            <p className="text-gray-400">
              {selectedCategory 
                ? `${selectedCategory.movies.length} movies` 
                : 'Browse movies by genre'
              }
            </p>
          </div>
          
          {selectedCategory && (
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
          )}
        </div>

        {/* Category Grid or Movie Grid */}
        {!selectedCategory ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/categories/${cat.id}`}
                className="group relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white text-lg font-semibold mb-2">{cat.name}</h3>
                    <p className="text-gray-400 text-sm">{cat.movies.length} movies</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </Link>
            ))}
          </div>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
              : "space-y-4"
          }>
            {selectedCategory.movies.map((movie) => (
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
                  <Link 
                    to={`/movie/${movie.id}`}
                    className="flex items-center px-4 text-white hover:text-gray-300"
                  >
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
