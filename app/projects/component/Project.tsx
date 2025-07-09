"use client";

import Image from "next/image";

function Project({
  name,
  role,
  desc,
  img,
}: {
  name: string;
  role: string;
  desc: string;
  img: string;
}) {
  return (
    <>
      <div className="w-[724px] h-96 bg-white flex gap-2 my-6 shadow-2xl">
        <div className="h-full w-7/12 flex flex-col justify-center gap-8">
          <div className="flex gap-8 pr-2">
            <div className="h-full w-2 bg-[#0050ff]" />
            <div className="font-semibold">
              <h1 className="text-xl text-[#0050ff]">{name}</h1>
              <p>{role}</p>
            </div>
          </div>
          <div className="pl-10 pr-2">
            <p>{desc}</p>
          </div>
        </div>
        <div className="h-full w-5/12 relative">
          <Image className="object-cover" alt={name} src={img} fill />
        </div>
      </div>
    </>
  );
}

export default Project;
