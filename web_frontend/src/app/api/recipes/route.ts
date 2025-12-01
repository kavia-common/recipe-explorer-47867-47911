import { NextResponse } from "next/server";
import { filterRecipes } from "@/lib/mockData";

export const dynamic = "force-static";
export const revalidate = false;

// PUBLIC_INTERFACE
export async function GET(req: Request) {
  /** Returns list of recipes with optional filters: ?q, ?cuisine, ?time */
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || undefined;
  const cuisine = searchParams.get("cuisine") || undefined;
  const time = searchParams.get("time") || undefined;

  const results = filterRecipes({ q, cuisine, time });
  return NextResponse.json(results, { status: 200 });
}
