"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";

interface CarCardsProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardsProps) => {
  const { city_mpg, make, model, drive, transmission, year } = car;
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2>
          {make} {model}
        </h2>
      </div>
      <p>
        <span>Car Rent ...</span>
      </p>
    </div>
  );
};

export default CarCard;
