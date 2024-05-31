"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";

interface CarCardsProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardsProps) => {
  const { city_mpg, make, model, drive, transmission, year } = car;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2>
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
    </div>
  );
};

export default CarCard;
