import { forwardRef, useEffect } from "react";
// import dynamic from "next/dynamic";
// const Globe = dynamic(import("react-globe.gl"), { ssr: false });
let Globe = () => null;
if (typeof window !== "undefined") {
  Globe = require("react-globe.gl").default;
}
import { useTheme } from "store/theme-context";
import { EARTH_IMAGE } from "helpers/paths";
import { getMiddlePointBetweenTwoLocations } from "helpers/functions";

const GlobeWrapper = forwardRef(({ endLat, endLng }, ref) => {
  const { currentBGHex } = useTheme();
  const arcsData = [
    {
      startLat: -8.00937,
      startLng: -34.8687,
      endLat,
      endLng,
    },
  ];

  useEffect(() => {
    const [lat, lng] = getMiddlePointBetweenTwoLocations(
      -8.00937,
      -34.8687,
      endLat,
      endLng
    );
    const MAP_CENTER = {
      lat,
      lng,
      altitude: 2.2,
    };

    ref.current.pointOfView(MAP_CENTER, 4000);
  }, [ref, endLat, endLng]);

  return (
    <Globe
      ref={ref}
      width={550}
      height={550}
      atmosphereAltitude={0.3}
      backgroundColor={currentBGHex || "#000000"}
      globeImageUrl={EARTH_IMAGE}
      arcsData={arcsData}
      arcDashLength={0.4}
      arcDashGap={1}
      arcDashAnimateTime={3000}
    />
  );
});

GlobeWrapper.displayName = "GlobeWrapper";

export default GlobeWrapper;
