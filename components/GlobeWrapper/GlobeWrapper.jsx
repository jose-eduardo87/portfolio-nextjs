import { forwardRef, useEffect } from "react";
// import dynamic from "next/dynamic";
// const Globe = dynamic(import("react-globe.gl"), { ssr: false });
let Globe = () => null;
if (typeof window !== "undefined") {
  Globe = require("react-globe.gl").default;
}
import { EARTH_IMAGE } from "helpers/paths";
import { getMiddlePointBetweenTwoLocations } from "helpers/functions";

const GlobeWrapper = forwardRef(({ endLat, endLng }, ref) => {
  const myCoords = {
    lat: -8.00937,
    lng: -34.8687,
  };
  const arcsData = [
    {
      startLat: myCoords.lat,
      startLng: myCoords.lng,
      endLat,
      endLng,
    },
  ];

  useEffect(() => {
    const [lat, lng] = getMiddlePointBetweenTwoLocations(
      myCoords.lat,
      myCoords.lng,
      endLat,
      endLng
    );
    const MAP_CENTER = {
      lat,
      lng,
      altitude: 2.2,
    };

    ref.current.pointOfView(MAP_CENTER, 4000);
  }, [ref, myCoords, endLat, endLng]);

  return (
    <Globe
      ref={ref}
      width={550}
      height={550}
      atmosphereAltitude={0.3}
      backgroundColor={"rgba(0,0,0,0)"}
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
