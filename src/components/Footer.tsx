import { Link } from "react-router-dom";
import dataFooter from "../data/dataFooter";
import { Button } from "./elements/Button";
import { LuMailCheck } from "react-icons/lu";

export const Footer = () => {
  const footerData = dataFooter[0];

  return (
    <footer className="bg-dark py-6 dark:bg-slate-800">
      <div className="container justify-between mx-auto px-4 lg:max-w-7xl">
        <div className="w-full pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Informasi */}
            <div className="p-2 text-center md:text-left">
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
            <div className="p-2 text-center md:text-left">
              <h2 className="font-bold text-2xl text-white uppercase">
                {footerData.available}
              </h2>
              <div className="flex justify-center md:justify-start gap-4 mt-2">
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
            <div className="p-2 text-center md:text-left">
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
                />
                <Button
                  to="/products"
                  variant="secondary"
                  text="Subscribe"
                  icon={LuMailCheck}
                  iconClassName="w-[1.10rem] h-[1.10rem]"
                />
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
