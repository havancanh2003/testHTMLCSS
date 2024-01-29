import React from "react";
import About from "./About";
import MainContainer from "./MainContainer";

const Container = () => {
  return (
    <div className="relative w-full h-fit bg-[#F1F5F6] flex flex-col items-center ">
      <About />
      <MainContainer />
    </div>
  );
};

export default Container;
