function Education() {
  return (
    <section
      id="education"
      className="relative w-auto max-w-[40rem] flex justify-center items-center flex-wrap  px-6 my-20 mx-auto dark:white-smoke-color"
    >
      <div className="flex gap-2 flex-col w-auto">
        <span className="text-purple-dark-color dark:text-purple-color">
          Educación{" "}
          <span className="text-gray-color dark:text-purple-smoke-color">
            - Formación Académica
          </span>{" "}
        </span>
        <div className="text-black-color dark:text-white-smoke-color">
          <ul className="mt-1 ml-4 list-disc ">
            <li>
              Cisco Networking Academy -{" "}
              <span className="text-black-color dark:text-white-color font-medium">
                Introduction to Networks
              </span>{" "}
              | 2023 - Actualidad
            </li>
            <li>
              Universidad Autónoma Gabriel René Moreno -{" "}
              <span className="text-black-color dark:text-white-color font-medium">
                Ingeniería informática
              </span>{" "}
              | 2018 - Actualidad
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Education;
