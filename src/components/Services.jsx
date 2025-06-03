import { motion } from "framer-motion";
import {
  FaStar,
  FaCamera,
  FaPalette,
  FaBirthdayCake,
  FaHandshake,
  FaLock
} from "react-icons/fa";

const services = [
  {
    icon: <FaStar />,
    title: "Bridal Glam",
    desc: "Stunning looks for your big day. Radiant, flawless and long-lasting makeup.",
  },
  {
    icon: <FaCamera />,
    title: "Photoshoot Makeup",
    desc: "Camera-ready looks for fashion, studio, or outdoor shoots.",
  },
  {
    icon: <FaPalette />,
    title: "Creative Makeup",
    desc: "Unique and artistic transformations that express your creativity.",
  },
  {
    icon: <FaBirthdayCake />,
    title: "Party & Event Glam",
    desc: "Perfect looks for birthdays, dinners, or special events.",
  },
  {
    icon: <FaLock />,
    title: "Hair Locking",
    desc: "Get neat, long-lasting hair locks with a touch of style and professionalism.",
  },

  {
    icon: <FaHandshake />,
    title: "Collabs & PR",
    desc: "Open to brand partnerships, influencer collaborations, and PR opportunities.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full bg-rose-50 py-20 px-6 md:px-16 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-10 text-center">
        Services & Offers
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div className="text-4xl text-pink-600 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-sm text-gray-700">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
