'use client';
import getCurrentLocation from "@/libs/currentLocation";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LocationDetector() {
    const [isLatLon, setIsLatLon] = useState({ lat: null, lon: null });
    const [isCountryName, setIsCountryName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const detectLocation = async () => {
            setIsLoading(true);
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;
                    setIsLatLon({ lat: latitude, lon: longitude });

                    const params = new URLSearchParams(searchParams);
                    params.set('latitude', latitude);
                    params.set('longitude', longitude);

                    // Fetch country name
                    try {
                        const data = await getCurrentLocation(latitude,longitude)
                        setIsCountryName(data.countryName);

                        // Wait until country name is set, then navigate
                        if (data.countryName) {
                            router.push(`/${data.countryName}?${params.toString()}`);
                        }
                    } catch (error) {
                        console.error("Error fetching country name:", error);
                    } finally {
                        setIsLoading(false);
                    }
                });
            }
        };

        detectLocation();
    }, [searchParams, pathName, router]);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
            {isLoading && (
                <>
                    <Image
                        src="/network.gif"
                        alt="Loading..."
                        height={500}
                        width={500}
                        priority={ true || false }
                        className="border rounded-md my-4"
                    />
                    <p className="text-4xl text-center">Detecting Location...</p>
                </>
            )}
        </div>
    );
}
