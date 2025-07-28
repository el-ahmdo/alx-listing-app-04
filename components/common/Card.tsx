import React from "react";
import Image from "next/image";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="object-cover w-full h-60"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
