import { cn } from "@/lib/utils";

interface RocketLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { icon: 28, text: "text-base" },
  md: { icon: 32, text: "text-lg" },
  lg: { icon: 40, text: "text-xl" },
};

export function RocketLogo({
  className,
  showText = true,
  size = "md",
}: RocketLogoProps) {
  const { icon, text } = sizeMap[size];

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-xl bg-violet-500/30 blur-md" />
        <svg
          width={icon}
          height={icon}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="rocket-body" x1="8" y1="4" x2="32" y2="36">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="rocket-flame" x1="20" y1="28" x2="20" y2="40">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M20 4C20 4 10 14 10 24C10 27.3 12.7 30 16 30H24C27.3 30 30 27.3 30 24C30 14 20 4 20 4Z"
            fill="url(#rocket-body)"
          />
          <circle cx="20" cy="18" r="4" fill="#e2e8f0" fillOpacity="0.9" />
          <circle cx="20" cy="18" r="2.5" fill="#312e81" />
          <path
            d="M10 24L6 30C5 31.5 6 34 8 34H12L14 28"
            fill="#818cf8"
            fillOpacity="0.7"
          />
          <path
            d="M30 24L34 30C35 31.5 34 34 32 34H28L26 28"
            fill="#818cf8"
            fillOpacity="0.7"
          />
          <path
            d="M17 30H23L20 38L17 30Z"
            fill="url(#rocket-flame)"
          />
          <path
            d="M18.5 32H21.5L20 36L18.5 32Z"
            fill="#fbbf24"
            fillOpacity="0.8"
          />
        </svg>
      </div>
      {showText && (
        <span
          className={cn(
            "font-semibold tracking-tight text-slate-100",
            text
          )}
        >
          Intern<span className="text-violet-300">Pilot</span>
        </span>
      )}
    </div>
  );
}
