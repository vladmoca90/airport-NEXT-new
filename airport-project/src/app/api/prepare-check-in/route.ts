import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allCheckIns } from "../../../../lib/prepare-check-in/allCheckIns";

export function GET(request: NextRequest) {
    return NextResponse.json(
        {
            body: allCheckIns,
            path: request.nextUrl.pathname,
            query: request.nextUrl.search,
            cookies: request.cookies.getAll(),
        },
        {
            status: 200
        },
    );
}

// http://localhost:3000/api/prepare-check-in