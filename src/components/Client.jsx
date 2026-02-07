// import { useGSAP } from "@gsap/react";
import { clientsList } from "../data";
// import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

export const Client = () => {
  // useGSAP(() => {
  //   gsap.from("#clientHeading", {
  //     y: 0,
  //     opacity: 1,
  //     scrollTrigger: {
  //       trigger: "#clientHeading",
  //       toggleActions: "restart reverse restart reverse",
  //       start: "top 85%",
  //     },
  //   });
  // }, []);
  return (
    <section className="w-screen overflow-hidden h-full px-8 md:px-15">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl " id="clientHeading">
          Trusted by 20+ companies
        </h1>
        <div className="flex flex-row gap-4 flex-wrap justify-center items-center py-8 md:gap-6">
          {clientsList.map((client) => (
            <img
              key={client.name}
              src={client.logo}
              alt={client.name}
              className="md:w-40 w-20 object-contain filter brightness-0 invert"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
