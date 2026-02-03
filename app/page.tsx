"use client";

import Image from "next/image";
import React, { useState } from "react";
import jedel from "@/public/Jedel log .png";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";
// import Menu from "@/components/Menu";
import { Bars3Icon } from "@heroicons/react/24/outline";
import keyboard from "@/public/keyboard clone.png";
import {
  ShieldCheckIcon,
  DeviceTabletIcon,
  HandRaisedIcon,
  Cog6ToothIcon,
  WifiIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire this to your backend or API
    console.log({ name, email, message });
    alert("Message sent!");
    setName("");
    setEmail("");
    setMessage("");
  };

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
      <section className="sm:mx-7 sm:my-4 md:p-8 p-4 rounded-2xl bg-hero  w-[calc(100vw - 40px)]  relative">
        <section className="h-[90vh]">
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
        <h1 className="mb-10">Features</h1>
        <section className="flex flex-col gap-10 sm:gap-20 px-10 features relative sm:w-[80%] sm:m-auto lg:w-[60%]">
          <div>
            <h2>
              {" "}
              <HandRaisedIcon className="w-[20px] inline text-primary sm:w-[30px] "></HandRaisedIcon>
              Ergonomic Design
            </h2>

            <p>
              Designed to reduce hand fatigue and provide a comfortable typing
              experience for long hours.
            </p>
          </div>
          <div>
            <h2>
              <ShieldCheckIcon className="w-[20px] inline text-primary sm:w-[30px] "></ShieldCheckIcon>
              Durable & Reliable
            </h2>
            <p>
              Built with high-quality materials to handle millions of keystrokes
              without losing responsiveness.
            </p>
          </div>
          <div>
            <h2>
              {" "}
              <DeviceTabletIcon className="w-[20px] inline text-primary sm:w-[30px] "></DeviceTabletIcon>
              Universal Compatibility
            </h2>
            <p>
              Works seamlessly with Windows, macOS, and Linux — plug and play,
              no setup required.
            </p>
          </div>

          <div>
            <h2>
              <SparklesIcon className="w-[20px] inline text-primary sm:w-[30px] "></SparklesIcon>
              Customizable RGB
            </h2>
            <p>
              Personalize lighting with multiple effects and per-key
              customization to match your setup.
            </p>
          </div>

          <div>
            <h2>
              <WifiIcon className="w-[20px] inline text-primary sm:w-[30px] "></WifiIcon>
              Wireless Connectivity
            </h2>
            <p>
              Reliable Bluetooth and 2.4GHz wireless options keep your desk
              clutter-free without sacrificing performance.
            </p>
          </div>

          <div>
            <h2>
              <Cog6ToothIcon className="w-[20px] inline text-primary sm:w-[30px] "></Cog6ToothIcon>
              Programmable Macros
            </h2>
            <p>
              Use companion software to assign macros, layers, and shortcuts for
              ultimate productivity.
            </p>
          </div>
        </section>
        <section>
          <h1 className="my-5">Contact us</h1>
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto grid gap-4 px-2"
          >
            <div className="form-control flex flex-col">
              <label htmlFor="name" className="mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="p-3 rounded-md trans bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="form-control flex flex-col">
              <label htmlFor="email" className="mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-3 rounded-md  trans bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="form-control flex flex-col">
              <label htmlFor="message" className="mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="p-3 rounded-md bg-white/5 focus:outline-none trans focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-primary text-white px-5 py-2 rounded-md hover:opacity-80 cursor-pointer trans hover:shadow-[0_0px_10px_2px] hover:shadow-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </section>
      <footer className="my-5 px-5">
        <p className="text-dark-half-op dark:text-white-half-op text-center ">
          © 2026 JEDEL. All rights reserved.
        </p>
        <h3 className="font-semibold text-primary text-center my-3">
          Built for performance. Trusted worldwide.
        </h3>
        <p className="text-end p-2">
          owned by{" "}
          <span className="text-primary font-bold">Abdellah Mouida</span>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
