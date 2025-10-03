import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Icon
} from "@chakra-ui/react";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <Flex p={5}>
      <Box>
        <Flex>
          <Text>Find me on...</Text>
          <Box>
            <Link>
              <Icon>
                <IoLogoGithub />
              </Icon>
            </Link>
            <Link>
              <Icon>
                <IoLogoLinkedin />
              </Icon>
            </Link>
            <Link></Link>
          </Box>
        </Flex>
        <Flex>
          <Text>Feel free to reach out to me at...</Text>
          <Link>INSERT EMAIL HERE</Link>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Footer;