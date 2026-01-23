import HeaderImg from "../assets/bunch-of-vegetables-unsplash.jpg";

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
              <button>Our Story</button>
              <button>Visit Us</button>
            </div>
          </div>
            <figure className="header__img--wrapper">
              <img src={HeaderImg} alt="" />
            </figure>
        </div>
      </header>
    </section>
  );
}

export default Header;
