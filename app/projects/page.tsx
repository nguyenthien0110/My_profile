import Layout from "../components/Layout";
import Project from "./component/Project";

function ProjectPage() {
  const project = [
    {
      name: "Isetan",
      role: "Frontend Developer",
      desc: "Developed a full system including mobile (Flutter), web app (ReactJS), and backend (Java) to meet client requirements. Built responsive UI components and implemented design systems to ensure a consistent user experience.",
      img: "./img/project/project1.png",
    },
    {
      name: "G_FMJPOS24",
      role: "Developer",
      desc: "Migrated a legacy system from C/C++ to a new architecture using Unity for UI, C# for logic, and Java for microservices. Converted legacy code and ensured code quality throughout the migration process.",
      img: "./img/project/project1.png",
    },
    {
      name: "Jinjer",
      role: "Backend Developer",
      desc: "Developed RESTful APIs using Node.js, AWS Lambda, and MongoDB. Focused on backend logic, performance, and security. Supported new team members and proposed solutions using AWS technologies.",
      img: "./img/project/project1.png",
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
