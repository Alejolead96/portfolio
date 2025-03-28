const Education = () => {
  const items = [
    {
      year: "2014 - 2015",
      title: "Grado en Desarrollo Web",
      institution: "Universidad Ejemplo",
      description:
        "Estudios centrados en desarrollo web, programación y diseño de interfaces.",
    },
    {
      year: "2016-2018",
      title: "Bootcamp de Desarrollo Frontend",
      institution: "Academia Código",
      description:
        "Formación intensiva en React, JavaScript moderno y desarrollo de aplicaciones web.",
    },
    {
      year: "En curso",
      title: "Certificación en UX/UI Design",
      institution: "Plataforma Online",
      description:
        "Aprendiendo principios de diseño de experiencia de usuario e interfaces.",
    },
  ];
  return (
    <div className="bg-surface-light-secondary dark:bg-gradient-to-r from-surface-dark-primary to-surface-dark-secondary py-40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[12px] bg-cyan-500 py-0.5 px-2 rounded-2xl text-cyan-800 font-semibold">
            Projects
          </p>
          <h1 className="text-2xl font-semibold">My academic training</h1>
          <p>My educational background and professional training.</p>
          <div className="relative border-l border-gray-700 ml-7 pl-7 space-y-10">
            {items.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-13 top-0 w-12 h-12 rounded-full bg-gray-800 border-2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full"></div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg ml-4">
                  <span className="text-xs bg-cyan-900 text-cyan-300 px-2 py-1 rounded-md">
                    {item.year}
                  </span>
                  <h3 className="text-white font-bold text-lg mt-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.institution}</p>
                  <p className="text-gray-300 mt-2 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
