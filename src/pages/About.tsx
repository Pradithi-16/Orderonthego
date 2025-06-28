import React from 'react';
import { Target, Eye, Heart, Users, Award, Truck } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make prioritizes your satisfaction and experience.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Supporting local restaurants and bringing communities together through food.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We partner only with the best restaurants to ensure top-quality meals.'
    },
    {
      icon: Truck,
      title: 'Reliable Service',
      description: 'Fast, dependable delivery that you can count on every time.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '500+', label: 'Partner Restaurants' },
    { number: '100K+', label: 'Orders Delivered' },
    { number: '25', label: 'Cities Served' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former tech executive passionate about revolutionizing food delivery.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Tech innovator with 15+ years experience in mobile app development.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Operations expert ensuring seamless delivery experiences.'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About OrderOnTheGo</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to make food ordering effortless and accessible for everyone, 
              connecting hungry customers with the best local restaurants through innovative technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Target className="h-8 w-8 text-primary-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To make food ordering effortless and accessible for everyone by connecting customers 
                with local restaurants through our reliable, user-friendly platform that prioritizes 
                speed, quality, and customer satisfaction.
              </p>
              <div className="bg-primary-50 p-6 rounded-xl">
                <p className="text-primary-700 font-medium">
                  "We believe great food should be just a few taps away, and every meal should be 
                  a delightful experience from order to delivery."
                </p>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Eye className="h-8 w-8 text-primary-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To be the most reliable food delivery partner in every city we serve, empowering 
                local businesses while creating a seamless ecosystem that brings communities 
                together through exceptional food experiences.
              </p>
              <div className="bg-secondary-50 p-6 rounded-xl">
                <p className="text-secondary-700 font-medium">
                  "Building a future where technology enhances human connections, one meal at a time."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our customers and partners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <value.icon className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-primary-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind OrderOnTheGo who work tirelessly to make your food delivery experience exceptional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            </div>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                OrderOnTheGo was born from a simple frustration: the existing food delivery options 
                were either unreliable, limited, or didn't truly support local businesses. Our founders, 
                who had experienced countless disappointing delivery experiences, decided to create 
                something better.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Starting in 2023 with just five partner restaurants in our hometown, we focused on 
                building genuine relationships with local business owners and understanding what 
                customers really wanted: fast, reliable service with transparent pricing and 
                real-time tracking.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Today, we're proud to serve thousands of customers across multiple cities, but our 
                core mission remains unchanged. We're not just a delivery service – we're a bridge 
                between communities and the local businesses that make them special.
              </p>
              <p className="text-lg leading-relaxed">
                Every order placed through OrderOnTheGo supports local restaurants and creates jobs 
                in our communities. We're building more than a platform; we're fostering connections 
                that bring people together through the universal language of great food.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;