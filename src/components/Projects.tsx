import Project from "./Project";

const Projects = () => {
  return (
    <div className="bg-surface-light-secondary dark:bg-gradient-to-r from-surface-dark-primary to-surface-dark-secondary py-40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[12px] bg-cyan-500 py-0.5 px-2 rounded-2xl text-cyan-800 font-semibold">
            Projects
          </p>
          <h1 className="text-2xl font-semibold">Recent Projects</h1>
          <p>Here is a selection of projects I have worked on recently</p>
          <div className="grid grid-cols-4 gap-16 mt-4">
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
