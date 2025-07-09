"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  return (
    <>
      <div className="h-32 w-full flex items-center justify-center fixed z-50 top-0 left-0 right-0 bg-white">
        <div className="h-full w-1/2 flex items-center gap-2">
          <div className="h-4 w-4 bg-blue-500 ml-12"></div>
          <p className="text-xl font-black">Nguyen Tich Thien</p>
          <span className="text-2">/</span>
          <p className="text-lg italic">Software Developer</p>
        </div>
        <div className="h-full w-1/2 flex items-center">
          <div className="w-full h-9 flex items-center justify-end gap-6 pr-20">
            <Link
              href={"/"}
              className={clsx(
                `h-12 w-auto hover:text-[#0050ff] hover:cursor-pointer flex justify-center items-center uppercase`,
                pathname && pathname == "/" ? "text-[#0050ff]" : undefined
              )}
            >
              About Me
            </Link>
            <Link
              href={"/resume"}
              className={clsx(
                `h-12 w-auto hover:text-[#0050ff] hover:cursor-pointer flex justify-center items-center uppercase`,
                pathname && pathname == "/resume" ? "text-[#0050ff]" : undefined
              )}
            >
              Resume
            </Link>
            <Link
              href={"/projects"}
              className={clsx(
                `h-12 w-auto hover:text-[#0050ff] hover:cursor-pointer flex justify-center items-center uppercase`,
                pathname && pathname == "/projects"
                  ? "text-[#0050ff]"
                  : undefined
              )}
            >
              Projects
            </Link>
            <Link
              href={"/contact"}
              className={clsx(
                `h-12 w-auto hover:text-[#0050ff] hover:cursor-pointer flex justify-center items-center uppercase`,
                pathname && pathname == "/contact"
                  ? "text-[#0050ff]"
                  : undefined
              )}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
