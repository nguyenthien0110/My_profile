"use client";

import Link from "next/link";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex w-full">
          <div className="bg-[#e6dace] w-2/5 h-[852px] flex justify-end items-center"></div>
          <div className="h-[650px] w-full absolute mt-24 flex items-center justify-center gap-8">
            <div className="h-[600px] w-96 bg-[#f4ece6] shadow-2xl"></div>
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
                I&apos;m a paragraph. Click here to add your own text and edit
                me. It’s easy. Just click “Edit Text” or double click me to add
                your own content and make changes to the font.
              </p>
              <p>
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
