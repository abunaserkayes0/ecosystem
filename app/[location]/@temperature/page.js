import TemperatureCardItem from "../Components/TemperatureCardItem";

export default function Temperature({ params: { location }, searchParams: { latitude, longitude } }) {
    return (
        <TemperatureCardItem lat={latitude} lon={longitude} />
    );
}