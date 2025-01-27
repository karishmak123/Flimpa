import React from 'react';
import { FaReact, FaNode, FaPhp, FaAngular, FaWordpress, FaLaravel, FaVuejs, FaJava, FaHtml5, FaPython, FaSwift   } from 'react-icons/fa'; // Importing React Icons
import { FaFlutter } from "react-icons/fa6";
import { SiNextdotjs, SiJavascript, SiMysql,SiMongodb, SiTypescript     } from "react-icons/si";
const TechStack = () => {
  return (
    <section className="relative z-10 mb-[70px]">
    <div className="tech-stack-container">
    <div className="text-center">
          <h5 className="font-Rajdhani text-[19px] font-semibold text-PrimaryColor-0 inline-block relative pl-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[10px] before:w-[10px] before:bg-PrimaryColor-0 before:rounded-full">
            Technology
          </h5>
          <h1 className="font-Rajdhani font-bold text-xl sm:text-[34px] md:text-[44px] lg:text-[30px] xl:text-[44px] 2xl:text-[48px] text-HeadingColor-0 mt-5 mb-4">
          Technologies we use
          </h1>
        </div>

<div className="tech-grid mt-[94px]">
  <div className="tech-item">
    <FaReact style={{ color: '#61DAFB', fontSize: '80px' }} />
    <p>React</p>
  </div>
  <div className="tech-item">
    <FaWordpress style={{ color: '#21759B', fontSize: '80px' }} />
    <p>WordPress</p>
  </div>
  <div className="tech-item">
    <FaJava style={{ color: '#007396', fontSize: '80px' }} />
    <p>Java</p>
  </div>
  <div className="tech-item">
    <FaNode style={{ color: '#68A063', fontSize: '80px' }} />
    <p>Node.js</p>
  </div>
  <div className="tech-item">
    <FaPhp style={{ color: '#8892BF', fontSize: '80px' }} />
    <p>PHP</p>
  </div>
  <div className="tech-item">
    <FaLaravel style={{ color: '#FF2D20', fontSize: '80px' }} />
    <p>Laravel</p>
  </div>
  <div className="tech-item">
    <FaVuejs style={{ color: '#42B883', fontSize: '80px' }} />
    <p>Vue.js</p>
  </div>
  <div className="tech-item">
    <FaFlutter style={{ color: '#02569B', fontSize: '80px' }} />
    <p>Flutter</p>
  </div>
  <div className="tech-item">
    <FaAngular style={{ color: '#DD0031', fontSize: '80px' }} />
    <p>Angular</p>
  </div>
  <div className="tech-item">
    <FaHtml5 style={{ color: '#E34F26', fontSize: '80px' }} />
    <p>HTML5</p>
  </div>
  <div className="tech-item">
    <SiNextdotjs style={{ color: '#000000', fontSize: '80px' }} />
    <p>Next.js</p>
  </div>
  <div className="tech-item">
    <SiJavascript style={{ color: '#F7DF1E', fontSize: '80px' }} />
    <p>Javascript</p>
  </div>
  <div className="tech-item">
    <FaPython style={{ color: '#306998', fontSize: '80px' }} />
    <p>Python</p>
  </div>
  <div className="tech-item">
    <SiMysql style={{ color: '#4479A1', fontSize: '80px' }} />
    <p>Mysql</p>
  </div>
  <div className="tech-item">
    <SiMongodb style={{ color: '#47A248', fontSize: '80px' }} />
    <p>MongoDB</p>
  </div>
  <div className="tech-item">
    <SiTypescript style={{ color: '#3178C6', fontSize: '80px' }} />
    <p>Typescript</p>
  </div>
  <div className="tech-item">
    <FaSwift style={{ color: '#F05138', fontSize: '80px' }} />
    <p>Swift</p>
  </div>
</div>

      <style>
        {`
          .tech-stack-container {
            font-family: Arial, sans-serif;
            text-align: center;
            border-radius: 10px; /* Rounded edges */
            max-width: 1200px; /* Container width */
            margin: 0 auto; /* Center the container */
          }

          .section-title h2 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .divider {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
          }

          .separator {
            border-bottom: 1px solid #ccc;
            width: 50%;
          }

          .tech-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Automatically adjust columns */
            gap: 20px; /* Space between items */
            justify-items: center;
            align-items: center;
          }

          .tech-item {
            text-align: center;
          }

          .tech-item p {
            margin-top: 10px;
            font-size: 16px;
            font-weight: bold;
          }
        `}
      </style>
    </div>
</section>
  );
};

export default TechStack;
