import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, CreditCard, ArrowRight, Star } from 'lucide-react';

const OrderSuccess = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti after 3 seconds
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order not found</h2>
          <Link
            to="/restaurants"
            className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const getPaymentMethodDisplay = (method: string) => {
    const methods: { [key: string]: string } = {
      'card': 'Credit/Debit Card',
      'googlepay': 'Google Pay',
      'phonepay': 'PhonePe',
      'paytm': 'Paytm',
      'cod': 'Cash on Delivery'
    };
    return methods[method] || method;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              >
                <div className={`w-2 h-2 rounded-full ${
                  ['bg-primary-500', 'bg-secondary-500', 'bg-success-500', 'bg-yellow-400'][Math.floor(Math.random() * 4)]
                }`} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-success-100 rounded-full mb-4">
            <CheckCircle className="h-12 w-12 text-success-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
          <p className="text-xl text-gray-600">
            Thank you for your order. We're preparing your delicious meal!
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold mb-1">Order #{orderDetails.orderId}</h2>
                <p className="text-primary-100">Estimated delivery: 25-35 minutes</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">${orderDetails.total.toFixed(2)}</p>
                <p className="text-primary-100">Total Amount</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Delivery Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Delivery Address</h3>
                  <p className="text-gray-600">
                    {orderDetails.deliveryAddress.street}<br />
                    {orderDetails.deliveryAddress.city}, {orderDetails.deliveryAddress.state} {orderDetails.deliveryAddress.zipCode}
                  </p>
                  {orderDetails.deliveryAddress.instructions && (
                    <p className="text-sm text-gray-500 mt-1">
                      Instructions: {orderDetails.deliveryAddress.instructions}
                    </p>
                  )}
                </div>
              </div>

              {/* Payment Method */}
              <div className="flex items-start space-x-3">
                <CreditCard className="h-6 w-6 text-primary-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Payment Method</h3>
                  <p className="text-gray-600">{getPaymentMethodDisplay(orderDetails.paymentMethod)}</p>
                  <p className="text-sm text-success-600 font-medium">
                    {orderDetails.paymentMethod === 'cod' ? 'Pay on Delivery' : 'Payment Confirmed'}
                  </p>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Order Items</h3>
              <div className="space-y-3">
                {orderDetails.items.map((item: any, index: number) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.restaurantName}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Qty: {item.quantity}</p>
                      <p className="text-sm text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Order Tracking */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <Clock className="h-6 w-6 text-primary-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Order Status</h2>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-success-500 rounded-full"></div>
              <span className="font-medium text-success-700">Order Confirmed</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4">
              <div className="h-full bg-success-500 w-1/4 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <span className="text-gray-500">Preparing</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <span className="text-gray-500">On the Way</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <span className="text-gray-500">Delivered</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/dashboard"
            className="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center"
          >
            Track Order
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            to="/restaurants"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
          >
            Order Again
          </Link>
        </div>

        {/* Rating Prompt */}
        <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 text-center">
          <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Enjoyed your meal?</h3>
          <p className="text-gray-600 mb-4">Help others discover great food by rating your experience!</p>
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-200">
            Rate Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;