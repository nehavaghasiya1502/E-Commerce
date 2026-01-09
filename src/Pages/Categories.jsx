import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEye, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Categories.css";   // 👈 css file

const categoryCards = [
  {
    name: "Beauty",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    desc: "Makeup & Skincare products",
  },
  {
    name: "Clothes",
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322",
    desc: "Men & Women fashion wear",
  },
  {
    name: "Electronics",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    desc: "Latest gadgets & devices",
  },
  {
    name: "Fragrances",
    img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
    desc: "Luxury perfumes collection",
  },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5">
        Shop by <span style={{ color: "#ff4d6d" }}>Category</span>
      </h2>

      <Row className="g-4">
        {categoryCards.map((cat) => (
          <Col md={6} sm={12} key={cat.name}>
            {/* 👆 md=6 = 1 row me 2 boxes */}

            <div
              className="category-card"
              onClick={() => navigate(`/products/${cat.name}`)}
            >
              <img src={cat.img} alt={cat.name} />

              <div className="overlay">
                <div className="icons">
                  <span><FaEye /></span>
                  <span><FaHeart /></span>
                </div>

                <div className="text">
                  <h4>{cat.name}</h4>
                  <p>{cat.desc}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
