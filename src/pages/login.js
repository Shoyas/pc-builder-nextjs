import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import { Button } from "antd";
import RootLayout from "@/components/Layouts/RootLayout";
import style from "@/styles/home.module.css";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmitSignin = async (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto ">
      <div className="pt-9 pb-9 grid grid-cols-5 gap-3 sm:grid-cols-2 md:grid-cols-4 ">
        <div className="col-span-2">
          <Image
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            alt="Sample image"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div className="col-span-2">
          <div class="flex flex-row items-center justify-center lg:justify-start mt-10">
            <h1 class="mb-0 mr-4 text-4xl">Sign in with</h1>

            <Button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000/",
                })
              }
              className={style.btn_size}
              type="primary"
              shape="circle"
            >
              <GoogleOutlined style={{ fontSize: "25px" }} />
            </Button>

            <Button
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000/",
                })
              }
              className={style.btn_size}
              type="primary"
              shape="circle"
            >
              <GithubOutlined style={{ fontSize: "25px" }} />
            </Button>
          </div>

          <div className="">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Or,
            </h1>

            <form
              onSubmit={handleSubmit(onSubmitSignin)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  {...register("email")}
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  {...register("password")}
                />
                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              {/* <Link href="/"> */}
              <button
                type="submit"
                className="mt-6 w-full text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              {/* </Link> */}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
