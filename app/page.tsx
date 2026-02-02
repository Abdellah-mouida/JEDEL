"use client";

import Image from "next/image";
import React, { useState } from "react";
import jedel from "@/public/Jedel log .png";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";
// import Menu from "@/components/Menu";
import { Bars3Icon } from "@heroicons/react/24/outline";
import keyboard from "@/public/keyboard clone.png";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <nav>
        <Image src={jedel} alt="jedel img" className="logo"></Image>
        <Bars3Icon
          className="text-primary w-9 cursor-pointer sm:hidden"
          onClick={() => setShowMenu(true)}
        ></Bars3Icon>
        <div className="navigation hidden sm:flex">
          <Link className="nav-link" href={"#"}>
            Home
          </Link>
          <Link className="nav-link" href={"#"}>
            Features
          </Link>
          <Link className="nav-link" href={"#"}>
            Trusted By{" "}
          </Link>
          <Link className="nav-link" href={"#"}>
            Contact us
          </Link>
        </div>

        <menu
          className={
            "sm:hidden nav-menu trans " + (showMenu ? "show-menu" : "")
          }
        >
          <XMarkIcon
            onClick={() => setShowMenu(false)}
            width={30}
            className="absolute right-8 top-8 cursor-pointer"
          ></XMarkIcon>
          <Link className="nav-link" href={"#"}>
            Home
          </Link>
          <Link className="nav-link" href={"#"}>
            Features
          </Link>
          <Link className="nav-link" href={"#"}>
            Trusted By{" "}
          </Link>
          <Link className="nav-link" href={"#"}>
            Contact us
          </Link>
        </menu>
      </nav>
      <section className="sm:mx-7 sm:my-4 md:p-8 p-4 rounded-2xl bg-hero w-[calc(100vw - 40px)] h-screen overflow-hidden relative">
        <h1 className="mb-3">Type Faster. Feel Better. Stay in Control.</h1>
        <p className=" text-lg text-white-half-op text-center mb-5">
          JEDEL keyboards are designed for comfort, durability, and precision.
        </p>
        <main className="flex gap-15">
          <Image
            src={keyboard}
            alt="keyboard"
            width={800}
            unoptimized
            quality={100}
            className=" absolute -right-[40%] lg:-right-[20%] top-25 "
          ></Image>
        </main>
      </section>
    </div>
  );
};

export default HomePage;
