import { motion } from "framer-motion";
import image1 from "../assets/IMG-20250602-WA0005.jpg"
import image2 from "../assets/IMG-20250602-WA0007.jpg"
import image3 from "../assets/IMG-20250602-WA0009.jpg"
import image4 from "../assets/IMG-20250602-WA0010.jpg"
import image5 from "../assets/IMG-20250602-WA0011.jpg"
import image6 from "../assets/IMG-20250603-WA0011.jpg"
import image7 from "../assets/IMG-20250603-WA0002.jpg"
import image8 from "../assets/IMG-20250603-WA0001.jpg"
import image9 from "../assets/IMG-20250603-WA0004.jpg"
import image10 from "../assets/IMG-20250603-WA0008.jpg"
import image11 from "../assets/IMG-20250603-WA0013.jpg"
import image12 from "../assets/IMG-20250603-WA0014.jpg"

const portfolioItems = [
  {
    id: 1,
    image:image1,
  },
  {
    id: 2,
    image:image2,

  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
  {
    id: 5,
    image: image5,
  },
  {
    id: 6,
    image: image6,
  },
  {
    id: 7,
    image: image7,
  },
  {
    id: 8,
    image: image8,
  },
  {
    id: 9,
    image: image9,
  },
  {
    id: 10,
    image: image10,
  },
  {
    id: 11,
    image: image11,
  },
  {
    id: 12,
    image: image12,
  },
  
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="w-full  bg-white py-20 px-6 md:px-16 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-10 text-center">
        My Portfolio
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {portfolioItems.map(({ id, image, title }) => (
          <motion.div
            key={id}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
