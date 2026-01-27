import { Link } from "react-router-dom";

function Header() {
  return (
    <section id="header">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1 className="header__tagline">
              Welcome to Bob's Small Time Grocery
            </h1>
            <p className="header__para">
              Your friendly neighborhood grocery store where
              <span className="orange"> quality meets community</span>. We've been serving fresh,
              local goods, and warm smiles for over 60 years.
            </p>
            <div className="header__buttons">
              <Link to="/about"><button className="btn__our-story">Our Story</button></Link>
              <Link to="/contact"><button className="btn__visit-us">Visit Us</button></Link>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Header;
