import "@/styles/globals.css";
import { Provider } from "@/components/ui/provider";
import { Grid, GridItem } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Grid>
        <GridItem>
          <Header />
        </GridItem>
        <GridItem>
          <Component {...pageProps} />
        </GridItem>
        <GridItem>
          <Footer />
        </GridItem>
      </Grid>
    </Provider>

  )
}
