export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("es-ES", {
    timeZone: "UTC",
  });
}

export function formatBlogPosts(
  posts,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {},
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = post.frontmatter;
    // filterOutDrafts if true
    if (filterOutDrafts && draft) return acc;

    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

    // add post to acc
    acc.push(post);

    return acc;
  }, []);

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Iratxe Conde Turon",
  "jobTitle": "Publicista y Diseñadora Gráfica",
  "url": "http://localhost:4321/",
  "sameAs": [
    "https://www.linkedin.com/in/iratxeconde/",
    "https://www.instagram.com/iratxe_design/",
    "https://x.com/iratxeconde07/"
  ],
  "image": "http://localhost:4321/Portafolio.webp",
  "description": "Publicista y diseñadora gráfica con experiencia en multimedia y branding. Conoce mis proyectos y habilidades creativas.",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bilbao",
    "addressRegion": "Bizkaia",
    "addressCountry": "España"
  }
};

export function sendMail(event) {
  event.preventDefault(); // Evita el comportamiento por defecto del formulario

  let params = {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    asunto: document.getElementById("asunto").value,
    mensaje: document.getElementById("mensaje").value,
    telefono: document.getElementById("telefono").value,
  };

  emailjs.send("service_mgmiqb8", "template_3e73ttc", params)
    .then(() => alert("Mensaje enviado correctamente"))
    .catch(error => alert("Error al enviar el mensaje: " + error));
}
