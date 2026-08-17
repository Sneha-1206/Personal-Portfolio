import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="fade-in">
      <section className="not-found-section">
        <div className="container text-center">
          <h2>404 - Page Not Found</h2>
          <p>Oops! The page you are looking for does not exist.</p>
          <Link to="/Home" className="back-home-btn">
            Go Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
