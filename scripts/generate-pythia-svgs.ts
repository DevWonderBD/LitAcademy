import fs from "fs";
import path from "path";
import { VIEW, CENTER, RING_RADIUS, STEM_PATH, LEAVES, LEAF_PATH, SPARK_PATH } from "../src/components/pythia/geometry";

function renderBranch(wreathColor: string) {
  let out = `<path d="${STEM_PATH}" fill="none" stroke="${wreathColor}" stroke-width="0.8" stroke-linecap="round" />`;
  for (const leaf of LEAVES) {
    out += `<g transform="translate(${leaf.x} ${leaf.y}) rotate(${leaf.rotate})">
      <path d="${LEAF_PATH}" fill="${wreathColor}" />
    </g>`;
  }
  return out;
}

function generateSvg(variant: "filled" | "outline" | "mono") {
  const c = {
    filled: { disc: "#0F766E", ring: "none", wreath: "#EBC474", spark: "#FFFFFF" },
    outline: { disc: "none", ring: "#0F766E", wreath: "#B7791F", spark: "#0F766E" },
    mono: { disc: "none", ring: "currentColor", wreath: "currentColor", spark: "currentColor" },
  }[variant];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VIEW} ${VIEW}" width="100%" height="100%">
  ${variant === "filled" ? `<circle cx="${CENTER}" cy="${CENTER}" r="${RING_RADIUS}" fill="${c.disc}" />` : `<circle cx="${CENTER}" cy="${CENTER}" r="${RING_RADIUS - 0.75}" fill="none" stroke="${c.ring}" stroke-width="1.5" />`}
  
  <g>
    ${renderBranch(c.wreath)}
  </g>
  <g transform="translate(${VIEW} 0) scale(-1 1)">
    ${renderBranch(c.wreath)}
  </g>
  
  <path d="${SPARK_PATH}" fill="${c.spark}" />
</svg>`;

  return svg;
}

const dir = path.join(process.cwd(), "public/images");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

fs.writeFileSync(path.join(dir, "pythia-logo.svg"), generateSvg("filled"));
fs.writeFileSync(path.join(dir, "pythia-logo-outline.svg"), generateSvg("outline"));
fs.writeFileSync(path.join(dir, "pythia-logo-mono.svg"), generateSvg("mono"));

console.log("SVGs generated in public/images/");

