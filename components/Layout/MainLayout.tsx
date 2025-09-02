import Head from "next/head";
import { Box } from "@chakra-ui/react";

type Props = {
  title: string;
  children: any;
}

const MainLayout = (props: Props) => {
  const { title, children } = props;
  
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>{children}</div>
    </Box>
  )
}

export default MainLayout;