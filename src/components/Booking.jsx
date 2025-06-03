import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Booking = () => {
  const services = [
    "Bridal Glam",
    "Photoshoot Makeup",
    "Creative Makeup",
    "Party & Event Glam",
    "Collabs & PR",
  ];

  return (
    <section id="booking" className="w-full py-20 px-6 md:px-16 bg-rose-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left - Image / Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-black text-white p-8 rounded-xl shadow-lg flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-pink-400 mb-4">Book Now</h2>
          <p className="mb-6 text-sm">
            Let’s glam you up! Schedule your session by filling the form.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-pink-400" />
              <span>Lokoja, Kogi State, Nigeria</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-pink-400" />
              <span>+234 803 542 4970</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-pink-400" />
              <a href="mailto:lanniegwatana@gmail.com">
                lanniegwatana@gmail.com{" "}
              </a>
            </div>
          </div>

          <div className="flex gap-5 text-xl mt-6">
            <a
              href="https://www.instagram.com/raven.shades"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-600" />
            </a>
            <a
              href="https://wa.me/+2348035424970"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-green-600" />
            </a>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-lg border border-pink-100 p-8 rounded-xl shadow space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const service = e.target.service.value;
            const date = e.target.date.value;
            const phone = e.target.phone.value;
            const message = e.target.message.value;

            const whatsappLink = `https://wa.me/2348035424970?text=Hello%2C%20I'm%20${encodeURIComponent(
              name
            )}.%0AService%3A%20${encodeURIComponent(
              service
            )}%0ADate%3A%20${encodeURIComponent(
              date
            )}%0APhone%3A%20${encodeURIComponent(
              phone
            )}%0AMessage%3A%20${encodeURIComponent(message)}`;
            window.open(whatsappLink, "_blank");
          }}
        >
          <h3 className="text-xl font-bold text-gray-800">
            Let's Glam You Up ✨
          </h3>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Select Service
            </label>
            <select
              name="service"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-300"
            >
              <option value="">-- Choose a Service --</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Message</label>
            <textarea
              name="message"
              rows="3"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-300"
              placeholder="Any special notes or requests?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition"
          >
            Send via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Booking;
