import React, { useEffect } from 'react';
import { FaBriefcase, FaShoppingCart, FaBasketballBall, FaUsers, FaHeartbeat, FaBook, FaPlane, FaGamepad, FaRing, FaHome, FaUtensils, FaGavel, FaDollarSign, FaHardHat, FaFilm, FaHeart } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

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
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // You can customize the duration of the animations
      easing: 'ease-in-out', // Customize the easing type
      once: true, // Animation should only happen once (while scrolling)
    });
  }, []);

  return (
    <section className="py-28 relative z-10">
      <div className="services-container">
        <div className="text-center">
          <h5 className="font-Rajdhani text-[19px] font-semibold text-PrimaryColor-0 inline-block relative pl-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[10px] before:w-[10px] before:bg-PrimaryColor-0 before:rounded-full">
            INDUSTRIES / SOLUTIONS
          </h5>
          <h1 className="font-Rajdhani font-bold text-xl sm:text-[34px] md:text-[44px] lg:text-[30px] xl:text-[44px] 2xl:text-[48px] text-HeadingColor-0 mt-5 mb-4">
            Building modern <span className="text-PrimaryColor-0">websites</span> and <span className="text-PrimaryColor-0">apps</span> for businesses.
          </h1>
        </div>
        <div className="services-grid mt-[94px]">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card" 
              data-aos="fade-up" // AOS animation type
              data-aos-delay={index * 100} // Delay between each card
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>

        {/* Internal CSS */}
        <style jsx>{`
          .services-container {
           
            font-family: Arial, sans-serif;
            text-align: center;
            border-radius: 10px; /* Rounded edges */
            max-width: 1200px; /* Container width */
            margin: 0 auto; /* Center the container */
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
            font-weight: 600;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Cards;
