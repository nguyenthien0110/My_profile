"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "About Me" },
    { href: "/resume", label: "Resume" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow h-20 md:h-32 flex items-center justify-between px-6 md:px-20">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-[#0050ff]"></div>
          <p className="text-sm sm:text-lg md:text-xl font-black">
            Nguyen Tich Thien
          </p>
          <span className="mx-1">/</span>
          <p className="text-sm italic">Software Developer</p>
        </div>

        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                `uppercase hover:text-[#0050ff]`,
                pathname === link.href ? "text-[#0050ff] font-semibold" : ""
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden z-50">
          <button
            className="relative w-8 h-6 flex flex-col justify-between items-center hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={clsx(
                "block h-1 w-4 bg-[#0050ff] rounded transition-all duration-500 ease-in-out -translate-x-2",
                isOpen
                  ? "-rotate-135 translate-y-[4px] -translate-x-[3px] w-4"
                  : ""
              )}
            />
            <span
              className={clsx(
                "block h-1 w-8 bg-[#0050ff] rounded transition-all duration-500 ease-in-out",
                isOpen ? "-rotate-45" : ""
              )}
            />
            <span
              className={clsx(
                "block h-1 w-4 bg-[#0050ff] rounded transition-all duration-500 ease-in-out translate-x-2",
                isOpen
                  ? "-rotate-135 -translate-y-[4.5px] -translate-x-[2px] w-4"
                  : ""
              )}
            />
          </button>
        </div>
      </header>

      <div
        className={clsx(
          "fixed inset-0 z-40 bg-[#f6ede6] flex flex-col items-center justify-center gap-8 text-xl font-bold transition-all duration-500",
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={clsx(
              pathname === link.href ? "text-[#0050ff]" : "text-black"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Header;
