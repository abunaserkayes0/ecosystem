'use client'
import { getLocationLatLongList } from "@/libs/location.lib";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default  function LocationSwitcher() {
    const[locations,setLocation]=useState([])
    const [isLocation,setIsLocation]= useState(false);

    useEffect(()=>{
       async function fetchData(){
            const data = await getLocationLatLongList();            
            setLocation(data)
        }
        fetchData();
    },[])

  return (
    <>
    <div className="relative">
        <button onClick={()=>setIsLocation(!isLocation)}>
            <Image
            className="size-9"
            src="/link.svg"
            alt="link icon"
            width={100}
            height={100}
            />
        </button>
        {
            isLocation && (
                <div
                className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2"
                >
                    
                    <ul
                    role="list"
                    className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
                    >
                    {
                        locations.map((loc)=>
                            <li key={loc?.location}>
                                <Link href={`/${loc?.location}?latitude=${loc?.latitude}&longitude=${loc?.longitude}`} >
                                    {loc?.location}
                                </Link>
                            </li>  
                        )
                    }
                    </ul>
                </div>
            )
        }
    </div>
    </>
  );
}