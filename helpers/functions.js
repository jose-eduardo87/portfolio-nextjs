const convertToRadians = (value) => (value * Math.PI) / 180;
const convertToDegrees = (value) => value * (180 / Math.PI);

export function getMiddlePointBetweenTwoLocations(lat1, lng1, lat2, lng2) {
  // gets the longitude difference and converts to radians
  var dLng = convertToRadians(lng2 - lng1);

  // converts to radians
  const lat1Rad = convertToRadians(lat1);
  const lat2Rad = convertToRadians(lat2);
  const lng1Rad = convertToRadians(lng1);

  var bX = Math.cos(lat2Rad) * Math.cos(dLng);
  var bY = Math.cos(lat2Rad) * Math.sin(dLng);
  var lat3 = Math.atan2(
    Math.sin(lat1Rad) + Math.sin(lat2Rad),
    Math.sqrt((Math.cos(lat1Rad) + bX) * (Math.cos(lat1Rad) + bX) + bY * bY)
  );
  var lng3 = lng1Rad + Math.atan2(bY, Math.cos(lat1Rad) + bX);

  return [convertToDegrees(lat3), convertToDegrees(lng3)];
}

export const nameAndEmailValidator = (value) => value.trim() !== "";
export const emailValidator = (email) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
