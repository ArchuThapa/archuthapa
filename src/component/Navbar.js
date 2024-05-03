import { Layout } from 'antd';
import React from 'react';


const { Header } = Layout;

const Navbar = () => {
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          paddingLeft: '16px', 
        }}
      >
    
        <div className="navbar-logo text-4xl font-extrabold text-gray-900 tracking-wide uppercase ml-0">
          <span>A</span>R<span className="text-green-600">C</span><span className="text-green-600">H</span><span className="text-green-600">A</span><span>NA</span>
        </div>
        
     
        <div className='header'>
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </Header>
     
    </Layout>
  );
};

export default Navbar;
