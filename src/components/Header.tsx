import NavBar from "./home/NavBar";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const Header = () => {
  return (
    <div className=" h-screen flex items-center">
      <NavBar />
      <div className="container mx-auto flex">
        <div className="basis-2/4 flex flex-col gap-4 text-light dark:text-dark">
          <h1 className="text-5xl font-bold ">My name is Alejandro</h1>
          <p>
            I specialize in backend development using NestJS, TypeORM, and
            PostgreSQL, and frontend development with React and Next.js. I focus
            on building clean, scalable applications with efficient APIs and
            responsive user interfaces. I continuously work on improving my
            coding practices, clean architecture, and problem-solving skills.
            You can find more about my work and connect with me through the
            social media links below.
          </p>
          <div className="flex gap-4">
            <button className="bg-button-light dark:bg-button-dark p-3 rounded-full cursor-pointer">
              <IconBrandGithub />
            </button>
            <button className="bg-button-light dark:bg-button-dark p-3 rounded-full cursor-pointer">
              <IconBrandLinkedin />
            </button>
            <button className="bg-button-light dark:bg-button-dark p-3 rounded-full cursor-pointer">
              <IconMail />
            </button>
          </div>
        </div>
        <div className="basis-2/4">
          <img src="" alt="" />
          <h1>Hola</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
