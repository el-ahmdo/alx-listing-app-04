import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";

interface PropertyDetailProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: string;
    image: string;
    description: string;
  };
}

const PropertyDetailPage: React.FC<PropertyDetailProps> = ({ property }) => {
  if (!property) return <p>Property not found.</p>;

  return (
    <main style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <h1>{property.title}</h1>
      <Image
        src={property.image}
        alt={property.title}
        width={800}
        height={500}
        style={{ borderRadius: 10 }}
      />
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
        {property.location}
      </p>
      <p style={{ color: "#0070f3", fontWeight: "bold", fontSize: "1.4rem" }}>
        {property.price}
      </p>
      <p style={{ marginTop: "1rem", lineHeight: 1.6 }}>
        {property.description}
      </p>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  try {
    const res = await fetch(`https://example.com/api/properties/${id}`);
    if (!res.ok) throw new Error("Property not found");

    const property = await res.json();

    return {
      props: {
        property,
      },
    };
  } catch (error) {
    console.error("Error fetching property:", error);
    return {
      notFound: true,
    };
  }
};

export default PropertyDetailPage;
