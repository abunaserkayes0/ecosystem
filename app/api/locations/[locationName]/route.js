import { getLocationByName } from "@/data-utils/data";
import { NextResponse } from "next/server";

export async function GET(_request, { params }) {
    const location = params.locationName;
    const res = await getLocationByName(location);
    return NextResponse.json(res)
}