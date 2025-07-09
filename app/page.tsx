"use client";

import Link from "next/link";
import Layout from "./components/Layout";
import Image from "next/image";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex w-full">
          <div className="bg-[#e6dace] w-2/5 h-[852px] flex justify-end items-center"></div>
          <div className="h-[650px] w-full absolute mt-24 flex items-center justify-center gap-8">
            <div className="h-[600px] w-96 bg-[#f4ece6] shadow-2xl flex flex-col items-center justify-center relative">
              <div className="w-full h-72 flex justify-center">
                <Image
                  className="object-cover rounded-full w-52 h-52 object-bottom"
                  width={208}
                  height={208}
                  src={"./img/profile-img.jpg"}
                  alt="avatar"
                />
              </div>
              <div className="w-full h-10 flex flex-col items-center justify-center text-2xl font-bold">
                <p>Nguyen Tich Thien</p>
              </div>
              <div className="w-3/12 border border-[#0050ff] flex flex-col items-center justify-center text-2xl font-bold" />
              <div className="w-full h-10 flex flex-col items-center justify-center text-2xl font-thin p-16">
                <p>Software Developer</p>
              </div>
              <div className="bg-white w-full h-14 absolute bottom-0 flex items-center justify-around text-2xl px-20">
                <a
                  href={"https://github.com/nguyenthien0110/My_profile"}
                  target="_blank"
                  className="hover:cursor-pointer"
                >
                  <FaSquareGithub />
                </a>
                <a
                  href={"https://www.facebook.com/nguyen.tich.thien.05042021/"}
                  target="_blank"
                  className="hover:cursor-pointer"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="mailto:Nguyenthien11082005@gmail.com"
                  className="hover:cursor-pointer"
                >
                  <RiMailLine />
                </a>
              </div>
            </div>
            <div className="h-[600px] w-[485px] flex flex-col justify-center gap-2">
              <h1 className="text-9xl font-bold">Hello</h1>
              <p className="font-medium">Here&apos;s who I am & what I do</p>
              <div className="w-full h-10 flex my-8 gap-4">
                <Link
                  href={"/resume"}
                  className="h-10 w-32 uppercase flex items-center justify-center bg-[#0050ff] text-white hover:text-black hover:bg-white hover:cursor-pointer border-2 border-[#0050ff] rounded-3xl font-medium"
                >
                  <span>Resume</span>
                </Link>
                <Link
                  href={"/projects"}
                  className="h-10 w-32 uppercase flex items-center justify-center bg-white text-black hover:text-white hover:bg-[#0050ff] hover:cursor-pointer hover:border-[#0050ff] border-2 border-gray-800 rounded-3xl font-medium"
                >
                  <span>Projects</span>
                </Link>
              </div>
              <p className="py-8">
                I&apos;m a Full Stack Developer with two years of experience
                turning ideas into full-featured, user-friendly web
                applications. I work across both frontend and backend, using
                tools like React, Next.js, Node.js, and PostgreSQL. Whether
                it&apos;s crafting smooth user interfaces or building robust
                APIs, I enjoy solving problems and delivering clean,
                maintainable code.
              </p>
              <p>
                This space is where I share a bit more about my journey, my
                projects, and the skills I&apos;ve picked up along the way. Feel
                free to explore!
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
