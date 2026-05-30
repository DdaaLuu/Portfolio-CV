import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas } from 'canvas';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const filesDir = path.join(root, 'public', 'files');
const outBase = path.join(root, 'public', 'images', 'extracted');

const pdfs = [
  { id: 'bt1', file: 'BT1_Chuong1_LuuDucAnh.pdf' },
  { id: 'bt2', file: 'BT2_Chuong2_LuuDucAnh.pdf' },
  { id: 'bt3', file: 'BT2_Chuong3_LuuDucAnh.pdf' },
  { id: 'bt4', file: 'BT3_Chuong4_LuuDucAnh.pdf' },
  { id: 'bt5', file: 'BT2_Chuong5_LuuDucAnh.pdf' },
  { id: 'bt6', file: 'BT4_Chuong6_LuuDucAnh.pdf' },
];

async function renderPdfPages(pdfPath, outDir, scale = 1.25) {
  fs.mkdirSync(outDir, { recursive: true });
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await getDocument({ data, useSystemFonts: true }).promise;
  const saved = [];

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale });
    const canvas = createCanvas(viewport.width, viewport.height);
    const ctx = canvas.getContext('2d');
    await page.render({ canvasContext: ctx, viewport }).promise;

    const name = `page-${String(pageNum).padStart(2, '0')}.png`;
    fs.writeFileSync(path.join(outDir, name), canvas.toBuffer('image/png'));
    saved.push(name);
  }

  return saved;
}

for (const { id, file } of pdfs) {
  const outDir = path.join(outBase, id, 'pages');
  try {
    const saved = await renderPdfPages(path.join(filesDir, file), outDir);
    console.log(`${id}: ${saved.length} pages rendered`);
  } catch (err) {
    console.error(`${id}: failed -`, err.message);
  }
}
