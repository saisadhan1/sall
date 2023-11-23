import React from 'react';
import './App.css';

// Import components
import Header from './Header';
import Home from './Home';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import ContactSection from './ContactSection';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <ContactSection/>
    </div>
  );
}

export default App;
