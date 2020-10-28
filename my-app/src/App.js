import React from 'react';
import './App.css';
import Header from './component/sub-component/header';
import Footer from './component/sub-component/footer';
import Cart from './component/storefront/cart'
import Main from './component/Main/main'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Cart />
        <Main />
        <Footer />
      </BrowserRouter>
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