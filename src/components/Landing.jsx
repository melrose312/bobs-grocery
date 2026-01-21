import {LandingImg} from '../assets/bunch-of-vegetables-unsplash.jpg'

function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Welcome to Bob's Small Time Grocery</h1>
            <p>
              Your friendly neighborhood grocery store where
              <span>quality meets community</span> . We've been serving fresh,
              local goods, and warm smiles for over 60 years.
            </p>
            <figure className="header__img--wrapper">
              <img src={LandingImg} alt="" />
            </figure>
            <div className="header__buttons">
              <button>Our Story</button>
              <button>Visit Us</button>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Landing;
