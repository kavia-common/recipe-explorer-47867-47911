import { type Recipe } from "./RecipeCard";

type Props = {
  recipe: Recipe;
};

export default function RecipeDetails({ recipe }: Props) {
  return (
    <div className="card overflow-hidden">
      <div className="relative w-full h-64 bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="absolute top-3 left-3 text-xs px-2 py-1 rounded-md bg-white/90 text-gray-700 shadow-sm">
          {recipe.cuisine}
        </div>
      </div>
      <div className="p-6">
        <header className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{recipe.title}</h1>
            <p className="mt-1 text-gray-600">{recipe.description}</p>
            <div className="mt-2 text-sm text-gray-500 flex gap-4">
              <span>⏱ {recipe.cookTime} mins</span>
              <span>★ {recipe.rating.toFixed(1)}</span>
              <span>Tags: {recipe.tags.join(", ")}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-secondary px-3 py-2" aria-label="Save recipe">Save</button>
            <button className="btn btn-outline px-3 py-2" aria-label="Share recipe">Share</button>
          </div>
        </header>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Ingredients</h2>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
              {recipe.ingredients.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Steps</h2>
            <ol className="mt-3 list-decimal list-inside text-gray-700 space-y-2">
              {recipe.steps.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}
