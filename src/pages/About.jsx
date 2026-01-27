import Nav from "../components/Nav";
import BobsImg from "../assets/Bob's Vintage Storefront.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faUsers, faMedal } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <Nav />
      <section id="about">
        <div className="about__container">
          <h1 className="about__title">Our Story</h1>
          <p className="about__subtitle">
            More than a grocery store, we're part of the family.
          </p>
        </div>
      </section>
      <section id="story">
        <div className="story__container">
          <figure className="story__img--wrapper">
            <img src={BobsImg} alt="Historical photo of Bob's Grocery in the early days" />
          </figure>
          <div className="story__content">
            <h2 className="story__title">From Humble Beginnings</h2>
            <p className="story__para">
              What started as a small corner store with a big dream has grown
              into a beloved community landmark. Bob Thompson opened the doors
              of Bob's Small Time Grocery nearly 40 years ago with a simple
              mission: to provide his neighbors with the freshest groceries and
              the friendliest service in town.
            </p>

            <p className="story__para">
              Back then, Bob knew every customer by name, remembered their
              favorite products, and always had time for a friendly chat. Today,
              that same spirit lives on. While we've grown and evolved over the
              decades, we've never lost sight of what matters most — treating
              every customer like family.
            </p>

            <p className="story__para">
              Now in its second generation of family ownership, Bob's Grocery
              continues to be the heart of our neighborhood, where quality
              products and genuine connections come together.
            </p>
          </div>
        </div>
      </section>
      <section className="values">
        <h2 className="values__heading">Our Mission & Values</h2>
        <p className="values__para">These core principles guide everything we do, from selecting products to serving our customers.</p>
        <div className="values__container">
          <div className="value__card">
            <FontAwesomeIcon icon={faLeaf} className="value__icon" />
            <h3 className="value__title">Fresh & Local</h3>
            <p className="value__subtitle">We partner with local farmers and suppliers to bring you the freshest produce and products. When you shop here, you're supporting your local community.</p>
          </div>
          <div className="value__card">
            <FontAwesomeIcon icon={faUsers} className="value__icon" />
            <h3 className="value__title">Community First</h3>
            <p className="value__subtitle">We believe in giving back. From sponsoring little league teams to donating to food banks, we're invested in making our neighborhood stronger</p>
          </div>
          <div className="value__card">
            <FontAwesomeIcon icon={faMedal} className="value__icon" />
            <h3 className="value__title">Quality Always</h3>
            <p className="value__subtitle">Every product on our shelves meets our high standards. We personally stand behind everything we sell because your trust means everything to us.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
