import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Watch World</h1>
      <p>Explore our latest collection of luxury and casual watches.</p>
      <Link to="/products" className="btn btn-primary">Shop Now</Link>
    </div>
  );
}

export default Home;
