import maplibregl from "maplibre-gl";

type Props = {
  container: HTMLElement | null;
  latitude: number;
  longitude: number;
  zoom: number;
};
export const mapLibreLogic = (props: Props) => {
  const { container, latitude, longitude, zoom } = props;
  if (container === null) return;
  const map = new maplibregl.Map({
    container,
    zoom,
    style: {
      version: 8,
      // 背景地図のソースを追加
      sources: {
        "moon-tiles": {
          type: "raster",
          tiles: [
            "/api/combineImage?url=trek.nasa.gov/tiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02/1.0.0//default/default028mm/{z}/{y}/{x}.jpg",
          ],
          tileSize: 256,
        },
        test: {
          type: "raster",
          tiles: [
            "/api/combineImage?url=trek.nasa.gov/tiles/Moon/EQ/Apollo15_MetricCam_ClrConf_Global_1024ppd/1.0.0//default/default028mm/{z}/{y}/{x}.png",
          ],
          tileSize: 256,
        },
      },
      layers: [
        {
          id: "moon-layer",
          type: "raster",
          source: "moon-tiles",
        },
        {
          id: "test-layer",
          type: "raster",
          source: "test",
        },
      ],
    },
    center: [latitude, longitude],
    minZoom: 0,
    maxZoom: 9,
  });

  map.on("click", "points-layer", (e) => {
    console.log(e);
  });

  return () => {
    map.remove();
  };
};
