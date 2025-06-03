// import React,{ useEffect } from "react";

// import About from "./components/About";
// import Services from "./components/Services";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// // import Hero from "./components/Hero";

// function App() {

//   return (
//     <div className="bg-[#fef8f5] text-[#1e1e1e] font-sans">
//       <h1>hello</h1>
//       {/* <Hero /> */}
//       {/* <About />
//       <Services />
//       <Portfolio />
//       <Contact />
//       <Footer /> */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Booking from "./components/Booking";

function App() {
  return (
    <div className="bg-[#fef8f5] text-[#1e1e1e] font-sans">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
