// import { FaGithub, FaLinkedin, FaSlack } from "react-icons/fa"

function Header() {
  return (
    <section className="flex justify-center text-center my-[4.5rem] md:mx-0 mx-8">
    <header>
      <h1 className=" text-5xl font-bold mb-3 bg-white-gradient-color dark:bg-gradient-color bg-cover bg-repeat bg-clip-text">
        {" "}
        Hola, soy Ricky
      </h1>
      <div className="flex flex-row items-center rounded-[10px] py-6 px-12 bg-white-color-smoke-bg text-black-color dark:bg-gray-color dark:text-white-color">
        {/* ⚛ React developer based in Bolivia!  */}
        Desarrollador Back-end y Front-end ⚛ 
        {/* <FaGithub />  <FaLinkedin /> <FaSlack /> */}
      </div>
    </header>
  </section>
  )
}
export default Header