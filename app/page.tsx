"use client";

import Image from "next/image";
import React, { useState } from "react";
import jedel from "@/public/Jedel log .png";
import lightJedel from "@/public/Jedel log -1.png";
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
import LogoLoop from "@/components/LogoLoop";
import { SiInstagram, SiLinkedin, SiSteam, SiGithub } from "react-icons/si";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "next-themes";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { resolvedTheme } = useTheme();
  const imageLogos = [
    {
      node: (
        <SiInstagram
          className="dark:text-white text-black hover:text-primary trans "
          aria-hidden={false}
        />
      ),
      ariaLabel: "Instagram",
      href: "https://www.instagram.com",
    },
    {
      node: (
        <SiLinkedin
          className="dark:text-white text-black hover:text-primary trans "
          aria-hidden={false}
        />
      ),
      ariaLabel: "LinkedIn",
      href: "https://www.linkedin.com",
    },
    {
      node: (
        <SiSteam
          className="dark:text-white text-black hover:text-primary trans "
          aria-hidden={false}
        />
      ),
      ariaLabel: "Steam",
      href: "https://store.steampowered.com",
    },
    {
      node: (
        <SiGithub
          className="dark:text-white text-black hover:text-primary trans "
          aria-hidden={false}
        />
      ),
      ariaLabel: "GitHub",
      href: "https://github.com",
    },
  ];

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
        {resolvedTheme == "dark" ? (
          <Image src={jedel} alt="jedel img" className="logo"></Image>
        ) : (
          <Image src={lightJedel} alt="jedel img" className="logo"></Image>
        )}

        <div className="navigation hidden sm:flex">
          <Link
            onClick={() => setShowMenu(false)}
            className="nav-link"
            href={"/"}
          >
            Home
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            className="nav-link"
            href={"#features"}
          >
            Features
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            className="nav-link"
            href={"#trust"}
          >
            Trusted By
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            className="nav-link"
            href={"#contact"}
          >
            Contact us
          </Link>
        </div>
        <div className="lg:px-10 px-2 h-full flex items-center gap-5">
          <ThemeToggle></ThemeToggle>
          <Bars3Icon
            className="text-primary w-9 cursor-pointer sm:hidden"
            onClick={() => setShowMenu(true)}
          ></Bars3Icon>
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
          {resolvedTheme == "dark" ? (
            <Image src={jedel} alt="jedel img" className="logo"></Image>
          ) : (
            <Image src={lightJedel} alt="jedel img" className="logo"></Image>
          )}
          <Link
            onClick={() => setShowMenu(false)}
            className="nav-link"
            href={"#home"}
          >
            Home
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            className="nav-link"
            href={"#features"}
          >
            Features
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            className="nav-link"
            href={"#trust"}
          >
            Trusted By
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            className="nav-link"
            href={"#contact"}
          >
            Contact us
          </Link>
        </menu>
      </nav>
      <section className="sm:mx-7 sm:my-4 md:p-8 p-4 rounded-2xl dark:bg-hero bg-white-hero  w-[calc(100vw - 40px)]  relative overflow-x-hidden">
        <section className="h-[90vh]">
          <h1 className="mb-3">Type Faster. Feel Better. Stay in Control.</h1>
          <p className=" text-lg dark:text-white-half-op text-black-half-op text-center mb-5">
            JEDEL keyboards are designed for comfort, durability, and precision.
          </p>
          <main className="flex gap-15">
            <Image
              src={keyboard}
              alt="keyboard"
              width={800}
              unoptimized
              quality={100}
              className=" absolute -right-[40%] lg:-right-[20%] top-25  drop-shadow-primary trans drop-shadow-xl"
            ></Image>
          </main>
        </section>
        <h1 className="mb-10">Features</h1>
        <section
          id="features"
          className="flex flex-col gap-10 sm:gap-20 px-10 features relative sm:w-[80%] sm:m-auto lg:w-[60%]"
        >
          <div>
            <h2>
              {" "}
              <HandRaisedIcon className="w-5 inline text-primary sm:w-7.5 "></HandRaisedIcon>
              Ergonomic Design
            </h2>

            <p>
              Designed to reduce hand fatigue and provide a comfortable typing
              experience for long hours.
            </p>
          </div>
          <div>
            <h2>
              <ShieldCheckIcon className="w-5 inline text-primary sm:w-7.5 "></ShieldCheckIcon>
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
              <DeviceTabletIcon className="w-5 inline text-primary sm:w-7.5 "></DeviceTabletIcon>
              Universal Compatibility
            </h2>
            <p>
              Works seamlessly with Windows, macOS, and Linux — plug and play,
              no setup required.
            </p>
          </div>

          <div>
            <h2>
              <SparklesIcon className="w-5 inline text-primary sm:w-7.5 "></SparklesIcon>
              Customizable RGB
            </h2>
            <p>
              Personalize lighting with multiple effects and per-key
              customization to match your setup.
            </p>
          </div>

          <div>
            <h2>
              <WifiIcon className="w-5 inline text-primary sm:w-7.5 "></WifiIcon>
              Wireless Connectivity
            </h2>
            <p>
              Reliable Bluetooth and 2.4GHz wireless options keep your desk
              clutter-free without sacrificing performance.
            </p>
          </div>

          <div>
            <h2>
              <Cog6ToothIcon className="w-5 inline text-primary sm:w-7.5 "></Cog6ToothIcon>
              Programmable Macros
            </h2>
            <p>
              Use companion software to assign macros, layers, and shortcuts for
              ultimate productivity.
            </p>
          </div>
        </section>
        <section id="trust">
          <h1 className="my-5">Trusted By </h1>
          <div className="h-50 overflow-hidden relative mt-5 flex items-center">
            <LogoLoop
              logos={imageLogos}
              speed={50}
              direction="left"
              logoHeight={60}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor={
                resolvedTheme === "dark"
                  ? "var(--color-hero)"
                  : "var(--color-white-hero)"
              }
              ariaLabel="Technology partners"
            />
          </div>
        </section>
        <section id="contact">
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
                className="p-3 rounded-md trans dark:bg-white/5 bg-black/5 focus:outline-none focus:ring-2 focus:ring-primary"
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
                className="p-3 rounded-md  trans dark:bg-white/5 bg-black/5 focus:outline-none focus:ring-2 focus:ring-primary"
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
                className="p-3 rounded-md dark:bg-white/5 bg-black/5 focus:outline-none trans focus:ring-2 focus:ring-primary resize-none"
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
