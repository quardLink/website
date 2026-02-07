// src/pages/Home.jsx
import Hero from "../components/Hero";
import Service from "../components/Service";
import About from "../components/About";
import Scroll from "../components/Scroll";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Client } from "../components/Client";
import ScrollToHashElement from "../components/ScrollToHashElement";

import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <main className="bg-black">
      <Helmet>
        <title>QuardLink | Creative Digital Agency in Saudi & India</title>
        <meta
          name="description"
          content="QuardLink is a smart digital agency delivering AI-powered and web-based solutions to clients in Saudi Arabia and India."
        />
        <meta
          name="keywords"
          content="QuardLink, Saudi Arabia, India, digital agency, web development, AI automation, creative agency"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="QuardLink | Creative Digital Agency"
        />
        <meta
          property="og:description"
          content="Smart and fast web solutions for modern businesses in Saudi and India. Partner with QuardLink today."
        />
        <meta property="og:url" content="https://quardlink.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://quardlink.com/social-preview.png"
        />
      </Helmet>

      <ScrollToHashElement />
      <Hero />
      <Client />
      <Service />
      <About />
      <Scroll />
      <Contact />
    </main>
  );
};

export default Home;
