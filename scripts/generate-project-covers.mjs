import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const DATA_FILE = path.join(ROOT, 'src/features/project/projects.data.ts');
const OUTPUT_DIR = path.join(ROOT, 'public/images');

// One calm, brand-aligned theme for every cover (consistency reads as intentional,
// not generated). The card already carries the title/tags — the cover is a clean
// product shot of the real screenshots, nothing more.
const THEME = {
  bgTop: '#f6f1e8',
  bgBottom: '#ece3d3',
  glow: '#9a7b4f',
  surface: '#ffffff',
  panel: '#eee7da',
  panelLine: 'rgba(26,23,20,0.10)',
  phone: '#1a1714',
};

const MOBILE_SLUGS = new Set(['fitfast-app', 'claratalks', 'sighapp']);

function normalizeText(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function parseProjects() {
  const source = fs.readFileSync(DATA_FILE, 'utf8');
  const pattern =
    /slug: '([^']+)',\s*title: '([^']+)',\s*eyebrow: '([^']+)',[\s\S]*?image:\s*'([^']+)',\s*images:\s*\[([\s\S]*?)\],/g;

  const projects = [];
  let match;
  while ((match = pattern.exec(source))) {
    const [, slug, title, eyebrow, image, imagesBlock] = match;
    const images = [...imagesBlock.matchAll(/'([^']+)'/g)].map((item) => item[1]);
    projects.push({ slug, title, eyebrow, image, images });
  }
  return projects;
}

function publicImageToDataUri(src) {
  if (!src.startsWith('/images/')) return null;
  const absolute = path.join(OUTPUT_DIR, src.replace('/images/', ''));
  if (!fs.existsSync(absolute)) return null;
  const ext = path.extname(absolute).slice(1).toLowerCase();
  const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'webp' ? 'image/webp' : 'image/png';
  return `data:${mime};base64,${fs.readFileSync(absolute).toString('base64')}`;
}

function browserVisual(screenshot) {
  const x = 150;
  const y = 150;
  const w = 1300;
  const h = 700;
  const barH = 46;
  return `
    <g>
      <rect x="${x + 10}" y="${y + 18}" width="${w}" height="${h}" rx="22" fill="rgba(26,23,20,0.12)" />
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" fill="${THEME.surface}" stroke="${THEME.panelLine}" />
      <path d="M${x} ${y + 22} a22 22 0 0 1 22 -22 h${w - 44} a22 22 0 0 1 22 22 v${barH - 22} h-${w} Z" fill="${THEME.panel}" />
      <circle cx="${x + 28}" cy="${y + 23}" r="6" fill="#e2675f" />
      <circle cx="${x + 50}" cy="${y + 23}" r="6" fill="#e6b95c" />
      <circle cx="${x + 72}" cy="${y + 23}" r="6" fill="#8bc28a" />
      <rect x="${x + 110}" y="${y + 13}" width="${w - 230}" height="20" rx="10" fill="${THEME.surface}" stroke="${THEME.panelLine}" />
      <clipPath id="body"><rect x="${x + 1}" y="${y + barH}" width="${w - 2}" height="${h - barH - 1}" /></clipPath>
      <rect x="${x + 1}" y="${y + barH}" width="${w - 2}" height="${h - barH - 1}" fill="${THEME.panel}" />
      ${screenshot ? `<image href="${screenshot}" x="${x + 1}" y="${y + barH}" width="${w - 2}" height="${h - barH - 1}" preserveAspectRatio="xMidYMin slice" clip-path="url(#body)" />` : ''}
    </g>
  `;
}

function phone(screenshot, cx, cy, scale, rotate) {
  const w = 300 * scale;
  const h = 636 * scale;
  const x = cx - w / 2;
  const y = cy - h / 2;
  const pad = 12 * scale;
  const r = 40 * scale;
  return `
    <g transform="rotate(${rotate} ${cx} ${cy})">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${THEME.phone}" />
      <clipPath id="ph-${cx}-${cy}"><rect x="${x + pad}" y="${y + pad}" width="${w - pad * 2}" height="${h - pad * 2}" rx="${r - pad}" /></clipPath>
      <rect x="${x + pad}" y="${y + pad}" width="${w - pad * 2}" height="${h - pad * 2}" rx="${r - pad}" fill="${THEME.surface}" />
      ${screenshot ? `<image href="${screenshot}" x="${x + pad}" y="${y + pad}" width="${w - pad * 2}" height="${h - pad * 2}" preserveAspectRatio="xMidYMid slice" clip-path="url(#ph-${cx}-${cy})" />` : ''}
      <rect x="${cx - 34 * scale}" y="${y + pad}" width="${68 * scale}" height="${16 * scale}" rx="${8 * scale}" fill="${THEME.phone}" />
    </g>
  `;
}

function mobileVisual(screenshots) {
  const center = screenshots[0];
  const left = screenshots[1] || screenshots[0];
  const right = screenshots[2] || screenshots[1] || screenshots[0];
  return `
    ${phone(left, 410, 540, 0.82, -8)}
    ${phone(right, 1190, 540, 0.82, 8)}
    ${phone(center, 800, 500, 1, 0)}
  `;
}

function fallbackVisual() {
  return browserVisual(null);
}

function renderCover(project) {
  const screenshots = (project.images.length > 0 ? project.images : [project.image])
    .map(publicImageToDataUri)
    .filter(Boolean);

  const visual = MOBILE_SLUGS.has(project.slug)
    ? mobileVisual(screenshots)
    : screenshots.length > 0
      ? browserVisual(screenshots[0])
      : fallbackVisual();

  return `<svg width="1600" height="1000" viewBox="0 0 1600 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${THEME.bgTop}" />
      <stop offset="1" stop-color="${THEME.bgBottom}" />
    </linearGradient>
    <radialGradient id="glow" cx="0.2" cy="0.05" r="0.9">
      <stop offset="0" stop-color="${THEME.glow}" stop-opacity="0.16" />
      <stop offset="1" stop-color="${THEME.glow}" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="1600" height="1000" fill="url(#bg)" />
  <rect width="1600" height="1000" fill="url(#glow)" />
  ${visual}
</svg>`;
}

async function main() {
  const projects = parseProjects();
  for (const project of projects) {
    const svg = renderCover(project);
    // Rasterize to PNG: next/image won't optimize raw SVG without dangerouslyAllowSVG,
    // and a flat PNG avoids that and renders crisply on the cards.
    await sharp(Buffer.from(svg), { density: 144 })
      .resize(1600, 1000, { fit: 'cover' })
      .png({ compressionLevel: 9 })
      .toFile(path.join(OUTPUT_DIR, `${project.slug}_cover.png`));

    const legacySvg = path.join(OUTPUT_DIR, `${project.slug}_cover.svg`);
    if (fs.existsSync(legacySvg)) {
      fs.rmSync(legacySvg);
    }
  }
  console.log(`Generated ${projects.length} clean project covers (PNG)`);
}

main();
