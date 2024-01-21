import { useState } from "react";

import {
  Mode,
  Header,
  Bio,
  Education,
  Skills,
  Experience,
  Projects,
  Footer,
} from "./components/";

function App() {
  const [darkMode, setMode] = useState(true);

  const handleSetMode = () => {
    setMode(!darkMode);
  };

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <div className="m-0 p-0 scroll-smooth antialiased bg-white-color-bg dark:bg-black-color-bg dark:text-white-color min-h-screen transition-colors">
          <Mode darkMode={darkMode} setMode={handleSetMode} />
          <Header />
          <Bio />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
