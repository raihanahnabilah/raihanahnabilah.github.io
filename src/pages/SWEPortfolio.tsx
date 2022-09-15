import {Box} from "@chakra-ui/react";
import CardModal from "../components/CardModal";
import CaptureTheFruits from "../images/CaptureTheFruitsCombined.png"
import PubApp from "../images/PubApp.png"
import CaptureThePopsicle from "../images/CaptureThePopsicle.png"
import FruitsImage from "../images/Fruits_Modal.png";
import PubImage from "../images/Pub_Modal.png";
import PopsicleImage from "../images/Popsicle_Modal.png";

const SWEPortfolio = () => {
    return(
        <Box className="grid-container">
            <CardModal picture={CaptureTheFruits}
                       title="Capture the Fruits Game"
                       description="A 2D single player game built using Typescript and ReactJS."
                       modalDescription="A 2D single player game whereby players have to collect as many points as possible by eating the fruits in the game and avoid losing points from eating the poisonous ones."
                       motivation="Learning ReactJS, as a popular front-end framework, and TypeScript. This is also a project for UI Programming II course at Uppsala University, Sweden. The task was to build a project that involves media and animations; hence, the choice of building a game."
                       stack="ReactJS, Typescript, HTML, CSS, GitHub Actions."
                       link='https://docs.google.com/presentation/d/1b1qAh4P0wWpVzgzwAtLeJjar8WEJlVd6gxMHHykzUog/edit?usp=sharing'
                       demo=''
                       pictureModal={FruitsImage}
                       projectLink='https://02jandal.github.io/UIP2-CaptureTheFruits/'
            />
            <CardModal picture={PubApp}
                       title="Flying Dutchman Pub App"
                       description="A pub-food app built using Vanilla Javascript to test our User Interface development skills."
                       modalDescription="A pub application that has two views for user and bartender. Users can order drinks, and bartenders can manage user order and stock. What’s interesting about the app is its simple authentication, drag and drop method, undo/redo, and screen size responsiveness for mobile, tablet, and desktop."
                       motivation="Learning Vanilla Javascript without framework to get the gist of how Javascript works. This is also for UI Programming I course project at Uppsala University, Sweden. We were tasked to build a pub app that fulfils the functional requirements."
                       stack="HTML, CSS, Javascript."
                       link='https://docs.google.com/presentation/d/18N0xCHFjj286YfbydBC_xqKjWEY5f_YNpzTN6RqbYqQ/edit?usp=sharing'
                       demo=''
                       pictureModal={PubImage}
                       projectLink='https://github.com/02JanDal/UIP1-FlyingDutchman'
            />
            <CardModal picture={CaptureThePopsicle}
                       title="Capture the Popsicle Game"
                       description="A 2D multi-player game using Java in AndroidStudio. Players share data in real time using Firebase."
                       modalDescription="A 2D multiplayer game in Android whereby players have to dodge obstacles and get to the popsicle to win the game. The multiplayer is possible through Firebase realtime data exchange between the players. The project is built on AndroidStudio using Java without additional frameworks."
                       motivation="Learning how to build a mobile app for the first time. This is also for Software Engineering course project at Yale-NUS, Singapore."
                       stack="Java, Firebase Realtime Database, AndroidStudio, HTML, CSS."
                       link='https://docs.google.com/presentation/d/1hw7a1OVlBr9k65GNFb9zeDYW9joRCC1bEHbLZmyVJko/edit?usp=sharing'
                       demo=''
                       pictureModal={PopsicleImage}
                       projectLink='https://github.com/raihanahnabilah/popsicle-project'
            />
        </Box>
    )
}
export default SWEPortfolio;