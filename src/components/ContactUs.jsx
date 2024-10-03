import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[#F8F9EC] h-auto pb-5 w-full mt-[134px] grid grid-cols-1 md:grid-cols-2">
      <div className="h-full w-ful hidden md:block md:pl-20 md:pt-3 md:pr-10">
        <img
          src="/assets/images/contact.jpg"
          alt=""
          className="h-full w-full rounded-xl"
        />
      </div>
      <div className="h-full w-full flex flex-col items-center md:mt-[-20px] md:items-start md:pl-3 md:pr-32">
        <div>
          <h1 className="font-semibold md:text-[65px] text-[40px]">
            Contact Us
          </h1>
        </div>
        <div className="flex items-center flex-col md:flex-none w-full h-auto border-t-[1.5px] md:border-l-[1.5px] border-gray-600 pl-5 md:pl-14 pt-5 md:pt-10 md:mt-[-10px]">
          <p className="self-start">Name:</p>
          <input
            type="text"
            placeholder="Enter your Name"
            className="self-start mb-3 md:w-[70%] w-[85%] border-0 border-b-2 border-gray-500 outline-none text-lg text-black py-1.5 bg-transparent"
          />
          <p className="self-start">Email:</p>
          <input
            type="email"
            placeholder="Enter your Email"
            className="self-start mb-3 md:w-[70%] w-[85%] border-0 border-b-2 border-gray-500 outline-none text-lg text-black py-1.5 bg-transparent"
          />
          <p className="self-start">Message:</p>
          <input
            type="text"
            placeholder="Message"
            className="self-start md:w-[70%] w-[85%] border-0 border-b-2 border-gray-500 outline-none text-lg text-black py-1.5 bg-transparent"
          />
          <div className="bg-red-500 hover:bg-red-700 whitespace-nowrap hover:cursor-pointer w-fit px-9 py-3 rounded-full mt-5 md:ml-[190px] md:mt-[25px]">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
