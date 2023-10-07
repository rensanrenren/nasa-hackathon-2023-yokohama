import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Header } from "./header";
import { MapComponent } from "./mapLibre";
import { MainCanvas } from "./useThree/mainCanvas";

export const Main = () => {
  const [isMap, setIsMap] = useState(true);
  return (
    <Box w="100%" h="100%" position="relative">
      <Header />
      {/* 仮の切り替えボタン */}
      <Button
        onClick={() => {
          setIsMap(!isMap);
        }}
        position={"absolute"}
        bottom={10}
        right={10}
        zIndex={100}
      >
        {isMap ? "toThree" : "toMap"}
      </Button>
      {isMap ? <MapComponent /> : <MainCanvas />}
    </Box>
  );
};