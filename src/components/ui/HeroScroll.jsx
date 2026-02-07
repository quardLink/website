"use client";
import React from "react";
import { ContainerScroll } from "../ui/ScrollAnimation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Elevate your brand with <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Quardlink Magic
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/process.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
        {/* <video
          className="w-full h-full object-cover rounded-2xl"
          autoPlay
          muted
          playsInline={true}
          key="video"
        >
          <source src="/design.mp4" type="video/mp4 " />
        </video> */}
      </ContainerScroll>
    </div>
  );
}
