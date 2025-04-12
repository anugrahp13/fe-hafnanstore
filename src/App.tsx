import { Route, Routes, useParams } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./components/NotFound";
import { Home } from "./pages/home/Home";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import { Products } from "./pages/products/Products";
import { HafnanMarts } from "./pages/hafnanmart/HafnanMart";
import dataHafnanMart from "./data/dataHafnanMart";
import dataHafnanDigital from "./data/dataHafnanDigital";
import dataContact from "./data/dataContact";
import { Faq } from "./pages/faq/Faq";
import dataFaq from "./data/dataFaq";
import { ReturnTerms } from "./pages/return/ReturnTerms";
import dataReturnTerms from "./data/dataReturnTerms";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dataNexasite from "./data/dataNexasite";
import { Nexasites } from "./pages/nexasite/Nexasite";
import { HafnanDigitals } from "./pages/hafnandigital/HafnanDigital";

function ProductsPage() {
  const { name } = useParams();

  if (name === "hafnan-mart") {
    return <HafnanMarts hafnanmarts={dataHafnanMart} />;
  } else if (name === "hafnan-digital") {
    return <HafnanDigitals hafnandigitals={dataHafnanDigital} />;
  } else if (name === "nexa-site") {
    return <Nexasites nexasites={dataNexasite} />;
  } else {
    return <NotFound />;
  }
}
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact contacts={dataContact} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products/:name" element={<ProductsPage />} />
        <Route path="/faq" element={<Faq faqs={dataFaq} />} />
        <Route
          path="/return-terms"
          element={<ReturnTerms returnterms={dataReturnTerms} />}
        />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
