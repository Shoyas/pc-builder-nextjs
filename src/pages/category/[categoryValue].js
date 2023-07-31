import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import { Card, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
const { Meta } = Card;

const ProductCategory = ({ allProducts }) => {
  // console.log("Category Value: ", allProducts);

  return (
    <div className="mt-4 container mx-auto">
      <h1 className="text-6xl text-center">{allProducts[0].category} Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {allProducts.map((product) => (
          <div key={product.id} className="" span={6}>
            <Card
              className="mb-11"
              hoverable
              style={{ width: 300 }}
              cover={
                <Image
                  alt={product?.product_name}
                  src={product?.image_url}
                  width={300}
                  height={200}
                  responsive
                />
              }
            >
              <Meta title={product?.product_name} />
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  background: "#000",
                  width: "95%",
                }}
              ></div>

              <p>
                {product?.description.length > 100
                  ? product.description.slice(0, 70) + "..."
                  : product.description}
              </p>
              <p>Category: {product?.category}</p>
              <p>Price: {product?.price} tk</p>
              <p>Status: {product?.status}</p>
              <p>Rating: {product?.rating}</p>

              <Button type="default">
                <Link href={`/product/${product?.id}`}>
                  Keep Reading <ArrowRightOutlined />
                </Link>
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;

ProductCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

/*
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/pc_parts");
  const products = await res.json();
  // console.log("Category getStaticPaths: ", products);
  const paths = products.map((product) => ({
    params: { categoryValue: product.category },
  }));
  // console.log("Generated paths: ", paths);
  return { paths, fallback: false };
};
*/

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/pc_parts");
  const products = await res.json();

  console.log("Fetched data:", products); // Add this line for debugging

  const paths = products.map((product) => ({
    params: { categoryValue: product.category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  // console.log("CategoryValue in getStaticProps: ", params.categoryValue);

  const res = await fetch("http://localhost:5000/pc_parts");
  const products = await res.json();
  const filteredProducts = products.filter(
    (product) => product.category === params.categoryValue
  );

  // console.log("Category getStaticProps: ", filteredProducts);

  return {
    props: {
      allProducts: filteredProducts,
    },
  };
};


/*
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/pc_parts");
  const products = await res.json();
  console.log("Category getStaticPaths: ", products);
  const paths = products.map((product) => ({
    params: { categoryValue: product.category },
  }));
  console.log("Generated paths: ", paths);
  return { paths, fallback: true };
};


export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/pc_parts/${params.categoryValue}`
  );
  const data = await res.json();
    console.log("Category getStaticProps: ",data)
  return {
    props: {
      allProducts: data,
    },
  };
};



export const getStaticProps = async (context) => {
  const { params } = context;
  console.log("CategoryValue in getStaticProps: ", params.categoryValue);

  const res = await fetch(
    `http://localhost:5000/pc_parts/${params.categoryValue}`
  );
  const data = await res.json();
  console.log("Category getStaticProps: ", data);

  return {
    props: {
      allProducts: data,
    },
  };
};
*/