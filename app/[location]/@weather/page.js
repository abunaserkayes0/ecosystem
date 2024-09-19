import { getResolvedLonLat } from "@/libs/location.lib";
import WeatherCardItem from "../Components/WeatherCardItem";
import NotFound from "../Components/ui/NotFoundPage";

export default async function Weather({ params: { location }, searchParams: { latitude, longitude } }) {

    const currentLocation = await getResolvedLonLat(location, latitude, longitude)
    return (

        currentLocation ? (
            <WeatherCardItem lat={latitude} lon={longitude} />
        ) :
            (
                <NotFound />
            )

    );

}