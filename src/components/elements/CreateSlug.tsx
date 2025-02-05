// utils.js
export const createSlug = (name: any) => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-") // Mengganti spasi dengan "-"
    .replace(/[^\w-]+/g, ""); // Menghapus karakter selain huruf, angka, dan "-"
};
