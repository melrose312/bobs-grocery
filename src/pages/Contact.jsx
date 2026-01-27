import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactCards from "../ui/ContactCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope, faClock, faMap } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      <Nav />
      <section id="contact">
        <div className="contact__container">
          <h1 className="contact__title">Get in Touch</h1>
          <p className="contact__subtitle">
            We'd love to hear from you! Stop by or give us a call.
          </p>
        </div>
      </section>
      <section id="contact__info">
        <div className="contact__info--container">
          <ContactCards
            icon={faMapMarkerAlt}
            title="Visit Our Store"
            para={
              <>
                <p className="contact__card--text">123 Main Street</p>
                <p className="contact__card--text">Maplewood, CA 90210</p>
              </>
            }
          />

          <ContactCards
            icon={faPhone}
            title="Give Us a Call"
            para={<p className="contact__card--text">(555) 123-4567</p>}
          />

          <ContactCards
            icon={faEnvelope}
            title="Email Us"
            para={<p className="contact__card--text">hello@bobsgrocery.com</p>}
          />

          <ContactCards
            icon={faClock}
            title="Store Hours"
            para={
              <>
                <p className="contact__card--text">Monday - Friday: 7:00 AM - 9:00 PM</p>
                <p className="contact__card--text">Saturday: 8:00 AM - 8:00 PM</p>
                <p className="contact__card--text">Sunday: 9:00 AM - 6:00 PM</p>
              </>
            }
          />
        </div>
      </section>
      <section id="map">
        <div className="map__container">
          <FontAwesomeIcon icon={faMap} className="map__icon" />
          <p className="map__subtitle">Map Coming Soon</p>
          <p className="map__address">123 Main Street, Maplewood, CA 90210</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;

