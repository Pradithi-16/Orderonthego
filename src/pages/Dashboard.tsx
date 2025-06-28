import React, { useState } from 'react';
import { Clock, MapPin, Star, Package, CreditCard, User as UserIcon } from 'lucide-react';
import { User } from '../App';

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'profile'>('orders');

  // Mock order data
  const orders = [
    {
      id: 'ORD-1234567890',
      date: '2024-01-15',
      restaurant: 'Bella Italia',
      items: ['Margherita Pizza', 'Caesar Salad'],
      total: 24.98,
      status: 'delivered',
      rating: 5
    },
    {
      id: 'ORD-1234567891',
      date: '2024-01-14',
      restaurant: 'Spice Garden',
      items: ['Chicken Biryani', 'Naan Bread'],
      total: 18.99,
      status: 'delivered',
      rating: 4
    },
    {
      id: 'ORD-1234567892',
      date: '2024-01-13',
      restaurant: 'Dragon Palace',
      items: ['Sweet & Sour Chicken', 'Fried Rice'],
      total: 16.50,
      status: 'cancelled',
      rating: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-success-600 bg-success-100';
      case 'preparing':
        return 'text-yellow-600 bg-yellow-100';
      case 'on-the-way':
        return 'text-blue-600 bg-blue-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
          <p className="text-gray-600">Manage your orders and account settings</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('orders')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'orders'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Package className="h-5 w-5 inline mr-2" />
                My Orders
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'profile'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <UserIcon className="h-5 w-5 inline mr-2" />
                Profile
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order History</h2>
                <div className="space-y-4">
                  {orders.map(order => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                          <p className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(order.status)}`}>
                          {order.status.replace('-', ' ')}
                        </span>
                      </div>
                      
                      <div className="flex items-center mb-3">
                        <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-700">{order.restaurant}</span>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-sm text-gray-600">Items: {order.items.join(', ')}</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <CreditCard className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">${order.total.toFixed(2)}</span>
                          </div>
                          {order.rating && (
                            <div className="flex items-center space-x-1">
                              {renderStars(order.rating)}
                            </div>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          {order.status === 'delivered' && !order.rating && (
                            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                              Rate Order
                            </button>
                          )}
                          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                            Reorder
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={user.name}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={user.email}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Account Type</label>
                    <input
                      type="text"
                      value={user.userType.charAt(0).toUpperCase() + user.userType.slice(1)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Add phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Saved Addresses</h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">No saved addresses yet</p>
                    <button className="mt-2 text-primary-600 hover:text-primary-700 font-medium">
                      Add Address
                    </button>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors duration-200">
                    Update Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;