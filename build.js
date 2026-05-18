/**
 * build.js — Monta o index.html final a partir dos componentes modulares.
 * Uso: node build.js
 * 
 * Lê src/global/ e src/folds/ e gera o index.html de produção.
 */
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src');
const GLOBAL = path.join(SRC, 'global');
const FOLDS = path.join(SRC, 'folds');
const OUTPUT = path.join(__dirname, 'index.html');

const foldOrder = [
    '01-hero',
    '02-benefits',
    '03-coverages',
    '04-app-features',
    '05-social-proof',
    '06-evolution',
    '07-feedbacks',
    '08-app-loma',
    '09-faq',
    '10-footer'
];

function read(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}

console.log('🔨 Montando index.html...\n');

// 1. Read head template
let head = read(path.join(GLOBAL, 'head.html'));

// 2. Aggregate all CSS (global + each fold)
let allCSS = read(path.join(GLOBAL, 'global.css'));

for (const fold of foldOrder) {
    const cssName = fold.replace(/^\d+-/, '') + '.css';
    const cssFile = path.join(FOLDS, fold, cssName);
    if (fs.existsSync(cssFile)) {
        const css = read(cssFile).trim();
        if (css && css !== '/* CSS exclusivo desta dobra */') {
            allCSS += '\r\n\r\n' + css;
        }
    }
}

// 3. Inject CSS into head
head = head.replace('<!-- {{STYLES}} -->', `<style>\r\n${allCSS}\r\n    </style>`);

// 4. Aggregate fold HTML
let bodyContent = '';
for (const fold of foldOrder) {
    const htmlName = fold.replace(/^\d+-/, '') + '.html';
    const htmlFile = path.join(FOLDS, fold, htmlName);
    if (fs.existsSync(htmlFile)) {
        console.log(`  📦 ${fold}`);
        bodyContent += '\r\n' + read(htmlFile);
    }
}

// 5. Read scripts
const scripts = read(path.join(GLOBAL, 'scripts.html'));

// 6. Assemble final HTML
const finalHTML = head + '\r\n<body>\r\n' + bodyContent + '\r\n' + scripts + '\r\n</body>\r\n</html>\r\n';

// 7. Write output
fs.writeFileSync(OUTPUT, finalHTML, 'utf-8');

const sizeKB = (fs.statSync(OUTPUT).size / 1024).toFixed(1);
console.log(`\n✅ Build completo! index.html gerado (${sizeKB} KB)`);
