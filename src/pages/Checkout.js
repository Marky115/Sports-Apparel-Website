
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';



const CheckoutPage = () => {
  return (
    <>
      {/* NAVIGATION SECTION */}
      <header>
        <nav className="nav-main">
          <h1>PeakPerformance</h1>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link className="button-nav" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="button-nav" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="button-nav" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="button-nav" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* CONTENT SECTION */}
      <section id="checkout-Design" className="checkout">
        <h1>Checkout</h1>
        {/* First product */}
        <div className="cart-products">
          <div className="product-info">
            <img
              src={`${process.env.PUBLIC_URL}/images/jersey1.jpg`}
              alt="Phoenix Suns jersey over grey background"
              className="checkout-img"
            />
          </div>
          <div className="price-info">
            <h2 className="carth">Phoenix Suns Jersey</h2>
            <p className="cartp">Qt1 - $75.99</p>
            <label htmlFor="quantity">
              Quantity:
              <input type="number" id="quantity" name="quantity" defaultValue="1" />
            </label>
          </div>
        </div>

        {/* Second product */}
        <div className="cart-products">
          <div className="product-info">
            <img
              src={`${process.env.PUBLIC_URL}/images/jersey2.jpg`}
              alt="white and blue floral sport pants"
              className="checkout-img"
            />
          </div>
          <div className="price-info">
            <h2 className="carth">Miami Jersey</h2>
            <p className="cartp">Qt1 - $17.99</p>
            <label htmlFor="quantity2">
              Quantity:
              <input type="number" id="quantity2" name="quantity" defaultValue="1" />
            </label>
          </div>
        </div>

        <div className="checkout-design">
          <div className="subprice">
            <h2>Subtotal:</h2>
            <h2>$93.98</h2>
          </div>

          <div className="form-h2">
            <h2>Contact Information:</h2>
          </div>

          <form action="#" method="post">
            <label htmlFor="first-name">First Name:</label>
            <input type="text" id="first-name" name="first-name" className="checkout-input" required />
            <label htmlFor="last-name">Last Name:</label> 
            <input type="text" id="last-name" name="last-name" className="checkout-input" required />

            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" className="checkout-input" required />
            <label htmlFor="shopping-address">Shipping Address:</label>
            <input type="text" id="shopping-address" name="address" required />
            <div className="card-info2">
              <div>
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" placeholder="city" required />
              </div>
              <div>
                <label htmlFor="province">Province</label>
                <input type="text" id="province" name="province" placeholder="province" required />
              </div>
              <div>
                <label htmlFor="postal">Postal</label>
                <input type="text" id="postal" name="postal" placeholder="postal" required />
              </div>
            </div>
            <div className="form-h2">
              <h2>Payment Info:</h2>
            </div>
            <label htmlFor="credit-card">Credit Card Number:</label>
            <input
              type="text"
              id="credit-card"
              name="credit-card"
              placeholder="0000 0000 0000 0000"
              required
            />
            <div className="card-info">
              <div>
                <label htmlFor="month-year">MM/YY</label>
                <input type="text" id="month-year" name="month-year" placeholder="MM/YY" required />
              </div>
              <div>
                <label htmlFor="CVV">CVV</label>
                <input type="text" id="CVV" name="CVV" placeholder="MM/YY" required />
              </div>
            </div>
          </form>
          
          <Link to="/confirmation">
            <button className="submit-btn2" type="button">Submit</button>
          </Link>
        </div>
      </section>     
      <Footer/>
    </>
  );
};


export default CheckoutPage;
