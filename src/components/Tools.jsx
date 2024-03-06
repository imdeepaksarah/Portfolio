import React from "react";

import git from '../assets/git.png'
import vscode from '../assets/vscode.png'
import github from '../assets/github.png'

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: vscode,
      title: "vscode",
      style: "shadow-cyan-500",
    },
    {
      id: 2,
      src: git,
      title: "git",
      style: "shadow-red-500",
    },
    {
        id:3,
        src:github,
        title:"github",
        style:"shadow-gray-400"
    }
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 via-balck to-black w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-center items-center">
           Tools
          </p>
          <p className="py-6 "></p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
