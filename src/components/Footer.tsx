import { Link } from "react-router-dom";
import dataFooter from "../data/dataFooter";
import { LuMailCheck } from "react-icons/lu";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Footer = () => {
  const footerData = dataFooter[0];
  const [email, setEmail] = useState("");

  // Fungsi validasi email menggunakan regex
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!email.trim()) {
      toast.warn("⚠️ Mohon masukkan email sebelum berlangganan.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }
    if (!isValidEmail(email)) {
      toast.error(
        "❌ Email tidak valid! Pastikan menggunakan format yang benar (contoh: user@example.com).",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        }
      );
      return;
    }
    toast.success(
      "✅ Berhasil berlangganan! Cek email Anda untuk konfirmasi.",
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      }
    );

    // Logika tambahan (contoh: kirim email ke backend atau API)
    console.log("Email yang dimasukkan:", email);
    setEmail(""); // Bersihkan input setelah berhasil
  };
  return (
    <footer className="bg-dark py-6 dark:bg-slate-800">
      <div className="container justify-between mx-auto px-4 lg:max-w-7xl">
        <div className="w-full pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Informasi */}
            <div className="p-2 text-center">
              <h2 className="font-bold text-2xl text-white uppercase">
                {footerData.information}
              </h2>
              <ul className="mt-2 font-bold text-sm text-white uppercase space-y-2">
                {footerData.iteminformations.map((item, index) => (
                  <li key={index}>
                    <Link to={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kami Tersedia di */}
            <div className="p-2 text-center">
              <h2 className="font-bold text-2xl text-white uppercase">
                {footerData.available}
              </h2>
              <div className="flex justify-center gap-4 mt-2">
                {footerData.marketplaces.map((marketplace, index) => (
                  <a
                    key={index}
                    href={marketplace.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={marketplace.logo}
                      alt={marketplace.name}
                      className="w-10 h-10"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-2 text-center">
              <h2 className="font-bold text-2xl text-white uppercase">
                {footerData.subscription}
              </h2>
              <p className="text-sm text-gray-300 mt-2">
                Dapatkan informasi terbaru dan promo menarik.
              </p>
              <div className="mt-4 space-y-2">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="p-2 w-full rounded-lg text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={handleSubscribe}
                  className="p-2 w-full bg-primary text-white rounded-lg flex items-center justify-center gap-2"
                >
                  <LuMailCheck className="w-[1.10rem] h-[1.10rem]" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Footer Copyright */}
          <p className="font-medium text-sm text-slate-300 text-center mt-6">
            © 2025 <span className="font-bold text-white">Hafnan Store</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
