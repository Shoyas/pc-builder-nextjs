import RootLayout from "@/components/Layouts/RootLayout";
import Slide from "@/components/Banner/Slide";
import Head from "next/head";
import React from "react";
import FeatureProductsPage from "./../components/UI/FeatureProducts";
import { useSession } from "next-auth/react";
import Image from "next/image";

const HomePage = ({ allProducts }) => {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>Pc Builder</title>
        <meta
          name="description"
          content="This is a pc builder website. It is made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slide />
      {session?.user && (
        <div
          className="mt-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src={session.user.image}
            alt={session.user.name}
            width={100}
            height={100}
            style={{ borderRadius: "50%" }}
          />
          <h1>{session.user.name}</h1>
          <p>{session.user.email}</p>
        </div>
      )}
      <FeatureProductsPage allProducts={allProducts} />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// Static Site Generation
export const getStaticProps = async () => {
  const res = await fetch("https://a6-pc-buider-backend.vercel.app/pc_parts");
  const data = await res.json();
  console.log("Coming data: ",data)

  // Shuffle the data array using Fisher-Yates algorithm
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }

  const limit = 6;
  const limitedData = data.slice(0, limit);

  return {
    props: {
      allProducts: limitedData,
    },
    revalidate: 10,
  };
};
