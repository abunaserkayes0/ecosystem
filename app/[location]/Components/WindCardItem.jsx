import { getWindData } from "@/libs/weather.lib";
import Card from "./ui/Card";
import Image from "next/image";

export default async function WindCardItem({lat,lon}) {
  const data =await getWindData(lat,lon);

  return (
    <Card>
      <h6 className="feature-name">Wind</h6>
        <div className="feature-main">
          <Image
            className="max-w-20"
            src="/icon_wind.png"
            alt="rain icon"
            width={300}
            height={300}
          />
          <h3 className="feature-title">{data?.speed}</h3>
          <span className="feature-name">{data?.deg}</span>
        </div>
    </Card>
  );
}