export function Footer() {
  return (
    <footer className="bg-transparent flex flex-col md:flex-row justify-center items-center gap-gutter py-8 w-full mt-auto">
      <div className="font-label-caps text-label-caps text-on-surface-variant mb-4 md:mb-0">
        relative 
      </div>
      <nav className="flex gap-6">
        <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">
          Made by Blerti
        </a>
        <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">
          Est. 2026
        </a>
        <a href="/settings" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">
          Settings
        </a>
      </nav>
    </footer>
  );
}