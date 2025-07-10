import Layout from "../components/Layout";
import Project from "./component/Project";

function ProjectPage() {
  const project = [
    {
      name: "MCP Web",
      role: "Full Stack Developer",
      desc: "Built a warehouse management system to optimize pallet stacking. Developed backend APIs with FastAPI and PostgreSQL, and created a responsive frontend using React, TypeScript, and Tailwind CSS.",
      img: "project05.png",
    },
    {
      name: "Isetan",
      role: "Frontend Developer",
      desc: "Developed mobile and web interfaces using Flutter and ReactJS. Created reusable components, applied design systems, and ensured smooth API integration.",
      img: "project04.png",
    },
    {
      name: "G_FMJPOS24",
      role: "Developer",
      desc: "Migrated a legacy system from C/C++ to a modern tech stack with Unity UI, C# for logic, and Java microservices. Ensured code compatibility and quality during transition.",
      img: "project03.png",
    },
    {
      name: "jinjer",
      role: "Backend Developer",
      desc: "Designed and developed RESTful APIs in a serverless AWS Lambda architecture using PHP, MySQL, and MongoDB. Supported team onboarding and addressed system queries.",
      img: "project02.png",
    },
    {
      name: "Management Platform",
      role: "Backend Developer",
      desc: "Supported backend development using Java Spring Boot, MyBatis, and MySQL. Collaborated with the backend team to ensure the success of the platform.",
      img: "project01.png",
    },
  ];

  return (
    <>
      <Layout>
        <div className="w-full h-auto bg-[#e6dace]">
          <div className="w-full h-60 flex items-center justify-center gap-2">
            <div className="h-5 w-5 bg-[#0050ff]" />
            <h1 className="text-4xl font-bold">Projects</h1>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <div className="h-full w-[724px] flex items-center justify-center">
              <p className="text-[16px] font-semibold pb-10">
                I&apos;m a developer focused on building responsive, scalable
                applications using modern web technologies. I turn ideas into
                functional products with clean architecture and great user
                experience.
              </p>
            </div>
          </div>

          <div className="h-auto py-10 flex flex-col items-center justify-center">
            {project.map((pro) => (
              <div key={pro.name}>
                <Project
                  name={pro.name}
                  role={pro.role}
                  desc={pro.desc}
                  img={pro.img}
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ProjectPage;
