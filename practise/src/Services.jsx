import React from 'react';
import { TfiTimer } from "react-icons/tfi";
import { FaRocket } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";

const ServicesData = [
  {
    id: 1,
    heading: "Alone",
    text: "Feeling alone is a normal, human experience. You can feel lonely when you're by yourself or even when you’re in a room full of people. When you don’t feel connected with anyone or you feel like no one understands you, you might feel as though you are completely alone even if you’re around friends or family.",
    icon: <TfiTimer />
  },
  {
    id: 2,
    heading: "“Why are you here?” and “What are you living for?“",
    text: "This is also about the meaning of life and your calling. The answer to these questions will give you lasting motivation and direction and strength for your. ",
    icon: <FaRocket />
  },
  {
    id: 3,
    heading: "I know you did this",
    text: "If something is important enough, even if the odds are against you, you should still do it",
    icon: <CiUser />
  }
];

const Services = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ServicesData.map(({ id, heading, text, icon }) => (
            <div key={id} className="service-item">
              <div className="icon text-4xl mb-2">{icon}</div>
              <h2 className="heading font-bold text-lg mb-1">{heading}</h2>
              <p className="text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
