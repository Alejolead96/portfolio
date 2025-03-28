import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  const listSkills: {
    frontend: string[];
    backend: string[];
    others: string[];
  } = {
    frontend: [
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Angular",
      "Zustand",
      "Redux",
      "Tailwind CSS",
    ],
    backend: [
      "Node.js",
      "Nest.js",
      "Express",
      "MongoDB",
      "SQL",
      "Java",
      "Spring Boot",
    ],
    others: ["Git", "GitHub", "VS Code", "Docker", "AWS"],
  };
  return (
    <div className="bg-surface-light-secondary dark:bg-gradient-to-r from-surface-dark-primary to-surface-dark-secondary py-40">
      <div className="container mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center">
          <p className="text-[12px] bg-cyan-500 py-0.5 px-2 rounded-2xl text-cyan-800 font-semibold">
            About me
          </p>
          <h2 className="text-2xl text-light dark:text-dark font-semibold">
            Get to know me better
          </h2>
          <p className="text-light dark:text-dark font-semibold">
            I’m a semi-junior web developer with a passion for learning new
            technologies and creating innovative solutions.
          </p>
        </div>

        <div className="flex gap-12">
          <div className="basis-2/4 flex flex-col gap-4 dark:text-dark">
            <h2 className="text-3xl font-semibold">My History</h2>
            <p>
              I am a software developer in training with experience in
              technologies like NestJS, TypeORM, and PostgreSQL, focusing on
              backend development and building robust, scalable APIs. I am
              passionate about designing efficient systems while following best
              practices in architecture and code organization.
            </p>
            <p>
              Currently, I am expanding my skills in frontend development using
              React.js and Next.js, learning how to build dynamic, responsive
              user interfaces and deliver smooth user experiences. I am
              motivated to keep growing as a professional, mastering new
              technologies, and working on solutions that bring real value.
            </p>
            <div className="flex gap-2 mt-4">
              <div className="bg-button-light dark:bg-button-dark rounded-sm p-5 grow">
                <p className="text-3xl font-bold text-cyan-600">4+</p>
                <p>Years Of Experience</p>
              </div>
              <div className="bg-button-light dark:bg-button-dark rounded-sm p-5 grow">
                <p className="text-3xl font-bold text-indigo-600">12+</p>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="basis-2/4 flex flex-col gap-6 dark:text-dark">
            <h2 className="text-2xl font-semibold">My Skills</h2>
            <Tabs defaultValue="frontend">
              <TabsList className="w-full h-10 rounded-sm">
                <TabsTrigger value="frontend" className="cursor-pointer">
                  Frontend
                </TabsTrigger>
                <TabsTrigger value="Backend" className="cursor-pointer">
                  Backend
                </TabsTrigger>
                <TabsTrigger value="Others" className="cursor-pointer">
                  Others
                </TabsTrigger>
              </TabsList>
              <TabsContent
                className="grid grid-cols-4 gap-2 mt-4"
                value="frontend"
              >
                {listSkills.frontend.map((value) => (
                  <div key={value} className="bg-button-light dark:bg-button-dark dark:border-1 p-4 rounded-sm flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></div>
                    <p>{value}</p>
                  </div>
                ))}
              </TabsContent>
              <TabsContent
                className="flex flex-wrap gap-2 mt-4"
                value="Backend"
              >
                {listSkills.backend.map((value) => (
                  <div key={value} className="bg-button-light dark:bg-button-dark dark:border-1 w-44 p-4 rounded-sm flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></div>
                    <p>{value}</p>
                  </div>
                ))}
              </TabsContent>
              <TabsContent className="flex flex-wrap gap-2 mt-4" value="Others">
                {listSkills.others.map((value) => (
                  <div key={value} className="bg-button-light dark:bg-button-dark dark:border-1 w-44 p-4 rounded-sm flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></div>
                    <p>{value}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
