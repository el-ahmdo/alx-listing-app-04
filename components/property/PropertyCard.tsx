// components/PropertyCard.tsx
import Image from "next/image";
import React from "react";

export interface PropertyData {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
}

interface PropertyCardProps {
  property: PropertyData;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="property-card">
      <div className="image-wrapper">
        <Image
          src={property.image}
          alt={property.title}
          width={400}
          height={250}
          className="property-image"
        />
      </div>
      <div className="info">
        <h2>{property.title}</h2>
        <p>{property.location}</p>
        <p className="price">{property.price}</p>
      </div>

      <style jsx>{`
        .property-card {
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          margin: 1rem 0;
          max-width: 400px;
        }

        .image-wrapper {
          width: 100%;
          height: auto;
          position: relative;
        }

        .info {
          padding: 16px;
        }

        .price {
          font-weight: bold;
          color: #0070f3;
        }
      `}</style>
    </div>
  );
};

export default PropertyCard;
