import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faHandshake, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Benefits() {
    return (
        <section className="benefits">
            <div className="benefits__container">
                <h2>Why Shop With Us?</h2>
                <div className="benefits__items">
                    <div className="benefit__card">
                        <FontAwesomeIcon icon={faLeaf} className="benefit__icon" />
                        <h3 className="benefit__title">Locally Sourced</h3>
                        <p className="benefit__subtitle">
                            We partner with local farmers and producers to bring you the freshest goods.
                        </p>
                    </div>
                    <div className="benefit__card">
                        <FontAwesomeIcon icon={faHandshake} className="benefit__icon" />
                        <h3 className="benefit__title">Community First</h3>
                        <p className="benefit__subtitle">
                            We're more than a store — we're your neighbors, committed to giving back.
                        </p>
                    </div>
                    <div className="benefit__card">
                        <FontAwesomeIcon icon={faCircleCheck} className="benefit__icon" />
                        <h3 className="benefit__title">Quality Guaranteed</h3>
                        <p className="benefit__subtitle">
                           Every product is handpicked to meet our high standards of freshness and quality. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits;