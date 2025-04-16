// utils.js
// export const createSlug = (name: any) => {
//   return name
//     .toLowerCase()
//     .replace(/\s+/g, "-") // Mengganti spasi dengan "-"
//     .replace(/[^\w-]+/g, ""); // Menghapus karakter selain huruf, angka, dan "-"
// };

// utils/createSlug.ts
export const createSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Hapus karakter khusus
    .replace(/\s+/g, "-") // Ganti spasi dengan dash
    .replace(/--+/g, "-") // Hilangkan multiple dash
    .trim();
};
