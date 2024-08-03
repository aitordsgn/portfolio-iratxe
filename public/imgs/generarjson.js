import fs from "fs-extra";
import path from "path";
import sharp from "sharp";

// Ruta de la carpeta con las imágenes y el archivo JSON de salida
const imagesDir = "."; // El directorio actual
const outputJson = path.join(imagesDir, "images.json");

// Función para obtener las dimensiones de una imagen
const getImageDimensions = async (filePath) => {
  const image = sharp(filePath);
  const metadata = await image.metadata();
  return {
    width: metadata.width,
    height: metadata.height,
  };
};

// Función para extraer el ID del nombre del archivo
const extractIdFromFilename = (filename) => {
  const match = filename.match(/img-(\d+)\./);
  return match ? parseInt(match[1], 10) : null;
};

// Función principal para generar el JSON
const generateJson = async () => {
  const images = [];

  // Leer todos los archivos en el directorio de imágenes
  const files = await fs.readdir(imagesDir);

  // Procesar cada archivo
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if ([".webp", ".jpg", ".png"].includes(ext)) {
      const filePath = path.join(imagesDir, file);
      const { width, height } = await getImageDimensions(filePath);

      // Extraer el ID del nombre del archivo
      const id = extractIdFromFilename(file);

      if (id !== null) {
        // Solo añadir si el ID se extrajo correctamente
        images.push({
          id: id, // Asigna el ID extraído
          src: filePath,
          alt: "", // Puedes modificar esto si tienes descripciones específicas
          width: width,
          height: height,
        });
      }
    }
  }

  // Ordenar el array de imágenes por ID de manera ascendente
  images.sort((a, b) => a.id - b.id);

  // Escribir el array de imágenes en un archivo JSON
  await fs.writeJson(outputJson, images, { spaces: 2 });
  console.log(`Archivo JSON generado en ${outputJson}`);
};

// Ejecutar la función
generateJson().catch((err) => {
  console.error("Error generando el JSON:", err);
});
