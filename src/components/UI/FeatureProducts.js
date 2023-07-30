import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Card, Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;

const FeatureProductsPage = ({ allProducts }) => {
  // console.log(allProducts.image);
  return (
    <div className="mt-4 container mx-auto">
      <h1 className="text-6xl text-center">Latest Products</h1>

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

export default FeatureProductsPage;

/*
Try with antD

import React from "react";
import { Col, Row } from "antd";
import {
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Card, Button } from "antd";

import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;

const FeatureProductsPage = ({ allProducts }) => {
  console.log(allProducts.image);
  return (
    <div className="mt-4 container mx-auto">
      <h1 className="text-6xl text-center">Latest Products</h1>

      <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
        {allProducts.map((product) => (
          <Col key={product.id} className="gutter-row " span={6}>
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

              <Button
                  type="default"
                >
                  <Link href={`/product/${product?.id}`}>
                    Keep Reading <ArrowRightOutlined />
                  </Link>
                </Button>
            </Card>

          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeatureProductsPage;

*/