import React from 'react';
import './App.css';
import Header from './component/sub-component/header';
import Footer from './component/sub-component/footer';
import Product from './component/storefront/products';
import Categories from './component/storefront/categories';
import Cart from './component/storefront/cart'
function App() {
  return (
  <>
  <Header/>
  <Cart/>
  <Categories/>
  <Product/>
  <Footer/>
 
  </>
  );
}
export default App;
/**import React from 'react';
import './App.css';
import Header from './components/Header';
import Categories from './components/storefront/Categories';
import Products from './components/storefront/Products';
import Footer from './components/Footer';
import SimpleCart from './components/cart/SimpleCart'
function App() {
  return (
    <>
     <Header />
     <SimpleCart/>
      <Categories />
      <Products />
    <Footer />
    </>
);
}
export default App; */