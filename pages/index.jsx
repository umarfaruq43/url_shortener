import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Boost from "../component/Boost";
import Footer from "../component/Footer";
import Form from "../component/Form/Form";
import Hero from "../component/Hero";
import History from "../component/history/History";
import Navbar from "../component/Navbar";
import ShortenForm from "../component/ShortenForm";
import Statistics from "../component/Statistics/Statistics";

export default function Home() {
  return (
    <Box overflowX="hidden">
      <Head>
        <title>URL Shortner</title>
        <meta
          name="description"
          content="SHorten your long link just with a click."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* main  */}

      <Box>
        <Navbar />
        <Hero />
        <Box bgColor="neutral.gray" mt="150" pb="100px">
          {/* <ShortenForm /> */}
          <Form />
          <Statistics />
        </Box>
        <Boost />
        <Footer />
      </Box>
    </Box>
  );
}
