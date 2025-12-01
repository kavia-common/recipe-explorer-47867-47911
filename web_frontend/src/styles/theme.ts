export const theme = {
  name: "Ocean Professional",
  colors: {
    primary: "#2563EB",
    secondary: "#F59E0B",
    success: "#F59E0B",
    error: "#EF4444",
    background: "#f9fafb",
    surface: "#ffffff",
    text: "#111827",
    gradientFrom: "rgba(59, 130, 246, 0.1)", // blue-500/10
    gradientTo: "#fafafa", // gray-50
  },
} as const;

export type Theme = typeof theme;

// PUBLIC_INTERFACE
export function getApiBase(): string {
  /** Returns API base path using NEXT_PUBLIC_API_BASE if provided, otherwise relative '/api' */
  // Prefer process.env in both server and client; during client bundling, Next inlines NEXT_PUBLIC_* values
  const base = process.env.NEXT_PUBLIC_API_BASE;
  return base && base.trim().length > 0 ? base : "/api";
}
