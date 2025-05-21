
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const ProductPage = () => {
  return (
    <>
      <header>
        <nav className="nav-main">
          <h1>PeakPerformance</h1>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link className="button-nav" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="button-nav" to="/about">About</Link>
              
            </li>
            <li className="nav-item">
              <Link className="button-nav" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="button-nav" to="/checkout">Checkout</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <section id="element" className="productPage">
        <div className="product-sidebar">
          <div className="filter-links">
            <h2>Shop/All Products</h2>

            <label htmlFor="sizes"> Sizes</label>
            <select id="sizes" name="sizes">
              <option value="small"> Small </option>
              <option value="medium"> Medium </option>
              <option value="large"> Large </option>
            </select>

            <label htmlFor="colors"> Colors</label>
            <select id="colors" name="colors">
              <option value="white"> White </option>
              <option value="black"> Black </option>
              <option value="blue"> Blue </option>
              <option value="grey"> Grey </option>
            </select>

            <label htmlFor="sort"> Sort</label>
            <select id="sort" name="sort">
              <option value="Sort by Newest"> Sort by Newest </option>
              <option value="Sort by Oldest"> Sort by Oldest </option>
              <option value="Sort by Bestselling"> Sort by Cheapest</option>
            </select>

            <label htmlFor="categories"> Categories</label>
            <select id="categories" name="categories">
              <option value="white"> Shorts </option>
              <option value="black"> Jerseys </option>
              <option value="blue"> Shirts </option>
            </select>

            <form>
              <input type="submit" value="Submit" className="filter-butn" />
            </form>
          </div>
        </div>

        <div className="product-item-grid">
          <div className="product-item">
              <img src="images/jersey1.jpg" alt="Pheonix Suns jersey front and back over purple background" />
            <p className="shop-spacing">Phoenix Jersey</p>
            <h3>$75.99</h3>
          </div>

          <div className="product-item">
            
              <img src="images/jersey2.jpg" alt="Miami Heat black jersey, shorts on grey. Link to product page." />
           
            <p className="shop-spacing">Miami Jersey</p>
            <h3>$75.99</h3>
          </div>

          <div className="product-item">
            
              <img src="images/jersey3.jpg" alt="Warriors black gold jersey. Link to product page" />
            
            <p className="shop-spacing">San Francisco Jersey</p>
            <h3>$75.99</h3>
          </div>

          <div className="product-item">
            
              <img src="images/shirt1.jpg" alt="Male model in Hollingsworth green t-shirt. link to product page." />
           
            <p className="shop-spacing">Light Grey Shirt</p>
            <h3>$15.99</h3>
          </div>

          <div className="product-item">
            
              <img src="images/shirt2.jpg" alt="male model in mint blue t-shirt/ link to detailed product page" />
            
            <p className="shop-spacing">Turquoise Shirt</p>
            <h3>$15.99</h3>
          </div>

          <div className="product-item">
            
              <img src="images/shirt3.jpg" alt="male model in a grey t-shirt. To product page" />
            
            <p className="shop-spacing">Dark Grey Shirt</p>
            <h3>$15.99</h3>
          </div>

          <div className="product-item">
            
              <img src="images/short1.png" alt="blue and white basketball shorts to detailed product page" />
          
            <p className="shop-spacing">White Short</p>
            <h3>$17.99</h3>
          </div>

          <div className="product-item">
            
              <img src="images/shorts2.jpg" alt="black basketball shorts with birds to detailed prouduct page" />
            
            <p className="shop-spacing">Black Short</p>
            <h3>$17.99</h3>
          </div>

          <div className="product-item">
            
              <img src="images/short4.jpg" alt="white and red basketball shorts with flower to detailed prouduct page" />
            
            <p className="shop-spacing">Grey Short</p>
            <h3>$17.99</h3>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductPage;