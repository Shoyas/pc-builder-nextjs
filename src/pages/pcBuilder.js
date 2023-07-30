import RootLayout from "@/components/Layouts/RootLayout";
import { ExclamationOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const PcBuilderPage = () => {
  const { products } = useSelector((state) => state.pcBuilderProduct);

  const isCompleteBuildEnabled = products.length >= 5;

  const handleCompleteBuild = (products) => {
    console.log("Clicked for Complete Build", products);
    alert("Nice....! 5 din por tomar pc ami giye diye asbone...", products)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center">Build Your PC</h1>
      <div className="flex flex-col">
        <div className="grid grid-cols-2 gap-4 ">
          <p className="text-2xl">CPU / Processor</p>
          <Link href="/pcBuilder/CPU or Processor">
            <Button
              type="primary"
              style={{ width: "100%" }}
              className="mt-7 ml-20"
            >
              {" "}
              Choose
            </Button>
          </Link>
        </div>
        {products
          .filter((product) => product.category === "CPU or Processor")
          .map((product) => (
            <div key={product.id}>
              <h2 className="text-sky-600">{product.product_name}</h2>
            </div>
          ))}

        <div className="grid grid-cols-2 gap-4">
          <p className="text-2xl">Motherboard</p>
          <Link href="/pcBuilder/Motherboard">
            <Button
              type="primary"
              style={{ width: "100%" }}
              className="mt-7 ml-20"
            >
              {" "}
              Choose
            </Button>
          </Link>
        </div>
        {products
          .filter((product) => product.category === "Motherboard")
          .map((product) => (
            <div key={product.id}>
              <h2 className="text-sky-600">{product.product_name}</h2>
            </div>
          ))}

        <div className="grid grid-cols-2 gap-4">
          <p className="text-2xl">RAM</p>
          <Link href="/pcBuilder/RAM">
            <Button
              type="primary"
              style={{ width: "100%" }}
              className="mt-7 ml-20"
            >
              {" "}
              Choose
            </Button>
          </Link>
        </div>
        {products
          .filter((product) => product.category === "RAM")
          .map((product) => (
            <div key={product.id}>
              <h2 className="text-sky-600">{product.product_name}</h2>
            </div>
          ))}

        <div className="grid grid-cols-2 gap-4">
          <p className="text-2xl">Power Supply Unit</p>
          <Link href="/pcBuilder/Power Supply Unit">
            <Button
              type="primary"
              style={{ width: "100%" }}
              className="mt-7 ml-20"
            >
              {" "}
              Choose
            </Button>
          </Link>
        </div>
        {products
          .filter((product) => product.category === "Power Supply Unit")
          .map((product) => (
            <div key={product.id}>
              <h2 className="text-sky-600">{product.product_name}</h2>
            </div>
          ))}

        <div className="grid grid-cols-2 gap-4">
          <p className="text-2xl">Storage Device</p>
          <Link href="/pcBuilder/Storage">
            <Button
              type="primary"
              style={{ width: "100%" }}
              className="mt-7 ml-20"
            >
              {" "}
              Choose
            </Button>
          </Link>
        </div>
        {products
          .filter((product) => product.category === "Storage")
          .map((product) => (
            <div key={product.id}>
              <h2 className="text-sky-600">{product.product_name}</h2>
            </div>
          ))}
        <div className="grid grid-cols-2 gap-4">
          <p className="text-2xl">Monitor</p>
          <Link href="/pcBuilder/Monitor">
            <Button
              type="primary"
              style={{ width: "100%" }}
              className="mt-7 ml-20"
            >
              {" "}
              Choose
            </Button>
          </Link>
        </div>
        {products
          .filter((product) => product.category === "Monitor")
          .map((product) => (
            <div key={product.id}>
              <h2 className="text-sky-600">{product.product_name}</h2>
            </div>
          ))}
        <div className="grid grid-cols-2 gap-4">
          <p className="text-2xl">Others</p>
          <Link href="/pcBuilder/Others">
            <Button
              type="primary"
              style={{ width: "100%" }}
              className="mt-7 ml-20"
            >
              {" "}
              Choose
            </Button>
          </Link>
        </div>
        {products
          .filter((product) => product.category === "Others")
          .map((product) => (
            <div key={product.id}>
              <h2 className="text-sky-600">{product.product_name}</h2>
            </div>
          ))}
      </div>

      <Button
        type="primary"
        style={{ width: "50%" }}
        className="mt-7 ml-20 place-content-center"
        disabled={!isCompleteBuildEnabled}
        onClick={() => handleCompleteBuild(products)}
      >
        Complete Build <ExclamationOutlined />
      </Button>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
