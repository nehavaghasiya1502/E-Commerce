import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Load cart safely from localStorage
  useEffect(() => {
    const loadCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartWithQty = storedCart.map(item => ({
        ...item,
        quantity: item.quantity || 1,
      }));
      setCart(cartWithQty);
    };

    loadCart(); // first load
    window.addEventListener("storage", loadCart);

    if (!localStorage.getItem("isLogin")) {
      alert("Please login first");
      navigate("/auth");
      return;
    }


    return () => window.removeEventListener("storage", loadCart);
  }, []);

  // Remove item
  const removeFromCart = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("storage"));
  };

  // Change quantity
  const changeQuantity = (id, amount) => {
    const updated = cart.map(item => {
      if (item.id === id) {
        let newQty = item.quantity + amount;
        if (newQty < 1) newQty = 1;
        return { ...item, quantity: newQty };
      }
      return item;
    });

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("storage"));
  };

  // Total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Purchase
  const handlePurchase = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert(`You purchased ${cart.length} item(s) for ₹ ${totalPrice}!`);
    setCart([]);
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5">My Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty!</p>
      ) : (
        <>
          {cart.map(item => (
            <Row
              key={item.id}
              className="align-items-center mb-3 p-2 border rounded"
            >
              {/* Image */}
              <Col xs={3} sm={2}>
                <Image src={item.thumbnail} fluid rounded />
              </Col>

              {/* Title + Quantity */}
              <Col xs={5} sm={6}>
                <h5>{item.title}</h5>
                <div className="d-flex align-items-center mt-2">
                  <Button
                    size="sm"
                    onClick={() => changeQuantity(item.id, -1)}
                  >
                    -
                  </Button>

                  <Form.Control
                    type="text"
                    value={item.quantity}
                    readOnly
                    className="mx-2 text-center"
                    style={{ width: "50px" }}
                  />

                  <Button
                    size="sm"
                    onClick={() => changeQuantity(item.id, 1)}
                  >
                    +
                  </Button>
                </div>
              </Col>

              {/* Price + Remove */}
              <Col xs={4} sm={4} className="text-end">
                <h6>₹ {item.price * item.quantity}</h6>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </Button>
              </Col>
            </Row>
          ))}

          {/* Total */}
          <div className="text-end mt-4">
            <h4>Total: ₹ {totalPrice}</h4>
            <Button variant="success" onClick={handlePurchase}>
              Purchase
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
