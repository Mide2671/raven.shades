import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-pink-900 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Lannie Beauty</h3>
          <p className="text-sm">Where creativity meets beauty ✨</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="#booking" className="hover:underline">Book Now</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="font-semibold mb-2">Follow Me</h4>
          <div className="flex gap-4 text-xl">
            <a href="https://www.instagram.com/raven.shades" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-600" />
            </a>
            <a href="https://wa.me/+2348035424970" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-green-600" />
            </a>
            <a href="https://tiktok.com/@raven.shades" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="hover:text-pink-600" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8 border-t pt-4 border-pink-200">
        © {new Date().getFullYear()} Raven.Shades. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
