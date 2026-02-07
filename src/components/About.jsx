import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section
      className="w-screen overflow-hidden h-full common-padding "
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(147, 51, 234, 0.4), transparent 60%)",
      }}
      id="about"
    >
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-2xl text-center md:text-4xl text-bold md:max-w-[600px]">
          Why Quardlink Is the Right Creative Partner for Your Brand
        </h1>
        <div className="flex flex-col justify-center items-center mt-15 md:mt-8">
          <p className="text-center text-sm  md:max-w-[800px] text-gray-400">
            At Quardlink, we’re more than just a service provider — we become an
            extension of your team. We collaborate closely with you to
            understand your goals, innovate boldly to craft unique digital
            solutions, and continuously evolve to meet the demands of a rapidly
            changing landscape. From the first spark of an idea to the final
            line of code, we’re with you every step of the way — creating
            purposeful, high-impact digital experiences that help your brand
            stand out, scale up, and succeed.
          </p>
        </div>
        <div className="flex items-center gap-8 border-b border-gray-700 w-fit mx-auto mt-5">
          <button className="relative pb-2 text-white font-medium group">
            End-to-End Partnership
            <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-purple-500 group-hover:bg-purple-900 rounded-full group-hover:opacity-100 transition-all duration-300 blur-sm"></span>
            <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-purple-500 group-hover:bg-purple-900 rounded-full opacity-100"></span>
          </button>

          <button className="relative pb-2 text-white font-medium group">
            Unrivaled Design Expertise
            <span className="absolute left-0 -bottom-0.5 w-full h-0.5  rounded-full bg-purple-500 group-hover:bg-purple-900 transition-all duration-300 blur-sm"></span>
            <span className="absolute left-0 -bottom-0.5 w-full h-0.5  rounded-full bg-purple-500 group-hover:bg-purple-900 transition-all duration-300"></span>
          </button>

          <button className="relative pb-2 text-white font-medium group">
            Smart, Scalable Development
            <span className="absolute left-0 -bottom-0.5 w-full h-0.5  rounded-full bg-purple-500 group-hover:bg-purple-900 transition-all duration-300 blur-sm"></span>
            <span className="absolute left-0 -bottom-0.5 w-full h-0.5 t rounded-full bg-purple-500 group-hover:bg-purple-900 transition-all duration-300"></span>
          </button>
        </div>

        <div className="flex justify-center items-center mt-8">
          <div className="w-full max-w-[1200px] h-auto bg-[#1b1b1c] rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="w-full h-auto bg-[#121212] p-5 rounded-md flex flex-col">
                <div className="flex flex-row items-center justify-between">
                  <h2 className="text-lg py-2">Your Vision, Our Blueprint</h2>
                  <div className="w-8 h-8 bg-[#4a4a4f] rounded-[4px] flex justify-center items-center hover:bg-blue-500">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className=" w-full pr-7">
                  <p className="text-gray-400 text-sm ">
                    We take your raw ideas and shape them into compelling
                    digital experiences, combining creativity with deep
                    technical expertise.
                  </p>
                </div>
                <div className="flex justify-center items-center w-full py-2">
                  {/* <video
                    className="w-full h-[250px] object-cover pointer-events-none rounded-xl"
                    autoPlay
                    muted
                    playsInline={true}
                    key="video"
                  >
                    <source src="/growth.mp4" type="video/mp4 " />
                  </video> */}
                  <img
                    src="/q-1.jpg"
                    alt="vision"
                    className="w-full h-[250px] object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="w-full h-auto bg-[#121212] p-5 rounded-md flex flex-col">
                <div className="flex flex-row items-center justify-between">
                  <h2 className="text-lg py-2">Design That Drives Results</h2>
                  <div className="w-8 h-8 bg-[#4a4a4f] rounded-[4px] flex justify-center items-center hover:bg-blue-500">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className=" w-full pr-9">
                  <p className="text-gray-400 text-sm ">
                    Every design we deliver is built with purpose — to engage,
                    convert, and build brand equity in a fast-paced digital
                    world.
                  </p>
                </div>

                <div className="flex justify-center items-center w-full py-2">
                  {/* <video
                    className="w-full h-[250px] object-cover pointer-events-none rounded-xl"
                    autoPlay
                    muted
                    playsInline={true}
                    key="video"
                  >
                    <source src="/design.mp4" type="video/mp4 " />
                  </video> */}
                  <img
                    src="/q-2.jpg"
                    alt="vision"
                    className="w-full h-[250px] object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="w-full h-auto bg-[#121212] p-5 rounded-md flex flex-col">
                <div className="flex flex-row items-center justify-between">
                  <h2 className="text-lg py-2">Engineered for Growth</h2>
                  <div className="w-8 h-8 bg-[#4a4a4f] rounded-[4px] flex justify-center items-center hover:bg-blue-500">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className=" w-full pr-7">
                  <p className="text-gray-400 text-sm ">
                    Our solutions are built to scale — from MVPs to enterprise
                    platforms, ensuring performance, flexibility, and long-term
                    success.
                  </p>
                </div>
                <div className="flex justify-center items-center w-full py-2">
                  {/* <video
                    className="w-full h-[250px] object-cover pointer-events-none rounded-xl"
                    autoPlay
                    muted
                    playsInline={true}
                    key="video"
                  >
                    <source src="/quardlink.mp4" type="video/mp4 " />
                  </video> */}
                  <img
                    src="/q-3.jpg"
                    alt="vision"
                    className="w-full h-[250px] object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
