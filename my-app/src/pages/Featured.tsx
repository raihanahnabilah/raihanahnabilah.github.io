import CaptureTheFruits from "../images/CaptureTheFruitsCombined.png"
import PubApp from "../images/PubApp.png"
import CaptureThePopsicle from "../images/CaptureThePopsicle.png"

const Featured = () => {
    return (
        <div className="grid-container">
            <a href="https://open.spotify.com/episode/1fV5huDcEad1rlvJ96v7jh?si=25d2abfe12bb4a93" className="card-style">
                <div className="grid-box">
                    <h3>Peer Podcast</h3>
                    <p>“A Million Ways to Grow (ft. Hana Nabilah Fatinah)”</p>
                </div>
            </a>
            <a href="https://www.youtube.com/watch?v=RPs6dv8Q520&ab_channel=CXOMedia" className="card-style">
                <div className="grid-box">
                    <h3>CXO Media</h3>
                    <p>“LDR Ep.4 - Negara Kualitas Pendidikan Terbaik Ke-4 di Dunia, Serunya Kuliah di Yale-NUS!”</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:6737343371339292673/" className="card-style">
                <div className="grid-box">
                    <h3>Mara Mentoring</h3>
                    <p>Testimony about my experience at the mentoring program with Sylvia Lim.</p>
                </div>
            </a>
            <a href="https://www.pearsoncollege.ca/media-students-2018/" className="card-style">
                <div className="grid-box">
                    <h3>UWC Global Video Ambassador</h3>
                    <p>“Meet this year’s Media students”</p>
                </div>
            </a>
            <a href="https://koran-jakarta.com/wahana-anak-bangsa-mengejar-asa?page=all" className="card-style">
                <div className="grid-box">
                    <h3>Koran Jakarta</h3>
                    <p>“Wahana Anak Bangsa Mengejar Asa”</p>
                </div>
            </a>
        </div>
    );
}
export default Featured;