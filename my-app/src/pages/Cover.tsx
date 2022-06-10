import HanaPicture from "../images/Hana-Profile.jpg"

const Cover = () => {
    return (
        <div className="background-container">
            <div className="background-picture">
            </div>
            <div className="background-profile">
                <img src={HanaPicture} className="profile-picture"/>
            </div>
        </div>
    )
}

export default Cover;