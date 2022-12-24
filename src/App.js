import './App.css';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';

function App() {
  return (
   <>
   <Navbar />
   <Routes>
    <Route exact path= "/" element={<Home />}></Route>
    <Route exact path="/products" element={<Products />}></Route>
    <Route exact path="/products/:id" element={<Product />}></Route>

   </Routes>
   </>
  );
}

export default App;
