import React from 'react';
import { FaBriefcase, FaShoppingCart, FaBasketballBall, FaUsers, FaHeartbeat, FaBook, FaPlane, FaGamepad, FaRing, FaHome, FaUtensils, FaGavel, FaDollarSign, FaHardHat, FaFilm, FaHeart } from 'react-icons/fa';

// The services data
const services = [
  { name: 'Business', icon: <FaBriefcase /> },
  { name: 'eCommerce', icon: <FaShoppingCart /> },
  { name: 'Sports', icon: <FaBasketballBall /> },
  { name: 'Social Network', icon: <FaUsers /> },
  { name: 'Healthcare', icon: <FaHeartbeat /> },
  { name: 'Education', icon: <FaBook /> },
  { name: 'Travel', icon: <FaPlane /> },
  { name: 'Games', icon: <FaGamepad /> },
  { name: 'Wedding', icon: <FaRing /> },
  { name: 'Real Estate', icon: <FaHome /> },
  { name: 'Restaurants', icon: <FaUtensils /> },
  { name: 'Government', icon: <FaGavel /> },
  { name: 'Financial Services', icon: <FaDollarSign /> },
  { name: 'Construction', icon: <FaHardHat /> },
  { name: 'Media & Entertainment', icon: <FaFilm /> },
  { name: 'Dating', icon: <FaHeart /> },
];

const Cards = () => {
  return (
    <div className="services-container">
      <h2>INDUSTRIES / SOLUTIONS</h2>
      <p className="mb-5" style={{marginBottom:"50px"}}> we craft innovative mobile applications designed to meet the evolving demands of the modern business landscape.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>

      {/* Internal CSS */}
      <style jsx>{`
      .services-container {
          text-align: center;
          padding: 40px;
        }

        .services-container h2 {
          font-size: 2rem;
          margin-bottom: 30px;
          color: #333;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 20px;
          padding: 0 10px;
        }

        .service-card {
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .service-icon {
          font-size: 3rem;
          color: #007bff;
          margin-bottom: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .service-card h3 {
          font-size: 1.25rem;
          color: #333;
          margin: 0;
          font-weight: 60
      `}</style>
    </div>
  );
};

export default Cards;
