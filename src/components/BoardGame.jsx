/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { imgBoardGame } from "../constants";

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

const BoardGame = ({ title, text, imageUrl }) => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-5 px-5 lg:px-20 py-10 lg:py-24">
                <motion.h1 className="text-xl text-yellow-600 font-semibold visible lg:hidden order-1" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>{title}</motion.h1>
                <motion.div className="w-full lg:w-1/2 flex flex-col gap-3 text-black text-justify order-3 lg:order-2" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
                    <h1 className="text-xl text-yellow-600 font-semibold hidden lg:block">{title}</h1>
                    <p>{text}</p>
                </motion.div>
                <motion.div className="w-full lg:w-1/2 flex flex-wrap lg:flex-nowrap justify-center md:justify-start gap-3 order-2 lg:order-3" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
                    {imageUrl.map((url, index) => (
                        <img src={url} alt="prawara-board-game" className="rounded-md w-40 md:w-64 lg:w-72 shadow-xl" key={index}  />
                    ))}
                </motion.div>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-5 w-full justify-center md:justify-start lg:justify-center md:pl-10 lg:pl-0">
                {imgBoardGame.map((img, index) => (
                    <img src={img} alt="prawara-board-game" className="rounded-md w-[23rem] lg:w-[25rem] shadow-xl" key={index} />
                ))}
            </div>
        </>
    )
}

export default BoardGame
