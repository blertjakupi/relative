// src/components/TopBar.tsx
interface TopBarProps {
  correct: number;
  wrong: number;
  accuracy: number;
  highScore: number;
}

export function TopBar({ correct, wrong, accuracy, highScore }: TopBarProps) {
  return (
    <header className="bg-surface sticky top-0 w-full shadow-ambient-level-1 z-50 border-b border-surface-variant">
      <div className="flex justify-between items-center w-full px-container-padding max-w-[1200px] mx-auto h-touch-target-min">
        
        <div className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
          relative<span className="text-on-surface-variant font-light">/pitch</span>
        </div>

        
        <div className="flex items-center gap-4 bg-surface-container-low px-4 py-2 rounded-full border border-surface-variant text-sm">
          <div className="flex items-center gap-1.5">
            <span className="text-secondary font-medium">✓ {correct}</span>
          </div>
          <div className="w-px h-4 bg-outline-variant" />
          <div className="flex items-center gap-1.5">
            <span className="text-error font-medium">✕ {wrong}</span>
          </div>
          <div className="w-px h-4 bg-outline-variant" />
          <div className="flex items-center gap-1.5 font-medium text-primary">
            {accuracy}%
          </div>
          <div className="w-px h-4 bg-outline-variant" />
          <div className="flex items-center gap-1.5 text-on-surface-variant">
            <span className="text-xs">🏆</span> {highScore}
          </div>
        </div>
      </div>
    </header>
  );
}