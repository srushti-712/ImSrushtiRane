import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Full Stack developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Hi, I'm Srushti, a Full Stack Developer passionate about
                  building scalable web applications. I have hands-on experience
                  with AWS (S3, Lambda, API Gateway, Cognito, RDS, Bedrock) and
                  Google Cloud (BigQuery), and I'm proficient in JavaScript with
                  a solid foundation in Java and Python. On the front-end, I
                  specialize in React and Tailwind CSS to create responsive,
                  user-friendly interfaces. I also have exposure to Docker and
                  Kubernetes, helping manage containerized applications. I'm
                  driven by solving complex challenges and delivering efficient,
                  high-performance solutions.
                  <br />
                  When I'm not coding, I'm exploring new technologies, reading
                  or painting. Let's build something great together!
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Tech Interests
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  API design, Microservices, Cloud, AI
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
