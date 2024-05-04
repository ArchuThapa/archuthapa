import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import parkingImage from '../assests/images/parking.jpeg';
import fashionhubImage from '../assests/images/fashionhub.jpeg';
import Portfolio from '../assests/images/portfolio.jpeg';
import CollegeWeb from '../assests/images/collegewebsite.jpeg';
import { Button, Card } from 'antd';
import { IonIcon } from '@ionic/react';
import { logoGithub } from 'ionicons/icons';


const Project = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000
  // };

  return (
    <section id="projects" className="  bg-gray-800 relative py-10 px-3 text-white">
    <div className="slider-container" style={{ width: '80%', margin: '0 auto' }}>
      <div className='text-center mt-8'>
        <h3 className="text-4xl font-semibold ">
          My<span className="text-green-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>

     
      <div className='flex mb-3'>
        <Card style={{ width: '500px', margin: '0 10px' }}>
          <div>
            <img src={parkingImage} alt="Parking" />
            <h1 className="text-x font-bold text-cyan-800 mb-2">Online Parking Booking System</h1>
            <div className="flex justify-center mb-3 w-60">
           <a href="https://github.com/ArchuThapa/OPBS">
              <IonIcon icon={logoGithub} className="text-3xl text-gray-600" />
              </a>
              </div>
            <div className="flex justify-center">
              <Button className="mx-auto bg-green-600">Live Demo</Button>
            </div>
          </div>
        </Card>

        <Card style={{ width: '500px', margin: '0 10px' }}>
          <div>
            <img src={fashionhubImage} alt="Fashion Hub" />
            <h1 className="text-x font-bold text-red-800 mb-2">E-commerce Website</h1>
            <div className="flex justify-center mb-3 w-60">
            <a href="https://github.com/ArchuThapa/fashionhub">
              <IonIcon icon={logoGithub} className="text-3xl text-gray-600"/>
              </a>
              </div>
            <div className="flex justify-center">
              <Button className="mx-auto bg-green-600">Live Demo</Button>
            </div>
          </div>
        </Card>

        <Card style={{  width: '500px',margin: '0 10px' }}>
          <div>
            <img src={Portfolio} alt="Portfolio" />
            <h1 className="text-x font-bold text-yellow-800 mb-2">Portfolio</h1>
            <div className="flex justify-center mb-3 w-60">
            <a href="https://github.com/ArchuThapa/archuthapa">
              <IonIcon icon={logoGithub} className="text-3xl text-gray-600"/>
              </a>
              </div>
            <div className="flex justify-center">
            <a href="  https://archuthapa.pages.dev">

          
              <Button className="mx-auto bg-green-600">Live Demo</Button>
              </a>
            </div>
          </div>
        </Card>

        <Card style={{ width: '500px', margin: '0 10px' }}>
          <div>
            <img src={CollegeWeb} alt="CollegeSite" />
            <h1 className="text-x font-bold text-black mb-2">College Website</h1>
            <div className="flex justify-center mb-3 w-60"><IonIcon icon={logoGithub} className="text-3xl text-gray-600"/></div>
            <div className="flex justify-center" >
              <Button className="mx-auto bg-green-600">Live Demo</Button>
            </div>
          </div>
        </Card>
        </div>
    
    </div>
    </section>
  );
};

export default Project;
