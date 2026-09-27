import Header from './header';
import Products from './products';
import { Routes, Route ,Navigate} from "react-router-dom";
import ProductDetails from './productdetails';

function App() {
return(
  <div>
        <Header/>

    <Routes>

      <Route path="/" element={<Navigate to="/products" replace />} />

      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  </div>
  )
}

export default App
