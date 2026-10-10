/**
 * Pythia logo geometry — pure functions, no React.
 * Shared by <PythiaLogo /> and the static SVG export so both always match.
 *
 * Canvas: 64 × 64. Centre (32, 32).
 * Mark: a four-point spark inside an open laurel wreath (open at the top).
 * Only the LEFT branch is computed; the right branch is a mirror image.
 */

export const VIEW = 64;
export const CENTER = 32;
export const RING_RADIUS = 30;

const WREATH_RADIUS = 21;
const START_DEG = 100; // just left of the bottom
const END_DEG = 238; // stopped earlier to leave a clear gap at the top
const SIDE_LEAVES = 8;

const rad = (deg: number) => (deg * Math.PI) / 180;
const round = (n: number) => Number(n.toFixed(2));
const onCircle = (deg: number) => ({
  x: CENTER + WREATH_RADIUS * Math.cos(rad(deg)),
  y: CENTER + WREATH_RADIUS * Math.sin(rad(deg)),
});

/** Stem of one branch: an arc, drawn clockwise from bottom to upper left. */
export const STEM_PATH = (() => {
  const a = onCircle(START_DEG);
  const b = onCircle(END_DEG);
  return `M${round(a.x)} ${round(a.y)} A${WREATH_RADIUS} ${WREATH_RADIUS} 0 0 1 ${round(b.x)} ${round(b.y)}`;
})();

export interface Leaf {
  id: number;
  x: number;
  y: number;
  /** degrees; leaves alternate outward / inward of the stem */
  rotate: number;
}

export const LEAVES: Leaf[] = (() => {
  const leaves: Leaf[] = [];
  for (let i = 0; i < SIDE_LEAVES; i++) {
    const t = i / (SIDE_LEAVES - 1);
    const deg = START_DEG + 4 + t * (END_DEG - START_DEG - 20);
    const p = onCircle(deg);
    const tangent = deg + 90; // direction of travel along the arc
    const side = i % 2 === 0 ? -1 : 1; // alternate outward / inward
    leaves.push({ id: i, x: round(p.x), y: round(p.y), rotate: round(tangent + side * 42) });
  }
  
  // Add a leaf exactly at the tip
  const tipDeg = END_DEG;
  const tipP = onCircle(tipDeg);
  const tipTangent = tipDeg + 90;
  // Tilt the tip leaf slightly upwards, halfway between the inward tilt and vertical
  leaves.push({ id: SIDE_LEAVES, x: round(tipP.x), y: round(tipP.y), rotate: round(tipTangent - 22) });
  
  return leaves;
})();

/** One leaf, base at (0,0), pointing along +x. */
export const LEAF_PATH = "M0 0C2 -2.7 6 -2.7 8.2 0C6 2.7 2 2.7 0 0Z";

/** Four-point spark, tips 13 units from the centre. */
export const SPARK_PATH =
  "M32 19C33.26 26.62 37.38 30.74 45 32C37.38 33.26 33.26 37.38 32 45C30.74 37.38 26.62 33.26 19 32C26.62 30.74 30.74 26.62 32 19Z";

/** Small sparkles that pop in the open top of the wreath (happy mood). */
export const SPARKLES = [
  { x: 32, y: 9.5, s: 0.3 },
  { x: 22.5, y: 13, s: 0.2 },
  { x: 41.5, y: 13, s: 0.2 },
] as const;

