import React from "react";

const Projects = () => {
  return (
    <div className="bg-surface-light-secondary dark:bg-gradient-to-r from-surface-dark-primary to-surface-dark-secondary py-40">
      <div className="flex flex-col items-center gap-4">
        <p className="text-[12px] bg-cyan-500 py-0.5 px-2 rounded-2xl text-cyan-800 font-semibold">
          Projects
        </p>
        <h1 className="text-2xl font-semibold">Recent Projects</h1>
        <p>Here is a selection of projects I have worked on recently</p>
      </div>
    </div>
  );
};

export default Projects;
