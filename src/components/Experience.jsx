import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import express from "../assets/express.png";
import laravel from "../assets/laravel.png";
import flutter from "../assets/flutter.png";
import mongo from "../assets/mongo.png";
import sql from "../assets/sql.png";
import firebase from "../assets/firebase.png";
import bootstrap from "../assets/bootstrap.png";
import postman from "../assets/postman.png";
import figma from "../assets/figma.png";
import xd from "../assets/xd.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: reactImage,
      title: "React JS",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: express,
      title: "Express JS",
      style: "shadow-white",
    },
    {
      id: 3,
      src: laravel,
      title: "Laravel",
      style: "shadow-red-500",
    },
    {
      id: 4,
      src: flutter,
      title: "Flutter",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: reactImage,
      title: "React Native",
      style: "shadow-blue-600",
      
    },
    {
      id: 6,
      src: mongo,
      title: "Mongo DB",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: sql,
      title: "My SQL",
      style: "shadow-purple-400",
    },
    {
      id: 8,
      src: firebase,
      title: "Firebase",
      style: "shadow-orange-400",
    },
    {
      id: 9,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-blue-300",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-500",
    },
    {
      id: 11,
      src: postman,
      title: "Postman",
      style: "shadow-red-400",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 13,
      src: figma,
      title: "Figma",
      style: "shadow-gray-400",
    },
    {
      id: 14,
      src: xd,
      title: "XD",
      style: "shadow-purple-600",
    },
    
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b pb-32 pt-80 from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies and tools I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
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
