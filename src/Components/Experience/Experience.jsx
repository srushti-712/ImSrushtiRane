import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaAws,
  FaNodeJs,
  FaDotCircle,
} from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { SiMongodb, SiGooglecloud } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#00b300" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <DiMysql color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="#ffd11a" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaAws color="#FF9900" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiGooglecloud color="#ffffff" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiTailwindCssFill color="#ffffff" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            {/* <FaGoogle color="#4285F4" size={50} /> */}
            <span className="text-white">
              <h2 className="leading-tight">Full Stack Developer, Wohlig</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2022 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Clarity (AI-powered Web App):</li>
                <li className="flex items-center ">
                  <FaDotCircle color="#FF9900" className="px-1" /> Developed an
                  application to analyse and improve Jira stories.
                </li>
                <li className="flex items-center underline">
                  <FaDotCircle color="#FF9900" className="px-1" /> Analysed and
                  improved more than 4K stories.
                </li>
                <li className="flex items-center ">
                  <FaDotCircle color="#FF9900" className="px-1" /> Integrated
                  with JIRA to analyse stories.
                </li>
                <br />

                <li>- Proposal Generation (AI-powered Web App): </li>
                <li className="flex items-center ">
                  <FaDotCircle color="#FF9900" className="px-1" /> Created APIs
                  to get various kinds of documents like tenders, pitch
                  documents.
                </li>
                <li className="flex items-center underline">
                  <FaDotCircle color="#FF9900" className="px-1" /> Reduced the
                  time required to create pitch documents from 1-2 hours to a
                  few minutes
                </li>

                <br />
                <li>- Fantasy Cricket Application (Web App): </li>
                <li className="flex items-center ">
                  <FaDotCircle color="#FF9900" className="px-1" /> Developed a
                  framework to optimize data retrieval and enhance API
                  performance.
                </li>
                <li className="flex items-center underline">
                  <FaDotCircle color="#FF9900" className="px-1" /> Reduced the
                  response time from minutes to 3 seconds.
                </li>
                <li className="flex items-center ">
                  <FaDotCircle color="#FF9900" className="px-1" /> Managed a
                  dedicated team for the seamless migration of APIs from MongoDB
                  to Snowflake.
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
