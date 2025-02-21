import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";

interface props {
  title: string;
  subtitle: string;
  titleColor: string;
  description: string;
  githubLink: string;
  projectLink: string;
  image: string | undefined;
  stack: string[];
  development?: boolean;
}
function ProjectCard({
  title,
  subtitle,
  titleColor,
  description,
  githubLink,
  projectLink,
  image,
  stack,
  development = false,
}: props) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{
        duration: 1,
        translateY: {
          type: "spring",
          duration: 1,
          stiffness: 50,
        },
      }}
      className="relative lg:grid-cols-2 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 grid gap-x-2 mx-auto lg:w-[1000px] lg:h-[600px] md:w-[700px] md:h-[500px]  bg-gradient-to-bl from-[#242424b5] to-[#ffffff0d] bg-opacity- rounded-xl"
    >
      {/* Project Content */}
      <div className="flex flex-col h-full  justify-center xl:ml-[60px] ml-5 xl:text-base text-[4vw] lg:ml-10 ">
        <div className="flex flex-col w-full ">
          {development && (
            <h1 className="text-red-500 absolute top-0 mt-10">
              *In Development
            </h1>
          )}
          <motion.h1 className="font-bayon text-white xl:text-[60px] text-[8vw] lg:text-[70px]  md:text-[50px]">
            {title}
            <span style={{ color: titleColor }}>{subtitle}</span>
          </motion.h1>
          <p className="font-robotolight text-white lg:text-[17px]  md:text-[14px] xl:mt-7 ">
            {description}
          </p>
        </div>
        <div className="flex flex-row mt-5 space-x-5">
          {stack.map((val, i) => (
            <Image width="48" key={i} height="48" src={val} alt={`stack${i}`} />
          ))}
        </div>
        <div className="absolute bottom-0 lg:mb-10 mb-5 flex flex-row space-x-5">
          <Link
            href={githubLink}
            className="bg-white rounded-full md:w-[60px] md:h-[60px] w-[10vw] h-[10vw] aspect-square flex flex-row items-center justify-center text-black"
          >
            <AiOutlineGithub className="md:p-0 p-3 text-5xl text-black" />
          </Link>
          <Link
            href={projectLink}
            className="bg-white rounded-full md:w-[60px] md:h-[60px] w-[10vw] h-[10vw] aspect-square flex flex-row items-center justify-center text-black"
          >
            <FaLink className="md:p-0 p-3 text-4xl text-black" />
          </Link>
        </div>
      </div>{" "}
      <div className="lg:my-auto -mt-10 md:my-auto">
        <Image
          src={image || ""}
          alt="project"
          className="w-full h-full"
          layout="responsive"
        />
      </div>
    </motion.div>
  );
}

export default ProjectCard;
