import type { Metadata } from "next";

export const dynamic = "force-dynamic";

import "./globals.css";
import Link from "next/link";
import { cookies } from "next/headers";
import Footer from "./_ui/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLogged = cookies().get("admin");

  return (
    <html lang="en">
      <body className=" relative bg-white-milk w-full">
        <header className=" top-0 font-medium lg:font-normal text-xs lg:text-base text-center   bg-[#ffffff98] lg:px-40 z-50 w-full lg:w-full mx-auto px-[5%]  py-10 flex items-center justify-between">
          <nav>
            <ul className=" flex items-center space-x-5">
              <li className=" lg:hidden">
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About Us</Link>
              </li>
              <li>
                <Link href={"/services"}>Our Services</Link>
              </li>
            </ul>
          </nav>

          <div className=" hidden lg:block">
            <h1 className=" text-2xl font-semibold">Coleman Blog</h1>
          </div>

          <nav>
            <ul className=" flex items-center space-x-5">
              <li>
                <Link href={"/contact"}>Contact Us</Link>
              </li>
              <li>
                {cookies().get("admin") ? (
                  <Link href={"/admin"}>Admin Page</Link>
                ) : (
                  <Link href={"/login"}>Log In</Link>
                )}
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
