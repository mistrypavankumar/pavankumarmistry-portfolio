"use client";

import { greeting } from "@/app/libs/portfolio";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";

import Link from "next/link";

import "./Header.css";
import { useState } from "react";

const menus = [
  { name: "Home", path: "/" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Open Source", path: "/opensource" },
  { name: "Contact Me", path: "/contactme" },
];

function Header() {
  const [toggle, setToggle] = useState(false);
  const handleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`w-full mx-auto h-15 md:h-24 bg-primary`}>
      <header className="px-7 md:px-16 h-15 md:h-24 bg-primary fixed top-0 left-0 right-0 z-10 flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <span className={`text-secondary text-xl md:text-2xl`}> &lt; </span>
            <span className="logo-name text-accent font-agustina text-xl md:text-2xl">
              {greeting.logo_name}
            </span>
            <span className="text-secondary text-xl md:text-2xl"> /&gt;</span>
          </Link>
        </div>

        <div className="cursor-pointer relative z-10 md:hidden">
          {toggle ? (
            <IoClose className="text-secondary text-3xl" onClick={handleMenu} />
          ) : (
            <CgMenuRight
              className="text-secondary text-2xl"
              onClick={handleMenu}
            />
          )}
        </div>

        <nav className="hidden md:block">
          <ul className="hidden md:flex justify-center items-center h-15 md:h-24 gap-5">
            {menus.map((menu) => (
              <li key={menu.name}>
                <MenuLink menuLink={menu.path} menuName={menu.name} />
              </li>
            ))}
          </ul>
        </nav>

        <nav
          className={clsx(
            "block md:hidden absolute bg-primary top-0 bottom-0 right-0 w-2/3 h-screen border-l-2 border-accent pt-20",
            toggle ? "translate-x-0" : "translate-x-full",
            "transition-transform duration-300 ease-in-out"
          )}
        >
          <ul className="">
            {menus.map((menu) => (
              <li key={menu.name}>
                <MenuLink
                  menuLink={menu.path}
                  menuName={menu.name}
                  className="font-bold text-[18px] text-accent"
                  onClick={() => setToggle(false)}
                />
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;

const MenuLink = ({
  menuLink,
  menuName,
  onClick = () => {},
  className,
}: {
  menuLink: string;
  menuName: string;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <Link
      className={clsx(className ? className : "text-secondary")}
      href={menuLink}
      onClick={onClick}
    >
      {menuName}
    </Link>
  );
};
