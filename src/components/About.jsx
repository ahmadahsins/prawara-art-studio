/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
  opacity: 0,
  },
  onscreen: {
  opacity: 1,
  transition: {
      type: "spring",
      duration: 1.5
  }
  }
};

const About = ({ title, text, imageUrl, list }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 px-5 lg:px-20 py-8 lg:py-32">
      <motion.div className="w-full lg:w-1/2 flex flex-col gap-3 text-black" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
        <h1 className="text-xl text-yellow-600 font-semibold">{title}</h1>
        {title === 'Visi dan Misi' ? (
          <>
            <p className="text-justify">{text}</p>
            <ul className="text-justify">
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-justify">{text}</p>
        )}
      </motion.div>
      <motion.div className="w-full lg:w-1/2 flex justify-center" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
        <img src={imageUrl} alt="logo-prawara" className="rounded-md" />
      </motion.div>
    </div>
  )
}

export default About
