export function formatDate(date) {
    return new Date(date).toLocaleDateString('es-ES', {
      timeZone: "UTC",
    })
  }
  