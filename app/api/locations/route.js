import { getLocations } from "@/data-utils/data";
import { NextResponse } from "next/server";

export async function GET() {
    const res = getLocations();
    return NextResponse.json(res);
}