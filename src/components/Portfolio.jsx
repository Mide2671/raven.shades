import { motion } from "framer-motion";
import image1 from "../assets/IMG-20250602-WA0005.jpg"
import image2 from "../assets/IMG-20250602-WA0007.jpg"
import image3 from "../assets/IMG-20250602-WA0009.jpg"
import image4 from "../assets/IMG-20250602-WA0010.jpg"

const portfolioItems = [
  {
    id: 1,
    image:image1,
    title: "Bridal Glam",
  },
  {
    id: 2,
    image:image2,
    title: "Editorial Style",
  },
  {
    id: 3,
    image: image3,
    title: "Natural Beauty",
  },
  {
    id: 4,
    image: image4,
    title: "Creative Concept",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
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
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-lg font-semibold">
              {title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
