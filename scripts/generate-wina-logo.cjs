const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Create authentic, ultra-smooth WINA SVG vector with generous breathing room
const winaSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="60 60 720 330" width="720" height="330" fill="none">
  <!-- Official WINA Logo Vector with Transparent Background -->
  <!-- Outer Blue Barrel Container: Perfectly smooth continuous cubic bezier curves -->
  <path d="M 175 105 
           C 275 88, 525 88, 625 105 
           C 685 130, 705 180, 705 225 
           C 705 270, 685 320, 625 345 
           C 525 362, 275 362, 175 345 
           C 115 320, 95 270, 95 225 
           C 95 180, 115 130, 175 105 Z" 
        fill="#073B9E" />

  <!-- Inner Pure White Ellipse -->
  <ellipse cx="400" cy="225" rx="235" ry="112" fill="#FFFFFF" />

  <!-- Wordmark "WINA" (Corporate Blue #073B9E, Centered in Ellipse) -->
  <g transform="skewX(-13) translate(31, 0)">
    <!-- W -->
    <path d="M 232 165 L 260 285 L 286 285 L 308 212 L 328 285 L 354 285 L 382 165 L 350 165 L 338 245 L 318 165 L 296 165 L 276 245 L 264 165 Z" fill="#073B9E" />
    
    <!-- I with signature notch cut -->
    <path d="M 396 165 L 420 165 L 420 285 L 396 285 Z" fill="#073B9E" />
    <!-- White notch / slit across the middle of I -->
    <polygon points="392,221 408,221 402,231 392,231" fill="#FFFFFF" />

    <!-- N -->
    <path d="M 434 165 L 458 165 L 458 240 L 492 165 L 518 165 L 518 285 L 494 285 L 494 210 L 460 285 L 434 285 Z" fill="#073B9E" />

    <!-- A -->
    <path d="M 548 165 L 576 165 L 610 285 L 584 285 L 576 256 L 544 256 L 536 285 L 512 285 Z 
             M 552 232 L 568 232 L 560 198 Z" fill="#073B9E" />
  </g>

  <!-- Registered Trademark (R) Symbol -->
  <g transform="translate(720, 98)" stroke="#073B9E" stroke-width="3" fill="none">
    <circle cx="14" cy="14" r="12" />
    <text x="14" y="19" fill="#073B9E" stroke="none" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="14" text-anchor="middle">R</text>
  </g>
</svg>`;

async function main() {
  const publicLogosDir = path.join(__dirname, '..', 'public', 'assets', 'images', 'logos');
  const distLogosDir = path.join(__dirname, '..', 'dist', 'assets', 'images', 'logos');
  fs.mkdirSync(publicLogosDir, { recursive: true });
  fs.mkdirSync(distLogosDir, { recursive: true });

  const svgPathPublic = path.join(publicLogosDir, 'wina-logo.svg');
  const svgPathDist = path.join(distLogosDir, 'wina-logo.svg');
  fs.writeFileSync(svgPathPublic, winaSvg);
  fs.writeFileSync(svgPathDist, winaSvg);

  // Convert SVG to ultra-crisp transparent WebP at 2x resolution (1440x660) using sharp
  const webpBuffer = await sharp(Buffer.from(winaSvg), { density: 150 })
    .webp({ quality: 100, lossless: true, alphaQuality: 100 })
    .toBuffer();

  const webpPathPublic = path.join(publicLogosDir, 'wina-logo.webp');
  const webpPathDist = path.join(distLogosDir, 'wina-logo.webp');
  fs.writeFileSync(webpPathPublic, webpBuffer);
  fs.writeFileSync(webpPathDist, webpBuffer);
  console.log('Saved WebP (public & dist):', webpBuffer.length, 'bytes');

  const meta = await sharp(webpBuffer).metadata();
  console.log('WebP Dimensions:', meta.width, 'x', meta.height, 'hasAlpha:', meta.hasAlpha);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
