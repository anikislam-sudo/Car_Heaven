"use client";
import { carProps } from "@/types";
import { calculateCarRent } from "@/utills";
import React, { useState } from "react";
import {   CarDetails, CustomButton } from ".";
import Image from "next/image";



interface CarCardProps {
  car: carProps;
}

export const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group relative">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </p>
      <div className="car-card__image relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero1.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="car-card__icon-container mb-8 flex  w-full justify-between text-grey">
        <div className="car-card__icon">
          <Image
            src="/steering-wheel.svg"
            width={20}
            height={20}
            alt="steering wheel"
          />
          <p className="car-card__icon-text">
            {transmission === "a" ? "Automatic" : "Manual"}
          </p>
        </div>
        <div className="car-card__icon">
          <Image src="/tire.svg" width={20} height={20} alt="seat" />
          <p className="car-card__icon-text">{drive.toUpperCase()}</p>
        </div>
        <div className="car-card__icon">
          <Image src="/gas.svg" width={20} height={20} alt="seat" />
          <p className="car-card__icon-text">{city_mpg} MPG</p>
        </div>
      </div>
      <div className="car-card__btn-container absolute bottom-0 left-0 right-0 flex justify-center">
        <CustomButton
          title="View More"
          containerStyle="w-full py-[16px] rounded bg-primary-blue"
          textStyles="text-white text-[14px] leading-[17px] font-bold"
          rightIcon="/right-arrow.svg"
          handleClick={() => setIsOpen(true)}
        />
        
      </div>
      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  );
};
