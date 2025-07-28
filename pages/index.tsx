import Head from "next/head";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import { PLACEHOLDER_IMAGE } from "@/constants";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <main className="p-8">
        <h1 className="text-2xl font-bold mb-6">Featured Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Cozy Apartment"
            description="2 beds · 1 bath · Wi-Fi · Kitchen"
            imageUrl={PLACEHOLDER_IMAGE}
          />
          <Card
            title="Modern Studio"
            description="1 bed · 1 bath · Air conditioning"
            imageUrl={PLACEHOLDER_IMAGE}
          />
        </div>

        <div className="mt-8">
          <Button label="View All Listings" onClick={() => alert("Coming soon!")} />
        </div>
      </main>
    </div>
  );
}