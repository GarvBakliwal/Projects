import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Landing from "./Homepage/Landing";
import ProductList from "./products/ProductList";
import AuthForm from './components/AuthForm'
function App() {
  return (
    <Template>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<AuthForm />} />
      </Routes>
    </Template>
  );
}

export default App;
