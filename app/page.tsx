"use client";

import Image from "next/image";
import React, { useState } from "react";
import jedel from "@/public/Jedel log .png";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";
// import Menu from "@/components/Menu";
import { Bars3Icon } from "@heroicons/react/24/outline";

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
            Feature
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
            Feature
          </Link>
          <Link className="nav-link" href={"#"}>
            Trusted By{" "}
          </Link>
          <Link className="nav-link" href={"#"}>
            Contact us
          </Link>
        </menu>
      </nav>
    </div>
  );
};

export default HomePage;
