import Layout from "../components/Layout";
import PositionJob from "./component/PositionJob";

function ResumePage() {
  const positionJob = [
    {
      time: "2021 - Present",
      position: "Job Position",
      companyName: "F",
      companyLocation: "Quy Nhon",
      descFirst:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
      descSecon:
        "I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      time: "2021 - Present",
      position: "Job Position",
      companyName: "F",
      companyLocation: "Quy Nhon",
      descFirst:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
      descSecon:
        "I’m a great place for you to tell a story and let your users know a little more about you.",
    },
  ];

  const education = [
    {
      time: "2021 - Present",
      position: "UNIVERSITY NAME",
      companyName: "Degree Level",
      companyLocation: "University Location",
      descFirst:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
      descSecon:
        "I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      time: "2021 - Present",
      position: "UNIVERSITY NAME",
      companyName: "Degree Level",
      companyLocation: "University Location",
      descFirst:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
      descSecon:
        "I’m a great place for you to tell a story and let your users know a little more about you.",
    },
  ];

  const professionalSkillset = [
    "Entrepreneurial Mindset",
    "Go-to-Market Planning",
    "Teamwork & Collaboration",
    "Digital Analytics",
  ];

  const languages = ["English (native)"];
  return (
    <>
      <Layout>
        <div className="w-full h-auto bg-[#e6dace]">
          <div className="w-full h-60 flex items-center justify-center gap-2">
            <div className="h-5 w-5 bg-[#0050ff]" />
            <h1 className="text-4xl font-bold">Resume</h1>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <div className="h-full w-[724px] flex items-center justify-between gap-2 px-2">
              <p className="text-2xl font-semibold">Experience</p>
              <div className="uppercase bg-[#0050ff] text-white h-10 w-36 flex justify-center items-center rounded-3xl border-2 border-[#0050ff] hover:cursor-pointer hover:bg-[#e6dace] hover:text-black">
                Download CV
              </div>
            </div>
          </div>
          <div className="h-auto w-full flex justify-center items-center py-10">
            <div className="h-auto w-full flex flex-col justify-center items-center">
              {positionJob.map((job, index) => (
                <PositionJob
                  time={job.time}
                  position={job.position}
                  key={index}
                  companyName={job.companyName}
                  companyLocation={job.companyLocation}
                  descfirst={job.descFirst}
                  descSecon={job.descSecon}
                />
              ))}
            </div>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <div className="h-full w-[724px] flex items-center justify-between gap-2 px-2">
              <p className="text-2xl font-semibold">Education</p>
            </div>
          </div>
          <div className="h-auto w-full flex justify-center items-center py-10">
            <div className="h-auto w-full flex flex-col justify-center items-center">
              {education.map((education, index) => (
                <PositionJob
                  time={education.time}
                  position={education.position}
                  key={index}
                  companyName={education.companyName}
                  companyLocation={education.companyLocation}
                  descfirst={education.descFirst}
                  descSecon={education.descSecon}
                />
              ))}
            </div>
          </div>
          <div className="h-auto w-full flex justify-center items-center pb-10">
            <div className="h-auto w-full flex flex-col justify-center items-center">
              <div className="w-[724px] h-96 bg-white flex flex-col gap-2 my-6">
                <div className="p-8">
                  <h1>Professional skillset</h1>
                  <div className="grid grid-cols-2 gap-4 pt-4 pl-2">
                    {professionalSkillset.map((skill, index) => (
                      <div
                        className="flex gap-4 items-center justify-start"
                        key={index}
                      >
                        <div className="h-3 w-3 bg-[#0050ff]"></div>
                        <p>{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 mt-2">
                  <h1>Languages</h1>
                  <div className="grid grid-cols-2 gap-4 pt-4 pl-2">
                    {languages.map((languages, index) => (
                      <div
                        className="flex gap-4 items-center justify-start"
                        key={index}
                      >
                        <div className="h-3 w-3 bg-[#0050ff]"></div>
                        <p>{languages}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ResumePage;
