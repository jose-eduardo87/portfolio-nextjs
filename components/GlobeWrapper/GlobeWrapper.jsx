import { forwardRef, useEffect } from "react";
// import dynamic from "next/dynamic";
// const Globe = dynamic(import("react-globe.gl"), { ssr: false });
let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;
import { useTheme } from "store/theme-context";
import { EARTH_IMAGE } from "helpers/paths";

const GlobeWrapper = forwardRef((props, ref) => {
  const { isDark, currentBGHex } = useTheme();
  const arcsData = [
    {
      startLat: -8.00937,
      startLng: -34.8553,
      endLat: -31.953512,
      endLng: 115.857048,
    },
  ];

  useEffect(() => {
    const MAP_CENTER = {
      lat: -54.117061569302734,
      lng: 24.044779284317865,
      altitude: 2.6,
    };

    ref.current.pointOfView(MAP_CENTER, 4000);
  }, [ref]);

  return (
    <Globe
      ref={ref}
      width={600}
      height={600}
      atmosphereAltitude={0.3}
      backgroundColor={currentBGHex || "#000000"}
      globeImageUrl={EARTH_IMAGE}
      arcsData={arcsData}
      // arcLabel={() => "We are now connected!"}
      arcDashLength={0.4}
      arcDashGap={0.4}
      arcDashAnimateTime={3000}
      pointColor={() => "orange"}
      pointAltitude={0}
      pointRadius={0.04}
      pointsMerge={true}
    />
  );
});

GlobeWrapper.displayName = "GlobeWrapper";

export default GlobeWrapper;
