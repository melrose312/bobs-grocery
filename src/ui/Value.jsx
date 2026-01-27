import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Value({ icon, title, subtitle }) {
  return (
    <div className="value__card">
      <FontAwesomeIcon icon={icon} className="value__icon" />
      <h3 className="value__title">{title}</h3>
      <p className="value__subtitle">{subtitle}</p>
    </div>
  );
}

export default Value;
