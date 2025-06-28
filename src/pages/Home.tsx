import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Star, Smartphone, MapPin, CreditCard } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: 'Lightning Fast',
      description: 'Average delivery time of 30 minutes or less'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Secure payments and contactless delivery options'
    },
    {
      icon: Star,
      title: 'Top Rated',
      description: 'Only the best restaurants and highest quality food'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Browse & Choose',
      description: 'Explore restaurants and select your favorite dishes',
      image: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      number: '02',
      title: 'Place Order',
      description: 'Add to cart and checkout with secure payment',
      image: 'https://images.pexels.com/photos/4349775/pexels-photo-4349775.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      number: '03',
      title: 'Track & Enjoy',
      description: 'Real-time tracking until your food arrives',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const popularRestaurants = [
    {
      name: 'Bella Italia',
      cuisine: 'Italian',
      rating: 4.8,
      deliveryTime: '25-35 min',
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Spice Garden',
      cuisine: 'Indian',
      rating: 4.9,
      deliveryTime: '30-40 min',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dragon Palace',
      cuisine: 'Chinese',
      rating: 4.7,
      deliveryTime: '20-30 min',
      image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-error-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-slide-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Cravings,
                <span className="block text-yellow-300">Delivered Instantly</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-lg">
                Fast, reliable, and delicious food delivery from your favorite local restaurants 
                and cloud kitchens. Order now and satisfy your hunger in minutes!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/restaurants"
                  className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="#mobile-app"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download App
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Food Delivery"
                className="rounded-2xl shadow-2xl animate-bounce-subtle"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose OrderOnTheGo?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're not just another food delivery app. We're your reliable partner for satisfying meals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-primary-50 transition-all duration-300 transform hover:scale-105">
                <feature.icon className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting your favorite food delivered is easier than ever with our simple 3-step process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/how-it-works"
              className="text-primary-500 hover:text-primary-600 font-semibold flex items-center justify-center"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Restaurants */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Restaurants</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover amazing food from top-rated restaurants in your area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularRestaurants.map((restaurant, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{restaurant.name}</h3>
                  <p className="text-gray-600 mb-4">{restaurant.cuisine}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-gray-700 ml-1">{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{restaurant.deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/restaurants"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors duration-200 inline-flex items-center"
            >
              View All Restaurants
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section id="mobile-app" className="py-16 bg-gradient-to-r from-secondary-500 to-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-6">Get the Mobile App</h2>
              <p className="text-xl text-gray-100 mb-8">
                Download our mobile app for the best ordering experience with exclusive features:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-yellow-300" />
                  <span>Real-time order tracking</span>
                </li>
                <li className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-3 text-yellow-300" />
                  <span>Secure payment options</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 mr-3 text-yellow-300" />
                  <span>Save favorite orders</span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-yellow-300" />
                  <span>Express ordering</span>
                </li>
              </ul>
              <div className="flex space-x-4">
                <a href="#" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                  <div className="text-sm">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </a>
                <a href="#" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                  <div className="text-sm">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/4349775/pexels-photo-4349775.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mobile App"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;