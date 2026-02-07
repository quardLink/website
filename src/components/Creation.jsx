import { ArrowUpRight } from "lucide-react";
import React from "react";
import { projectList } from "../data";
import { TextHoverEffectDemo } from "./ui/TextHover";

const Creation = () => {
  return (
    <section
      className="w-screen overflow-hidden h-full common-padding"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(147, 51, 234, 0.4), transparent 50%)",
      }}
    >
      <div>
        {/* <h1 className="text-5xl mb-10 md:text-7xl text-center">Creation</h1> */}
        <TextHoverEffectDemo />

        <div className="grid grid-cols-2 gap-4 mt-5 md:grid-cols-3">
          {projectList.map((list) => (
            <div className="relative w-full  h-[250px] md:h-[400px] rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full flex justify-between items-start p-4 z-10">
                <div className="flex flex-col">
                  <h1 className="text-xl md:text-2xl font-semibold pb-1 text-white">
                    {list.name}
                  </h1>
                  <p className="text-xs text-gray-200">{list.desc}</p>
                </div>
                <a
                  href={list.link}
                  className="w-8 h-8 flex items-center justify-center bg-white hover:bg-blue-600 rounded-full shadow-md shrink-0 md:w-12 md:h-12"
                >
                  <ArrowUpRight className="text-black w-4 h-4 md:w-8 md:h-8 hover:text-white" />
                </a>
              </div>

              <img
                src={list.image}
                alt="Preview"
                className="object-cover w-full h-full rounded-2xl opacity-[60%]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creation;
