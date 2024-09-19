import { getAqiData } from "@/libs/weather.lib";
import Card from "./ui/Card";
import Image from "next/image";

export default async function AqiCardItem({lat,lon}) {

const data = await getAqiData(lat,lon);


const getAqiValue = (aqiValue) => {
  switch (aqiValue) {
  case 1:
  return 'Good';
  case 2:
  return 'Rainy';
  case 3:
  return 'Muddy';
  case 4:
  return 'Sunny';
  case 5:
  return 'Smokey'
  default:
  return 'No value';
  }
};

  return (
    <Card>
        <h6 className="feature-name">Air Pollution & Quality</h6>
        <div className="mt-3 space-y-2 lg:space-y-3">
            <div className="flex items-center justify-between gap-4">
            <div
                className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base"
            >
                <Image
                className="max-w-[18px]"
                src="/icon_air_element.png"
                alt="icon"
                width={50}
                height={50}
                />
                Air Quality Index
            </div>
            <span className="text-right text-sm text-white lg:text-base">{getAqiValue(data?.main?.aqi)}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
                    <div
                      className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base"
                    >
                      <Image
                        className="max-w-[18px]"
                        src="/icon_air_element.png"
                        alt="icon"
                        width={50}
                        height={50}
                      />
                      Carbon Monoxide
                    </div>
                    <span className="text-right text-sm text-white lg:text-base"
                      >{data?.components?.co} µg/m³</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base"
                    >
                      <Image
                        className="max-w-[18px]"
                        src="/icon_air_element.png"
                        alt="icon"
                        width={50}
                        height={50}
                      />
                      Nitric Oxide
                    </div>
                    <span className="text-right text-sm text-white lg:text-base"
                      >{data?.components?.no} ppm</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base"
                    >
                      <Image
                        className="max-w-[18px]"
                        src="/icon_air_element.png"
                        alt="icon"
                        width={50}
                        height={50}
                      />
                      Nitrogen Dioxide
                    </div>
                    <span className="text-right text-sm text-white lg:text-base"
                      >{data?.components?.no2} ppm</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base"
                    >
                      <Image
                        className="max-w-[18px]"
                        src="/icon_air_element.png"
                        alt="icon"
                        width={50}
                        height={50}
                      />
                      Ozone
                    </div>
                    <span className="text-right text-sm text-white lg:text-base"
                      >{data?.components?.datao3} µg/m³</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base"
                    >
                      <Image
                        className="max-w-[18px]"
                        src="/icon_air_element.png"
                        alt="icon"
                        width={50}
                        height={50}
                      />
                      Sulfur Dioxide
                    </div>
                    <span className="text-right text-sm text-white lg:text-base"
                      >{data?.components?.so2} ppm</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base"
                    >
                      <Image
                        className="max-w-[18px]"
                        src="/icon_air_element.png"
                        alt="icon"
                        width={50}
                        height={50}
                      />
                      {data?.components?.pm2_5}
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">0.5 µg/m³</span>
                  </div>     

        </div>                
    </Card>
  );
}