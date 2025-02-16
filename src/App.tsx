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
import { HafnanDigitals } from "./pages/hafnandigital/Hafnandigital";
import dataContact from "./data/dataContact";

function ProductsPage() {
  const { name } = useParams();

  if (name === "hafnan-mart") {
    return <HafnanMarts hafnanmarts={dataHafnanMart} />;
  } else if (name === "hafnan-digital") {
    return <HafnanDigitals hafnandigitals={dataHafnanDigital} />;
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
      </Routes>
    </Layout>
  );
}

export default App;
