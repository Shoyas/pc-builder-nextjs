import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import errorImage from "@/assets/images/404.jpg";
import { useRouter } from "next/router";

const ErrorPage = () => {
    const [countdown, setCountdown] = useState(5);

    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
    
        setTimeout(() => {
          router.push("/");
        }, 5000);
    
        return () => clearInterval(interval);
      }, [countdown]);


  return (
    <div>
      <Head>
        <title>Pc-Builder-404 Not Found</title>
        <meta
          name="description"
          content="This is a pc builder website. It is made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-purple-400">{`Redirecting to home page in ${countdown} seconds...`}</p>
      <Image src={errorImage} alt="" width={700} height={500} layout="responsive"/>
    </div>
  );
};

export default ErrorPage;
