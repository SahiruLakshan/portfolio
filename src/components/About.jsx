import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a web developer, mobile app developer, and UI/UX designer with
          over 5 years of experience. I have a strong understanding of the
          entire web development process, from ideation to deployment. I am
          proficient in HTML, CSS, JavaScript, React, Node.js, and other web
          development technologies. I am also experienced in mobile app
          development, using platforms such as Flutter, React Native, and Ionic.
          In addition, I have a strong understanding of UI/UX design principles
          and practices. I am able to create user-friendly and visually
          appealing interfaces that meet the needs of users.
        </p>
        <br />
        <p className="text-xl">
          I am a passionate AI enthusiast with a strong desire to learn more
          about this field. I am always looking for new ways to expand my
          knowledge and stay up-to-date on the latest developments in AI.
        </p>
      </div>
    </div>
  );
};

export default About;
