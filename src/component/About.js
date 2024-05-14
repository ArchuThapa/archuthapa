import { Button } from "antd";
import React from "react";

const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "5" },
    { text: "Companies Work", count: "02" },
  ];
  return (
    <section id="about" className="  bg-gray-800 relative py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-green-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="text-center mt-8">
        
        {/* <div className="flex md:flex-row flex-col-reverse items-center justify-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto"> */}
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Hey there! I'm Archana Thapa, B.CA student at Saraswati College, fueled by an immense passion for React development. Ever since I ventured into the world of web development, React has been my guiding light. Its flexibility, efficiency, and the vibrant community surrounding it have ignited a fire within me to excel in this realm.
<br />
As a React enthusiast, I thrive on crafting dynamic and visually appealing user interfaces. I relish the challenges of problem-solving and constantly seek out opportunities to innovate. Whether it's diving into new features or contributing to open-source projects, I'm always eager to learn and grow. I'm excited about the prospect of leveraging my skills to make a positive impact through meaningful experiences and collaborations in the realm of React development.
              </p>
          
              <div className="flex justify-center mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-green-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="/ArchanaCV.pdf" download>
                <Button className="btn-primary mt-8 bg-green-600 rounded-full">Download CV</Button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              {/* <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;