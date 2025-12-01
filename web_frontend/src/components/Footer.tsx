export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-500 flex items-center justify-between">
        <p>&copy; {new Date().getFullYear()} Recipe Explorer</p>
        <p className="text-gray-400">Ocean Professional Theme</p>
      </div>
    </footer>
  );
}
