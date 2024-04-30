import { IonIcon } from "@ionic/react";
import { logoHtml5, logoCss3, logoReact, codeWorking, serverOutline, codeSlash } from "ionicons/icons";


import React from "react";

const Skills = () => {

    const skills = [
        {
            icon: logoHtml5,
            name: "HTML5",
            count: 90,
        },
        {
            icon: logoCss3,
            name: "CSS3",
            count: 80,
        },

        {
            icon: codeSlash,
            name: "JavaScript",
            count: 60,
        },
        {
            icon: logoReact,
            name: "REACT",
            count: 60,
        },
        {
            icon: codeWorking,
            name: "PHP",
            count: 65,
        },
        {
            icon: serverOutline,
            name: "SQL",
            count: 80,

        },

    ];

 
    return (
        <section id="skills" className="py-10 bg-gray-800 relative">
            <div className="mt-8 text-gray-100 text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-green-600">Skills</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
                <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
                    {skills?.map((skill, i) => (
                        <div
                            key={i}
                            className="border-2 group border-green-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
                        >
                            <div
                                style={{
                                    background: `conic-gradient(rgb(0,150,10) ${skill.count}%,#ddd ${skill.count}%)`,
                                }}
                                className="w-32 h-32 flex items-center justify-center rounded-full"
                            >
                                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-green-600">
                                    <IonIcon icon={skill.icon} />
                                </div>
                            </div>
                            <p className="text-xl mt-3">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;