import React from "react";
import { 
  Heading, 
  Text,
  List,
  Link,
} from "@chakra-ui/react";

// might need to data fetch to get project info

const Projects = () => {
  return (
    <div>
      <Heading>PROJECTS</Heading>
      <List.Root>
        <List.Item>New City Food House</List.Item>
        <List.Item>Career Explore NW</List.Item>
        <List.Item>Moon Rabbit</List.Item>
      </List.Root>
    </div>
  )
}

export default Projects;