"use client";

/**
 * <PythiaLogo /> — the mark and the mood engine for Pythia, the AI guide.
 *
 * MOODS (what each one means in the product)
 * ┌───────────┬────────────────────────────────────────────┬─────────────────────────────────────────┐
 * │ mood      │ use it when                                │ what it does                            │
 * ├───────────┼────────────────────────────────────────────┼─────────────────────────────────────────┤
 * │ idle      │ nothing is happening                       │ spark breathes, soft glow               │
 * │ listening │ the student is typing / input is focused   │ spark leans in, ring pulses outward     │
 * │ thinking  │ waiting for / streaming an answer          │ spark spins, laurel lights up in a wave │
 * │ happy     │ correct answer, quiz passed, "thanks"      │ spark pops, sparkles burst, laurel glints│
 * │ unsure    │ not in the syllabus data, or an error      │ spark dims and shakes its head          │
 * └───────────┴────────────────────────────────────────────┴─────────────────────────────────────────┘
 * `happy` and `unsure` are one-shot: call `onMoodEnd` and set the mood back to "idle".
 *
 * VARIANTS
 *   filled   teal disc, gold laurel, white spark  → floating button, chat avatar, favicon
 *   outline  teal ring + spark, gold laurel       → light headers, empty states
 *   mono     everything currentColor              → any single-colour context
 *
 * HOVER: the laurel redraws itself (stems draw, leaves pop in one by one).
 * REDUCED MOTION: all loops and entrances are switched off; a static pose is shown.
 *
 * COLOURS come from CSS variables with fallbacks:
 *   --color-primary (#0F766E)  --color-accent (#B7791F)  --color-accent-light (#EBC474)
 *
 * EXAMPLES
 *   <PythiaLogo size={56} mood={streaming ? "thinking" : "idle"} title="Pythia" />
 *   <PythiaLogo size={28} variant="outline" animated={false} />
 *   <PythiaLogo mood="happy" onMoodEnd={() => setMood("idle")} />
 */

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  type TargetAndTransition,
  type Transition,
  type Variants,
} from "motion/react";
import {
  CENTER,
  LEAF_PATH,
  LEAVES,
  RING_RADIUS,
  SPARK_PATH,
  SPARKLES,
  STEM_PATH,
  VIEW,
} from "./geometry";

export type PythiaMood = "idle" | "listening" | "thinking" | "happy" | "unsure";
export type PythiaVariant = "filled" | "outline" | "mono";

export interface PythiaLogoProps {
  mood?: PythiaMood;
  variant?: PythiaVariant;
  /** pixel size (width = height) */
  size?: number;
  /** false = fully static (use for favicons, tiny sizes, print) */
  animated?: boolean;
  /** laurel draws itself on first render */
  drawOnMount?: boolean;
  /** accessible name; omit for decorative use (aria-hidden) */
  title?: string;
  className?: string;
  /** fired after a one-shot mood (happy / unsure) has played */
  onMoodEnd?: () => void;
  moodDurationMs?: number;
}

/* ---------- colours ---------- */

const COLORS = {
  filled: {
    disc: "var(--color-primary, #0F766E)",
    ring: "none",
    wreath: "var(--color-accent-light, #EBC474)",
    spark: "#FFFFFF",
  },
  outline: {
    disc: "none",
    ring: "var(--color-primary, #0F766E)",
    wreath: "var(--color-accent, #B7791F)",
    spark: "var(--color-primary, #0F766E)",
  },
  mono: {
    disc: "none",
    ring: "currentColor",
    wreath: "currentColor",
    spark: "currentColor",
  },
} as const;

/* ---------- mood definitions ---------- */

interface Anim {
  animate: TargetAndTransition;
  transition?: Transition;
}

const SPARK_MOOD: Record<PythiaMood, Anim> = {
  idle: {
    animate: { scale: [1, 1.07, 1], opacity: [0.92, 1, 0.92] },
    transition: { duration: 3.2, ease: "easeInOut", repeat: Infinity },
  },
  listening: {
    animate: { scale: 1.12, rotate: [0, 8, -4, 0] },
    transition: {
      scale: { duration: 0.35 },
      rotate: { duration: 2.6, ease: "easeInOut", repeat: Infinity },
    },
  },
  thinking: {
    animate: { rotate: [0, 360], scale: [1, 0.9, 1] },
    transition: {
      rotate: { duration: 2.4, ease: "linear", repeat: Infinity },
      scale: { duration: 1.2, ease: "easeInOut", repeat: Infinity },
    },
  },
  happy: {
    animate: { scale: [1, 1.4, 0.95, 1], rotate: [0, 90, 90, 90] },
    transition: { duration: 0.9, times: [0, 0.35, 0.7, 1], ease: "easeOut" },
  },
  unsure: {
    animate: { scale: 0.92, opacity: 0.65, rotate: [0, -10, 10, -6, 6, 0] },
    transition: {
      scale: { duration: 0.3 },
      opacity: { duration: 0.3 },
      rotate: { duration: 0.9, ease: "easeInOut" },
    },
  },
};

const GLOW_MOOD: Record<PythiaMood, Anim> = {
  idle: {
    animate: { opacity: [0.15, 0.4, 0.15], scale: [0.9, 1.1, 0.9] },
    transition: { duration: 3.2, ease: "easeInOut", repeat: Infinity },
  },
  listening: { animate: { opacity: 0.45, scale: 1.15 }, transition: { duration: 0.35 } },
  thinking: {
    animate: { opacity: [0.2, 0.55, 0.2] },
    transition: { duration: 1.2, ease: "easeInOut", repeat: Infinity },
  },
  happy: {
    animate: { opacity: [0, 0.8, 0.2], scale: [0.8, 1.6, 1] },
    transition: { duration: 0.9, times: [0, 0.35, 1], ease: "easeOut" },
  },
  unsure: { animate: { opacity: 0, scale: 0.9 }, transition: { duration: 0.3 } },
};

function leafMood(mood: PythiaMood, index: number): Anim {
  switch (mood) {
    case "thinking": // a wave of light climbs both branches
      return {
        animate: { opacity: [0.4, 1, 0.4] },
        transition: { duration: 1.6, ease: "easeInOut", repeat: Infinity, delay: index * 0.12 },
      };
    case "happy": // a quick glint
      return {
        animate: { opacity: [1, 0.55, 1] },
        transition: { duration: 0.5, delay: index * 0.05 },
      };
    case "unsure":
      return { animate: { opacity: 0.7 }, transition: { duration: 0.3 } };
    default:
      return { animate: { opacity: 1 }, transition: { duration: 0.3 } };
  }
}

/* ---------- laurel draw / hover variants ---------- */

const stemVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
  hover: { pathLength: [0, 1], opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const leafVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: 0.25 + i * 0.09, duration: 0.35, ease: "backOut" },
  }),
  hover: (i: number) => ({
    scale: [0.5, 1],
    opacity: [0.3, 1],
    transition: { delay: i * 0.07, duration: 0.35, ease: "easeOut" },
  }),
};

const FILL_BOX = { transformBox: "fill-box", transformOrigin: "center" } as const;

/* ---------- one laurel branch ---------- */

function Branch({
  wreath,
  mood,
  motionOn,
}: {
  wreath: string;
  mood: PythiaMood;
  motionOn: boolean;
}) {
  return (
    <g>
      <motion.path
        d={STEM_PATH}
        variants={stemVariants}
        fill="none"
        strokeWidth={0.8}
        strokeLinecap="round"
        style={{ stroke: wreath }}
      />
      {LEAVES.map((leaf) => {
        const m = motionOn ? leafMood(mood, leaf.id) : { animate: { opacity: 1 } };
        return (
          <g key={leaf.id} transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.rotate})`}>
            <motion.g
              variants={leafVariants}
              custom={leaf.id}
              style={{ transformBox: "fill-box", transformOrigin: "0% 50%" }}
            >
              <motion.path
                d={LEAF_PATH}
                style={{ fill: wreath }}
                animate={m.animate}
                transition={"transition" in m ? m.transition : undefined}
              />
            </motion.g>
          </g>
        );
      })}
    </g>
  );
}

/* ---------- the logo ---------- */

export default function PythiaLogo({
  mood = "idle",
  variant = "filled",
  size = 40,
  animated = true,
  drawOnMount = true,
  title,
  className,
  onMoodEnd,
  moodDurationMs = 1800,
}: PythiaLogoProps) {
  const reduced = useReducedMotion();
  const motionOn = animated && !reduced;
  const c = COLORS[variant];
  const uid = useId().replace(/:/g, "");
  const glowId = `pythia-glow-${uid}`;

  // keep the latest callback without restarting the timer on every parent render
  const endRef = useRef(onMoodEnd);
  useEffect(() => {
    endRef.current = onMoodEnd;
  }, [onMoodEnd]);

  useEffect(() => {
    if (!motionOn || (mood !== "happy" && mood !== "unsure")) return;
    const t = setTimeout(() => endRef.current?.(), moodDurationMs);
    return () => clearTimeout(t);
  }, [mood, motionOn, moodDurationMs]);

  const spark = SPARK_MOOD[mood];
  const glow = GLOW_MOOD[mood];
  const staticSpark = { scale: 1, rotate: 0, opacity: mood === "unsure" ? 0.65 : 1 };

  return (
    <motion.svg
      viewBox={`0 0 ${VIEW} ${VIEW}`}
      width={size}
      height={size}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
      initial={motionOn && drawOnMount ? "hidden" : "visible"}
      animate="visible"
      whileHover={motionOn ? "hover" : undefined}
    >
      {title ? <title>{title}</title> : null}

      <defs>
        <radialGradient id={glowId}>
          <stop offset="0%" style={{ stopColor: c.spark, stopOpacity: 0.9 }} />
          <stop offset="100%" style={{ stopColor: c.spark, stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      {/* disc or ring */}
      {variant === "filled" ? (
        <circle cx={CENTER} cy={CENTER} r={RING_RADIUS} style={{ fill: c.disc }} />
      ) : (
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RING_RADIUS - 0.75}
          fill="none"
          strokeWidth={1.5}
          style={{ stroke: c.ring }}
        />
      )}

      {/* laurel: left branch + mirrored right branch */}
      <Branch wreath={c.wreath} mood={mood} motionOn={motionOn} />
      <g transform={`translate(${VIEW} 0) scale(-1 1)`}>
        <Branch wreath={c.wreath} mood={mood} motionOn={motionOn} />
      </g>

      {/* glow behind the spark */}
      <motion.circle
        key={`glow-${mood}`}
        cx={CENTER}
        cy={CENTER}
        r={16}
        fill={`url(#${glowId})`}
        style={FILL_BOX}
        initial={false}
        animate={motionOn ? glow.animate : { opacity: 0.25, scale: 1 }}
        transition={motionOn ? glow.transition : { duration: 0 }}
      />

      {/* listening: a ring pulses outward */}
      {motionOn && mood === "listening" ? (
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={13}
          fill="none"
          strokeWidth={0.9}
          style={{ ...FILL_BOX, stroke: c.spark }}
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: [0.8, 1.7], opacity: [0.5, 0] }}
          transition={{ duration: 1.6, ease: "easeOut", repeat: Infinity }}
        />
      ) : null}

      {/* the spark. key = remount on mood change so every mood starts clean */}
      <motion.path
        key={`spark-${mood}`}
        d={SPARK_PATH}
        style={{ ...FILL_BOX, fill: c.spark }}
        initial={motionOn ? { scale: 1, rotate: 0, opacity: 1 } : false}
        animate={motionOn ? spark.animate : staticSpark}
        transition={motionOn ? spark.transition : { duration: 0 }}
      />

      {/* happy: sparkles burst in the open top of the wreath */}
      {motionOn && mood === "happy"
        ? SPARKLES.map((s, i) => (
            <g
              key={i}
              transform={`translate(${s.x} ${s.y}) scale(${s.s}) translate(${-CENTER} ${-CENTER})`}
            >
              <motion.path
                d={SPARK_PATH}
                style={{ ...FILL_BOX, fill: c.spark }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.3, 0], opacity: [0, 1, 0], y: [8, -6] }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: "easeOut" }}
              />
            </g>
          ))
        : null}
    </motion.svg>
  );
}

/* =====================================================================
 * Playground — drop on any dev page (e.g. app/dev/pythia/page.tsx) to
 * see every mood and variant, and a tiny chat simulation.
 * ===================================================================== */

const MOODS: { mood: PythiaMood; label: string; note: string }[] = [
  { mood: "idle", label: "Idle", note: "Breathing, waiting" },
  { mood: "listening", label: "Listening", note: "Student is typing" },
  { mood: "thinking", label: "Thinking", note: "Answer on the way" },
  { mood: "happy", label: "Happy", note: "Correct answer / thanks" },
  { mood: "unsure", label: "Unsure", note: "Not in the data / error" },
];

export function PythiaMoodPlayground() {
  const [mood, setMood] = useState<PythiaMood>("idle");
  const [text, setText] = useState("");
  const toIdle = useCallback(() => setMood("idle"), []);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const send = () => {
    if (!text.trim()) return;
    setText("");
    setMood("thinking");
    timers.current.push(setTimeout(() => setMood("happy"), 2000));
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8 p-6">
      <section className="flex flex-col items-center gap-3 rounded-lg border border-[#E0DFDC] bg-white p-8">
        <PythiaLogo size={120} mood={mood} onMoodEnd={toIdle} title={`Pythia is ${mood}`} />
        <p className="text-sm text-[#5E5E5E]">
          Current mood: <strong>{mood}</strong>
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {MOODS.map((m) => (
            <button
              key={m.mood}
              type="button"
              onClick={() => setMood(m.mood)}
              title={m.note}
              className={`rounded-full border px-3 py-1 text-sm ${
                mood === m.mood
                  ? "border-[#0F766E] bg-[#0F766E] text-white"
                  : "border-[#E0DFDC] bg-white text-[#191919]"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-[#E0DFDC] bg-white p-6">
        <h2 className="mb-3 text-sm font-medium">Chat simulation</h2>
        <div className="flex items-center gap-3">
          <PythiaLogo size={40} mood={mood} onMoodEnd={toIdle} />
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setMood(e.target.value ? "listening" : "idle");
            }}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type a question, press Enter"
            className="flex-1 rounded-md border border-[#E0DFDC] px-3 py-2 text-sm"
          />
        </div>
        <p className="mt-2 text-xs text-[#5E5E5E]">
          Typing → listening · Enter → thinking (2 s) → happy → idle
        </p>
      </section>

      <section className="grid grid-cols-3 gap-4 rounded-lg border border-[#E0DFDC] bg-white p-6 text-center text-sm">
        {(["filled", "outline", "mono"] as const).map((v) => (
          <div key={v} className="flex flex-col items-center gap-2 text-[#134E4A]">
            <PythiaLogo size={64} variant={v} mood={mood} onMoodEnd={toIdle} />
            <span>{v}</span>
          </div>
        ))}
      </section>

      <section className="flex items-end justify-center gap-6 rounded-lg border border-[#E0DFDC] bg-white p-6">
        {[24, 32, 40, 56, 80].map((s) => (
          <PythiaLogo key={s} size={s} animated={s > 24} />
        ))}
      </section>
    </div>
  );
}

