import { SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { cn } from "@/lib/cn";

import { WordmarkHoverEffect } from "./wordmark-hover-effect";

export function Footer() {
  return (
    <footer className="screen-line-before relative border-x border-grid pt-4 pb-[env(safe-area-inset-bottom,0px)]">
      <p className="mb-1 text-center font-mono text-sm text-balance text-muted-foreground">
        Inspired by tailwindcss.com.
      </p>

      <p className="mb-4 text-center font-mono text-sm text-balance text-muted-foreground">
        Built by{" "}
        <a
          className="link"
          href="https://x.com/ktan_wolf"
          target="_blank"
          rel="noopener noreferrer"
        >
          ktan-wolf
        </a>
        . The source code is available on{" "}
        <a
          className="link"
          href={SOURCE_CODE_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      

      
      <div
        className={cn(
          "screen-line-before relative",
          "[--pattern-foreground:var(--color-black)]/1 dark:[--pattern-foreground:var(--color-white)]/1",
          "bg-[image:repeating-linear-gradient(0deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_10px),repeating-linear-gradient(90deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_10px)]",
          "bg-[size:10px_10px] bg-[position:-1px_1px]"
        )}
      >
        <div className="relative z-1 -mx-px py-4">
          <WordmarkHoverEffect />
        </div>
      </div>
    </footer>
  );
}
