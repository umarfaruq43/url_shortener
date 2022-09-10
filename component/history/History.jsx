import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ScreenWidth from "../../Layout/ScreenWidth";
import HistoryCard from "./HistoryCard";

const History = ({}) => {
  const [mainHistories, setMainHistories] = useState([]);

  const check = () => {
    let items = localStorage.getItem("links");
    let mainItems = JSON.parse(items);
    console.log(mainItems);
    console.log("Histories ", mainHistories);
  };
  useEffect(() => {
    check();
    // return () => {
    //   cleanup;
    // };
  }, []);
  setMainHistories(mainItems);
  return (
    <Box>
      {mainHistories &&
        mainHistories.map(({ longLink, shortLink }, i) => {
          return (
            <div key={i}>
              <HistoryCard shortLink={shortLink} longLink={longLink} />
            </div>
          );
        })}
    </Box>
  );
};

export default History;
