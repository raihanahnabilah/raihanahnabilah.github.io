import CaptureTheFruits from "../images/CaptureTheFruitsCombined.png"
import PubApp from "../images/PubApp.png"
import CaptureThePopsicle from "../images/CaptureThePopsicle.png"

const PortfolioOne = () => {
    return (
        <div className="grid-container">
            <a href="https://02jandal.github.io/UIP2-CaptureTheFruits/" className="card-style">
                <div className="grid-box portfolio-box">
                    <img src={CaptureTheFruits} className="grid-image"/>
                    <h3>Capture the Fruits Game</h3>
                    <p>A 2D single player game built using Typescript and ReactJS. </p>
                </div>
            </a>
            <a href="https://github.com/02JanDal/UIP1-FlyingDutchman" className="card-style">
                <div className="grid-box portfolio-box">
                    <img src={PubApp} className="grid-image"/>
                    <h3>Flying Dutchman Pub App</h3>
                    <p>A pub-food app built using Vanilla Javascript to test our User Interface development skills.</p>
                </div>
            </a>
            <a href="https://github.com/raihanahnabilah/popsicle-project" className="card-style">
                <div className="grid-box portfolio-box">
                    <img src={CaptureThePopsicle} className="grid-image"/>
                    <h3>Capture the Popsicle Game</h3>
                    <p>A 2D multi-player game using Java in AndroidStudio. Players share data in real time using Firebase. </p>
                </div>
            </a>
        </div>
    );
}
export default PortfolioOne;