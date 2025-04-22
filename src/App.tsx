import { Route, Routes, useParams } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./components/NotFound";
import { Home } from "./pages/home/Home";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import { Products } from "./pages/products/Products";
import { Faq } from "./pages/faq/Faq";
import { ReturnTerms } from "./pages/return/ReturnTerms";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Nexasites } from "./pages/nexasite/Nexasite";
import { HafnanDigitals } from "./pages/hafnandigital/HafnanDigital";
import { DetailProduct } from "./pages/detailproduct/DetailProduct";
import { useNexasiteStore } from "./stores/useDetailProductStore";
import { HafnanMarts } from "./pages/hafnanmart/HafnanMart";
import { Creator } from "./pages/creator/Creator";
import { Download } from "./pages/Download/Download";
import { PaymentHandler } from "./pages/detailproduct/PaymentHandler";

// Type untuk route params
type ProductsParams = {
  name: string;
};

type ProductDetailParams = {
  name: string;
  productSlug: string;
};

function ProductsPage() {
  const { name } = useParams<ProductsParams>();

  const productPages = {
    "hafnan-mart": <HafnanMarts />,
    "hafnan-digital": <HafnanDigitals />,
    nexasite: <Nexasites />,
  };

  return productPages[name as keyof typeof productPages] || <NotFound />;
}

function ProductDetailPage() {
  const { name, productSlug } = useParams<ProductDetailParams>();
  const { getProductBySlug } = useNexasiteStore();

  const product = getProductBySlug(productSlug || "");

  if (!name || !productSlug || !product) {
    return <NotFound />;
  }

  return <DetailProduct />; // Komponen akan ambil data dari store
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/return-terms" element={<ReturnTerms />} />

        {/* Product Category Routes */}
        <Route path="/products/:name" element={<ProductsPage />} />

        {/* Product Detail Routes */}
        <Route
          path="/products/:name/:productSlug"
          element={<ProductDetailPage />}
        />
        {/* Payment Handling Routes */}
        <Route path="/payment-handler" element={<PaymentHandler />} />
        <Route path="/download" element={<Download />} />

        <Route path="/creators" element={<Creator />} />
        <Route path="/creator/:username" element={<Creator />} />

        {/* 404 Catch All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
