import Nav from "../components/Nav";
import Values from "../components/Values";
import BobsImg from "../assets/Bob's Vintage Storefront.jpg";
import CommunityImg from "../assets/grocery team volunteering at a community event.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faPersonRunning, faHeart, faFutbol } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";


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
              of Bob's Small Time Grocery nearly 70 years ago with a simple
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
      <Values />
      <section id="quote">
        <div className="quote__container">
          <blockquote className="blockquote">"A grocery store isn't just about selling food — it's about feeding families, building relationships, and nurturing a community. That's what we've always believed."</blockquote>
          <cite className="quote__cited">-Bob Thompson, Founder</cite>
        </div>
      </section>
      <section id="community">
        <div className="community__container">
          <div className="community__content">
            <h2 className="community__title">Rooted in Community</h2>
            <p className="community__para">At Bob's, we believe that a strong community is built one connection at a time. That's why we've always made it our priority to be more than just a place to shop.</p>
            <p className="community__para">Over the years, we've proudly supported numerous local initiatives:</p>
            <ul className="community__list">
              <li><FontAwesomeIcon icon={faSchool} /> School breakfast programs and fundraisers</li>
              <li><FontAwesomeIcon icon={faPersonRunning} /> Local 5K runs and community wellness events</li>
              <li><FontAwesomeIcon icon={faHeart} /> Monthly donations to the regional food bank</li>
              <li><FontAwesomeIcon icon={faFutbol} /> Youth sports team sponsorships</li>
            </ul>
          </div>
          <figure className="community__image--wrapper">
            <img className="community__image" src={CommunityImg} alt="Bob's Grocery team" />
          </figure>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
