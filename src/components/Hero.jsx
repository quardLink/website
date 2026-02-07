import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#subheading", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#heading", {
      opacity: 1,
      delay: 2.3,
    });
  }, []);
  return (
    <section className="w-full bg-black relative nav-height">
      <div className="w-full flex flex-center flex-col h-5/6  justify-center items-center md:mt-12 ">
        <p
          className="text-lg mb-3 md:text-2xl md:mb-5 opacity-0 transition bg-gradient-to-r from-white via-purple-800 to-purple-900 bg-clip-text text-transparent"
          id="subheading"
        >
          Crafting digital identities.
        </p>
        <h1
          className="text-4xl md:text-5xl text-center bg-gradient-to-br from-slate-300 via-slate-500 to-slate-800 text-transparent bg-clip-text drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] animate-fade-up opacity-0 transition duration-700"
          id="heading"
        >
          Create Digital Magic.
        </h1>
        <h1
          className="text-4xl md:text-5xl text-center bg-gradient-to-br from-slate-300 via-slate-500 to-slate-800 text-transparent bg-clip-text drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] animate-fade-up opacity-0 transition duration-700 delay-300"
          id="heading"
        >
          Fast and Smart.
        </h1>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key="video"
          >
            <source
              src={`${import.meta.env.BASE_URL}mac.mp4`}
              type="video/mp4 "
            />
          </video>
        </div>
        <div className="mt-5 ">
          <a
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            href="#service"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] " />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Discover
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
