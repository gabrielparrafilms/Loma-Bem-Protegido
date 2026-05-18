/**
 * split.js — Extrai o index.html monolítico em componentes isolados por dobra.
 * Uso: node split.js
 * 
 * Gera a estrutura src/ com HTML e CSS separados por fold.
 * Este script é executado UMA VEZ para criar a estrutura inicial.
 */
const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
const lines = content.split(/\r?\n/);

function mkdirp(dir) { fs.mkdirSync(dir, { recursive: true }); }

function write(relPath, text) {
    const full = path.join(__dirname, relPath);
    mkdirp(path.dirname(full));
    fs.writeFileSync(full, text, 'utf-8');
    console.log(`  ✅ ${relPath}`);
}

// Helper: join line range (1-indexed, inclusive)
function range(start, end) {
    return lines.slice(start - 1, end).join('\r\n');
}

console.log('🔧 Extraindo componentes do index.html...\n');

// ========== HEAD ==========
// Lines 1-19 (before <style>) + lines 307-309 (after </style> to </head>)
const headContent = range(1, 19) + '\r\n\r\n    <!-- {{STYLES}} -->\r\n\r\n' + range(307, 309);
write('src/global/head.html', headContent);

// ========== GLOBAL CSS ==========
// Lines 21-200: root, body, font-geist, text-transparent-bg, glass-card, flashlight-card, btn-beam
// Lines 260-262: .will-change-transform
// Lines 275-304: Marquee animations (shared across folds)
const globalCSS = [
    '        /* ====================================================',
    '           GLOBAL — Design System Tokens & Shared Utilities',
    '           ==================================================== */',
    range(24, 200),
    '',
    range(260, 262),
    '',
    range(275, 304),
].join('\r\n');
write('src/global/global.css', globalCSS);

// ========== HERO CSS ==========
// Lines 202-258: video-container, video-mask, scroll-track, hero-content
// Lines 264-273: scroll-wheel animation
const heroCSS = [
    '        /* ====================================================',
    '           HERO — Estilos exclusivos da dobra Hero',
    '           ==================================================== */',
    range(202, 258),
    '',
    range(264, 273),
].join('\r\n');
write('src/folds/01-hero/hero.css', heroCSS);

// ========== FOLD HTML FILES ==========
write('src/folds/01-hero/hero.html', range(312, 430));
write('src/folds/02-benefits/benefits.html', range(432, 557));
write('src/folds/03-coverages/coverages.html', range(559, 659));
write('src/folds/04-app-features/app-features.html', range(661, 796));
write('src/folds/05-social-proof/social-proof.html', range(798, 831));
write('src/folds/06-evolution/evolution.html', range(833, 996));
write('src/folds/07-feedbacks/feedbacks.html', range(998, 1041));
write('src/folds/08-app-loma/app-loma.html', range(1043, 1132));
write('src/folds/09-faq/faq.html', range(1134, 1219));
write('src/folds/10-footer/footer.html', range(1221, 1287));

// ========== SCRIPTS ==========
write('src/global/scripts.html', range(1288, 1924));

// ========== EMPTY CSS FILES FOR REMAINING FOLDS ==========
const emptyFolds = [
    '02-benefits/benefits.css',
    '03-coverages/coverages.css',
    '04-app-features/app-features.css',
    '05-social-proof/social-proof.css',
    '06-evolution/evolution.css',
    '07-feedbacks/feedbacks.css',
    '08-app-loma/app-loma.css',
    '09-faq/faq.css',
    '10-footer/footer.css',
];
for (const f of emptyFolds) {
    write(`src/folds/${f}`, '/* CSS exclusivo desta dobra */\r\n');
}

console.log('\n🎉 Split completo! Estrutura src/ criada com sucesso.');
console.log('   Agora rode: node build.js');
