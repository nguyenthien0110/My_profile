import Layout from "../components/Layout";
import PositionJob from "./component/PositionJob";

function ResumePage() {
  const positionJob = [
    {
      time: "Feb 2024 - Present",
      position: "Software Developer",
      companyName: "FPT Software",
      companyLocation: "Quy Nhon, Vietnam",
      descFirst:
        "Working as a full-stack developer focusing on both frontend and backend tasks.",
      descSecon:
        "Involved in real-world software projects using ReactJS, Java, Node.js, and AWS technologies.",
    },
  ];

  const education = [
    {
      time: "2019 - 2023",
      position: "Quy Nhon University",
      companyName: "Bachelor of Science",
      companyLocation: "Quy Nhon, Vietnam",
      descFirst:
        "Majored in Software Technology with practical training in full-stack development.",
      descSecon:
        "Gained strong foundation in Java, databases, and web technologies through academic and project-based learning.",
    },
    {
      time: "2023",
      position: "FPT Software",
      companyName: "Internship",
      companyLocation: "Quy Nhon, Vietnam",
      descFirst:
        "Completed internship focusing on backend development and Agile workflow.",
      descSecon:
        "Worked with real projects using Java, Spring Boot, and Git under guidance of professional engineers.",
    },
  ];

  const professionalSkillset = [
    "Full-Stack Development (ReactJS, Node.js, Java)",
    "RESTful API Design",
    "AWS Lambda & Serverless",
    "MySQL & MongoDB",
    "Agile & Scrum",
    "Docker",
  ];

  const languages = ["English (Intermediate – CEFR B1)"];

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

              <a
                className="uppercase bg-[#0050ff] text-white h-10 w-36 flex justify-center items-center rounded-3xl border-2 border-[#0050ff] hover:cursor-pointer hover:bg-[#e6dace] hover:text-black"
                href="./cv/CV_Nguyen Tich Thien.docx"
                download="CV_Nguyen-Tich-Thien_Software-Developer.docx"
              >
                Download CV
              </a>
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

                <div className="p-8">
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
