import { IonIcon } from "@ionic/react";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { locationOutline, logoWhatsapp, mailOutline } from "ionicons/icons";
import React from "react";

const Contact = () => {
  const contact_info = [
    { icon: mailOutline, text: "archanathapa2468@gmail.com" },
    { icon: logoWhatsapp, text: "9825383919" },
    {
      icon: locationOutline,
      text: "Kalanki,Kathmandu",
    },
  ];
  return (
    <section id="contact" className="  bg-gray-800 relative py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-green-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <Form className="flex flex-col flex-1 gap-5">
            <Input type="text" placeholder="Your Name" />
            <Input type="Email" placeholder="Your Email Address" />
            <TextArea placeholder="Your Message" rows={10}></TextArea>
            <Button className="btn-primary mt-8 bg-green-600 w-fit">Send Message</Button>
          </Form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-green-600 rounded-full">
                  <IonIcon icon={contact.icon} />
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;