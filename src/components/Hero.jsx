import { useState } from "react";
import { FaInstagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="relative h-screen bg-gradient-to-br from-pink-100 to-rose-200 overflow-hidden">
      {/* Transparent Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-20 text-gray-800">
        <h1 className="text-2xl font-bold tracking-wide">Raven.Shades</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a href="#home" className="hover:text-pink-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-pink-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-pink-600 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-pink-600 transition">
              Portfolio
            </a>
          </li>
        </ul>

        <a
          href="#booking"
          className="hidden md:block bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition"
        >
          Book Now
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl text-pink-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white text-gray-800 flex flex-col items-center gap-4 py-6 shadow-md z-10 md:hidden"
          >
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="hover:text-pink-600 transition"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-pink-600 transition"
            >
              About
            </a>
            <a
              href="#portfolio"
              onClick={() => setIsOpen(false)}
              className="hover:text-pink-600 transition"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-pink-600 transition"
            >
              Book
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="w-full h-full flex flex-col justify-center items-center text-center px-6 pt-24 md:pt-0">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bold Looks. Creative Vibes.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I’m Lannie — a passionate makeup artist and content creator crafting
          unforgettable beauty experiences.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#portfolio"
            className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
          >
            View Portfolio
          </a>
          <a
            href="#booking"
            className="border border-pink-600 text-pink-600 px-6 py-2 rounded-full hover:bg-pink-50 transition"
          >
            Book Now
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-4 mt-6 text-pink-600 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <a
            href="https://www.instagram.com/raven.shades/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a href="mailto:lanniegwatana@gmail.com">
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
