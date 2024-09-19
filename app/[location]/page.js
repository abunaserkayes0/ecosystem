import { getResolvedLonLat } from "@/libs/location.lib";
import LocationItem from "./Components/LocationItem";

export default function Home({ params: { location }, searchParams: { longitude, latitude } }) {

  const currentLocation = getResolvedLonLat(location)

  return (
    <>
      {
        currentLocation ? (
          <LocationItem lat={latitude} lon={longitude} />
        ) :
          (
            <NotFound />
          )
      }
    </>
  );
}
