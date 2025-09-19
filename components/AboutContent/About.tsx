import React from "react";
import { 
  Heading, 
  Text,
  List
} from "@chakra-ui/react";

const About = () => {
  return (
    <div>
      <Heading textTransform={"uppercase"} >Who am I?</Heading>
      <Text>I'm a full stack developer who is working to expand my knowledge of Javascript, React, and other skill sets that help create projects where creativity and functionality meet perfectly. I am also dabbling in game development, with an interest in 2D platformers.</Text>
      <Text></Text>
      <Text>Other hobbies I enjoy include video games, drawing, baking, and making miscellaneous crafting projects.</Text>
      <Heading textTransform={"uppercase"} >Skills</Heading>
      <List.Root>
        <List.Item>HTML</List.Item>
        <List.Item>CSS</List.Item>
        <List.Item>Javascript</List.Item>
        <List.Item>Typescript</List.Item>
        <List.Item>Python</List.Item>
        <List.Item>React</List.Item>
        <List.Item>Next.js</List.Item>
        <List.Item>Godot</List.Item>
      </List.Root>
    </div>
  )
}

export default About;