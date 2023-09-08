import About from "../components/About";
import CardStudio from "../components/CardStudio";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

import { textStudio, cardStudioContent, imageUrlCarouselStudio } from "../constants";
import { useEffect } from "react";

const cardVariants = {
  offscreen: {
  opacity: 0,
  },
  onscreen: {
  opacity: 1,
  transition: {
      type: "spring",
      duration: 2
  }
  }
};

const StudioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Carousel imageUrl={imageUrlCarouselStudio} />
      <About title={textStudio.title} text={textStudio.text} imageUrl={textStudio.imageUrl} list={textStudio.list} />
      <div className="flex flex-col gap-10 mx-5 lg:mx-10 pt-10 pb-20 my-20">
        {cardStudioContent.map((content, index) => (
          <CardStudio key={index} imageUrl={content.imageUrl} title={content.title} text={content.text} list={content.list} />
        ))}
      </div>
      <motion.div className="flex flex-col lg:flex-row justify-center items-center gap-10 py-10 px-5 lg:px-20 my-20" variants={cardVariants} initial="offscreen" whileInView="onscreen">
        <div className="flex flex-col shadow-xl h-80 w-80 lg:h-96 lg:w-96">
          <img src="src/assets/photo/Gega.jpg" alt="Gega Ramadhan" className="object-cover h-[85%]" />
          <p className="text-center text-base font-semibold text-black p-3">Gega Ramadhan</p>
        </div>
        <div className="flex flex-col shadow-xl h-80 w-80 lg:h-96 lg:w-96">
          <img src="src/assets/photo/Elton.jpg" alt="Elton Reynoval Aziz" className="object-cover h-[85%]" />
          <p className="text-center text-base font-semibold text-black p-3">Elton Reynoval Aziz</p>
        </div>
      </motion.div>
      <Footer />
    </>
  )
}

export default StudioPage
