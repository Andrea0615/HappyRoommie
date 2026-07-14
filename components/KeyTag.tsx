interface KeyTagProps {
  children: React.ReactNode;
  tone?: "ink" | "coral" | "sand";
  className?: string;
}

const TONE_STYLES: Record<NonNullable<KeyTagProps["tone"]>, string> = {
  ink: "bg-ink text-sand",
  coral: "bg-coral text-ink",
  sand: "bg-sand-dark text-ink",
};

/**
 * The page's signature visual motif: a rounded "key tag" shape (a nod to a
 * physical room key without being a literal real-estate cliché). Used to
 * hold step numbers, icons, and small badges throughout the page so the
 * whole experience reads as one cohesive system.
 */
export default function KeyTag({ children, tone = "ink", className = "" }: KeyTagProps) {
  return (
    <div
      className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-tag ${TONE_STYLES[tone]} ${className}`}
      aria-hidden="true"
    >
      <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-sand ring-4 ring-inherit" />
      <span className="text-lg font-display font-bold">{children}</span>
    </div>
  );
}
