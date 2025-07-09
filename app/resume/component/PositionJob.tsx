function PositionJob({
  time,
  position,
  companyName,
  companyLocation,
  descfirst,
  descSecon,
}: {
  time: string;
  position: string;
  companyName: string;
  companyLocation: string;
  descfirst: string;
  descSecon: string;
}) {
  return (
    <>
      <div className="w-[724px] h-96 bg-white flex gap-2 my-6">
        <div className="h-full w-5/12">
          <div className="pt-16 pl-8">
            <h1 className="text-[#0050ff] font-bold text-xl">{time}</h1>
            <h2 className="uppercase py-1">{position}</h2>
            <h3 className="text-xs py-1">{companyName}</h3>
            <h3 className="text-xs py-3">{companyLocation}</h3>
          </div>
        </div>
        <div className="h-full w-7/12 pt-28 flex flex-col gap-6">
          <p>{descfirst}</p>
          <p>{descSecon}</p>
        </div>
      </div>
    </>
  );
}

export default PositionJob;
