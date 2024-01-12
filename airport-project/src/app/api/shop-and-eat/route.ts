import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allShops } from "../../../../lib/shop-and-eat/allShops";

export async function GET(request: NextRequest) {
    return NextResponse.json(
        {
            body: allShops,
            path: request.nextUrl.pathname,
            query: request.nextUrl.search,
            cookies: request.cookies.getAll(),
        },
        {
            status: 200
        },
    );
}

// http://localhost:3000/api/shop-and-eat