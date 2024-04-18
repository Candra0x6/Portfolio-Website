import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Wave from "../../assets/image/wave.svg";
import { motion } from "framer-motion";
function Footer() {
  return (
    <>
      <motion.img
        initial={{
          opacity: 0.5,
          translateY: -100,
          rotate: "180deg",
          scaleY: 0.5,
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
        src={Wave}
        className="rotate-180 content-stretch w-full -mt-2"
      />
      <div className="flex bg-white lg:-mt-20 lg:px-0 px-2 ">
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
            <h1 className="text-right font-robotobold text-[5vw] lg:text-[30px]  md:text-[30px]">
              Connect
            </h1>
            <div className="flex text-black lg:space-x-5 space-x-2 ">
              <a href="mailto:kurniawancandram@gmail.com">
                <EmailIcon />
              </a>
              <a href="">
                <LinkedInIcon />
              </a>
              <a href="http://">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
