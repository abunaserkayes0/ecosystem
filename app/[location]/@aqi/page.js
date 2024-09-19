import { getResolvedLonLat } from "@/libs/location.lib";
import AqiCardItem from "../Components/AqiCardItem";
import NotFound from "../Components/ui/NotFoundPage";

export default async function Aqi({ params: { location }, searchParams: { latitude, longitude } }) {
    const currentLocation = await getResolvedLonLat(location, latitude, longitude)

    return (

        currentLocation ? (
            <AqiCardItem lat={latitude} lon={longitude} />
        ) :
            (
                <NotFound />
            )

    );
}