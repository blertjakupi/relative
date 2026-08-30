interface TopBarProps {
  correct: number;
  wrong: number;
  accuracy: number;
  highScore: number;
}

export function TopBar({
  correct,
  wrong,
  accuracy,
  highScore,
}: TopBarProps) {
  return (
    <header className="bg-surface sticky top-0 w-full shadow-ambient-level-1 z-50 border-b border-surface-variant">
      <div className="flex justify-between items-center w-full px-container-padding max-w-[1200px] mx-auto h-touch-target-min">

        <div className="font-headline-md text-headline-md font-bold text-primary tracking-tight shrink-0">
          relative
          <span className="text-on-surface-variant font-light">/pitch</span>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4 bg-surface-container-low px-3 sm:px-4 py-2 rounded-full border border-surface-variant text-sm shrink-0"> 
          <span className="text-secondary font-medium">
            ✓ {correct}
          </span>

          <div className="w-px h-4 bg-outline-variant" />
          
          <span className="text-error font-medium">
            ✕ {wrong}
          </span>

          <div className="w-px h-4 bg-outline-variant" />
          
          <span className="font-medium text-primary">
            {accuracy}%
          </span>
          <div className="w-px h-4 bg-outline-variant" />
          <span className="flex items-center gap-1 text-on-surface-variant font-medium">
            <span className="hidden sm:inline text-xs">🏆</span>
            <span>{highScore}</span>
          </span>
        </div>
      </div>
    </header>
  );
}