import Layout from "../components/Layout";
import Project from "./component/Project";

function ProjectPage() {
  const project = [
    {
      name: "Project name 01",
      role: "Role Title",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
      img: "./img/project/project1.png",
    },
    {
      name: "Project name 02",
      role: "Role Title",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
      img: "./img/project/project1.png",
    },
    {
      name: "Project name 03",
      role: "Role Title",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
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
                I&apos;m a paragraph. Click here to add your own text and edit
                me. It’s easy. Just click “Edit Text” or double click me to add
                your own content and make changes to the font. I’m a great place
                for you to tell a story and let your users know a little more
                about you.
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
