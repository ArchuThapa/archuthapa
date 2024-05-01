import React from "react";
import Archana from "../assests/images/Archana.jpeg"
import { logoFacebook, logoInstagram, logoLinkedin, logoTwitter } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Button } from "antd";
const Profile = () => {
  const social_media =[
    { name: "Instagram", icon: logoInstagram },
    { name: "Facebook", icon: logoFacebook },
    { name: "LinkedIn", icon: logoLinkedin },
    { name: "Twitter", icon: logoTwitter},
  ];
  return (
    <section
      id="home"
      className="  bg-gray-800 relative min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        {/* <img src={Archana} alt="" className="md:w-11/12 h-full object-cover" /> */}
        <img src={Archana} alt="" className="md:w-11/12 h-auto max-h-80 md:max-h-full object-cover rounded-lg shadow-lg" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-green-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I am <span>Archana Thapa</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
          FrontEnd Developer
          </h4>
          <Button className="btn-primary mt-8 bg-green-600 rounded-full ">Contact Me</Button>
         
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media.map((social) => (
              <div key={social.name} className="text-gray-600 hover:text-white cursor-pointer ">
                <IonIcon icon={social.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;