import React from "react";
import Crypto from '../assets/portfolio/Crypto.png'
import Auth from '../assets/portfolio/Auth.png'
import installNode from "../assets/portfolio/installNode.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Crypto,
      style:"shadow-cyan-400",
      link: <a href="https://crypto-six-brown.vercel.app/"></a>
    },
    {
      id: 2,
      src: Auth,
      style:"shadow-purple-400",
      link: <a href="https://auth-app-two-eta.vercel.app/login"></a>
    },
  ];

  return (
    <div
      name="portfolio"
      className=" 400 bg-gradient-to-b from-black to-gray-800 w-full h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, style, link }) => (
            <div key={id} className={`shadow-md  rounded-lg ${style}`}>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={`${link}`}>View</a> 
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
