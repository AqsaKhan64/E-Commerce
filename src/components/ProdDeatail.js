
import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../index.css";
// import UndoIcon from '@mui/icons-material/Undo';

const prodimg = require("../images/sofa1.webp");
function ProdDetail() { 
     const navigate = useNavigate();

  return (
    <>
    <div className = "card-wrapper">
        <div className = "card">
          {/* card left  */}
          <div className = "product-imgs">
            <div className = "img-display">
              <div className = "img-showcase">
                <img src={prodimg} alt = "shoe image" />
              </div>
            </div>
          </div>
          {/*  card right */}
          <div className = "product-content">
            <h2 className = "product-title">Furniture </h2>
            <a href = "#" className = "product-link">visit FU RN</a>
            <div className = "product-rating">
              <i className = "fas fa-star"></i>
              <i className = "fas fa-star"></i>
              <i className = "fas fa-star"></i>
              <i className = "fas fa-star"></i>
              <i className = "fas fa-star-half-alt"></i>
              <span>4.7(21)</span>
            </div>

            <div className = "product-price">
              <p className = "last-price">Old Price: <span>$257.00</span></p>
              <p className = "new-price">New Price: <span>$249.00 (5%)</span></p>
            </div>
            <Divider />
            <div className = "product-detail">
              <h2>about this item: </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
              <Divider />
              <ul>
                <li>Color: <span>Black</span></li>
                <li>Available: <span>in stock</span></li>
                <li>Category: <span>Furniture</span></li>
                <li>Shipping Area: <span>All over the world</span></li>
                <li>Shipping Fee: <span>Free</span></li>
              </ul>
            </div>
            <Divider />

            <div className = "purchase-info">
              <Button type = "button" className = "btn">
                Add to Cart <i className = "fas fa-shopping-cart"></i>
              </Button>
              <Button type = "button" className = "btn" onClick={() => navigate(-1)}>  GO Back</Button>
            </div>

            <div className = "social-links">
              <p>Share At: </p>
              <a href = "#">
                <i className = "fab fa-facebook-f"></i>
              </a>
              <a href = "#">
                <i className = "fab fa-twitter"></i>
              </a>
              <a href = "#">
                <i className = "fab fa-instagram"></i>
              </a>
              <a href = "#">
                <i className = "fab fa-whatsapp"></i>
              </a>
              <a href = "#">
                <i className = "fab fa-pinterest"></i>
              </a>
            </div>
            </div>
        </div>
      </div>

  </>
    );
};


export default ProdDetail
