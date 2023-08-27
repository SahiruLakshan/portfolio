import React from "react";
import ec from "../assets/portfolio/ec.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import uiux from "../assets/portfolio/uiux.jpg"
import bmi from "../assets/portfolio/bmi.jpg"
import { Link } from "react-scroll";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ec,
      link1: "https://www.linkedin.com/posts/sahiru-lakshan-3b36541b2_laravel-ecommerce-webdesign-activity-7033659822386360320-t4wB?utm_source=share&utm_medium=member_desktop",
      link2: "https://github.com/SahiruLakshan/E-Commerce-site/tree/master"
    },
    {
      id: 2,
      src: uiux,
      link1: "https://www.behance.net/ahiruakshan"
    },
    {
      id: 3,
      src: bmi,
      link2: "https://github.com/SahiruLakshan/bmi_calculator"
    },
    // {
    //   id: 4,
    //   src: reactSmooth,
    // },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,link1,link2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={link1} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={link2} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
