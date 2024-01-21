import {
  reactLogo,
  nodejsLogo,
  expressjsLogo,
  laravelLogo,
  flutterLogo,
  javascriptLogo,
  typescriptLogo,
  pythonLogo,
  phpLogo,
  dartLogo,
  tailwindcssLogo,
  mysqlLogo,
  postgresqlLogo,
  mongodbLogo,
  htmlLogo,
  cssLogo,
  gitLogo,
  dockerLogo,
  latexLogo,
  linuxLogo,
} from "../../assets";

function Skills() {
  return (
    <section
      id="skills"
      className="container-project relative w-auto max-w-[40rem] py-0 px-6 my-0 mx-auto "
    >
      <p className="text-purple-dark-color dark:text-purple-color">
        Habilidades{" "}
        <span className="text-gray-color dark:text-purple-smoke-color">
          - Stack y Herramientas
        </span>{" "}
      </p>

      <div className="mt-16 flex flex-wrap my-20">
        <div className="rounded-[10px] max-w-full md:max-w[60%] p-6 bg-purple-smoke-color dark:bg-gray-color flex flex-col gap-3 text-black-color dark:text-white-smoke-color">
          <div className="grid grid-cols-2  md:flex justify-center items-center gap-4">
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-6" src={reactLogo} alt="React logo" /> React
            </div>
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-6" src={nodejsLogo} alt="Nodejs logo" />
              <p>Node.js</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-6" src={expressjsLogo} alt="Expressjs logo" />
              <p>Express.js</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-6" src={laravelLogo} alt="Laravel logo" />
              <p>Laravel</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-6" src={flutterLogo} alt="Flutter logo" />
              <p>Flutter</p>
            </div>
          </div>

          <div className="grid grid-cols-2  md:flex justify-center items-center gap-3">
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-6" src={javascriptLogo} alt="JavaScript logo" />
              <p>JavaScript</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-6" src={typescriptLogo} alt="TypeScript logo" />
              <p>TypeScript</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-6" src={pythonLogo} alt="Pyhton logo" />
              <p>Python</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-8" src={phpLogo} alt="PHP logo" />
              <p>PHP</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-6" src={dartLogo} alt="Dart logo" />
              <p>Dart</p>
            </div>
          </div>

          <div className="grid grid-cols-2  md:flex justify-center items-center gap-3">
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-9" src={mysqlLogo} alt="MySQL logo" />
              <p>MySQL</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-6" src={postgresqlLogo} alt="PostgreSQL logo" />
              <p>PostgreSQL</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-6" src={mongodbLogo} alt="MongoDB logo" />
              <p>MongoDB</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center">
              <img
                className="w-6"
                src={tailwindcssLogo}
                alt="Tailwind Css logo"
              />
              <p>Tailwind Css</p>
            </div>
          </div>

          <div className="grid grid-cols-2  md:flex justify-center items-center gap-3">
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-6" src={htmlLogo} alt="HTML logo" />
              <p>HTML</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-6" src={cssLogo} alt="CSS logo" />
              <p>CSS</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-6" src={gitLogo} alt="Git logo" />
              <p>Git</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-6" src={dockerLogo} alt="Docker logo" />
              <p>Docker</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-7" src={linuxLogo} alt="Linux logo" />
              <p>Linux</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center">
              <img className="w-6" src={latexLogo} alt="LaTeX logo" />
              <p>LaTeX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
