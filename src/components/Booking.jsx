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
    return (
      <section id="booking" className="w-full py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
          {/* LEFT - Info Block (Black Background) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black text-white p-10 rounded-xl shadow-lg flex flex-col justify-between"
          >
            <div>
              <h2 className="text-4xl font-bold text-pink-500 mb-4">Book Now</h2>
              <p className="text-gray-300 mb-8">
                We bring your events to life. Get in touch to book our services or make inquiries.
              </p>
  
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-pink-500 text-lg mt-1" />
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="text-pink-500 text-lg mt-1" />
                  <span>+234 803 200 3504</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-pink-500 text-lg mt-1" />
                  <span>barazanaevents@gmail.com</span>
                </div>
              </div>
            </div>
  
            <div className="flex gap-5 text-xl pt-8">
              <a href="#" className="hover:text-pink-500">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/2348032003504"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>
  
          {/* RIGHT - Booking Form (Soft Pink Background) */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const phone = e.target.phone.value;
              const service = e.target.service.value;
              const date = e.target.date.value;
              const message = e.target.message.value;
  
              const whatsappMessage = `Hi, my name is ${name}. I'd like to book a ${service} on ${date}. ${message} Phone: ${phone}`;
              const whatsappLink = `https://wa.me/2348032003504?text=${encodeURIComponent(
                whatsappMessage
              )}`;
              window.open(whatsappLink, "_blank");
            }}
            className="bg-pink-50 p-10 rounded-xl shadow-md space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Let's Plan Your Event 🎉
            </h3>
  
            <div>
              <label className="block text-sm text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              />
            </div>
  
            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              />
            </div>
  
            <div>
              <label className="block text-sm text-gray-600 mb-1">Service Type</label>
              <select
                name="service"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              >
                <option value="">Select a service</option>
                <option value="Wedding Planning">Wedding Planning</option>
                <option value="Decoration">Decoration</option>
                <option value="Event Rentals">Event Rentals</option>
                <option value="Birthday Planning">Birthday Planning</option>
                <option value="Other">Other</option>
              </select>
            </div>
  
            <div>
              <label className="block text-sm text-gray-600 mb-1">Preferred Date</label>
              <input
                type="date"
                name="date"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              />
            </div>
  
            <div>
              <label className="block text-sm text-gray-600 mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-md font-medium hover:bg-pink-600 transition"
            >
              Send via WhatsApp
            </button>
          </motion.form>
        </div>
      </section>
    );
  };
  
  export default Booking;
  