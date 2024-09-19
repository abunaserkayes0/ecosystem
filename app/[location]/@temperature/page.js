import { getResolvedLonLat } from "@/libs/location.lib";
import TemperatureCardItem from "../Components/TemperatureCardItem";
import NotFound from "../Components/ui/NotFoundPage";

export default async function Temperature({ params: { location }, searchParams: { latitude, longitude } }) {
    const currentLocation = await getResolvedLonLat(location, latitude, longitude)
    return (

        currentLocation ? (
            <TemperatureCardItem lat={latitude} lon={longitude} />
        ) :
            (
                <NotFound />
            )

    );

}