import { FiDownload } from "react-icons/fi";
import { gmailLogo, linkedinLogo } from "../../assets";

function Bio() {
  return (
    <section
      id="about"
      className="relative w-auto max-w-[40rem] flex justify-center items-center flex-wrap  px-6 my-20 mx-auto dark:white-smoke-color"
    >
      <div className="flex gap-2 flex-col w-auto">
        <span className="text-purple-dark-color dark:text-purple-color">
          Ricky Roy Ramirez Pineda{" "}
          <span className="text-gray-color dark:text-purple-smoke-color">
            - Presentación
          </span>{" "}
        </span>
        <p className="text-black-color dark:text-white-smoke-color mt-1.5">
          ¡Hola! Mi nombre es Ricky, y soy un estudiante de ingeniería
          informática. Durante más de un año, he estado inmerso en el mundo del
          desarrollo utilizando tecnologías como React y Node.js.
        </p>
        <br />
        <div className="flex justify-start items-center gap-2.5 mt-2">
          <a href="https://github.com/RamirezPineda" target="_blank">
            <img
              className="w-6"
              src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
              alt="Github logo"
            />
          </a>

          <a href="https://www.linkedin.com/in/ramirez-pineda" target="_blank">
            <img className="w-6" src={linkedinLogo} alt="Linkedin logo" />
          </a>
          <a href="mailto:ramirez.ricky2021@gmail.com" target="_blank">
            <img className="w-6" src={gmailLogo} alt="Gmail logo" />
          </a>
          <a
            className="ml-2 border-b-[1px] border-purple-color pb-[2px] max-w-fit flex justify-center items-center gap-2"
            href="https://res.cloudinary.com/dwn7fonh6/image/upload/v1705802304/ramirezpineda-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="ramirezpineda-cv.pdf"
          >
            <p>Descargar CV</p> <FiDownload />
          </a>
        </div>
      </div>
    </section>
  );
}
export default Bio;
