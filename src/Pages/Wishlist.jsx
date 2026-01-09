import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Wishlist = () => {
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishlist")) || []);
  const navigate = useNavigate();

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    // trigger storage event to update header badge
    window.dispatchEvent(new Event("storage"));
  };

  if (!localStorage.getItem("isLogin")) {
  alert("Please login first");
  navigate("/auth");
  return;
}


  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-center">Your wishlist is empty!</p>
      ) : (
        <Row className="g-4">
          {wishlist.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100">
                <Card.Img src={item.thumbnail} />
                <Card.Body className="text-center d-flex flex-column">
                  <Card.Title className="fs-6 text-truncate">{item.title}</Card.Title>
                  <Card.Text className="text-muted mb-2">₹ {item.price}</Card.Text>
                  <Button variant="danger" size="sm" className="mt-auto" onClick={() => removeFromWishlist(item.id)}>
                    <FaTrash className="me-2" /> Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Wishlist;
