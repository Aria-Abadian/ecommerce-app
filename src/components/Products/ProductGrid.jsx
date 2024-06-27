import React from "react";
import Button from '../Shared/Button.jsx'

const ProductGrid = ({ data }) => {
  return (
    <div className="mb-10">
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 
        place-items-center">
        {/* card grid section */}
        {data.map((data) => (
          <div key={data.id}
            className="group">
            <div className="relative space-y-3 overflow-hidden">
              <img 
                src={data.image} 
                alt={data.title}
                className="h-[180px] w-[260px] object-cover rounded-md" />
                {/* hover button */}
                <div className="hidden group-hover:flex absolute top-1/2 
                -translate-y-1/2 w-full h-full text-center
                group-hover:backdrop-blur-sm justify-center items-center 
                duration-200">
                    <Button 
                        text='Add to Cart'
                        textColor='text-white'
                        bgColor='bg-primary'
                    />
                </div>
            </div>
            <div className="leading-7">
                <h1 className="font-semibold">{data.title}</h1>
                <h1 className="font-bold">${data.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
