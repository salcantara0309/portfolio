import Head from "next/head";
import { Box } from "@chakra-ui/react";

type Props = {
  title: string;
  children: any;
}

const MainLayout = (props: Props) => {
  const { title, children } = props;
  
  return (
    <Box p={5} h={'100%'}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box h={'100%'}>{children}</Box>
    </Box>
  )
}

export default MainLayout;