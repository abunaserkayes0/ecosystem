import AqiCardItem from "../Components/AqiCardItem";

export default function Aqi({ params: { location }, searchParams: { latitude, longitude } }) {
    return (
        <AqiCardItem lat={latitude} lon={longitude} />
    );
}