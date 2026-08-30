
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface font-body-md antialiased">
      <header className="bg-surface sticky top-0 w-full shadow-ambient-level-1 z-50 border-b border-surface-variant">
        <div className="flex justify-between items-center w-full px-container-padding max-w-[1200px] mx-auto h-touch-target-min">
          <div className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
            relative<span className="text-on-surface-variant font-light">/pitch</span>
          </div>
        </div>
      </header>

      
      <main className="flex-grow flex items-center justify-center p-container-padding relative overflow-hidden">
        
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-fixed-dim rounded-full blur-3xl opacity-20 -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-container rounded-full blur-3xl opacity-10 -z-10" />

        <div className="max-w-2xl w-full flex flex-col items-center text-center gap-12">
         
          <div className="relative w-64 h-64 flex items-center justify-center animate-float">
            <span
              className="material-symbols-outlined text-[160px] text-primary opacity-80"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              music_off
            </span>
            <span className="material-symbols-outlined absolute top-4 right-8 text-[32px] text-outline-variant -rotate-12">
              music_note
            </span>
            <span className="material-symbols-outlined absolute bottom-8 left-4 text-[48px] text-surface-variant rotate-12">
              music_note
            </span>
          </div>

       
          <div className="space-y-4">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary tracking-tight">
              Oops! We're facing a couple of problems right now. Nothing major!
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto">
              The page you're looking for has wandered off the staff. 
              We will be Bach soon ;)
            </p>
          </div>

       
          <Link
            to="/"
            className="bg-primary hover:bg-primary-container text-on-primary font-interactive text-interactive h-touch-target-min px-8 rounded-full shadow-[0px_4px_20px_rgba(59,130,246,0.15)] hover:-translate-y-0.5 transition-all duration-200 active:scale-95 flex items-center gap-2"
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              home
            </span>
            Back to the Game
          </Link>
        </div>
      </main>

      
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
    </div>
  );
}