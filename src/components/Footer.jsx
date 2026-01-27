import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__column footer__brand">
                    <div className="footer__logo">
                        <FontAwesomeIcon icon={faCarrot} className="footer__icon" />
                        <div className="footer__logo-text">
                            <h3>Bob's Grocery</h3>
                            <span>Fresh & Local Since 1958</span>
                        </div>
                    </div>
                    <p className="footer__description">
                        Your trusted neighborhood grocery store, serving the community with fresh produce, quality goods, and friendly service since 1958.
                    </p>
                </div>

                <div className="footer__column">
                    <h4 className="footer__heading">Quick Links</h4>
                    <ul className="footer__links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer__column">
                    <h4 className="footer__heading">Store Hours</h4>
                    <ul className="footer__hours">
                        <li>Mon - Fri: 7am - 9pm</li>
                        <li>Saturday: 8am - 8pm</li>
                        <li>Sunday: 9am - 6pm</li>
                    </ul>
                </div>
            </div>

            <div className="footer__copyright">
                <p>© 2026 Bob's Small Time Grocery. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
