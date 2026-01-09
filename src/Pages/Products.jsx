// // import { useEffect, useState } from "react";
// // import { Container, Row, Col, Card, Button } from "react-bootstrap";
// // import { FaEye, FaHeart } from "react-icons/fa";
// // import "./Products.css";

// // const Products = () => {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const urls = [
// //           "https://dummyjson.com/products/category/beauty?limit=100",
// //           "https://dummyjson.com/products/category/fragrances?limit=100",
// //           "https://dummyjson.com/products/category/smartphones?limit=100",
// //           "https://dummyjson.com/products/category/laptops?limit=100",
// //           "https://dummyjson.com/products/category/mens-shirts?limit=100",
// //           "https://dummyjson.com/products/category/womens-dresses?limit=100",
// //         ];


// //         const responses = await Promise.all(
// //           urls.map(url => fetch(url).then(res => res.json()))
// //         );

// //         // sab categories ke products mix
// //         const mixedProducts = responses
// //           .flatMap(res => res.products)
// //           .slice(0, 40);

// //         setProducts(mixedProducts);
// //       } catch (error) {
// //         console.log("Error fetching products:", error);
// //       }
// //     };
// //     fetchProducts();
// //   }, []);
// //   const addToWishlist = (product) => {
// //       // localStorage me wishlist ko read karo
// //       const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// //       // check karo product already exist na ho
// //       const exists = storedWishlist.find((p) => p.id === product.id);
// //       if (!exists) {
// //         const updatedWishlist = [...storedWishlist, product];
// //         localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
// //         alert(`${product.title} added to wishlist!`); // optional
// //       } else {
// //         alert(`${product.title} is already in wishlist`);
// //       }
// //     };


// //   return (
// //     <Container className="py-5">
// //       <h2 className="text-center fw-bold mb-5">
// //         All Products <span className="text-danger">of QuickBuy</span>
// //       </h2>

// //       <Row className="g-4">
// //         {products.map(item => (
// //           <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
// //             <Card className="product-card">
// //               <div className="img-wrapper">
// //                 <Card.Img src={item.thumbnail} />

// //                 {/* Overlay */}
// //                 <div className="overlay">
// //                   <div className="icon-btn">
// //                     <FaEye />
// //                   </div>
// //                   <div className="icon-btn" onClick={() => addToWishlist(item)}>
// //                     <FaHeart />
// //                   </div>
// //                 </div>
// //               </div>

// //               <Card.Body className="text-center">
// //                 <Card.Title className="fs-6 text-truncate">
// //                   {item.title}
// //                 </Card.Title>

// //                 <Card.Text className="text-muted mb-2">
// //                   ₹ {item.price}
// //                 </Card.Text>

// //                 <Button variant="danger" size="sm" className="w-100">
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

// // export default Products;


// import { useEffect, useState } from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { FaEye, FaHeart } from "react-icons/fa";
// import "./Products.css";

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const urls = [
//           "https://dummyjson.com/products/category/beauty?limit=100",
//           "https://dummyjson.com/products/category/fragrances?limit=100",
//           "https://dummyjson.com/products/category/smartphones?limit=100",
//           "https://dummyjson.com/products/category/laptops?limit=100",
//           "https://dummyjson.com/products/category/mens-shirts?limit=100",
//           "https://dummyjson.com/products/category/womens-dresses?limit=100",
//         ];

//         const responses = await Promise.all(urls.map((url) => fetch(url).then(res => res.json())));
//         const allProducts = responses.flatMap((res) => res.products).slice(0, 40);
//         setProducts(allProducts);
//       } catch (error) {
//         console.log("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Add to wishlist
//   const addToWishlist = (product) => {
//     const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     const exists = storedWishlist.find((p) => p.id === product.id);
//     if (!exists) {
//       const updatedWishlist = [...storedWishlist, product];
//       localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//       // trigger storage event to update header badge
//       window.dispatchEvent(new Event("storage"));
//       alert(`${product.title} added to wishlist!`);
//     } else {
//       alert(`${product.title} is already in wishlist`);
//     }
//   };

//   const addToCart = (product) => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     const exists = storedCart.find((p) => p.id === product.id);

//     if (!exists) {
//       const updatedCart = [...storedCart, product];
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       window.dispatchEvent(new Event("storage")); // Badge update for header
//       alert(`${product.title} added to cart!`);
//     } else {
//       alert(`${product.title} is already in cart`);
//     }
//   };


//   return (
//     <Container className="py-5">
//       <h2 className="text-center fw-bold mb-5">All Products <span className="text-danger">of QuickBuy</span></h2>
//       <Row className="g-4">
//         {products.map((item) => (
//           <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
//             <Card className="product-card h-100">
//               <div className="img-wrapper">
//                 <Card.Img src={item.thumbnail} />
//                 <div className="overlay">
//                   <div className="icon-btn"><FaEye /></div>
//                   <div className="icon-btn" onClick={() => addToWishlist(item)}><FaHeart /></div>
//                 </div>
//               </div>
//               <Card.Body className="text-center d-flex flex-column">
//                 <Card.Title className="fs-6 text-truncate">{item.title}</Card.Title>
//                 <Card.Text className="text-muted mb-2">₹ {item.price}</Card.Text>
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

// export default Products;
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaEye, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";


const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { searchTerm } = useContext(SearchContext);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const urls = [
          "https://dummyjson.com/products/category/beauty?limit=100",
          "https://dummyjson.com/products/category/fragrances?limit=100",
          "https://dummyjson.com/products/category/smartphones?limit=100",
          "https://dummyjson.com/products/category/laptops?limit=100",
          "https://dummyjson.com/products/category/mens-shirts?limit=100",
          "https://dummyjson.com/products/category/womens-dresses?limit=100",
        ];

        const responses = await Promise.all(
          urls.map((url) => fetch(url).then((res) => res.json()))
        );
      
        const allProducts = responses.flatMap((res) => res.products).slice(0, 40);
        setProducts(allProducts);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToWishlist = (product) => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = storedWishlist.find((p) => p.id === product.id);
    if (!exists) {
      const updatedWishlist = [...storedWishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      window.dispatchEvent(new Event("storage"));
      alert(`${product.title} added to wishlist!`);
    } else {
      alert(`${product.title} is already in wishlist`);
    }
  };

  const addToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = storedCart.find((p) => p.id === product.id);
    if (!exists) {
      const updatedCart = [...storedCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("storage"));
      alert(`${product.title} added to cart!`);
    } else {
      alert(`${product.title} is already in cart`);
    }
  };

    const filteredProducts = products.filter((item) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5">
        All Products <span className="text-danger">of QuickBuy</span>
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
                <Card.Title className="fs-6 text-truncate">{item.title}</Card.Title>
                <Card.Text className="text-muted mb-2">₹ {item.price}</Card.Text>
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

export default Products;
