// import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className=" flex flex-col-reverse md:grid md:justify-items-center md:grid-cols-10">
        <div className=" md:col-span-4 md:col-start-2">
          <img
            src="https://i.pinimg.com/564x/f2/ef/7b/f2ef7b08898b2955ae589afcf40e4956.jpg"
            className="md:w-[380px] rounded-[80px]"
          />
        </div>
        <div className=" md:col-span-4 text-center mt-[-80px] md:mt-0 mb-[50px]">
          <h1 className=" font-bold text-sm mb-3">ABOUT ME</h1>
          <h1 className=" text-xl font-bold mb-3">
            A dedicated frontend developer form myanmar.
          </h1>
          <p className=" md:w-[550px]">
            As a frontend developer, I am proficient in{" "}
            <span className=" font-bold">HTML</span>,{" "}
            <span className=" font-bold"> CSS</span>,
            <span className=" font-bold"> SASS</span>,
            <span className=" font-bold"> BOOTSTRAP</span>,
            <span className=" font-bold"> TAILWIND</span>,
            <span className=" font-bold"> JAVASCRIPT</span>,
            <span className=" font-bold"> REACT</span>,
            <span className=" font-bold"> REDUX</span> and I am constantly
            expanding my knowledge of these languages as well as exploring new
            technologies and frameworks. I have experience with responsive
            design and user interface development, and I am comfortable working
            with both individual and team projects. I pride myself on my
            attention to detail and my ability to problem-solve and troubleshoot
            code. I am dedicated to creating user-friendly websites that are
            visually appealing and easy to navigate. I am also a strong
            communicator, and I enjoy working collaboratively with designers,
            developers, and other team members to ensure that all projects are
            completed to the highest standard. In my free time, I enjoy reading
            blogs and articles on the latest frontend development trends and
            experimenting with new technologies and techniques. I am excited to
            continue learning and growing as a frontend developer and to
            contribute my skills to exciting new projects.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
