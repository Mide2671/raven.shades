import { motion } from "framer-motion";
import { FaStar, FaMapMarkerAlt, FaCamera } from "react-icons/fa";
import img from "../assets/IMG-20250602-WA0006.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-white py-20 px-6 md:px-16 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.img
          src={img}
          alt="Lannie"
          className="w-64 h-64 object-cover rounded-full shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            Hi, I’m Lannie 👋
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            I'm a passionate makeup artist and content creator who believes
            every look tells a story. From weddings to creative editorials, I
            craft bold, beautiful transformations that empower and inspire.
          </p>

          {/* Icons or Stats */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start text-pink-600">
            <div className="flex items-center gap-2">
              <FaStar />
              <span>5+ years experience</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCamera />
              <span>Content creation expert</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>Based in Nigeria, Lokoja, Kogi State</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
