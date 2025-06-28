import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Restaurants from './pages/Restaurants';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import RestaurantMenu from './pages/RestaurantMenu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Dashboard from './pages/Dashboard';

export interface User {
  id: string;
  name: string;
  email: string;
  userType: 'customer' | 'restaurant' | 'delivery';
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  restaurantId: string;
  restaurantName: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('orderOnTheGoUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Check for stored cart
    const storedCart = localStorage.getItem('orderOnTheGoCart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('orderOnTheGoCart', JSON.stringify(cart));
  }, [cart]);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('orderOnTheGoUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setCart([]);
    localStorage.removeItem('orderOnTheGoUser');
    localStorage.removeItem('orderOnTheGoCart');
  };

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateCartItem = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== id));
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header user={user} onLogout={logout} cartItemCount={cartItemCount} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/restaurants" element={<Restaurants user={user} />} />
            <Route path="/restaurant/:id" element={<RestaurantMenu user={user} onAddToCart={addToCart} />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth onLogin={login} />} />
            <Route 
              path="/cart" 
              element={
                user ? (
                  <Cart 
                    cart={cart} 
                    onUpdateItem={updateCartItem} 
                    cartTotal={cartTotal} 
                  />
                ) : (
                  <Navigate to="/auth" replace />
                )
              } 
            />
            <Route 
              path="/checkout" 
              element={
                user && cart.length > 0 ? (
                  <Checkout 
                    user={user} 
                    cart={cart} 
                    cartTotal={cartTotal} 
                    onOrderComplete={clearCart} 
                  />
                ) : (
                  <Navigate to={cart.length === 0 ? "/restaurants" : "/auth"} replace />
                )
              } 
            />
            <Route 
              path="/order-success" 
              element={
                user ? <OrderSuccess /> : <Navigate to="/auth" replace />
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                user ? <Dashboard user={user} /> : <Navigate to="/auth" replace />
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;