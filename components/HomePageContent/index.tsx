import { 
  Flex,
  Heading,
  Text
} from "@chakra-ui/react";
import React from "react";
import About from "../AboutContent/About";
import Projects from "../ProjectsContent/Projects";
import Contact from "../ContactContent/Contact";

const HomePageContent = () => {
  return(
    <Flex>
      <Heading>Hello there, I'm Sydney.</Heading>
      <About />
      <Projects />
      <Contact />
    </Flex>
  )
}

export default HomePageContent;