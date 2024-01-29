import React from "react";
import { navbars } from "../../../data.js";
import bg from "./image/bg.png";
import img1 from "./image/1.png";
import img2 from "./image/2.png";
import img3 from "./image/3.png";
const About = () => {
  return (
    <div className="w-[80%] bg-[#F1F5F6] h-fit flex justify-between mt-9">
      {/* side bar */}
      <div className="w-[18%] p-3 bg-white rounded-[5px]">
        <div className="flex flex-col gap-[12px]  ">
          {navbars.map((itemNav, index) => (
            <div className="pb-2 border-b-[1px] border-[#E5E8EC]" key={index}>
              {itemNav.isIcon === true ? (
                <span className="pl-1 flex items-center justify-between text-[10px] font-semibold ">
                  {itemNav.name}{" "}
                  <i className="text-[#8D979E] text-[10px] fa-solid fa-chevron-right"></i>
                </span>
              ) : (
                <span className="pl-1 text-[10px] font-semibold">
                  {itemNav.name}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="pl-1 text-[10px] font-semibold mt-3">
          Top Featured Products
        </div>
      </div>

      {/* main img */}
      <div className="w-[80%] rounded-[5px] flex flex-col">
        {/* banner */}
        <img src={bg} alt="" className=""></img>
        {/* img */}
        <div className="mt-[5px] w-full flex justify-between">
          <div className="w-[33%]">
            <img className="w-[100%]" src={img1} alt=""></img>
          </div>
          <div className="w-[33%]">
            <img className="w-[100%]" src={img2} alt=""></img>
          </div>
          <div className="w-[33%]">
            <img className="w-[100%]" src={img3} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
