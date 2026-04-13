interface WaveDividerProps {
  /** CSS color value that the wave shape is filled with. Defaults to the cream color. */
  fillColor?: string;
  /**
   * When true, the wave is flipped vertically so it acts as a top-of-section
   * divider (the wave rises up from the element below rather than draping down).
   */
  flip?: boolean;
  /** Accessible label for screen readers. Can be left empty for decorative use. */
  ariaHidden?: boolean;
}

/**
 * WaveDivider
 *
 * A full-width organic SVG wave used between sections.
 * Pair it with a matching `fillColor` equal to the background of the section
 * that follows (or precedes, when flipped) so the transition is seamless.
 *
 * Usage examples:
 *   <WaveDivider fillColor="var(--color-cream)" />
 *   <WaveDivider fillColor="var(--color-teal-dark)" flip />
 */
export default function WaveDivider({
  fillColor = "var(--color-cream)",
  flip = false,
  ariaHidden = true,
}: WaveDividerProps) {
  return (
    <div
      className="wave-divider w-full leading-none overflow-hidden"
      aria-hidden={ariaHidden ? "true" : undefined}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      {/*
       * The path below is a single cubic-bezier wave drawn at a 1440×80
       * viewBox. Three control-point humps give it an organic, uneven feel
       * rather than a rigid sine wave. The path is deliberately asymmetric so
       * repeating sections never look machine-stamped.
       *
       * If you need a taller or shorter wave, adjust the `height` on the
       * `.wave-divider svg` rule in globals.css (default 80px).
       */}
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: "block", width: "calc(100% + 1.3px)", height: "80px" }}
      >
        <path
          d={[
            // Start at bottom-left corner
            "M0,80",
            // Rise up to first gentle crest near 15%
            "C120,80 160,18 280,32",
            // Dip to first trough around 35%
            "C360,44 380,60 480,48",
            // Broad organic hump through the middle — the tallest peak ~55%
            "C580,36 640,8 800,20",
            // Drift back down to second trough around 72%
            "C920,30 960,56 1080,44",
            // Final crest near 88% before meeting the right edge
            "C1180,34 1280,16 1440,28",
            // Close down to bottom-right corner
            "L1440,80",
            "Z",
          ].join(" ")}
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
