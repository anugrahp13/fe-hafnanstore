import { Helmet, HelmetProvider } from "react-helmet-async";
import { NexasitesProps } from "../../types/Nexasite.type";

interface DetailProductProps {
  nexasites: NexasitesProps;
}
export const DetailProduct = ({ nexasites }: DetailProductProps) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Portfolio Anugrah Prastyo</title>
        </Helmet>
      </HelmetProvider>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src={nexasites.image}
              alt={nexasites.name}
              className="rounded-xl w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{nexasites.name}</h1>
            <p className="text-gray-600 mb-4">by {nexasites.author}</p>
            <p className="text-2xl font-bold mb-4">
              Rp.{nexasites.price.toLocaleString()}
            </p>
            <p className="mb-6">{nexasites.description}</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
