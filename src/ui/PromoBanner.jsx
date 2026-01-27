import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

function PromoBanner() {
  return (
    <section className="promo__container">
      <div className="promo__banner">
        <h2 className="promo__headline">
          <FontAwesomeIcon
            icon={faExclamation}
            bounce
            style={{ color: "#eb1e1e" }}
          />{" "}
          Weekend Special{" "}
          <FontAwesomeIcon
            icon={faExclamation}
            bounce
            style={{ color: "#eb1e1e" }}
          />
        </h2>
        <p className="promo__para">
          Get 20% off all fresh produce this Saturday and Sunday! Stock up on
          healthy goodness for the whole family
        </p>
        <button>Get Directions</button>
      </div>
    </section>
  );
}

export default PromoBanner;
