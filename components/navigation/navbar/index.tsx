import Link from "next/link";
import React from "react";
import Image from "next/image";
import Theme from "./Theme";

export const Navbar = () => {
  return (
    <nav className="flex-between baground-light900 dark200 fixed z-50 w-full p-6 dark-shado-none sm:px-12 ">
      <Link className="flex items-center gap-1" href="/">
        <Image
          src="/images/site-logo.svg"
          alt="DevFlow Logo"
          width={23}
          height={23}
          className="flex items-center gap-1"
        />
        <p className="h2-bold font-space-grotesk  text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-5">
        <Theme />
      </div>
    </nav>
  );
};
