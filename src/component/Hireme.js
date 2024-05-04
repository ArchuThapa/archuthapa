import { Button } from "antd";
import React from "react";

const Hireme = () => {
  return (
    <section id="hireme" className="  bg-gray-800 relative py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-green-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
          Right now I am a working as  Technical Support Representative at Subisu Cablenet Ltd. I would love to have a career shift towards being a react developer so if you think you have a role that suits me please 👇
          </p>
          <a href="#message">
          <Button className="mx-auto bg-green-600">Say Hello</Button>
          </a>
        </div>
       
      </div>
    </section>
  );
};

export default Hireme;