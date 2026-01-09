// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header";
// import Home from "./Pages/Home";
// import { Toolbar } from "@mui/material";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import CategoryProducts from "./Pages/CategoryProducts";
// import Categories from "./Pages/Categories"; 
// import ProductDetails from "./Pages/ProductDetails";
// import Wishlist from "./Pages/Wishlist";
// import Cart from "./Pages/Cart";
// import Footer from "./Components/Footer";

// import SearchProvider from "./Context/SearchContext"; 
// import Auth from "./Pages/Auth";

// function App() {
//   return (
//     <SearchProvider>
//       <BrowserRouter>
//         <Header />
//         <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}></Box>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/categories" element={<Categories />} /> 
//           <Route path="/products/:category" element={<CategoryProducts />} />
//           <Route path="/product/:id" element={<ProductDetails />} />
//           <Route path="/wishlist" element={<Wishlist />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/auth" element={<Auth />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>

//         <Footer />
//       </BrowserRouter>
//     </SearchProvider>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CategoryProducts from "./Pages/CategoryProducts";
import Categories from "./Pages/Categories"; 
import ProductDetails from "./Pages/ProductDetails";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Auth from "./Pages/Auth";

import SearchProvider from "./Context/SearchContext"; 

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>

        {/* 👇 MAIN FLEX LAYOUT */}
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          
          <Header />

          {/* 👇 All pages will stretch here */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} /> 
              <Route path="/products/:category" element={<CategoryProducts />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>

          <Footer />

        </Box>
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
