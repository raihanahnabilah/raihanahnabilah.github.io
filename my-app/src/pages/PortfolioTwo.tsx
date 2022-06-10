import Split from "../images/Split.png"
import Shopee from "../images/Shopee.png"
import Grab from "../images/Grab.png"

const PortfolioTwo = () => {
    return (
        <div className="grid-container">
            <a href="https://www.figma.com/proto/lQF6w3Ww4ea7zvLWnHJWCx/HCI---Manage-Shared-Expenses?page-id=0%3A1&node-id=13%3A1134&starting-point-node-id=13%3A1134&scaling=min-zoom" className="card-style">
                <div className="grid-box portfolio-box">
                    <img src={Split} className="grid-image"/>
                    <h3>Split App</h3>
                    <p>A prototype of a mobile application to manage shared expenses between travelers.</p>
                </div>
            </a>
            <a href="https://www.figma.com/proto/HIxbahkiH0vzFKwudBAUin/%5BUser-Extended%5D-Grab-Food-Calories-Wireframe?page-id=0%3A1&node-id=1%3A339&starting-point-node-id=1%3A339" className="card-style">
                <div className="grid-box portfolio-box">
                    <img src={Grab} className="grid-image"/>
                    <h3>Grab Calories</h3>
                    <p>A prototype of an additional feature in Grab app that has calorie count of each food.</p>
                </div>
            </a>
            <a href="https://www.figma.com/proto/EeOlXGrDcpVr36dLvNeL7u/Shopee-Product-Challenge-(Copy)?page-id=0%3A1&node-id=147%3A0&starting-point-node-id=147%3A0" className="card-style">
                <div className="grid-box portfolio-box">
                    <img src={Shopee} className="grid-image"/>
                    <h3>Shopee Price Comparison</h3>
                    <p>A prototype of an additional feature in Shopee app that has price comparison of different products.</p>
                </div>
            </a>
        </div>
    );
}
export default PortfolioTwo;