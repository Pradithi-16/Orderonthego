import React from 'react';
import { Search, ShoppingCart, CreditCard, MapPin, Clock, CheckCircle, Smartphone, Bell } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Browse Restaurants',
      description: 'Explore local restaurants and cloud kitchens in your area. Filter by cuisine, rating, delivery time, and price.',
      details: [
        'Search by cuisine type or restaurant name',
        'View ratings and reviews from real customers',
        'Check estimated delivery times',
        'Browse menus with detailed descriptions and photos'
      ],
      image: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: ShoppingCart,
      title: 'Select Your Food',
      description: 'Add your favorite dishes to cart, customize your order, and apply any available discounts or offers.',
      details: [
        'Customize dishes to your preferences',
        'Add special instructions for the restaurant',
        'Apply promo codes and discounts',
        'Review your order before checkout'
      ],
      image: 'https://images.pexels.com/photos/4349775/pexels-photo-4349775.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: CreditCard,
      title: 'Secure Payment',
      description: 'Choose from multiple payment options and complete your order with our secure payment system.',
      details: [
        'Multiple payment methods: card, wallet, cash',
        'Save payment methods for faster checkout',
        'Secure encryption for all transactions',
        'Instant order confirmation'
      ],
      image: 'https://images.pexels.com/photos/4349749/pexels-photo-4349749.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: MapPin,
      title: 'Real-Time Tracking',
      description: 'Track your order in real-time from kitchen to your doorstep with live updates and estimated arrival time.',
      details: [
        'Live GPS tracking of your delivery',
        'Real-time status updates',
        'Accurate delivery time estimates',
        'Direct communication with delivery partner'
      ],
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Average delivery time of 30 minutes or less'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'All partner restaurants are verified and rated'
    },
    {
      icon: Smartphone,
      title: 'Easy to Use',
      description: 'Intuitive interface on web and mobile'
    },
    {
      icon: Bell,
      title: 'Live Updates',
      description: 'Get notified at every step of your order'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">How It Works</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ordering your favorite food has never been easier. Follow these simple steps 
              to get delicious meals delivered to your doorstep in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map((step, index) => (
            <div key={index} className={`mb-20 ${index === steps.length - 1 ? 'mb-0' : ''}`}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-lg">{index + 1}</span>
                    </div>
                    <step.icon className="h-8 w-8 text-primary-500 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                  />
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-12">
                  <div className="w-px h-12 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Process Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've designed every step to be simple, secure, and efficient, ensuring you get 
              the best food delivery experience possible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <feature.icon className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Got questions? We've got answers to help you understand our process better.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does delivery usually take?</h3>
              <p className="text-gray-600">
                Most orders are delivered within 25-40 minutes, depending on the restaurant's preparation time 
                and your location. You'll see an estimated delivery time before placing your order.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit/debit cards, digital wallets (PayPal, Apple Pay, Google Pay), 
                and cash on delivery in select areas.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I track my order in real-time?</h3>
              <p className="text-gray-600">
                Yes! Once your order is confirmed, you can track it in real-time through our app or website. 
                You'll receive updates when your order is being prepared, picked up, and is on the way.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if there's an issue with my order?</h3>
              <p className="text-gray-600">
                Our customer support team is available 24/7 to help with any issues. You can contact us 
                through the app, website, or phone, and we'll resolve your concern quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Order?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Now that you know how easy it is, why not try it yourself? 
            Discover amazing restaurants and get your favorite food delivered!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/restaurants"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Browse Restaurants
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Download App
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;