import React from "react";
import Image3 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image1 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";

const CategoryRow2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="flex flex-col gap-5 lg:flex lg:flex-row lg:justify-between">
          {/* third column */}
          <div className="w-[100%] lg:w-[50%]">
            <div
              className="
                  
                  py-10
                  pl-5
                  bg-gradient-to-br
                from-gray-400/90
                to-gray-100
                  text-white
                  rounded-3xl
                  relative
                  h-[380px]
                  flex
                  items-end
              "
            >
              <div>
                <div className="mb-4">
                  <p
                    className="
                          mb-[2px]
                          text-white
                      "
                  >
                    Enjoy
                  </p>
                  <p
                    className="
                          text-2xl
                          font-semibold
                          mb-[2px]
                      "
                  >
                    the
                  </p>
                  <p
                    className="
                          text-4xl
                          xl:text-5xl
                          font-bold
                          opacity-40
                          mb-2
                      "
                  >
                    Gaiming
                  </p>
                  <Button
                    text="Browse"
                    bgColor="bg-white"
                    textColor="text-primary"
                  />
                </div>
              </div>
              <img
                src={Image3}
                alt="earphone"
                className="
                  w-[320px]
                  absolute
                  top-1/2
                  -translate-y-1/2
                  right-0
                  "
              />
            </div>
          </div>
          {/* end of third column */}
          <div
            className="flex flex-col md:flex md:flex-row gap-5
          md::w-[43vw] lg:w-[50%] md:justify-between lg:justify-center"
          >
            {/* frist column */}
            <div
              className="
                  md:w-[48%]
                  lg:w-[50%]
                  py-10
                  pl-5
                  bg-gradient-to-br
                from-brandGreen/90
                to-brandGreen/90
                text-white
                rounded-3xl
                relative
                h-[380px]
                flex
                items-start
              "
            >
              <div>
                <div className="mb-4">
                  <p
                    className="
                          mb-[2px]
                          text-white
                      "
                  >
                    Enjoy
                  </p>
                  <p
                    className="
                          text-2xl
                          font-semibold
                          mb-[2px]
                      "
                  >
                    the
                  </p>
                  <p
                    className="
                          text-4xl
                          xl:text-5xl
                          font-bold
                          opacity-20
                          mb-2
                      "
                  >
                    Speakers
                  </p>
                  <Button
                    text="Browse"
                    bgColor="bg-primary"
                    textColor="text-white"
                  />
                </div>
              </div>
              <img
                src={Image1}
                alt="earphone"
                className="
                  w-[320px]
                  absolute
                  bottom-0
              "
              />
            </div>
            {/* end of frist column */}
            {/* second column */}
            <div
              className="
                  md:w-[48%]
                  lg:w-[50%]
                  py-10
                  pl-5
                  bg-gradient-to-br
                  from-brandBlue
                  to-brandBlue/90
                  text-white
                  rounded-3xl
                  relative
                  h-[380px]
                  flex
                  items-start
              "
            >
              <div>
                <div className="mb-4">
                  <p
                    className="
                          mb-[2px]
                          text-white
                      "
                  >
                    Enjoy
                  </p>
                  <p
                    className="
                          text-2xl
                          font-semibold
                          mb-[2px]
                      "
                  >
                    the
                  </p>
                  <p
                    className="
                          text-4xl
                          xl:text-5xl
                          font-bold
                          opacity-40
                          mb-2
                      "
                  >
                    VR
                  </p>
                  <Button
                    text="Browse"
                    bgColor="bg-white"
                    textColor="text-brandBlue"
                  />
                </div>
              </div>
              <img
                src={Image2}
                alt="earphone"
                className="
                w-[200px]
                absolute
                bottom-0
                right-0
              "
              />
            </div>
            {/* end of second column */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryRow2;
