import { getTemperatureData } from "@/libs/weather.lib";
import Card from "./ui/Card";

export default async function TemperatureCardItem({lat,lon}) {
    const data = await getTemperatureData(lat,lon);
    
  return (
    <Card>
        <h6 className="feature-name">Current Temperature</h6>
        <div className="feature-main">
          <img
            className="max-w-20"
            src="/icon_tempareture.png"
            alt="rain icon"
          />
          <h3 className="feature-title">{data?.temp}</h3>
         
          <span className="feature-name">Feels Like {data?.feels_like}</span>
          <h1 className="text-xs font-bold">Maximum-Temp: {data?.temp_max}</h1>
          <h1 className="text-xs font-black">Minimum-Temp: {data?.temp_min}</h1>
        </div>
    </Card>
  );
}