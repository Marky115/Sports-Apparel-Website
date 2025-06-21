
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
          <div class="product-sidebar">
            <div class="filter-header">
                <h2>Shop/All Products</h2>
            </div>

            <div class="filter-group">
                <label for="sizes">Sizes</label>
                <select id="sizes" name="sizes" class="filter-select">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>

            <div class="filter-group">
                <label for="colors">Colors</label>
                <select id="colors" name="colors" class="filter-select">
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="blue">Blue</option>
                    <option value="grey">Grey</option>
                </select>
            </div>

            <div class="filter-group">
                <label for="sort">Sort</label>
                <select id="sort" name="sort" class="filter-select">
                    <option value="newest">Sort by Newest</option>
                    <option value="oldest">Sort by Oldest</option>
                    <option value="cheapest">Sort by Cheapest</option>
                </select>
            </div>

            <div class="filter-group">
                <label for="categories">Categories</label>
                <select id="categories" name="categories" class="filter-select">
                    <option value="shorts">Shorts</option>
                    <option value="jerseys">Jerseys</option>
                    <option value="shirts">Shirts</option>
                </select>
            </div>

            <button class="filter-button">Apply Filters</button>
          </div>

        <div className="product-item-grid">
          
          <div className="product-item">
              <Link to="/checkout">
                <img src={`${process.env.PUBLIC_URL}/images/jersey1.jpg `} alt="Pheonix Suns jersey front and back over purple background" />
              </Link>
            <p className="shop-spacing">Phoenix Jersey</p>
            <h3>$75.99</h3>
          </div>
          

          <div className="product-item">
              <Link to="/checkout">
                <img src={`${process.env.PUBLIC_URL}/images/jersey2.jpg `} alt="Miami Heat black jersey, shorts on grey. Link to product page." />
              </Link>
            <p className="shop-spacing">Miami Jersey</p>
            <h3>$75.99</h3>
          </div>

          <div className="product-item">
              <Link to="/checkout"> 
                <img src={`${process.env.PUBLIC_URL}/images/jersey3.jpg `} alt="Warriors black gold jersey. Link to product page" />
              </Link>
            <p className="shop-spacing">San Francisco Jersey</p>
            <h3>$75.99</h3>
          </div>

          <div className="product-item">
              <Link to="/checkout">
              <img src={`${process.env.PUBLIC_URL}/images/shirt1.jpg `} alt="Male model in Hollingsworth green t-shirt. link to product page." />
              </Link>
            <p className="shop-spacing">Light Grey Shirt</p>
            <h3>$15.99</h3>
          </div>

          <div className="product-item">
              <Link to="/checkout">
              <img src={`${process.env.PUBLIC_URL}/images/shirt2.jpg `} alt="male model in mint blue t-shirt/ link to detailed product page" />
              </Link>
            <p className="shop-spacing">Turquoise Shirt</p>
            <h3>$15.99</h3>
          </div>

          <div className="product-item">
              <Link to="/checkout">
              <img src={`${process.env.PUBLIC_URL}/images/shirt3.jpg `} alt="male model in a grey t-shirt. To product page" />
              </Link>
            <p className="shop-spacing">Dark Grey Shirt</p>
            <h3>$15.99</h3>
          </div>

          <div className="product-item">
              <Link to="/checkout">
              <img src={`${process.env.PUBLIC_URL}/images/short1.png `} alt="blue and white basketball shorts to detailed product page" />
              </Link>
            <p className="shop-spacing">White Short</p>
            <h3>$17.99</h3>
          </div>

          <div className="product-item">
              <Link to="/checkout">
              <img src={`${process.env.PUBLIC_URL}/images/shorts2.jpg `} alt="black basketball shorts with birds to detailed prouduct page" />
              </Link>
            <p className="shop-spacing">Black Short</p>
            <h3>$17.99</h3>
          </div>

          <div className="product-item">
              <Link to="/checkout">
              <img src={`${process.env.PUBLIC_URL}/images/short4.jpg `} alt="white and red basketball shorts with flower to detailed prouduct page" />
              </Link>
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