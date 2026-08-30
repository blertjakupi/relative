import { Link } from 'react-router-dom';

export function Settings() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface font-body-md antialiased">
      <header className="bg-surface sticky top-0 w-full shadow-ambient-level-1 z-50 border-b border-surface-variant">
        <div className="flex justify-between items-center w-full px-container-padding max-w-[1200px] mx-auto h-touch-target-min">
          <Link to="/" className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
            relative<span className="text-on-surface-variant font-light">/pitch</span>
          </Link>
          <Link
            to="/"
            className="font-interactive text-interactive text-primary hover:opacity-80"
          >
            ← Back
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-container-padding">
        <div className="text-center">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-4">Settings</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Settings page coming soon. Site is still in beta!
          </p>
        </div>
      </main>

      <footer className="bg-transparent flex flex-col md:flex-row justify-center items-center gap-gutter py-8 w-full mt-auto">
        <div className="font-label-caps text-label-caps text-on-surface-variant opacity-80">
          relative v1.0
        </div>
      </footer>
    </div>
  );
}