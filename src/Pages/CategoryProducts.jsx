// // import { useEffect, useState } from "react";
// // import { Container, Row, Col, Card, Button } from "react-bootstrap";
// // import { FaEye, FaHeart } from "react-icons/fa";
// // import { useParams } from "react-router-dom";
// // import "./Products.css"; 

// // const categoryMap = {
// //   Beauty: ["beauty"],
// //   Clothes: ["mens-shirts", "womens-dresses", "womens-tops"],
// //   Electronics: ["smartphones", "laptops"],
// //   Fragrances: ["fragrances"],
// // };

// // const CategoryProducts = () => {
// //   const { category } = useParams();
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     fetch("https://dummyjson.com/products?limit=100")
// //       .then((res) => res.json())
// //       .then((data) => setProducts(data.products));
// //   }, []);

// //   const filteredProducts = products.filter((item) =>
// //     categoryMap[category]?.includes(item.category)
// //   );

// //   return (
// //     <Container className="py-5">
// //       <h2 className="text-center fw-bold mb-5">
// //         {category} <span className="text-danger">Products</span>
// //       </h2>

// //       <Row className="g-4">
// //         {filteredProducts.map((item) => (
// //           <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
// //             <Card className="product-card h-100">
// //               <div className="img-wrapper">
// //                 <Card.Img src={item.thumbnail} />

// //                 {/* Overlay */}
// //                 <div className="overlay">
// //                   <div className="icon-btn">
// //                     <FaEye />
// //                   </div>
// //                   <div className="icon-btn">
// //                     <FaHeart />
// //                   </div>
// //                 </div>
// //               </div>

// //               <Card.Body className="text-center d-flex flex-column">
// //                 <Card.Title className="fs-6 text-truncate">
// //                   {item.title}
// //                 </Card.Title>

// //                 <Card.Text className="text-muted mb-2">
// //                   ₹ {item.price}
// //                 </Card.Text>

// //                 <Button
// //                   variant="danger"
// //                   size="sm"
// //                   className="w-100 mt-auto"
// //                 >
// //                   Add to Cart
// //                 </Button>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         ))}
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default CategoryProducts;

// import { useEffect, useState } from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { FaEye, FaHeart } from "react-icons/fa";
// import { useParams, useNavigate } from "react-router-dom";
// import "./Products.css"; 

// const categoryMap = {
//   Beauty: ["beauty"],
//   Clothes: ["mens-shirts", "womens-dresses", "womens-tops"],
//   Electronics: ["smartphones", "laptops"],
//   Fragrances: ["fragrances"],
// };

// const CategoryProducts = () => {
//   const { category } = useParams();
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products?limit=100")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products));
//   }, []);

//   const filteredProducts = products.filter((item) =>
//     categoryMap[category]?.includes(item.category)
//   );

//   // ✅ Add to Wishlist
//   const addToWishlist = (product) => {
//     const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     const exists = storedWishlist.find((p) => p.id === product.id);

//     if (!exists) {
//       localStorage.setItem("wishlist", JSON.stringify([...storedWishlist, product]));
//       window.dispatchEvent(new Event("storage"));
//       alert("Added to wishlist ❤️");
//     } else {
//       alert("Already in wishlist");
//     }
//   };

//   // ✅ Add to Cart
//   const addToCart = (product) => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     const exists = storedCart.find((p) => p.id === product.id);

//     if (!exists) {
//       localStorage.setItem("cart", JSON.stringify([...storedCart, { ...product, quantity: 1 }]));
//       window.dispatchEvent(new Event("storage"));
//       alert("Added to cart 🛒");
//     } else {
//       alert("Already in cart");
//     }
//   };

//   return (
//     <Container className="py-5">
//       <h2 className="text-center fw-bold mb-5">
//         {category} <span className="text-danger">Products</span>
//       </h2>

//       <Row className="g-4">
//         {filteredProducts.map((item) => (
//           <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
//             <Card className="product-card h-100">
//               <div className="img-wrapper">
//                 <Card.Img src={item.thumbnail} />

//                 {/* Overlay */}
//                 <div className="overlay">
//                   <div
//                     className="icon-btn"
//                     onClick={() => navigate(`/product/${item.id}`)}
//                   >
//                     <FaEye />
//                   </div>

//                   <div
//                     className="icon-btn"
//                     onClick={() => addToWishlist(item)}
//                   >
//                     <FaHeart />
//                   </div>
//                 </div>
//               </div>

//               <Card.Body className="text-center d-flex flex-column">
//                 <Card.Title className="fs-6 text-truncate">
//                   {item.title}
//                 </Card.Title>

//                 <Card.Text className="text-muted mb-2">
//                   ₹ {item.price}
//                 </Card.Text>

//                 <Button
//                   variant="danger"
//                   size="sm"
//                   className="w-100 mt-auto"
//                   onClick={() => addToCart(item)}
//                 >
//                   Add to Cart
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default CategoryProducts;


import { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaEye, FaHeart } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import "./Products.css"; 
import { SearchContext } from "../Context/SearchContext";

const categoryMap = {
  Beauty: ["beauty"],
  Clothes: ["mens-shirts", "womens-dresses", "womens-tops"],
  Electronics: ["smartphones", "laptops"],
  Fragrances: ["fragrances"],
};

const CategoryProducts = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { searchTerm } = useContext(SearchContext); // ✅ Use Search Context

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // Filter by category + search term
  const filteredProducts = products
    .filter((item) => categoryMap[category]?.includes(item.category))
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Add to Wishlist
  const addToWishlist = (product) => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = storedWishlist.find((p) => p.id === product.id);

    if (!exists) {
      localStorage.setItem(
        "wishlist",
        JSON.stringify([...storedWishlist, product])
      );
      window.dispatchEvent(new Event("storage"));
      alert(`${product.title} added to wishlist ❤️`);
    } else {
      alert(`${product.title} is already in wishlist`);
    }
  };

  // Add to Cart
  // const addToCart = (product) => {
  //   const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //   const exists = storedCart.find((p) => p.id === product.id);

  //   if (!exists) {
  //     localStorage.setItem(
  //       "cart",
  //       JSON.stringify([...storedCart, { ...product, quantity: 1 }])
  //     );
  //     window.dispatchEvent(new Event("storage"));
  //     alert(`${product.title} added to cart 🛒`);
  //   } else {
  //     alert(`${product.title} is already in cart`);
  //   }
  // };
  const addToCart = (product) => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  const exists = storedCart.find((p) => p.id === product.id);

  if (!exists) {
    const updatedCart = [...storedCart, { ...product, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
    alert(`${product.title} added to cart 🛒`);
  } else {
    alert("Already in cart");
  }
};


  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5">
        {category} <span className="text-danger">Products</span>
      </h2>

      <Row className="g-4">
        {filteredProducts.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="product-card h-100">
              <div className="img-wrapper">
                <Card.Img src={item.thumbnail} />
                <div className="overlay">
                  <div
                    className="icon-btn"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    <FaEye />
                  </div>
                  <div
                    className="icon-btn"
                    onClick={() => addToWishlist(item)}
                  >
                    <FaHeart />
                  </div>
                </div>
              </div>

              <Card.Body className="text-center d-flex flex-column">
                <Card.Title className="fs-6 text-truncate">
                  {item.title}
                </Card.Title>
                <Card.Text className="text-muted mb-2">
                  ₹ {item.price}
                </Card.Text>
                <Button
                  variant="danger"
                  size="sm"
                  className="w-100 mt-auto"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryProducts;
