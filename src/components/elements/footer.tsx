"use client";
import Image from "next/image";
import Wave from "../../../public/img/wave.svg";
import { motion } from "framer-motion";
function Footer() {
  return (
    <footer className="relative">
      <motion.div
        initial={{
          opacity: 0.5,
          translateY: -100,
          rotate: "180deg",
          scaleY: 0.9,
        }}
        whileInView={{ opacity: 1, translateY: 0, rotate: "180deg", scaleY: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeIn",
          translateY: {
            duration: 1,
            stiffness: 50,
          },
        }}
        className="rotate-180 content-stretch w-full bg-white"
      >
        <Image src={Wave} alt="wave" className="w-full h-full" />
      </motion.div>
      <div className="flex bg-white lg:px-0 px-2 text-black ">
        <div className="container flex flex-row justify-between mx-auto ">
          <div className="">
            <h1 className="font-robotobold text-[5vw] lg:text-[30px]  md:text-[30px]">
              Created by,
            </h1>
            <h1 className="font-robotolight text-[5vw] lg:text-[20px]  md:text-[20px]">
              Kurniawan Candra Mahardika
            </h1>
          </div>
          <div className="">
            <h1 className="font-robotolight text-[2vw] font-semibold">CN</h1>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
