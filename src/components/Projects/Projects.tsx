function Projects() {
  return (
    <section
      id="projects"
      className="container-project relative w-auto max-w-[40rem] py-0 px-6 my-0 mx-auto "
    >
      <p className="text-purple-dark-color dark:text-purple-color">
        Proyectos -{" "}
        <span className="text-gray-color dark:text-purple-smoke-color">
          Visita mis ultimos proyectos{" "}
        </span>{" "}
      </p>

      <div className="mt-16 flex flex-wrap">
        <div className="rounded-[10px] max-w[60%] p-6 bg-purple-smoke-color dark:bg-gray-color">
          <span className="text-black-color dark:text-white-color font-medium">
            App Móvil de Denuncias Ciudadanas
          </span>
          <p className="text-black-color dark:text-white-smoke-color">
            App móvil que permite a los habitantes de una ciudad reportar
            denuncias y reclamos de manera efectiva sobre temas relevantes de la
            ciudad, tales como alumbrado público, baches, carreteras en mal
            estado, entre otros y que estas sean atendidas por las autoridades
            municipales.
          </p>
        </div>
      </div>

      <div className="my-12 mx-0 grid grid-cols-1 md:flex md:flex-row">
        <img
          className="w-56 bg-cover rounded-[10px]"
          src="https://res.cloudinary.com/dwn7fonh6/image/upload/v1705804914/imagen_ie2nlv.jpg"
          alt="Proyecto de denuncias ciudadanas"
        />
        <div className="my-0 mx-8">
          <p className="text-black-color dark:text-white-smoke-color">
            Proyecto realizado en 2023, en el cual se utilizo el marco de
            trabajo de{" "}
            <span className="text-black-color dark:text-white-color font-medium">
              SCRUM.
            </span>{" "}
          </p>

          <div className="my-12 mx-4">
            <span className="text-black-color dark:text-white-color font-medium">
              Tecnologias y Herramientas
            </span>
            <ul className="text-black-color dark:text-white-smoke-color list-disc">
              <li>React</li>
              <li>Nodejs</li>
              <li>Flutter</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Google Maps</li>
            </ul>
          </div>
          <p className="text-black-color dark:text-white-smoke-color">
            Ver código fuente:{" "}
          </p>
          <div className="flex flex-row gap-4 mt-1">
            <div className="flex justify-center items-center gap-2">
              <span>Móvil</span>
              <a
                target="_blank"
                href="https://github.com/RamirezPineda/project_topics_movil.git"
              >
                <img
                  className="w-5"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="Github logo"
                />
              </a>
            </div>
            <div className="flex justify-center items-center gap-2">
              <span>Backend y Frontend</span>
              <a
                target="_blank"
                href="https://github.com/RamirezPineda/project-topics.git"
              >
                <img
                  className="w-5"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="Github logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
