import RecipeDetails from "@/components/RecipeDetails";
import { type Recipe } from "@/components/RecipeCard";
import { getApiBase } from "@/styles/theme";

async function getRecipe(id: string): Promise<Recipe | null> {
  const base = getApiBase();
  const url = `${base.replace(/\/$/, "")}/recipes/${id}`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as Recipe;
  } catch {
    return null;
  }
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function RecipePage({ params }: Props) {
  const { id } = await params;
  const recipe = await getRecipe(id);
  if (!recipe) {
    return (
      <div className="w-full py-16 text-center text-gray-500">Recipe not found.</div>
    );
  }
  return <RecipeDetails recipe={recipe} />;
}
