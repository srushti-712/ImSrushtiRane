import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChanger";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20 ">
      <div className="md:2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flew leading-normal tracking">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl leading-tight tracking-tight">
          I am a Full Stack devdloper at Wohlig Transformations
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href="#Footer">Contact Me</a>
        </button>
      </div>
      <div>
        {" "}
        <img className="" src={avatarImg} alt="" srcset="" />{" "}
      </div>
    </div>
  );
};

export default Home;
