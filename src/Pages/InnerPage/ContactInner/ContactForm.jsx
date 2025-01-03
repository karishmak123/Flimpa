import { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import contactFormImg from "/images/124243.jpg";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !message) {
      setStatusMessage('Please fill out all required fields.');
      return;
    }

    const formData = {
      name,
      email,
      phone,
      address,
      message,
    };

    try {
      const response = await fetch('http://localhost:5000/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Thank you for your message! We have received your request and will get back to you shortly.');
        // Optionally reset form state
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setMessage('');
      } else {
        const result = await response.text();
        setStatusMessage(result || 'Failed to send message');
      }
    } catch (error) {
      setStatusMessage('An error occurred while sending the message');
    }
  };

  return (
    <div className="Container py-28 bg-BodyBg-0 border-t-4 border-PrimaryColor-0">
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:items-center gap-10 lg:gap-0">
        <div className="col-span-2 lg:col-span-1 rounded-md overflow-hidden inline-block">
          <img src={contactFormImg} className="w-full" draggable="false" />
          <div className="bg-PrimaryColor-0 pl-9 pt-7 pb-9">
            <h4 className="font-Rajdhani font-semibold text-xl sm:text-[28px] leading-[34px] text-white">
              Feel Free to Contact
            </h4>
            <h6 className="font-Rajdhani font-semibold text-xl text-white mt-6 mb-5">
              Follow Us :
            </h6>
            <ul className="flex items-center gap-3">
              <li>
                <Link to={"/"}>
                  <button className="size-10 flex justify-center items-center border border-dashed transition-all duration-500 hover:border-solid hover:border-SecondaryColor-0 rounded-full overflow-hidden relative bg-transparent text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                    <FaFacebookF />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="size-10 flex justify-center items-center border border-dashed transition-all duration-500 hover:border-solid hover:border-SecondaryColor-0 rounded-full overflow-hidden relative bg-transparent text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                    <FaXTwitter />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="size-10 flex justify-center items-center border border-dashed transition-all duration-500 hover:border-solid hover:border-SecondaryColor-0 rounded-full overflow-hidden relative bg-transparent text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                    <FaLinkedinIn />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="size-10 flex justify-center items-center border border-dashed transition-all duration-500 hover:border-solid hover:border-SecondaryColor-0 rounded-full overflow-hidden relative bg-transparent text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                    <FaPinterestP />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 lg:pl-[120px]">
          <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
          Want to Connect ?
          </h5>
          <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-12">
          Stay Connected – We’re Just a <br />
          Message Away.
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <div className="flex flex-col md:flex-row gap-7">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name*"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
              />
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Your Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-7">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your E-Mail*"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
              />
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
              />
            </div>
            <textarea
              name="message"
              id="message"
              placeholder="Write A Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-BorderColor2-0 rounded py-2 px-6 outline-none resize-none h-[140px] w-full"
            ></textarea>
            <div className="inline-block mt-3">
              <button
                type="submit"
                className="primary-btn2 !bg-SecondaryColor-0 hover:!border-PrimaryColor-0 !border-SecondaryColor-0 before:!bg-PrimaryColor-0"
              >
                Submit Message
              </button>
            </div>
            {statusMessage && <p>{statusMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
