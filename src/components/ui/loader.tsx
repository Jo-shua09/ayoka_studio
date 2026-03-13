import * as React from "react";
import { cn } from "@/lib/utils";

const loaderVariants = {
  default: "w-16 h-16",
  sm: "w-10 h-10",
  lg: "w-20 h-20",
  xl: "w-24 h-24",
} as const;

const Loader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    size?: keyof typeof loaderVariants;
    overlay?: boolean;
  }
>(({ className, size = "default", overlay = false, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center",
        overlay && "fixed inset-0 z-50 flex bg-background/80 backdrop-blur-sm",
        "min-h-screen md:min-h-[80vh]",
        className,
      )}
      {...props}
    >
      <div className={cn("relative", loaderVariants[size])}>
        {/* Outer Ring */}
        <div
          className={cn("absolute inset-0 rounded-full border-4 border-primary/20", "animate-spin-slow")}
          style={{
            borderImage: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent))) 1",
          }}
        />
        {/* Inner Ring */}
        <div
          className={cn(
            "absolute inset-2 rounded-full bg-gradient-to-r from-primary via-accent to-primary/50",
            "animate-spin-reverse animate-pulse",
            "shadow-[0_0_20px_hsl(var(--primary)/0.5)]",
          )}
        />
        {/* Center Glow */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/60 via-transparent to-accent/60 animate-ping"
          style={{ animationDuration: "2s" }}
        />
      </div>
    </div>
  );
});
Loader.displayName = "Loader";

export { Loader };

export function LoaderDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-slate-900/20 to-foreground/10 flex flex-col items-center justify-center p-8">
      <div className="space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-heading font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Professional Loader
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto body-md">
            Cinematic dual-ring loader matching Ayoka Films aesthetic with gradients, glows, and smooth animations.
          </p>
        </div>

        {/* Full Overlay Loader */}
        <div className="space-y-4">
          <div className="h-32 rounded-lg card-elevated flex items-center justify-center">
            <Loader size="lg" overlay={false} />
          </div>

          {/* Inline variants */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Loader size="default" />
            <Loader size="sm" />
            <Loader size="lg" />
            <Loader size="xl" />
          </div>

          {/* Overlay demo trigger */}
          <button
            className="btn-primary"
            onClick={() => {
              const overlay = document.getElementById("overlay-loader");
              if (overlay) {
                overlay.classList.toggle("hidden");
              }
            }}
          >
            Toggle Full Overlay Loader
          </button>
        </div>

        <Loader id="overlay-loader" size="xl" overlay={true} className="hidden" />
      </div>
    </div>
  );
}
