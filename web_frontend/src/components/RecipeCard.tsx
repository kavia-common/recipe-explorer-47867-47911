import Link from "next/link";

export type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: number;
  cuisine: string;
  rating: number;
  ingredients: string[];
  steps: string[];
  tags: string[];
};

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <article className="card overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/recipes/${recipe.id}`} className="block">
        <div className="relative w-full h-44 bg-gray-100">
          {/* Simple image with object-cover behavior using inline styles to avoid extra deps */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={recipe.image}
            alt={recipe.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="absolute top-2 left-2 text-xs px-2 py-1 rounded-md bg-white/90 text-gray-700 shadow-sm">
            {recipe.cuisine}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-1">
            {recipe.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{recipe.description}</p>
          <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
            <span>{recipe.cookTime} mins</span>
            <span className="inline-flex items-center gap-1">
              <span className="text-amber-500">★</span>
              {recipe.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
