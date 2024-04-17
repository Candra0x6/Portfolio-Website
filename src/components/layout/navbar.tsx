import HomeIcon from "../../assets/icon/home_icon.svg";
import AboutIcon from "../../assets/icon/about_icon.svg";
import ExperienceIcon from "../../assets/icon/experience_icon.svg";
import ProjectsIcon from "../../assets/icon/project_icon.svg";
import HamburgerMenuIcon from "../../assets/icon/hamburger_icon.svg";
import CloseIcon from "../../assets/icon/close_icon.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
type NAVBAR_SECTION_TYPE = {
  id: string;
  title: string;
  icon: string;
  link: string;
}[];
export default function Navbar() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [hrefLocation, setHrefLocation] = useState<string>("");
  const NAVBAR_SECTION: NAVBAR_SECTION_TYPE = [
    {
      icon: HomeIcon,
      id: "home",
      link: "#home",
      title: "Home",
    },
    {
      icon: AboutIcon,
      id: "about",
      link: "#about",
      title: "About",
    },
    {
      icon: ExperienceIcon,
      id: "experience",
      link: "#experience",
      title: "Experience",
    },
    {
      icon: ProjectsIcon,
      id: "projects",
      link: "#projects",
      title: "Projects",
    },
  ];
  const handleClick = (hash: string) => {
    setHrefLocation(hash);
  };
  useEffect(() => {
    handleClick(window.location.hash);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, translateY: 500 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        delay: 4,
        duration: 1,
        translateY: {
          delay: 4,
          type: "spring",
          duration: 1,
          stiffness: 50,
        },
      }}
      className=" z-50 fixed bottom-10 w-full flex flex-row justify-center "
    >
      <nav
        className={`transition-all relative max-w-auto duration-1000 ease-in-out container  bg-[#2F2D2D] overflow-hidden rounded-full bg-opacity-60 shadow shadow-black backdrop-blur-lg flex flex-row ${
          isClicked
            ? "lg:w-[1200px] md:w-[90%] w-[95%]"
            : "lg:w-[100px] lg:h-[100px] md:w-[70px] md:h-[70px] w-14 h-14 "
        }`}
      >
        <button
          className={` absolute z-20 ${
            isClicked
              ? "xl:p-[27px] md:p-[20px] xl:right-0 right-0 md:right-3 lg:p-6 p-3  "
              : "xl:p-5 md:w-[70px] md:p-3 md:mt-[2px] right-0 p-2 w-14 lg:w-[100px] lg:p-5"
          }`}
          onClick={() => setIsClicked(!isClicked)}
        >
          <img
            src={isClicked ? CloseIcon : HamburgerMenuIcon}
            className={`transition-all duration-1000 ease-in-out ${
              isClicked ? "xl:w-14 md:w-8 w-8 rotate-0 lg:w-10" : "-rotate-180 "
            }`}
          />
        </button>
        <div
          className={` flex-row xl:p-5 p-2 md:p-3 xl:gap-x-10 w-full  ${
            isClicked ? "flex" : "opacity-0 hidden"
          } `}
        >
          {NAVBAR_SECTION.map((items, id) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                stiffness: 100,
              }}
              key={id}
              onClick={() => handleClick(items.link)}
              className={` flex flex-row rounded-full transition-all duration-700 ${
                hrefLocation === items.link
                  ? "bg-[#454545] bg-opacity-100"
                  : "bg-opacity-0"
              }`}
            >
              <a
                href={items.link}
                className={` flex flex-row gap-x-3 py-2 xl:px-10 lg:px-8 md:px-6 px-[18px] rounded-full items-center`}
              >
                <img
                  src={items.icon}
                  className="lg:w-12 lg:h-12 md:w-8 md:h-8 w-5 h-5 pb-1 lg:flex md:flex xl:flex 2xl:flex hidden "
                />
                <h1 className="font-bayon lg:text-[35px] md:text-xl text-white">
                  {items.title}
                </h1>
              </a>
            </motion.div>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
