import React from "react";
import { HeroScrollDemo } from "./ui/HeroScroll";

const Scroll = () => {
  return (
    <section
      className="w-screen overflow-hidden h-full common-padding "
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(147, 51, 234, 0.4), transparent 70%)",
      }}
    >
      <div>
        <HeroScrollDemo />
      </div>
    </section>
  );
};

export default Scroll;
