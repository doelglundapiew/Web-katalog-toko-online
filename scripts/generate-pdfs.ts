import fs from 'fs';
import path from 'path';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

// Ensure directories exist
const publicPdfDir = path.resolve('./public/assets/pdf');
const assetsPdfDir = path.resolve('./assets/pdf');
fs.mkdirSync(publicPdfDir, { recursive: true });
fs.mkdirSync(assetsPdfDir, { recursive: true });

function generateLuckyPdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Header
  // Logo placeholder box / text
  doc.setFillColor(30, 64, 175);
  doc.roundedRect(14, 10, 16, 12, 2, 2, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('69', 22, 18, { align: 'center' });

  // Company Name & Subtitle
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('CV. KARYA MANDIRI MAJU', 34, 15);

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.text('Metal Works - Sliding & Folding Door Tracks - General Trade - Etc', 34, 19.5);
  doc.setFontSize(7.5);
  doc.text('Jl. Semangka II No.1-3 Jakarta Barat 11450 Phone : (021) 56968695 Fax: (021) 56968695', 34, 23.5);

  // Line
  doc.setDrawColor(30, 30, 30);
  doc.setLineWidth(0.5);
  doc.line(14, 26, 196, 26);

  // Title
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('DAFTAR HARGA', 105, 32, { align: 'center' });
  doc.setFontSize(11);
  doc.text('KOMPONEN REL PINTU GARASI 69', 105, 37, { align: 'center' });

  const luckyData = [
    ['1', 'REL ATAS 2,9M', '713.550', '861.600', ''],
    ['2', 'REL ATAS 2,3M', '576.650', '704.600', ''],
    ['3', 'REL ATAS 1,45', '410.350', '489.800', ''],
    ['4', 'REL BAWAH 3M', '397.500', '397.500', ''],
    ['5', 'REL BAWAH 2,4M', '347.300', '347.300', ''],
    ['6', 'REL BAWAH 1,5M', '230.000', '230.000', ''],
    ['7', 'REL TIKUNG / SET R60"', '', '979.900', ''],
    ['8', 'REL TIKUNG ATAS', '', '877.500', ''],
    ['9', 'REL TIKUNG BAWAH', '', '652.500', ''],
    ['10', 'REL TIKUNG / SET R30"', '1.025.800', '', ''],
    ['11', 'RODA ATAS TENGAH RD4', '331.700', '420.600', '775.200'],
    ['12', 'RODA ATAS TENGAH "L"', '261.800', '328.800', ''],
    ['13', 'RODA ATAS TENGAH', '250.200', '305.200', '406.500'],
    ['14', 'ENGSEL TENGAH', '124.990', '140.500', '199.500'],
    ['15', 'RODA BAWAH TENGAH', '175.050', '228.300', '260.800'],
    ['16', 'RODA ATAS LIPAT TENGAH RD4', '372.300', '646.300', ''],
    ['17', 'RODA ATAS LIPAT TENGAH RD2', '278.900', '490.100', ''],
    ['18', 'RODA BAWAH LIPAT TENGAH', '172.200', '172.200', ''],
    ['19', 'RODA ATAS PINGGIR "L"', '238.900', '278.600', ''],
    ['20', 'RODA ATAS PINGGIR', '219.900', '254.900', '397.500'],
    ['21', 'RODA BAWAH PINGGIR', '148.800', '186.100', '257.700'],
    ['22', 'RODA ATAS LIPAT PINGGIR RD4', '420.230', '639.500', ''],
    ['23', 'RODA ATAS LIPAT PINGGIR RD2', '320.600', '475.800', ''],
    ['24', 'RODA BAWAH LIPAT PINGGIR', '177.900', '177.900', ''],
    ['25', 'BRECKET SAMPING', '113.500', '128.200', ''],
    ['26', 'BRECKET SAMBUNG', '', '140.500', ''],
    ['27', 'BRECKET GANTUNG', '122.900', '161.300', ''],
    ['28', 'STOPPER SLIDING + TUTUP', '', '129.900', ''],
    ['29', 'STOPER SLIDING', '102.800', '', ''],
    ['30', "HANDLE 'PC'", '130.425', '130.425', ''],
    ['31', 'HANDLE ASBAK', '113.900', '113.900', ''],
    ['32', 'GRENDEL TANAM BERODA', '149.200', '149.200', ''],
    ['33', 'GRENDEL TANAM BIASA', '126.200', '126.200', ''],
    ['34', 'GRENDEL ATAS UK;75CM', '195.500', '195.500', ''],
    ['35', 'GRENDEL ATAS UK;100CM', '266.800', '266.800', ''],
    ['36', 'BAUT BRECKET', '16.800', '16.800', '']
  ];

  autoTable(doc, {
    startY: 40,
    head: [['NO', 'NAMA BARANG', '39', '69', '99']],
    body: luckyData,
    theme: 'grid',
    styles: {
      fontSize: 7.2,
      cellPadding: 1.1,
      textColor: [20, 20, 20],
      lineColor: [40, 40, 40],
      lineWidth: 0.2
    },
    headStyles: {
      fillColor: [240, 240, 240],
      textColor: [0, 0, 0],
      fontStyle: 'bold',
      halign: 'center'
    },
    columnStyles: {
      0: { halign: 'center', cellWidth: 10 },
      1: { halign: 'left', cellWidth: 90 },
      2: { halign: 'right', cellWidth: 28 },
      3: { halign: 'right', cellWidth: 28 },
      4: { halign: 'right', cellWidth: 28 }
    },
    margin: { left: 14, right: 14 }
  });

  const finalY = (doc as any).lastAutoTable.finalY || 260;

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('* Harga Dapat Berubah Tanpa Pemberitahuan terlebih dahulu', 16, finalY + 5);
  doc.setFont('helvetica', 'bold');
  doc.text('* BERLAKU 05 AGUSTUS 2026', 16, finalY + 9);

  return doc;
}

function generateWinaPdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Header Logo
  doc.setFillColor(37, 99, 235);
  doc.roundedRect(14, 10, 24, 12, 6, 6, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('WINA', 26, 17.5, { align: 'center' });

  // Company Info
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(15);
  doc.setFont('helvetica', 'bold');
  doc.text('PT. KARYA MANDIRI SEPAKAT', 42, 15);

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.text('Metal Works - Sliding & Folding Door Tracks - General Trade - Etc', 42, 19.5);

  // Line
  doc.setDrawColor(30, 30, 30);
  doc.setLineWidth(0.5);
  doc.line(14, 25, 196, 25);

  // Title
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('DAFTAR HARGA', 105, 30, { align: 'center' });
  doc.setFontSize(11);
  doc.text('KOMPONEN REL PINTU GARASI "WINA"', 105, 35, { align: 'center' });

  const winaData = [
    ['1', 'REL ATAS 3,9M', '', '', '', '1.397.490'],
    ['2', 'REL ATAS 2,9M', '750.360', '912.975', '912.975', '1.003.440'],
    ['3', 'REL ATAS 2,3M', '621.045', '757.575', '757.575', '815.295'],
    ['4', 'REL ATAS 2,M', '', '667.110', '667.110', '711.510'],
    ['5', 'REL ATAS 1,45', '434.010', '498.945', '498.945', '563.325'],
    ['6', 'REL BAWAH 3M', '452.880', '452.880', '452.880', '452.880'],
    ['7', 'REL BAWAH 2,4M', '434.010', '434.010', '434.010', '434.010'],
    ['8', 'REL BAWAH 2,1M', '382.395', '382.395', '382.395', '382.395'],
    ['9', 'REL BAWAH 1,5M', '245.865', '245.865', '245.865', '245.865'],
    ['10', 'REL BAWAH 1,2M', '233.100', '233.100', '233.100', '233.100'],
    ['11', 'REL TIKUNG / SET R60"', '', '1.067.820', '1.067.820', '1.125.540'],
    ['12', 'REL TIKUNG ATAS', '', '933.510', '933.510', '1.042.290'],
    ['13', 'REL TIKUNG BAWAH', '', '802.530', '802.530', '802.530'],
    ['14', 'REL TIKUNG / SET R30"', '1.112.775', '', '', ''],
    ['15', 'RODA ATAS TENGAH RD4 "L"', '482.295', '599.400', '809.190', '932.955'],
    ['16', 'RODA ATAS TENGAH RD4', '444.555', '537.795', '765.900', '853.035'],
    ['17', 'RODA ATAS TENGAH "L"', '321.345', '389.610', '463.425', '587.190'],
    ['18', 'RODA ATAS TENGAH', '278.610', '328.005', '414.030', '500.610'],
    ['19', 'RODA BAWAH TENGAH', '209.790', '259.185', '283.605', '333.000'],
    ['20', 'ENGSEL TENGAH', '130.425', '154.845', '185.925', '235.320'],
    ['21', 'RODA ATAS LIPAT TENGAH RD4', '463.425', '754.245', '754.245', '754.245'],
    ['22', 'RODA ATAS LIPAT TENGAH RD2', '303.030', '531.690', '531.690', '531.690'],
    ['23', 'RODA BAWAH LIPAT TENGAH', '197.580', '197.580', '197.580', '197.580'],
    ['24', 'RODA ATAS PINGGIR "L"', '309.690', '334.110', '432.900', '518.925'],
    ['25', 'RODA ATAS PINGGIR', '265.845', '278.610', '383.505', '444.555'],
    ['26', 'RODA BAWAH PINGGIR', '197.580', '209.790', '278.055', '345.765'],
    ['27', 'RODA ATAS LIPAT PINGGIR RD4', '482.295', '784.770', '784.770', '784.770'],
    ['28', 'RODA ATAS LIPAT PINGGIR RD2', '359.085', '537.795', '537.795', '537.795'],
    ['29', 'RODA BAWAH LIPAT PINGGIR', '228.660', '228.660', '228.660', '321.345'],
    ['30', 'ENGSEL KUPU KUPU', '278.055', '278.055', '278.055', '278.055'],
    ['31', 'ENGSEL STANLISH 4"/psg', '222.555', '222.555', '222.555', '222.555'],
    ['32', 'ENGSEL STANLISH 2"/psg', '117.660', '117.660', '117.660', '117.660'],
    ['33', 'BRECKET SAMPING', '136.530', '167.055', '167.055', '167.055'],
    ['34', 'BRECKET SAMBUNG', '', '185.925', '185.925', '185.925'],
    ['35', 'BRECKET GANTUNG', '154.845', '197.580', '197.580', '197.580'],
    ['36', 'TUTUP STOPPER', '', '105.450', '105.450', '105.450'],
    ['37', 'STOPPER SLIDING', '117.660', '123.765', '123.765', '123.765'],
    ['38', 'KUNCI WINA PINTU KAYU', '599.400', '599.400', '599.400', '599.400'],
    ['39', "HANDLE 'NCB'/MINIMALIS", '618.270', '618.270', '618.270', '618.270'],
    ['40', "HANDLE 'PC'", '148.185', '148.185', '148.185', '148.185'],
    ['41', 'HANDLE ASBAK', '123.765', '123.765', '123.765', '123.765'],
    ['42', 'GRENDEL TANAM BERODA', '197.580', '197.580', '246.975', '246.975'],
    ['43', 'GRENDEL TANAM BIASA', '154.845', '154.845', '192.030', '192.030'],
    ['44', 'GRENDEL ATAS UK;75CM', '278.610', '278.610', '345.765', '345.765'],
    ['45', 'GRENDEL ATAS UK;100CM', '370.740', '370.740', '463.425', '463.425'],
    ['46', 'GRENDEL STANLISH UK;15CM', '383.505', '383.505', '383.505', '383.505'],
    ['47', 'PIVOT', '', '', '', ''],
    ['48', 'BAUT BRECKET', '16.800', '16.800', '16.800', '16.800']
  ];

  autoTable(doc, {
    startY: 38,
    head: [['NO', 'NAMA BARANG', 'W-300', 'W-500/80', 'W-500/100', 'W-600']],
    body: winaData,
    theme: 'grid',
    styles: {
      fontSize: 6.2,
      cellPadding: 0.85,
      textColor: [20, 20, 20],
      lineColor: [40, 40, 40],
      lineWidth: 0.2
    },
    headStyles: {
      fillColor: [240, 240, 240],
      textColor: [0, 0, 0],
      fontStyle: 'bold',
      halign: 'center'
    },
    columnStyles: {
      0: { halign: 'center', cellWidth: 8 },
      1: { halign: 'left', cellWidth: 66 },
      2: { halign: 'right', cellWidth: 26 },
      3: { halign: 'right', cellWidth: 26 },
      4: { halign: 'right', cellWidth: 26 },
      5: { halign: 'right', cellWidth: 26 }
    },
    margin: { left: 14, right: 14 }
  });

  const finalY = (doc as any).lastAutoTable.finalY || 268;

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text('* BERLAKU 21 JULI 2026', 16, Math.min(finalY + 4, 287));

  return doc;
}

const luckyDoc = generateLuckyPdf();
const luckyBuffer = Buffer.from(luckyDoc.output('arraybuffer'));
fs.writeFileSync(path.join(publicPdfDir, 'PRICELIST-LUCKY-2026.pdf'), luckyBuffer);
fs.writeFileSync(path.join(assetsPdfDir, 'PRICELIST-LUCKY-2026.pdf'), luckyBuffer);

const winaDoc = generateWinaPdf();
const winaBuffer = Buffer.from(winaDoc.output('arraybuffer'));
fs.writeFileSync(path.join(publicPdfDir, 'PRICE-LIST-WINA-2026.pdf'), winaBuffer);
fs.writeFileSync(path.join(assetsPdfDir, 'PRICE-LIST-WINA-2026.pdf'), winaBuffer);

console.log('PDFs generated successfully in public/assets/pdf and assets/pdf');
