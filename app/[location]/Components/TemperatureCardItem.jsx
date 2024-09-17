import { getTemperatureData } from "@/libs/weather.lib";
import Card from "./ui/Card";

export default async function TemperatureCardItem({lat,lon}) {
    const {  
      temp,
      feels_like,
      temp_min,
      temp_max,
     
    } = await getTemperatureData(lat,lon);
    
  return (
    <Card>
        <h6 className="feature-name">Current Temperature</h6>
        <div className="feature-main">
          <img
            className="max-w-20"
            src="/icon_tempareture.png"
            alt="rain icon"
          />
          <h3 className="feature-title">{temp}</h3>
         
          <span className="feature-name">Feels Like {feels_like}</span>
          <h1 className="text-xs font-bold">Maximum-Temp: {temp_max}</h1>
          <h1 className="text-xs font-black">Minimum-Temp: {temp_min}</h1>
        </div>
    </Card>
  );
}