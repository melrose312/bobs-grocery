import Highlight from "../ui/Highlight";
import ProduceImg from "../assets/farm-fresh-produce-unsplash.jpg";
import BakeryImg from "../assets/artisan-bakery.jpg";
import DeliImg from "../assets/quality-deli.jpg";

function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights__container">
        <h2>Fresh Picks of the Day</h2>
        <p className="highlights__para">
          Hand selected favorites from our shelves. From farm fresh produce to
          home baked goods, discover what makes us special.
        </p>
        <div className="highlights__showcase">
          <Highlight
            image={ProduceImg}
            title="Farm Fresh Produce"
            subtitle="Locally sourced fruits and vegetables delivered fresh daily from nearby farms"
            alt="Fresh Produce"
          />
          <Highlight
            image={BakeryImg}
            title="Artisan Bakery"
            subtitle="Fresh baked bread, pastries, and treats made in house every morning"
            alt="Artisan Bakery"
          />
          <Highlight
            image={DeliImg}
            title="Quality Deli"
            subtitle="Premium deli meats, artisan cheeses, and ready-to-eat prepared meals"
            alt="Quality Deli"
          />
        </div>
      </div>
    </section>
  );
}

export default Highlights;
