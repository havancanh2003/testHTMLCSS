import React from "react";
import { products } from "../../../data.js";
const MainContainer = () => {
  return (
    <div className="w-[80%] h-auto mt-9 mb-9">
      <div className="w-full bg-[#F1F5F6] grid grid-cols-6 grid-rows-2 gap-1  ">
        {products.map((pro) =>
          pro.id === 9 ? (
            <div
              key={pro.id}
              className="rounded-[5px] p-10 col-span-2 border-[2px] border-[#DC323C] row-span-2 flex flex-col"
            >
              <div>
                <h1>Today’s Offer</h1>
              </div>
              {/* sale */}
              <div>-20%</div>
              <div className="rounded-[5px]">
                <img className="rounded-[5px]" src={pro.img} alt="" />
              </div>
              <span className="text-[12px] font-semibold pb-3">{pro.name}</span>
              <div>
                <i class="text-[11px] text-[#FFB800] fa-solid fa-star"></i>
                <i class="text-[11px] text-[#FFB800] fa-solid fa-star"></i>
                <i class="fa-solid fa-star text-[11px] text-[#FFB800]"></i>
                <i class="fa-solid fa-star text-[11px] text-[#FFB800]"></i>
                <i class="fa-solid fa-star text-[11px] text-[#FFB800]"></i>
                <span className="text-[11px] text-[#8D979E]"> 29 reviewer</span>
              </div>
              <span className="text-[#DC323C] text-[17px] font-semibold py-3 flex">
                ${pro.price}{" "}
                <div className="flex flex-row relative ml-4 mt-[3px]">
                  <span className="text-[11px] text-[#8D979E] ">$12.0</span>
                  <div className="absolute h-[1px] w-9 bg-[#8D979E] top-[8px]"></div>
                </div>
              </span>
              <span>
                <i className="fa-solid fa-check"></i>
                {pro.des}
              </span>

              <span>Hurry up! Offer ends in:</span>
              <div className="my-5 w-[60%] grid grid-cols-11 gap-2">
                <div className="col-span-2 flex-jc-ic px-5 py-3 rounded-md text-size bg-[#DC323C] text-white">
                  826
                </div>
                <div className="flex-jc-ic">:</div>
                <div className="col-span-2 flex-jc-ic  px-5 py-3 rounded-md text-size bg-[#DC323C] text-white">
                  29
                </div>
                <div className="flex-jc-ic">:</div>
                <div className="col-span-2 flex-jc-ic  px-5 py-3 rounded-md text-size bg-[#DC323C] text-white">
                  20
                </div>
                <div className="flex-jc-ic">:</div>
                <div className="col-span-2 flex-jc-ic  px-5 py-3 rounded-md text-size bg-[#DC323C] text-white">
                  08
                </div>
              </div>

              <div className=" w-[100%] h-2 bg-[#F3F4F6] rounded-2xl">
                <div className="w-[80%] h-2 bg-[#DC323C] rounded-2xl"></div>
              </div>

              <span className="mt-4 text-[11px]">
                Sold: <span className="text-[11px] font-semibold">620/896</span>{" "}
                products{" "}
              </span>
            </div>
          ) : (
            <div key={pro.id} className="p-5 rounded-[5px] flex flex-col">
              <div className="rounded-[5px] pb-2">
                <img className="rounded-[5px]" src={pro.img} alt="" />
              </div>
              <span className="text-[12px] font-semibold pb-1">{pro.name}</span>
              <div>
                <i className="text-[11px] text-[#FFB800] fa-solid fa-star"></i>
                <i className="text-[11px] text-[#FFB800] fa-solid fa-star"></i>
                <i className="text-[11px] text-[#FFB800] fa-solid fa-star"></i>
                <i className="text-[11px] text-[#FFB800] fa-solid fa-star"></i>
                <i className="text-[11px] text-[#FFB800] fa-solid fa-star"></i>
                <span className="text-[11px] font-normal"> (68)</span>
              </div>

              <span className="text-[#DC323C] font-semibold pb-3 flex">
                ${pro.price}{" "}
                <span className="ml-3 text-[#8D979E] flex pt-[3px]">
                  {pro.sale === true ? (
                    <div className="flex flex-row relative">
                      <span className="text-[12px]">$12.0</span>
                      <div className="absolute h-[1px] w-9 bg-[#8D979E] top-[8px]"></div>
                    </div>
                  ) : (
                    <></>
                  )}
                </span>
              </span>

              <span className="text-[11px] font-normal">
                <i className="text-[11px] text-[#008A00] fa-solid fa-check"></i>
                {"  " + pro.des}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MainContainer;
