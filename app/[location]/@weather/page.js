import WeatherCardItem from "../Components/WeatherCardItem";

export default function Weather({ params: { location }, searchParams: { latitude, longitude } }) {

    return (
        <>
            <WeatherCardItem lat={latitude} lon={longitude} />
        </>
    );
}