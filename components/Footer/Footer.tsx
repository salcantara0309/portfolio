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
    <div>
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
      </Box>
    </div>
  )
}

export default Footer;