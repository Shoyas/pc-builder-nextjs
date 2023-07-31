import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ">
      <div>
        <Image
          alt={product?.product_name}
          src={product?.image_url}
          width={500}
          height={300}
          layout="responsive"
        />
      </div>
      <div className="ml-5">
        <h1>{product?.product_name}</h1>
        <p>Category: {product?.category}</p>
        <p>Stock: {product?.status}</p>
        <p>Price: {product?.price} Taka</p>
        <p>Description: {product?.description}</p>
        <p>Brand: {product?.brand}</p>
        <p>Rating: {product?.rating}</p>
        <p>Reviews: {product?.reviews}</p>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/pc_parts");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));

  return { paths, fallback: false };
};

/*
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/pc_parts/${params.productId}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
*/

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/pc_parts/${params.productId}`);
  const data = await res.json();

  console.log("Fetched data:", data); // Add this line for debugging

  return {
    props: {
      product: data,
    },
  };
};
