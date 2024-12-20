import { motion } from "framer-motion";
import { FaReact, FaNode, FaPython, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiFlutter, SiBootstrap, SiNextdotjs } from "react-icons/si";

const technologies = [
  { name: "React", color: "#61DBFB", icon: <FaReact /> },
  { name: "Node.js", color: "#43853D", icon: <FaNode /> },
  { name: "Flutter", color: "#02569B", icon: <SiFlutter /> },
  { name: "Next.js", color: "#000000", icon: <SiNextdotjs /> },
  { name: "Bootstrap", color: "#7952B3", icon: <SiBootstrap /> },
  { name: "JavaScript", color: "#F7DF1E", icon: <SiJavascript /> },
  { name: "Python", color: "#306998", icon: <FaPython /> },
  { name: "CSS", color: "#264de4", icon: <FaCss3Alt /> },
  { name: "HTML", color: "#e34c26", icon: <FaHtml5 /> },
];

const TechnologySection = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <h2 className="text-4xl font-extrabold text-center mb-12">
        Technologies We Use
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col items-center justify-center bg-gray-800 rounded-xl shadow-lg p-6 w-36 h-36"
            style={{
              background: `linear-gradient(145deg, ${tech.color} 30%, #000)`,
            }}
            whileHover={{
              scale: 1.2,
              boxShadow: `0px 8px 20px ${tech.color}`,
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className="text-5xl group-hover:animate-spin transition-transform"
              style={{ color: "#fff" }}
            >
              {tech.icon}
            </div>
            <p className="text-sm font-medium mt-4">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechnologySection;
