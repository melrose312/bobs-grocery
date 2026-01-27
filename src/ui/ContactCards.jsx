import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactCards({ icon, title, para }) {
    return (
        <div className="contact__card">
            <div className="contact__icon--wrapper">
                <FontAwesomeIcon icon={icon} className="contact__icon" />
            </div>
            <div className="contact__card--content">
                <h2 className="contact__card--title">{title}</h2>
                <div className="contact__card--text-wrapper">{para}</div>
            </div>
        </div>
    );
}

export default ContactCards;