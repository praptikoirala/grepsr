import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './index.css'

import Homepage from './pages/homepage'
import Products from './pages/products';
import ProductDetails from './pages/product-details';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/products/:id' element={<ProductDetails />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
