import WindCardItem from "../Components/WindCardItem";

export default function Wind({ params: { location }, searchParams: { longitude, latitude } }) {
  return (
    <WindCardItem lat={latitude} lon={longitude} />
  );
}