import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { SiSass } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

const Home = () => {
  return (
    <>
      <div className=" md:grid md:grid-cols-2 md:justify-items-center min-h-screen md:items-center text-center md:text-start mt-16 md:mt-0">
        <div>
          <div className=" ">
            <h1 className=" text-2xl md:text-7xl font-bold mb-3">
              Front-End React Developer
            </h1>
            <p>
              I&apos;m Kenneth. A passionate frontend react developer from
              myanmar
            </p>
          </div>
          <div className=" text-3xl items-center flex justify-center md:justify-start gap-1 mt-3 mb-3">
            <a
              href="https://github.com/KennethMinn"
              target="https://github.com/KennethMinn"
              className="  cursor-pointer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kenneth-minn-265875250/"
              target="https://www.linkedin.com/in/kenneth-minn-265875250/"
              className=" cursor-pointer"
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className=" flex items-center justify-center md:justify-start mt-7">
            <div className=" border-e-2 border-stone-950 pe-5 me-5">
              tech stack
            </div>
            <div className=" flex gap-3 text-sm md:text-3xl items-center">
              <ImHtmlFive className=" text-red-600" />
              <IoLogoCss3 className=" text-blue-500" />
              <SiSass className=" text-pink-500" />
              <SiBootstrap className=" text-purple-800" />
              <SiTailwindcss className=" text-blue-400" />
              <SiJavascript className=" text-yellow-400" />
              <SiTypescript className=" text-blue-600" />
              <FaReact className=" text-blue-400" />
              <FaJava className="java" />
              <FaPython className=" text-yellow-400" />
              <SiPhp className=" text-blue-500 text-xl md:text-4xl" />
            </div>
          </div>
        </div>

        <div>
          <div className=" rotate-45 md:overflow-hidden w-[300px]  rounded-[190px] md:w-[400px]  md:rotate-45 ms-20 md:ms-0 mt-20 md:mt-0">
            <img
              src="https://cdn.myanimelist.net/images/anime/4/86334.jpg"
              className=" rounded-[150px] md:w-[450px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
