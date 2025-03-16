import { cn } from "@/lib/cn";

import { Hello } from "./hello";

export function KtanCoverHello() {
  return (
    <div
      className={cn(
        "aspect-w-2 relative flex w-full border-x border-grid select-none aspect-h-1",
        "screen-line-before screen-line-after after:-bottom-px",
        "bg-zinc-950/0.75 bg-[image:radial-gradient(var(--pattern-foreground)_1px,_transparent_0)] bg-[size:8px_8px] [--pattern-foreground:var(--color-zinc-950)]/5 sm:bg-[size:10px_10px] dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
      )}
    >
      <Hello />
    </div>
  );
}
