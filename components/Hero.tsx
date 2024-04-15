"use client";
import React from "react";
import { CustomButton } from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, and rent a car -- quickly and easily
        </h1>
        <p className="hero__subtitle">
          streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyle="bg-orange-500 text-white rounded-full mt-10"
          handleClick={handleScroll}
        ></CustomButton>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero1.png" alt="hero" fill className="object-contain"></Image>
            <div    
 className="hero__image-overlay "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
