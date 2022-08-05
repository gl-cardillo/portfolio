
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Contacts } from "../components/Contacts";

export default function Index() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </>
  );
}
