import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <div className="logo__wrapper">
          <Link>
            <FontAwesomeIcon icon={faCarrot} className="nav__icon" />
          </Link>
          <div className="logo__text--wrapper">
            <h2 className="logo__text">Bob's Grocery</h2>
            <p>Fresh & Local Since 1958</p>
          </div>
        </div>

        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/" className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Contact
            </Link>
          </li>
          {/* <button className="btn__menu">
            <img src="" alt="" />
          </button> */}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
