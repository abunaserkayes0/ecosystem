import { getResolvedLonLat } from "@/libs/location.lib";
import WindCardItem from "../Components/WindCardItem";
import NotFound from "../Components/ui/NotFoundPage";

export default async function Weather({ params: { location }, searchParams: { latitude, longitude } }) {

  const currentLocation = await getResolvedLonLat(location, latitude, longitude);

  return (

    currentLocation ? (
      <WindCardItem lat={latitude} lon={longitude} />
    ) :
      (
        <NotFound />
      )

  );

}