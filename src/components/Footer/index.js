import React, { Fragment } from "react";
import payment from "./image/payment.png";
const Footer = () => {
  return (
    <Fragment>
      <div className="w-full h-[auto] flex-jc-ic border-b-2">
        <div className="w-[80%] h-auto flex justify-between py-9 ">
          {/* about the store */}
          <div className="w-1/4  flex flex-col">
            <h3>About The Store</h3>

            <span className="text-footer">Got Question? Call us 24/7</span>
            <span className="text-[30px] text-[#2B38D1] font-medium pb-2">
              +222-1800-2628
            </span>
            <span className="text-footer">
              268 St, South New York/NY 98944, United States
              Customersupport@example.com Info@example.com
            </span>
          </div>
          {/* information */}
          <div className="w-[30%] flex justify-between">
            <div className="w-1/2">
              <h3>Infomation</h3>
              <ul className="">
                <li>Block Us</li>
                <li className="border-b-[1px] border-[#515D66] w-fit font-medium">
                  About Us
                </li>
                <li>Delivery Information</li>
                <li>Privace Policy</li>
                <li>FeedBack</li>
              </ul>
            </div>
            {/* link */}
            <div className="w-1/3">
              <h3>Quick Links</h3>
              <ul className="">
                <li>Store Location</li>
                <li>Orders Tracking</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
          {/* sign up */}
          <div className="w-[30%]">
            <h3>Sign up to Newsletter</h3>

            <span className="text-footer">
              Join 20.000+ subscribers and get a new discount coupon on every
              Saturday. Updates information on Sales and Offers.
            </span>
            <div className="flex my-3">
              <input
                className="min-w-[70%] px-5 py-3 rounded-3xl text-[12px] border border-[#E5E8EC] outline-none"
                type="text"
                placeholder="Your email address..."
              />
              <button className="min-w-[30%] p-3  rounded-3xl text-[12px] text-[#ffff] bg-[#2B38D1]">
                Subscribe
              </button>
            </div>
            <span className="text-footer">
              Subscribe for Uminex and get 20% off your first purchase.
            </span>
          </div>
        </div>
      </div>
      <div className="w-[80%] h-auto mx-auto my-9 flex justify-between">
        <div className="w-[40%] text-[13px] font-medium">
          Copyright © <span className="text-[#2B38D1]">Uminex</span> all rights
          reserved. Powered by{" "}
          <span className="text-[#2B38D1]">Blueskytechco.</span>
        </div>
        <div className="w-[40%] flex  justify-between items-center">
          <span className="text-[13px] w-[39%] font-medium ml-11">
            Payment Method:
          </span>
          <img className="w-[60%] ml-3" src={payment} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
