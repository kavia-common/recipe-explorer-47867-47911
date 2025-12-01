"use client";
import SearchBar from "@/components/SearchBar";
import RecipeGrid from "@/components/RecipeGrid";
import { useState } from "react";
import { useRecipes } from "@/hooks/useRecipes";

export default function Home() {
  const [filters, setFilters] = useState<{ q?: string; cuisine?: string; time?: string }>({});
  const { data, loading, error } = useRecipes(filters);

  return (
    <div>
      <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Find your next favorite recipe</h1>
          <p className="text-gray-600 mt-1">
            Search by name, ingredient, or tag. Filter by cuisine and max cook time.
          </p>
        </div>
        <SearchBar
          onChange={(f) => setFilters({
            q: f.q,
            cuisine: f.cuisine,
            time: f.time,
          })}
        />
      </section>

      <section className="mt-8">
        <RecipeGrid recipes={data} loading={loading} error={error} />
      </section>
    </div>
  );
}
