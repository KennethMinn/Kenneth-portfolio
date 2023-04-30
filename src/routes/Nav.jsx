import { Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className=" justify-between flex items-center">
        <div className=" items-center flex justify-start ">
          <h1 className=" logo me-3  md:text-2xl">Kenneth</h1>
        </div>
        <div className=" text-xs md:text-lg flex items-center md:gap-5 gap-2 ">
          <h1 className=" cursor-pointer">About me</h1>
          <h1 className=" cursor-pointer">my projects</h1>
          <h1 className=" cursor-pointer">contact me</h1>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
