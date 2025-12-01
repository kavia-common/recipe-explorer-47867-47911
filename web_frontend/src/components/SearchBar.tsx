"use client";
import { useState } from "react";

export type SearchFilters = {
  q: string;
  cuisine: string;
  time: string; // max cook time minutes
};

type Props = {
  initial?: Partial<SearchFilters>;
  onChange: (filters: SearchFilters) => void;
};

const cuisines = ["All", "Italian", "Mexican", "Indian", "American", "Chinese", "Mediterranean"];

export default function SearchBar({ initial, onChange }: Props) {
  const [q, setQ] = useState(initial?.q ?? "");
  const [cuisine, setCuisine] = useState(initial?.cuisine ?? "All");
  const [time, setTime] = useState(initial?.time ?? "");

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    onChange({ q, cuisine, time });
  };

  return (
    <form
      onSubmit={submit}
      className="w-full grid grid-cols-1 md:grid-cols-3 gap-3"
      aria-label="Recipe search and filters"
    >
      <div className="col-span-1 md:col-span-2">
        <label htmlFor="search" className="sr-only">Search recipes</label>
        <input
          id="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search recipes, ingredients, tags..."
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          aria-label="Search recipes"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="cuisine" className="sr-only">Cuisine</label>
          <select
            id="cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            aria-label="Filter by cuisine"
          >
            {cuisines.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="time" className="sr-only">Max cook time</label>
          <input
            id="time"
            type="number"
            min={0}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Max mins"
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            aria-label="Filter by max cook time in minutes"
          />
        </div>
      </div>
      <div className="md:col-span-3">
        <button type="submit" className="btn btn-primary w-full md:w-auto px-5 py-2.5">
          Search
        </button>
      </div>
    </form>
  );
}
