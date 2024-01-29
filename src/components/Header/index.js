import React from "react";
import { menu } from "../../data.js";
import logo from "./image/Logo.png";
import icon from "./image/icon.png";

const Header = () => {
  return (
    <div className="w-full h-[176px] ">
      {/* top header */}
      <div className="w-full h-14px mx-auto my-auto border border-[rgba(229, 232, 236, 1)]">
        <div className="w-[100%] flex-j-c pl-[5%] pr-[5%] pt-[8px] pb-[8px]">
          <span
            className="text-size
          "
          >
            You are a student and students get 20% discount.
            <a
              href="#homn"
              style={{
                fontSize: "11px",
                fontWeight: "600",
                color: "rgba(81, 93, 102, 1)",
              }}
            >
              Learn More
            </a>
          </span>
          <div className="">
            <div className="flex-ic gap-5">
              <span className="text-size">Store Locator</span>
              <span className="text-size">Order Tracking</span>
              <span className="text-size">FAQs</span>
              <div
                style={{
                  width: "1px",
                  height: "14px",
                  backgroundColor: "rgba(229, 232, 236, 1)",
                }}
              ></div>
              <span
                className="text-size
              "
              >
                English <i className="fa-solid fa-chevron-down"></i>
              </span>
              <span
                className="text-size
              "
              >
                USD <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* main header */}
      <div className="w-full flex-jc-ic border-b-[1px]">
        <div className="w-[90%] py-3 flex justify-between items-center ">
          <div className="w-[10%] h-auto">
            <img className="object-cover w-full" src={logo} alt="" />
          </div>
          <div className="rounded-l-md min-w-[60%] flex-ic border-[1px] border-[rgba(229, 232, 236, 1)]">
            <div className="px-2 w-[25%] flex justify-around items-center">
              <span className="text-[14px] font-semibold">All Categories</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <input
              className="border-l-2 pl-5 min-w-[55%] outline-none"
              type="text"
              placeholder="Search in 200+ products..."
            />
            <button className="w-[20%] rounded-r-sm text-[#FFFFFF] p-[10px] bg-[#2B38D1]">
              Search
            </button>
          </div>
          <div className="flex gap-4">
            <div className="flex-ic">
              <i className="text-[23px] pr-1 fa-regular fa-user"></i>
              <span className="text-[10px] font-light">
                Login
                <br />
                <span className="font-medium text-[13px]">Account</span>
              </span>
            </div>

            {/* wishlish */}
            <div className="relative flex-ic">
              <i className="text-[23px] fa-regular fa-heart"></i>
              <div className="absolute top-[-.5px] left-[10px] text-[10px] text-[#ffff] w-5 h-5 flex-jc-ic justify-center bg-red-700 rounded-[50%]">
                2
              </div>
            </div>
            <div className="relative flex-ic">
              <i className="text-[23px] fa-solid fa-cart-shopping"></i>
              <div className="absolute top-[-.5px] left-[10px] text-[10px] text-[#ffff] w-5 h-5 flex-jc-ic bg-red-700 rounded-[50%]">
                2
              </div>
              <div className="ml-2">
                <span className="text-[10px] font-light">
                  Your cartspan
                  <br />
                  <span className="mb-1 font-medium text-[13px]">$280.00</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* nav header */}
      <div className="border-b-[1px] py-2">
        {/* icon menu + Browse All Categories  */}
        <div className="flex px-[5%] justify-between items-center">
          <div className="px-3 flex w-[70%]">
            <div className="w-[24%] border-r-[2px]">
              <i className="fa-solid fa-bars"></i>
              <span className="pl-4 font-semibold text-[13px]">
                Browse All Categories
              </span>
            </div>

            {/* menu */}
            <div className="">
              <div className="flex gap-[20px]  pl-6">
                {menu.map((item, index) => (
                  <span className="text-[13px] font-semibold" key={index}>
                    {item.name} <i className="fa-solid fa-chevron-down"></i>
                  </span>
                ))}
                <span className="text-[13px] font-semibold">Contact US </span>
                <span className="text-[13px] text-[#DC323C] font-semibold">
                  Buy Uminex
                </span>
              </div>
            </div>
          </div>
          {/* right-nav */}
          <div className="flex-ic">
            <img src={icon} alt="" />
            <span className="pl-2 text-[13px] font-semibold">
              Sale $20 Off Your First Order.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
