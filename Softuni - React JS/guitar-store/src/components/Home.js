import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <h1>Welcome to Guitar Store</h1>
                <p>A place for all your guitar needs.</p>
                <Link to="/catalog" className="btn btn-primary">Browse our catalog.</Link>
        </div>
    );
};

export default Home;