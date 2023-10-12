import { Box } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { mapLibreLogic } from "./useMapLibre";
import { LngLatDisplay } from "./useMapLibre/lngLatDisplay";
import type { MoonquakeData, LngLat } from "@/type";

const defaultLngLats: [LngLat, LngLat] = [
  { lng: -40, lat: -40 },
  { lng: 40, lat: 40 },
];

type Props = {
  setIsMap: React.Dispatch<React.SetStateAction<boolean>>;
  setChoiceMoonquake: React.Dispatch<React.SetStateAction<MoonquakeData | null>>;
};
export const MapComponent = (props: Props) => {
  const { setIsMap, setChoiceMoonquake } = props;
  const [lngLats, setLngLats] = React.useState<[LngLat, LngLat]>(defaultLngLats);
  const mapContainer = useRef(null);

  const [windowWidth, setWindowWidth] = useState<number>();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const mapPosition = {
      container: mapContainer.current,
      latitude: 0,
      longitude: 0,
      zoom: 1,
      setIsMap,
      setChoiceMoonquake,
      setLngLats,
    };
    mapLibreLogic(mapPosition);
  }, [mapContainer, setIsMap, setChoiceMoonquake]);

  return (
    <>
      <Box ref={mapContainer} w="100%" h="100%" bgColor="black" />
      <LngLatDisplay lngLats={lngLats} windowWidth={windowWidth} />
    </>
  );
};
