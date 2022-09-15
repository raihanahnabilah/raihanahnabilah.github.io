import {Box} from "@chakra-ui/react";
import CardModal from "../components/CardModal";
import CaptureTheFruits from "../images/CaptureTheFruitsCombined.png";
import FruitsImage from "../images/Fruits_Modal.png";
import PubApp from "../images/PubApp.png";
import PubImage from "../images/Pub_Modal.png";
import SplitImage from "../images/Split_Modal.png";
import GrabImage from "../images/Grab_Modal.png";
import ShopeeImage from "../images/Shopee_Modal.png";
import Split from "../images/Split.png"
import Shopee from "../images/Shopee.png"
import Grab from "../images/Grab.png"


const UIPortfolio = () => {
    return(
        <Box className="grid-container">
            <CardModal picture={Split}
                       title="Split App"
                       description="A prototype of a mobile application to manage shared expenses between travelers."
                       modalDescription="A money management application for shared expenses. It's aim to help a group of people to calculate bill splitting. It includes a feature that gives the summary of how much money we owe to others and how much others owe us."
                       motivation="My friends and I often faced difficulty with keeping track and counting bill splitting on shared expenses when we travel together. That's why I come up with the idea of the app. While there are existing shared money management apps, they are quite complicated, and I need a simpler UI. As such, I did a thorough research with UI that's carefully designed for this prototype. This is also a project for Human Computer Interaction course at Uppsala University, Sweden."
                       stack="Figma."
                       link='https://drive.google.com/file/d/1gDWOq7JS3MQVreTGUVGbnisyDv8zsuvI/view?usp=sharing'
                       demo=''
                       pictureModal={SplitImage}
                       projectLink='https://www.figma.com/proto/lQF6w3Ww4ea7zvLWnHJWCx/HCI---Manage-Shared-Expenses?page-id=0%3A1&node-id=13%3A1134&starting-point-node-id=13%3A1134&scaling=min-zoom'
            />
            <CardModal picture={Grab}
                       title="Grab Calories"
                       description="A prototype of an additional feature in Grab app that has calorie count of each food."
                       modalDescription="A new feature on Grab Food that includes calorie count and nutritional information for each food sold in the menu. The project features two UI prototypes: one for the user/customer and the other for the merchant."
                       motivation="The app aims to help people to lead to a healthier lifestyle. A project for Product Management mentorship program under Rakuten Asia. "
                       stack="Figma."
                       link='https://docs.google.com/presentation/d/1PvofiFCojjnh9rbpfMXOst9vKjj0I4URD2gQw1Pmg_M/edit?usp=sharing'
                       demo=''
                       pictureModal={GrabImage}
                       projectLink='https://www.figma.com/proto/HIxbahkiH0vzFKwudBAUin/%5BUser-Extended%5D-Grab-Food-Calories-Wireframe?page-id=0%3A1&node-id=1%3A339&starting-point-node-id=1%3A339'
            />
            <CardModal picture={Shopee}
                       title="Shopee Price Comparison"
                       description="A prototype of an additional feature in Shopee app that has price comparison of different products."
                       modalDescription="A new feature on Shopee whereby users can do products comparison up to three products before deciding which product they want to buy."
                       motivation="My friends and I often have difficulties going back and forth between similar products to compare the price, review, and product description in general. As such, to make the product comparison process more efficient, we were thinking of creating a product comparison feature. This is also a project for Shopee Product Challenge."
                       stack="Figma."
                       link='https://drive.google.com/file/d/11dsSyabTPiEqK_lB8Q71UZpDwX-bqpFk/view?usp=sharing'
                       demo=''
                       pictureModal={ShopeeImage}
                       projectLink='https://www.figma.com/proto/EeOlXGrDcpVr36dLvNeL7u/Shopee-Product-Challenge-(Copy)?page-id=0%3A1&node-id=147%3A0&starting-point-node-id=147%3A0'
            />
        </Box>
    )
}
export default UIPortfolio;