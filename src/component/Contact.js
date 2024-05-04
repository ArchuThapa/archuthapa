import { ValidationError, useForm } from "@formspree/react";
import { IonIcon } from "@ionic/react";
// import { Button, Form, Input } from "antd";
// import TextArea from "antd/es/input/TextArea";
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

  
    const [state, handleSubmit] = useForm("mleqzogj");
    // if (state.succeeded) {
    //     return <p>Thanks for joining!</p>;
    // }
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
          {/* <Form className="flex flex-col flex-1 gap-5">
            <Input type="text" placeholder="Your Name" />
            <Input type="Email" placeholder="Your Email Address" />
            <TextArea placeholder="Your Message" rows={10}></TextArea>
            <Button className="btn-primary mt-8 bg-green-600 w-fit">Send Message</Button>
          </Form> */}

<form
            className="flex flex-col flex-1 gap-5"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email" className="text-white">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-green-600"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500"
            />
            <textarea
              id="message"
              name="message"
              className="border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-green-600"
              rows={5}
              placeholder="Your Message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500"
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="btn-primary mt-8 bg-green-600 py-2 px-4 rounded-md text-white"
            >
              {state.submitting ? "Submitting..." : "Submit"}
            </button>
          </form>


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