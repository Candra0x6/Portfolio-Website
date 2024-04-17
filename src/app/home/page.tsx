import LandingPage from "../layout";
import mainModel from "../../assets/image/main_model.png";
import iconModel1 from "../../assets/icon/icon1.svg";
import iconModel2 from "../../assets/icon/icon2.svg";
import iconModel3 from "../../assets/icon/icon3.svg";
import iconModel4 from "../../assets/icon/icon4.svg";
import iconModel5 from "../../assets/icon/iconModel15.svg";
import iconModel7 from "../../assets/icon/icon7.svg";
import iconModel8 from "../../assets/icon/icon8.svg";
import iconModel9 from "../../assets/icon/icon9.svg";
import reactJSIcon from "../../assets/icon/reactJsIcon.svg";
import tailwindCSSIcon from "../../assets/icon/tailwindCssIcon.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import projectImage from "../../assets/image/projectImage1.svg";
import LinkIcon from "@mui/icons-material/Link";
import { motion } from "framer-motion";
function Home() {
  return (
    <LandingPage>
      {/* Section 1 */}
      <div
        id="home"
        className="flex flex-col xl:h-[800px] min-h-screen justify-center"
      >
        {/* Text */}

        <div className="flex flex-col items-center ">
          <div className="flex flex-row font-bayon 2xl:text-[195px] xl:text-[160px] lg:text-[130px] md:text-[12.5vw] text-[12vw] text-white justify-between w-full">
            <motion.h1
              initial={{ opacity: 0, translateX: -500 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{
                duration: 4,
                delay: 1,
                translateX: {
                  delay: 1,
                  type: "spring",
                  duration: 1,
                  stiffness: 50,
                },
              }}
            >
              FRONTEND
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, translateX: 500 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{
                duration: 4,
                delay: 1,

                translateX: {
                  delay: 1,

                  type: "spring",
                  duration: 1,
                  stiffness: 50,
                },
              }}
              className="flex flex-col text-[#7BA2DE]"
            >
              DEVELOPER
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, translateY: 500 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 3,
              duration: 4,
              translateY: {
                delay: 3,
                type: "spring",
                duration: 1,
                stiffness: 50,
              },
            }}
            className="font-sans text-[#968E8E] xl:text-xl lg:text-lg lg:w-[600px] xl:w-[660px] md:text-[2vw] md:w-[550px] text-[3vw] text-center -mt-5 mb-5"
          >
            frontend developer with a passion for creating visually stunning and
            highly interactive web applications.
          </motion.p>
        </div>
        {/* Image */}
        <div className="flex flex-row relative mb-20 ">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, translateY: 500 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 4,
              translateY: {
                type: "spring",
                duration: 1,
                stiffness: 50,
              },
            }}
            className="absolute w-full xl:-mb-32 lg:-mb-24 md:-mb-[65px]  -mb-10 flex flex-row justify-center z-10 bottom-0"
          >
            <h1 className="font-bayon bg-gradient-to-t xl:text-[100px] md:text-[60px] text-[7vw] from-[#000000] via-[#292929] to-[#ffffff] text-transparent opacity-20 bg-clip-text">
              KURNIAWAN{" "}
              <span className="bg-gradient-to-t xl:text-[100px] md:text-[60px] text-[7vw] from-[#2d2d2d] via-[#ffffff] to-[#2d2d2d] text-transparent opacity-50 bg-clip-text">
                CANDRA{" "}
              </span>
              MAHARDIKA
            </h1>
          </motion.div>
          <div className="mx-auto xl:w-[500px] xl:max-w-[500px] max-w-[70vw]  aspect-square relative z-0">
            <div className="absolute flex flex-col justify-between w-full h-full ">
              <motion.img
                initial={{ opacity: 0, translateX: -500 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{
                  delay: 2,
                  duration: 1,
                  translateX: {
                    delay: 2,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                src={iconModel9}
                className="aspect-square w-[40px] xl:w-[100px] lg:w-[70px]  md:w-[60px] xl:mt-28 mt-20"
              />
              <motion.img
                initial={{ opacity: 0, translateX: 500 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{
                  delay: 2,
                  duration: 1,
                  translateX: {
                    delay: 2,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                src={iconModel8}
                className="aspect-square w-[40px] xl:w-[100px] lg:w-[70px] xl:-mr-0 md:w-[60px] self-end mb-14 md:mb-24 md:mr-20 xl:mb-28 "
              />
            </div>
            <motion.div
              initial={{ opacity: 1, translateY: 500 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                delay: 1,
                duration: 1,
                translateY: {
                  delay: 1,
                  type: "spring",
                  duration: 1,
                  stiffness: 50,
                },
              }}
              className="w-full bg-gradient-to-t from-[#1B1B1B] via-[#1b1b1b70] to-transparent absolute h-full z-10"
            />
            <motion.img
              initial={{ opacity: 0, translateY: 500 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                delay: 1,
                duration: 1,
                translateY: {
                  delay: 1,
                  type: "spring",
                  duration: 1,
                  stiffness: 50,
                },
              }}
              src={mainModel}
              className="aspect-square w-full h-full "
            />
          </div>
          {/* groub 1 right */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, translateX: 500 }}
            animate={{ scale: 1, opacity: 1, translateX: 0 }}
            transition={{
              delay: 2,
              duration: 1,
              translateX: {
                delay: 2,
                type: "spring",
                duration: 1,
                stiffness: 50,
              },
            }}
            className="absolute  md:flex hidden xl:right-20 right-0 xl:-mr-20 -mr-10 h-full flex-col xl:justify-normal justify-end"
          >
            <img
              src={iconModel7}
              className="xl:mt-10 w-[40vw] xl:w-auto xl:mb-0 lg:-mb-14 lg:w-[350px] -mb-5 md:-mb-10 md:w-[290px] "
            />
            <img
              src={iconModel2}
              className="xl:-mt-28 w-[120px] xl:w-[300px] lg:w-[220px] md:w-[160px] md:ml-5"
            />
            <img
              src={iconModel1}
              className="xl:ml-28 xl:-mt-5 xl:w-auto w-[40vw] lg:w-[350px] md:w-[250px] xl:mb-0 md:mb-20 mb-5 md:ml-10 "
            />
          </motion.div>
          {/* groub 2 left */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, translateX: -500 }}
            animate={{ scale: 1, opacity: 1, translateX: 0 }}
            transition={{
              delay: 2,
              duration: 1,
              translateX: {
                delay: 2,
                type: "spring",
                duration: 1,
                stiffness: 50,
              },
            }}
            className="absolute md:flex hidden xl:left-32 xl:-ml-20 bottom-0 left-0 xl:justify-normal justify-end h-full flex-col gap-y-8 "
          >
            <img src={iconModel3} className="w-[10vw] -mb-4 xl:w-[100px]" />
            <img
              src={iconModel5}
              className="w-[25vw] xl:w-[300px] xl:mb-5 xl:ml-20 lg:ml-12 md:ml-8"
            />
            <img
              src={iconModel4}
              className="w-[25vw] xl:w-[300px] mb-5 md:mb-10"
            />
          </motion.div>
        </div>
      </div>
      {/* Section 2 */}
      <div
        id="about"
        className=" xl:mt-[200px] mt-[20vw] md:mt-[80px] flex flex-col"
      >
        <div className="flex gap-x-4">
          <motion.h1
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 1,
              translateY: {
                type: "spring",
                duration: 1,
                stiffness: 50,
              },
            }}
            className="xl:text-[96px] lg:text-[80px]  md:text-[60px] text-[10vw] font-bayon text-white"
          >
            ABOUT{" "}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              translateY: {
                delay: 0.2,
                type: "spring",
                duration: 1,
                stiffness: 50,
              },
            }}
            className="xl:text-[96px] lg:text-[80px]  md:text-[60px] text-[10vw] font-bayon text-white"
          >
            ME{" "}
          </motion.h1>
        </div>

        <div className="md:flex md:flex-row justify-between md:space-x-10">
          <div className="flex flex-col md:w-1/2 space-y-5">
            <motion.p
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                translateY: {
                  delay: 0.5,
                  type: "spring",
                  duration: 1,
                  stiffness: 50,
                },
              }}
              className="text-white font-robotolight text-justify xl:text-base lg:text-[17px] md:text-[14px] text-[3vw] "
            >
              As a student in a computer and networking vocational high school,
              I've always been fascinated by the intersection of technology and
              creativity. Throughout my time in the program, I've cultivated a
              deep appreciation for the visual, interactive, and technical
              aspects of web development. The skills I've acquired in
              networking, programming, and computer hardware have equipped me
              with a unique perspective on building robust and efficient web
              applications. What truly excites me about frontend development is
              the constant opportunity to learn and grow, as the landscape is
              constantly evolving with new frameworks, libraries, and best
              practices.
            </motion.p>
          </div>
          <div className="flex flex-col text-white md:w-1/2 md:mt-0 mt-5 space-y-5">
            <div className="">
              <motion.h1
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="xl:text-2xl font-bayon lg:text-[30px]  md:text-[20px] text-[4.5vw]"
              >
                EDUCATION
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="font-robotolight xl:text-base lg:text-[17px]  md:text-[14px] text-[3vw]"
              >
                SMK NEGERI 2 SURAKARTA | 2021 - Present
              </motion.p>
            </div>
            <div className="">
              <motion.h1
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="xl:text-2xl font-bayon lg:text-[30px]  md:text-[20px] text-[4.5vw]"
              >
                SKILLS
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="font-robotolight  xl:text-base lg:text-[17px]  md:text-[14px] text-[3vw]"
              >
                HTML5, CSS, Javascript(ES6+), React JS, TypeScript, React
                Native, Figma, Photoshop, Firebase, and Git/Github{" "}
              </motion.p>
            </div>
            <div className="">
              <motion.h1
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="xl:text-2xl font-bayon lg:text-[30px]  md:text-[20px] text-[4.5vw]"
              >
                UI TOOLS
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="font-robotolight  xl:text-base lg:text-[17px]  md:text-[14px] text-[3vw]"
              >
                Tailwind CSS, CSS3/SCSS/SASS, Framer Motion and Chakra UI{" "}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div
        id="experience"
        className="xl:mt-[100px] md:mt-[80px] mt-[10vw] flex flex-col w-full relative "
      >
        <motion.h1
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 1,
            translateY: {
              type: "spring",
              duration: 1,
              stiffness: 50,
            },
          }}
          className="xl:text-[96px] lg:text-[80px]  md:text-[60px] text-[10vw] font-bayon text-white"
        >
          EXPERIENCE
        </motion.h1>
        {/* Content */}
        <div className="flex flex-col w-full  justify-end relative">
          <div className="flex flex-row justify-between">
            <div className=" w-[350px]  text-white xl:text-base lg:text-[17px]  md:text-[14px] text-[3vw] ">
              <motion.h1
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="font-robotobold xl:text-lg  "
              >
                Create Design Meaningful Experience From Scratch
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="font-robotolight text-md  md:text-[14px] lg:text-[17px] "
              >
                FostiUMS
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="font-robotolight text-md  md:text-[14px] lg:text-[17px] text-[#968E8E]"
              >
                March - 2023
              </motion.h1>
            </div>
            <div className=" w-[350px]  text-white xl:text-base text-[3vw] ">
              <motion.h1
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="font-robotobold lg:text-[17px] xl:text-lg  md:text-[14px]"
              >
                Internship as an IT Support at the Ministry of Communication and
                Informatics{" "}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="font-robotolight lg:text-[17px]  md:text-[14px] xl:text-md"
              >
                KOMINFO
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="font-robotolight lg:text-[17px]  md:text-[14px] xl:text-md text-[#968E8E]"
              >
                10 July - 22 December 2023{" "}
              </motion.h1>
            </div>
            <div className=" w-[350px]  text-white xl:text-base text-[3vw] ">
              <motion.h1
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="font-robotobold lg:text-[17px] xl:text-lg  md:text-[14px]"
              >
                Memulai Dasar Pemrograman menjadi Software Engineer{" "}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="font-robotolight lg:text-[17px] xl:text-md  md:text-[14px]"
              >
                Dicoding Indonesia
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="font-robotolight lg:text-[17px] xl:text-md text-[#968E8E]  md:text-[14px]"
              >
                August - 2023
              </motion.h1>
            </div>
          </div>
          {/* Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              translateY: {
                delay: 0.5,
                type: "spring",
                duration: 1,
                stiffness: 50,
              },
            }}
            className="w-full rounded-full h-1 my-16 bg-white flex relative justify-between "
          >
            <div className="w-3 h-7 rounded-sm  top-0 -mt-3 bg-white xl:ml-36 ml-5 lg:ml-20">
              <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 3,
                  delay: 2,
                  translateY: {
                    delay: 2,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="flex flex-col space-y-2 -mt-12"
              >
                <div className="bg-white w-[1px] h-[4px] mx-auto"></div>
                <div className="bg-white w-[1px] h-[4px] mx-auto"></div>
                <div className="bg-white w-[1px] h-[4px] mx-auto"></div>
                <div className="bg-white w-[1px] h-[4px] mx-auto"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: -50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 3,
                  delay: 2,
                  translateY: {
                    delay: 2,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="flex flex-col space-y-2 mt-11"
              >
                <div className="bg-white w-[1px] h-[4px] mx-auto"></div>
                <div className="bg-white w-[1px] h-[4px] mx-auto"></div>
                <div className="bg-white w-[1px] h-[4px] mx-auto"></div>
                <div className="bg-white w-[1px] h-[4px] mx-auto"></div>
              </motion.div>
            </div>
            <div className="w-3 h-7 rounded-sm  top-0 -mt-3 bg-white">
              <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 3,
                  delay: 2,
                  translateY: {
                    delay: 2,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="flex flex-col space-y-2 -mt-12"
              >
                <div className="bg-white w-[1px] h-[4px] mx-auto"></div>
                <div className="bg-white w-[1px] h-[4px] mx-auto"></div>
                <div className="bg-white w-[1px] h-[4px] mx-auto"></div>
                <div className="bg-white w-[1px] h-[4px] mx-auto"></div>
              </motion.div>
            </div>
            <div className="w-3 h-7 rounded-sm  top-0 -mt-3 bg-white xl:mr-36 mr-5 lg:mr-20">
              <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 3,
                  delay: 2,
                  translateY: {
                    delay: 2,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="flex flex-col space-y-2 -mt-12"
              >
                <div className="bg-white w-[1px] h-[4px] mx-auto"></div>
                <div className="bg-white w-[1px] h-[4px] mx-auto"></div>
                <div className="bg-white w-[1px] h-[4px] mx-auto"></div>
                <div className="bg-white w-[1px] h-[4px] mx-auto"></div>
              </motion.div>
            </div>
          </motion.div>
          {/* Content */}
          <div className="flex flex-row justify-between">
            <div className=" xl:w-[350px] lg:w-[345px] w-[30vw] md:w-[240px]  md:text-[14px] text-white xl:text-base text-[3vw] ">
              <motion.h1
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="font-robotobold xl:text-lg lg:text-[17px]"
              >
                Winner of Web Dashboard UI/UX Competition at the National School
                Level{" "}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="font-robotolight xl:text-md lg:text-[17px] md:text-[14px]"
              >
                IT CLUB SMK NEGERI 1 GUNUNGPUTRI
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  translateY: {
                    delay: 0.5,
                    type: "spring",
                    duration: 1,
                    stiffness: 50,
                  },
                }}
                className="font-robotolight xl:text-md text-[#968E8E] lg:text-[17px]  md:text-[14px]"
              >
                February 2024{" "}
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div
        id="projects"
        className="xl:mt-[100px] md:mt-[80px] mt-[10vw] flex flex-col w-full space-y-10 md:space-y-5 pb-5"
      >
        <motion.h1
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 1,
            translateY: {
              type: "spring",
              duration: 1,
              stiffness: 50,
            },
          }}
          className="xl:text-[96px] font-bayon text-white text-[10vw] lg:text-[80px] md:text-[60px]"
        >
          PROJECTS
        </motion.h1>
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
              <motion.h1 className="font-bayon text-white xl:text-[60px] text-[8vw] lg:text-[70px]  md:text-[50px]">
                MOVIE <span className="text-red-300">SAIL</span>
              </motion.h1>
              <p className="font-robotolight text-white lg:text-[17px]  md:text-[14px] xl:mt-7 ">
                Movie Sail is a cutting-edge movie discovery platform that
                harnesses the power of the TMDB (The Movie Database) Developer
                API to bring users a personalized and immersive movie-browsing
                experience.
              </p>
            </div>
            <div className="flex flex-row mt-5 space-x-5">
              <img width="48" height="48" src={reactJSIcon} alt="REACT JS" />
              <img
                width="48"
                height="48"
                src={tailwindCSSIcon}
                alt="REACT JS"
              />
            </div>
            <div className="absolute bottom-0 lg:mb-10 mb-5 flex flex-row space-x-5">
              <a
                href="https://github.com/Candra0x6/MovieSAIL-React"
                className="bg-white rounded-full md:w-[60px] md:h-[60px] w-[10vw] h-[10vw] aspect-square flex flex-row items-center justify-center"
              >
                <GitHubIcon className="md:p-0 p-3" sx={{ fontSize: 50 }} />
              </a>
              <a
                href="https://moviesail.vercel.app/"
                className="bg-white rounded-full md:w-[60px] md:h-[60px] w-[10vw] h-[10vw] aspect-square flex flex-row items-center justify-center"
              >
                <LinkIcon sx={{ fontSize: 50 }} className="md:p-0 p-3" />
              </a>
            </div>
          </div>{" "}
          <div className="lg:my-auto -mt-10 md:my-auto">
            <img src={projectImage} alt="project" className="" />
          </div>
        </motion.div>
      </div>
    </LandingPage>
  );
}

export default Home;
