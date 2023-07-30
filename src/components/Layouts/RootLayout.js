import React from "react";
import { Layout, Menu, theme, Dropdown, Space, Button } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
import logoImage from "@/assets/images/pc-builder.png";
import { useSession, signOut } from "next-auth/react";
import { DownOutlined } from "@ant-design/icons";
import Image from "next/image";

const items = [
  {
    key: "1",
    label: (
      <Link rel="noopener noreferrer" href="/category/CPU or Processor">
        CPU / Processor
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link rel="noopener noreferrer" href="/category/Motherboard">
        Motherboard
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link rel="noopener noreferrer" href="/category/RAM">
        RAM
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link rel="noopener noreferrer" href="/category/Power Supply Unit">
        Power Supply Unit
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link rel="noopener noreferrer" href="/category/Storage">
        Storage Device
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link rel="noopener noreferrer" href="/category/Monitor">
        Monitor
      </Link>
    ),
  },
  {
    key: "7",
    label: (
      <Link rel="noopener noreferrer" href="/category/Others">
        Others
      </Link>
    ),
  },
];

const RootLayout = ({ children }) => {
  const { data: session } = useSession();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="demo-logo mt-5">
          <Link href="/">
            <Image src={logoImage} alt="" width={40} height={40} />
          </Link>
        </div>
        {/* defaultSelectedKeys={["1"]} */}
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Categories
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Menu.Item key="pcBuilder">
            <Button type="primary">
              <Link href="/pcBuilder">PC Builder</Link>
            </Button>
          </Menu.Item>

          {session?.user ? (
            <Menu.Item key="logout" onClick={() => signOut()}>
              Logout
            </Menu.Item>
          ) : (
            <Menu.Item key="login">
              <Link href="/login">Login</Link>
            </Menu.Item>
          )}
          
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 0px",
          backgroundColor: "white",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            margin: "50px 0px",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <h5>PC Builder ©2023 Created by PC Builder</h5>
      </Footer>
    </Layout>
  );
};
export default RootLayout;
