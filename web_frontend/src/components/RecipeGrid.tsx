import RecipeCard, { type Recipe } from "./RecipeCard";

type Props = {
  recipes: Recipe[] | null;
  loading?: boolean;
  error?: string | null;
};

export default function RecipeGrid({ recipes, loading, error }: Props) {
  if (loading) {
    return (
      <div className="w-full py-16 text-center text-gray-500">Loading recipes...</div>
    );
  }
  if (error) {
    return (
      <div className="w-full py-16 text-center text-red-600">Error: {error}</div>
    );
  }
  if (!recipes || recipes.length === 0) {
    return (
      <div className="w-full py-16 text-center text-gray-500">No recipes found. Try adjusting your search.</div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}
    </div>
  );
}
