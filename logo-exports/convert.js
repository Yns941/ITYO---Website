const sharp = require('sharp');
const fs = require('fs');

const files = [
  { in: 'logo-icon.svg',    out: 'logo-icon-512.png',    w: 512,  h: 512  },
  { in: 'logo-icon.svg',    out: 'logo-icon-256.png',    w: 256,  h: 256  },
  { in: 'logo-icon.svg',    out: 'logo-icon-192.png',    w: 192,  h: 192  },
  { in: 'logo-icon.svg',    out: 'logo-icon-64.png',     w: 64,   h: 64   },
  { in: 'logo-icon.svg',    out: 'favicon-32.png',       w: 32,   h: 32   },
  { in: 'logo-icon.svg',    out: 'favicon-16.png',       w: 16,   h: 16   },
  { in: 'logo-full.svg',    out: 'logo-full-800.png',    w: 800,  h: 210  },
  { in: 'logo-full.svg',    out: 'logo-full-400.png',    w: 400,  h: 105  },
  { in: 'logo-dark-bg.svg', out: 'logo-dark-800.png',    w: 800,  h: 210  },
];

(async () => {
  for (const f of files) {
    const svg = fs.readFileSync(f.in);
    await sharp(svg)
      .resize(f.w, f.h)
      .png()
      .toFile(f.out);
    console.log('✓', f.out);
  }
})();
