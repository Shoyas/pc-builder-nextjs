import React from "react";
import { Card, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { PlusOutlined } from "@ant-design/icons";
import RootLayout from "@/components/Layouts/RootLayout";
import { useDispatch } from "react-redux";
import { addToPcBuilder } from "@/redux/features/pcBuilder/pcBuilderSlice";
const { Meta } = Card;

const PcBuildCategory = ({ buildProducts }) => {
  //   console.log("Category Value: ", buildProducts);

  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    // console.log("Clicked Product: ", product);
    dispatch(addToPcBuilder(product));

  }

  return (
    <div className="mt-4 container mx-auto">
      <h1 className="text-6xl text-center">
        Select {buildProducts[0].category} To Build Your PC
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {buildProducts.map((product) => (
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

              <Button type="default" onClick={() => handleAddProduct(product)}>
                <Link href="/pcBuilder">
                <PlusOutlined />  Add To Builder <PlusOutlined />
                </Link>
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PcBuildCategory;

PcBuildCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/pc_parts");
//   const products = await res.json();
// //   console.log("Category getStaticPaths pc-build: ", products);
//   const paths = products.map((product) => ({
//     params: { pcBuildCategory: product.category },
//   }));
//   // console.log("Generated paths: ", paths);
//   return { paths, fallback: true };
// };

export const getServerSideProps = async (context) => {
  const { params } = context;
  // console.log("CategoryValue in getStaticProps: ", params.categoryValue);

  const res = await fetch("http://localhost:5000/pc_parts");
  const products = await res.json();
  const filteredProducts = products.filter(
    (product) => product.category === params.pcBuildCategory
  );

  // console.log("Category getStaticProps: ", filteredProducts);

  return {
    props: {
      buildProducts: filteredProducts,
    },
  };
};
