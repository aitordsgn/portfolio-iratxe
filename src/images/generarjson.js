import fs from 'fs-extra';
import path from 'path';
import sharp from 'sharp';

// Ruta de la carpeta con las imágenes y el archivo JS de salida
const imagesDir = '.'; // El directorio actual
const outputJs = path.join(imagesDir, 'images.js');

// Función para obtener las dimensiones de una imagen
const getImageDimensions = async (filePath) => {
  const image = sharp(filePath);
  const metadata = await image.metadata();
  return {
    width: metadata.width,
    height: metadata.height,
  };
};

// Función principal para generar el JS
const generateJs = async () => {
  const images = [];

  // Leer todos los archivos en el directorio de imágenes
  const files = await fs.readdir(imagesDir);

  // Procesar cada archivo
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) {
      const filePath = path.join(imagesDir, file);
      const { width, height } = await getImageDimensions(filePath);
      
      images.push({
        src: `import('./images/${file}')`,
        alt: '', // Puedes modificar esto si tienes descripciones específicas
        width: width,
        height: height,
      });
    }
  }

  // Generar el contenido del archivo JS
  const jsContent = `export const images = ${JSON.stringify(images, null, 2).replace(/"import\(\'.\/images\//g, "import('./images/").replace(/'\)"/g, "')")};\n`;

  // Escribir el array de imágenes en un archivo JS
  await fs.writeFile(outputJs, jsContent);
  console.log(`Archivo JS generado en ${outputJs}`);
};

// Ejecutar la función
generateJs().catch(err => {
  console.error('Error generando el JS:', err);
});
