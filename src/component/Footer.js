import { Layout } from 'antd'
import React from 'react'


const Footer = () => {
    const {  Footer } = Layout;
  return (
    <div>

        <Layout>
        <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Copyright ©{new Date().getFullYear()} Created by Archana Thapa
      </Footer>
        </Layout>
       
    </div>
  )
}

export default Footer