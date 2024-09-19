import { getWeatherData } from "@/libs/weather.lib";
import Card from "./ui/Card";

export default async function WeatherCardItem({lat,lon}) {
  const data = await getWeatherData(lat,lon);
  
  return (
    <Card>
        <h6 className="feature-name">Current Weather</h6>
        <div className="feature-main">
            <img
            className="max-w-20"
            src="/icon_rain.png"
            alt="rain icon"
            />
        <h3 className="feature-title">{data?.h3main}</h3>
            <span className="feature-name">{data?.description}</span>
        </div>
    </Card>
  );
}