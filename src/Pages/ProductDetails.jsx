import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams(); // URL se product id
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  // Fetch single product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  // Add to Cart
  const addToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = storedCart.find((p) => p.id === product.id);

    if (!exists) {
      storedCart.push({ ...product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(storedCart));
      window.dispatchEvent(new Event("storage")); // Header badge update
      alert(`${product.title} added to cart!`);
    } else {
      alert(`${product.title} is already in cart`);
    }
  };

  // Add to Wishlist
  const addToWishlist = (product) => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = storedWishlist.find((p) => p.id === product.id);

    if (!exists) {
      storedWishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
      window.dispatchEvent(new Event("storage")); // Header badge update
      alert(`${product.title} added to wishlist!`);
    } else {
      alert(`${product.title} is already in wishlist`);
    }
  };

  if (!product) return <p className="text-center py-5">Loading...</p>;

  return (
    <Container className="py-5">
      <Button variant="secondary" className="mb-4" onClick={() => navigate(-1)}>
        ← Back
      </Button>

      <Row>
        <Col md={6}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p className="text-muted">Brand: {product.brand}</p>
          <h4 className="text-danger">₹ {product.price}</h4>
          <p>{product.description}</p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating} ⭐
          </p>
          <p>
            <strong>Stock:</strong> {product.stock}
          </p>

          <Button
            variant="danger"
            className="me-2"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
          {/* <Button variant="outline-danger" onClick={() => addToWishlist(product)}>
            Add to Wishlist
          </Button> */}
          <Button 
  variant="outline-danger" 
  onClick={() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = storedCart.find(p => p.id === product.id);
    if (!exists) {
      storedCart.push({ ...product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(storedCart));
    }
    navigate("/cart"); // Cart page par redirect
  }}
>
  Purchase Now
</Button>

        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
