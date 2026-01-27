import Value from "../ui/Value";
import { faLeaf, faUsers, faMedal } from "@fortawesome/free-solid-svg-icons";

function Values() {
  return (
    <section id="values">
      <h2 className="values__heading">Our Mission &amp; Values</h2>
      <p className="values__para">
        These core principles guide everything we do, from selecting products to
        serving our customers.
      </p>
      <div className="values__container">
        <Value
          icon={faLeaf}
          title="Fresh & Local"
          subtitle="We partner with local farmers and suppliers to bring you the freshest produce and products. When you shop here, you're supporting your local community."
        />
        <Value
          icon={faUsers}
          title="Community First"
          subtitle="We believe in giving back. From sponsoring little league teams to donating to food banks, we're invested in making our neighborhood stronger"
        />
        <Value
          icon={faMedal}
          title="Quality Always"
          subtitle="Every product on our shelves meets our high standards. We personally stand behind everything we sell because your trust means everything to us."
        />
      </div>
    </section>
  );
}

export default Values;