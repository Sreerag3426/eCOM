import React from 'react'
import Navbar from '../Navbars'
import '../Css/shop.css'
import '../script.js'
import Footer from '../Footer'
import { Link } from 'react-router-dom';
import { FaHeart,FaShoppingBag,FaUser} from "react-icons/fa";


function Services() {
  return (
    <>
    <Navbar />
    <section id="services" className="services section-bg">
    <div className="container-fluid">
      <div className="row row-sm">
        <div className="col-md-6 _boxzoom">
          <div className="zoom-thumb">
            <ul className="piclist">
              <li>
                <img src="https://s.fotorama.io/1.jpg" alt="" />
              </li>
              <li>
                <img src="https://s.fotorama.io/2.jpg" alt="" />
              </li>
              <li>
                <img src="https://s.fotorama.io/3.jpg" alt="" />
              </li>
              <li>
                <img
                  src="https://ucarecdn.com/382a5139-6712-4418-b25e-cc8ba69ab07f/-/stretch/off/-/resize/760x/"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div className="_product-images">
            <div className="picZoomer">
              <img
                className="my_img"
                src="https://s.fotorama.io/3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="_product-detail-content">
            <p className="_p-name"> Milton Bottle </p>
            <div className="_p-price-box">
              <div className="p-list">
                <span>
                  {" "}
                  M.R.P. : <i className="fa fa-inr" /> <del> 1399</del>{" "}
                </span>
                <span className="price"> Rs. 699 </span>
              </div>
              <div className="_p-add-cart">
                <div className="_p-qty">
                  <span>Add Quantity</span>
                  {/* <div
                    className="value-button decrease_"
                    id=""
                    value="Decrease Value"
                  >
                    -
                  </div> */}
                  <input
                    type="number"
                    name="qty"
                    id="number"
                    defaultValue={1}
                    min={1}
                  />
                  {/* <div
                    className="value-button increase_"
                    id=""
                    value="Increase Value"
                  >
                    +
                  </div> */}
                </div>
              </div>
              <div className="_p-features">
                <span> Description About this product:- </span>
                Solid color polyester/linen full blackout thick sunscreen floor
                curtain Type: General Pleat Applicable Window Type: Flat Window
                Format: Rope Opening and Closing Method: Left and Right
                Biparting Open Processing Accessories Cost: Included
                Installation Type: Built-in Function: High Shading(70%-90%)
                Material: Polyester / Cotton Style: Classic Pattern: Embroidered
                Location: Window Technics: Woven Use: Home, Hotel, Hospital,
                Cafe, Office Feature: Blackout, Insulated, Flame Retardant Place
                of Origin: India Name: Curtain Usage: Window Decoration
                Keywords: Ready Made Blackout Curtain
              </div>
              <form action="" method="post" acceptCharset="utf-8">
                <ul className="spe_ul" />
                <div className="_p-qty-and-cart">
                  <div className="_p-add-cart">
                    <button className="btn-theme btn buy-btn" tabIndex={0}>
                      <i className="fa fa-shopping-cart" /> Buy Now
                    </button>
                    <Link to ='/cart'><button className="btn-theme btn btn-success" tabIndex={0}>
                       Add to Cart
                    </button></Link>
                    
                    <input type="hidden" name="pid" defaultValue={18} />
                    <input type="hidden" name="price" defaultValue={850} />
                    <input type="hidden" name="url" defaultValue="" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
    <Footer />
    </>
  )
}

export default Services