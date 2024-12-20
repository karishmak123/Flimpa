import { motion } from 'framer-motion';
import { FaReact, FaNode, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiBootstrap } from 'react-icons/si';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'An e-commerce platform built with React, Node.js, and MongoDB.',
    technologies: [<FaReact />, <FaNode />, <SiJavascript />, <SiBootstrap />],
    imageUrl: '/images/project1.png', // replace with actual image URL
  },
  {
    title: 'Social Media App',
    description: 'A social media app with real-time features built using React and Node.js.',
    technologies: [<FaReact />, <FaNode />, <FaCss3Alt />, <FaHtml5 />],
    imageUrl: '/images/project2.jpg', // replace with actual image URL
  },
];

const ProjectDisplaySection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-400 rounded-xl shadow-xl overflow-hidden transform transition-all ease-in-out duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover rounded-t-xl group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  className="text-center text-white p-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-lg mt-2">{project.description}</p>
                </motion.div>
              </div>
              <div className="p-6">
                <div className="mt-6 flex gap-6 justify-center">
                  {project.technologies.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      className="p-2 bg-white text-indigo-600 rounded-full shadow-md flex justify-center items-center w-12 h-12 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDisplaySection;
