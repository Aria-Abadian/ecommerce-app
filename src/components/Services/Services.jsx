import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "free shipping on all orders",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Safe money",
    description: "30 days money back guarantee",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "secure payment",
    description: "Pay Securly",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "online support",
    description: "24/7 technical support",
  },
];

const Services = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {data.map((d) => (
            <div key={d.id} className="flex flex-col items-start sm:flex-row gap-4">
              {d.icon}
              <div>
                <h1 className="lg:text-xl font-bold">{d.title}</h1>
                <h1 className="text-gray-500 text-sm">{d.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
