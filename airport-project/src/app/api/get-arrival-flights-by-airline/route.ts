import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allArrivals } from "../../../../lib/searchArrivals/allArrivals";
import { FlightStatus } from "../../../../lib/searchArrivals/flightStatus";

export async function GET(request: NextRequest) {
    const airlineName = request.nextUrl.searchParams.get("airlineName");
    const noFlights = [
        {
            time: "N/A",
            airlineCode: "N/A",
            airlineFin: "/images/NA-tailfin.jpg",
            airlineName: "N/A",
            origin: "N/A",
            terminal: "N/A",
            belt: "N/A",
            status: FlightStatus.notAvailable,
        },
    ];

    if (!airlineName) {
        return NextResponse.json(
            null,
            {
                status: 400
            },
        );
    }

    const flights = allArrivals.filter((arrival) => {
        return airlineName === arrival.airlineName;
    });

    if (flights.length === 0) {
        return NextResponse.json(
            noFlights,
            {
                status: 404
            },
        );
    } else {
        return NextResponse.json(
            flights,
            {
                status: 200
            },
        );
    }

}

// https://airport-next-new.vercel.app/api/get-arrival-flights-by-airline