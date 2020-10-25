
import React from 'react';
import './App.css';
import Header from './component/sub-component/header';
import Footer from './component/sub-component/footer';
import Product from './component/storefront/products';
import Categories from './component/storefront/categories';
function App() {
  return (
  <>
  <Header/>
  <Categories/>
  <Product/>
  <Footer/>
  </>
  );
}
export default App;