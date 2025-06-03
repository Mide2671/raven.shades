import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "+2348035424970"; 
    const { name, type, date, message } = formData;

    const whatsappMessage = `Hello Lannie!%0AMy name is ${name}.%0AI'd like to book a ${type} session on ${date}.%0A${message ? `Additional notes: ${message}` : ""}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <section
      id="booking"
      className="w-full bg-rose-50 py-20 px-6 md:px-16 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-10 text-center">
        Book a Session 💄
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md grid gap-6"
      >
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Type of Event</label>
          <select
            name="type"
            required
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="">Select</option>
            <option value="Wedding">Wedding</option>
            <option value="Photoshoot">Photoshoot</option>
            <option value="Creative Makeup">Creative Makeup</option>
            <option value="Birthday/Bridal">Birthday / Bridal</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Date</label>
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Message (Optional)</label>
          <textarea
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Any additional info?"
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-pink-600 text-white font-semibold py-3 rounded-md hover:bg-pink-700 transition"
        >
          <FaWhatsapp /> Book via WhatsApp
        </button>
      </form>
    </section>
  );
};

export default Booking;
