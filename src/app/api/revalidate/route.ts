import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const token = request.nextUrl.searchParams.get("revalidationToken");

    if (!token || token !== process.env.REVALIDATION_TOKEN) {
        return Response.json({
            revalidated: false,
            now: Date.now(),
            message: "Missing or incorrect revalidation token",
        });
    }

    revalidatePath("/", "layout");

    return Response.json({ revalidated: true, now: Date.now() });
}
