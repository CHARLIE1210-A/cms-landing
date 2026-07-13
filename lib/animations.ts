import type { Variants } from 'framer-motion';

// ── Core easing curves ─────────────────────────────────────────────────────

export const EASE_OUT_EXPO  = [0.19, 1,    0.22, 1]    as const;
export const EASE_SPRING    = [0.175, 0.885, 0.32, 1.275] as const;
export const EASE_IN_OUT    = [0.4,  0,    0.2,  1]    as const;

// ── Base variants ──────────────────────────────────────────────────────────

/** Fade up from 20px — the workhorse entrance for most elements. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

/** Slower fade up — for hero headlines and large display text. */
export const fadeUpSlow: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

/** Plain fade — for elements that shouldn't move, just appear. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show:   {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_IN_OUT },
  },
};

/** Scale in from 96% — for cards, modals, feature images. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show:   {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_SPRING },
  },
};

/** Slide in from right — for images on alternating feature rows. */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show:   {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

/** Slide in from left — for text on alternating feature rows. */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show:   {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

// ── Stagger containers ─────────────────────────────────────────────────────

/**
 * Stagger parent — wraps a list of children so they animate in sequence.
 * Each child should use one of the base variants above.
 *
 * @param staggerDelay — seconds between each child (default 0.08s)
 * @param delayStart   — seconds to wait before first child (default 0)
 */
export function stagger(
  staggerDelay = 0.08,
  delayStart   = 0,
): Variants {
  return {
    hidden: {},
    show:   {
      transition: {
        staggerChildren:  staggerDelay,
        delayChildren:    delayStart,
      },
    },
  };
}

/** Pre-built stagger for card grids (slightly longer gap). */
export const staggerCards: Variants = {
  hidden: {},
  show:   {
    transition: {
      staggerChildren:  0.1,
      delayChildren:    0.1,
    },
  },
};

/** Pre-built stagger for nav links (very fast). */
export const staggerNav: Variants = {
  hidden: {},
  show:   {
    transition: {
      staggerChildren:  0.05,
      delayChildren:    0.2,
    },
  },
};

// ── Hero-specific ──────────────────────────────────────────────────────────

/**
 * Hero headline — large, weighted feel. Clips up from below.
 * For best effect, wrap each line in a <span style={{ overflow: 'hidden' }}>
 */
export const heroHeadline: Variants = {
  hidden: { opacity: 0, y: '100%' },
  show:   {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.9, ease: EASE_OUT_EXPO },
  },
};

/** Hero subtext — slightly delayed, softer entrance. */
export const heroSub: Variants = {
  hidden: { opacity: 0, y: 16 },
  show:   {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.2 },
  },
};

/** Hero CTA buttons — bouncy spring feel. */
export const heroCTA: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.97 },
  show:   {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_SPRING, delay: 0.35 },
  },
};

/** Hero image/mockup — floats in from right, slightly slower. */
export const heroImage: Variants = {
  hidden: { opacity: 0, x: 48, scale: 0.98 },
  show:   {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1.0, ease: EASE_OUT_EXPO, delay: 0.15 },
  },
};

// ── Counter animation ──────────────────────────────────────────────────────

/**
 * Not a Framer variant — a helper for the metrics strip count-up.
 * Use with useMotionValue + useTransform + animate().
 */
export const counterConfig = (duration = 1.2) => ({
  duration,
  ease: EASE_OUT_EXPO as unknown as string,
});

// ── Hover micro-interactions ──────────────────────────────────────────────

/** Lift on hover — for cards and buttons. */
export const liftOnHover = {
  whileHover: { y: -3, transition: { duration: 0.2, ease: EASE_OUT_EXPO } },
  whileTap:   { y: 0,  scale: 0.98 },
};

/** Gentle scale on hover — for icon containers. */
export const scaleOnHover = {
  whileHover: { scale: 1.05, transition: { duration: 0.2, ease: EASE_SPRING } },
  whileTap:   { scale: 0.97 },
};
