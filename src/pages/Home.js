import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/biryani.jpeg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1> Classic Biryani </h1>
        <p> FRESH. FAST. TASTY </p>
        <Link to='/menu'>
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
