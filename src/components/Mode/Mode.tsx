import { RiMoonFill, RiSunFill } from "react-icons/ri";

interface Props {
  darkMode: boolean;
  setMode: () => void;
}

function Mode({ darkMode, setMode }: Props) {
  return (
    <section className="flex flex-wrap justify-around items-center py-4">
      <div className="text-purple-dark-color dark:text-white-color font-medium">
        <ul className="flex list-none">
          <li className="mx-6">
            <a href="#about">Me</a>
          </li>

          <li>
            <a href="#skills">Habilidades</a>
          </li>

          <li className="mx-6">
            <a href="#projects">Proyectos</a>
          </li>

          {/* <li className="mx-6">
        <a className="inline-flex items-center text-white-color" target="_blank" href="https://github.com/cutioluis">
          <span className="relative text-white hover:scale-100 hover:origin-left">Source</span>
          <span className="grid grid-cols-2 w-7 ml-3 overflow-x-hidden">
            <img
              className="w-4 -translate-x-8 transition-transform duration-300"
              src="https://cdn.sanity.io/images/tljndwv6/production/182744b0662c24bb7d37846566bdb7ebee3470d6-15x15.svg"
              alt="External Link"
            />
            <img
              className="w-4  transition-transform duration-300"
              src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
              alt="GitHub"
            />
          </span>
        </a>
      </li> */}
        </ul>
      </div>
      <button
        onClick={setMode}
        className="cursor-pointer px-[0.6rem] pt-2 pb-2.5 border-none bg-white-color-smoke-bg dark:bg-gray-color rounded-[10px]"
      >
        {darkMode ? (
          <RiSunFill className="text-purple-smoke-color text-lg" />
        ) : (
          <RiMoonFill className="text-purple-dark-color text-lg" />
        )}
      </button>
    </section>
  );
}
export default Mode;
