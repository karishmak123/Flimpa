import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const phoneNumber = '91 9424781796'; 
  const message = 'Hello! I need assistance.'; 
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showWhatsApp && (
        <a
        style={{marginRight:'70px', marginBottom:'70px'}}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-5 bg-green-500 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110 z-50"
        >
          <FaWhatsapp size={30} />
          
        </a>
      )}
    </>
  );
};

export default WhatsApp;