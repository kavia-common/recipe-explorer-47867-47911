import { NextResponse } from "next/server";
import { mockRecipes } from "@/lib/mockData";

export const dynamic = "force-static";
export const revalidate = false;

// PUBLIC_INTERFACE
export async function generateStaticParams() {
  /** Provide static params for all recipe IDs to enable static export */
  return mockRecipes.map((r) => ({ id: r.id }));
}

// PUBLIC_INTERFACE
export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  /** Returns details for a recipe by id */
  const { id } = await context.params;
  const recipe = mockRecipes.find((r) => r.id === id);
  if (!recipe) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  return NextResponse.json(recipe, { status: 200 });
}
