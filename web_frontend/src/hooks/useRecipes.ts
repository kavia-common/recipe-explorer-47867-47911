"use client";
import { useEffect, useState } from "react";
import { getApiBase } from "@/styles/theme";
import { type Recipe } from "@/components/RecipeCard";

export type RecipeFilters = { q?: string; cuisine?: string; time?: string };

type State = {
  data: Recipe[] | null;
  loading: boolean;
  error: string | null;
};

// PUBLIC_INTERFACE
export function useRecipes(filters: RecipeFilters): State {
  /** Fetches recipes list from /api/recipes with given filters and returns loading/error state */
  const [state, setState] = useState<State>({ data: null, loading: true, error: null });

  useEffect(() => {
    const controller = new AbortController();
    const base = getApiBase();
    const params = new URLSearchParams();
    if (filters.q) params.set("q", filters.q);
    if (filters.cuisine) params.set("cuisine", filters.cuisine);
    if (filters.time) params.set("time", filters.time);

    const url = `${base.replace(/\/$/, "")}/recipes${params.toString() ? `?${params.toString()}` : ""}`;
    setState((s) => ({ ...s, loading: true, error: null }));

    fetch(url, { signal: controller.signal })
      .then(async (r) => {
        if (!r.ok) throw new Error(`Failed to load recipes (${r.status})`);
        return (await r.json()) as Recipe[];
      })
      .then((data) => setState({ data, loading: false, error: null }))
      .catch((err: unknown) => {
        // Normalize AbortError and general Error messages
        if (typeof err === "object" && err !== null && "name" in err && (err as { name?: string }).name === "AbortError") {
          return;
        }
        const message =
          typeof err === "object" && err !== null && "message" in err
            ? String((err as { message?: string }).message)
            : "Unknown error";
        setState({ data: null, loading: false, error: message });
      });

    return () => controller.abort();
  }, [filters.q, filters.cuisine, filters.time]);

  return state;
}
