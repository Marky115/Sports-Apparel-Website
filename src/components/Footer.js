import { Link } from 'react-router-dom';
import '../styles/main.css';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Email submitted');
  };

  return (
    <footer>
      <h2 className="footer-h2">Stay up to date</h2>
      <div className="footer-middle">
        <input
          type="email"
          id="emailInput"
          name="email"
          aria-label="Enter email address"
          placeholder="Enter your email address"
          required
        />
        <a className="button-footer" href="#">Submit</a>
      </div>
      <div className="contact-faq">
        <div className="Contact">
          <p>
            Contact Information: <br />
            PeakPerformance@gmail.com <br />
            604-991-6969
          </p>
        </div>
        <div className="FAQ">
          <Link to="/contact">
            <p>FAQ</p>
          </Link>
          <ul>
            <li>
              <a
                href="https://docs.google.com/document/d/14iOjHVJj4CEZE1CuFV5WEqgqJekMm4QiGPQ011kypl4/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Citations
              </a>
            </li>
            <li>
              <Link to="/about">About US</Link>
            </li>
            <li>
              <Link to="/contact">Social Media</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;