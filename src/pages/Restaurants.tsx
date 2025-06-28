import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Clock, MapPin, Filter, ChevronDown } from 'lucide-react';
import { User } from '../App';

interface RestaurantsProps {
  user: User | null;
}

const Restaurants: React.FC<RestaurantsProps> = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);

  const cuisines = [
    'all', 'Italian', 'Chinese', 'Indian', 'Mexican', 'American', 'Thai', 'Japanese', 'Mediterranean'
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Bella Italia',
      cuisine: 'Italian',
      rating: 4.8,
      reviews: 324,
      deliveryTime: '25-35 min',
      deliveryFee: 2.99,
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=500',
      isOpen: true,
      distance: '1.2 km',
      offer: '20% off on orders above $25'
    },
    {
      id: 2,
      name: 'Spice Garden',
      cuisine: 'Indian',
      rating: 4.9,
      reviews: 567,
      deliveryTime: '30-40 min',
      deliveryFee: 1.99,
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=500',
      isOpen: true,
      distance: '0.8 km',
      offer: 'Free delivery on first order'
    },
    {
      id: 3,
      name: 'Dragon Palace',
      cuisine: 'Chinese',
      rating: 4.7,
      reviews: 289,
      deliveryTime: '20-30 min',
      deliveryFee: 2.49,
      image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=500',
      isOpen: true,
      distance: '1.5 km',
      offer: null
    },
    {
      id: 4,
      name: 'Taco Express',
      cuisine: 'Mexican',
      rating: 4.6,
      reviews: 423,
      deliveryTime: '15-25 min',
      deliveryFee: 1.49,
      image: 'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=500',
      isOpen: true,
      distance: '0.5 km',
      offer: 'Buy 2 Get 1 Free Tacos'
    },
    {
      id: 5,
      name: 'Burger Junction',
      cuisine: 'American',
      rating: 4.5,
      reviews: 678,
      deliveryTime: '25-35 min',
      deliveryFee: 2.99,
      image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=500',
      isOpen: false,
      distance: '2.1 km',
      offer: null
    },
    {
      id: 6,
      name: 'Thai Orchid',
      cuisine: 'Thai',
      rating: 4.8,
      reviews: 234,
      deliveryTime: '35-45 min',
      deliveryFee: 3.49,
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=500',
      isOpen: true,
      distance: '1.8 km',
      offer: '15% off on weekdays'
    }
  ];

  const filteredRestaurants = restaurants
    .filter(restaurant => 
      (selectedCuisine === 'all' || restaurant.cuisine === selectedCuisine) &&
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'deliveryTime':
          return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
        case 'distance':
          return parseFloat(a.distance) - parseFloat(b.distance);
        default:
          return 0;
      }
    });

  return (
    <div className="animate-fade-in min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Find Your Favorite Restaurants</h1>
            <p className="text-xl text-primary-100 mb-8">
              Discover amazing local restaurants and get your favorite food delivered fast
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search restaurants, cuisines, or dishes..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-wrap gap-4">
              {/* Cuisine Filter */}
              <select
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {cuisines.map(cuisine => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine === 'all' ? 'All Cuisines' : cuisine}
                  </option>
                ))}
              </select>

              {/* Sort Filter */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="rating">Sort by Rating</option>
                <option value="deliveryTime">Sort by Delivery Time</option>
                <option value="distance">Sort by Distance</option>
              </select>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
                <ChevronDown className={`h-4 w-4 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="text-gray-600">
              {filteredRestaurants.length} restaurants found
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  !restaurant.isOpen ? 'opacity-75' : 'hover:scale-105'
                }`}
              >
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover"
                  />
                  {restaurant.offer && (
                    <div className="absolute top-3 left-3 bg-error-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {restaurant.offer}
                    </div>
                  )}
                  {!restaurant.isOpen && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">Currently Closed</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{restaurant.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-gray-700 ml-1 font-medium">{restaurant.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({restaurant.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{restaurant.cuisine}</p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{restaurant.distance}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      Delivery: ${restaurant.deliveryFee}
                    </span>
                    {restaurant.isOpen ? (
                      user ? (
                        <Link
                          to={`/restaurant/${restaurant.id}`}
                          className="bg-primary-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors duration-200"
                        >
                          Order Now
                        </Link>
                      ) : (
                        <Link
                          to="/auth"
                          state={{ from: { pathname: `/restaurant/${restaurant.id}` } }}
                          className="bg-primary-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors duration-200"
                        >
                          Login to Order
                        </Link>
                      )
                    ) : (
                      <button
                        className="bg-gray-300 text-gray-500 px-6 py-2 rounded-lg font-medium cursor-not-allowed"
                        disabled
                      >
                        Closed
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredRestaurants.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No restaurants found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or filters to find more restaurants.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Restaurant Owner?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our platform and reach thousands of hungry customers in your area. 
            Grow your business with OrderOnTheGo!
          </p>
          <Link
            to="/partners"
            className="bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-600 transition-colors duration-200 inline-block"
          >
            Become a Partner
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Restaurants;