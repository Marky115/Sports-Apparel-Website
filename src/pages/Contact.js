
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// ContactPage Component
const ContactPage = () => {
  return (
    <>
      {/* Header Section */}
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
              <Link className="button-nav" to="/checkout">Checkout</Link>
            </li>
          </ul>
         
        </nav>
      </header>
      {/* Content Section */}
      <section className="Contact-design">
        <section className="spacing">
          <h1>Need help?</h1>
          <p className="contact">
            Here at PeakAtheletics we value clarity and honesty over everything. Any specific inquiries can be directed
            to us here and we will respond within 1-2 business days. We will ask you for some basic information mainly
            to do with how to reach you and your topic of interest.
          </p>
        </section>

        <section className="contact-form-spacing">
          <label htmlFor="topic">Topic:</label>
        </section>
        <section className="contact-form-spacing">
          <input type="text" id="topic" name="topic_input" className="inputForm" />
        </section>

        <section className="contact-form-spacing">
          <label htmlFor="firstname">First Name:</label>
        </section>
        <section className="contact-form-spacing">
          <input type="text" id="firstname" name="first_name" className="inputForm" />
        </section>

        <section className="contact-form-spacing">
          <label htmlFor="lastname">Last Name:</label>
        </section>
        <section className="contact-form-spacing">
          <input type="text" id="lastname" name="last_name" className="inputForm" />
        </section>

        <section className="contact-form-spacing">
          <label htmlFor="email">Email:</label>
        </section>
        <section className="contact-form-email">
          <input type="text" id="email" name="email" className="inputForm" />
        </section>

        <section className="contact-form-spacing">
          <label htmlFor="message">Message:</label>
        </section>
        <section className="contact-form-message">
          <textarea name="message" id="message" className="commentArea"></textarea>
        </section>

        <form>
          <input type="submit" value="Send Message" className="submit-btn" />
        </form>
      </section>

     
      <Footer/>
    </>
  );
};

export default ContactPage;
