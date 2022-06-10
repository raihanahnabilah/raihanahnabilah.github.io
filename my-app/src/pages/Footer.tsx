import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <a href="https://twitter.com/hanabilaf" className="hyperlink">
                    <FontAwesomeIcon icon={faTwitter} className="mode-switch-icon footer-socials"/>
                </a>
                <a href="https://github.com/raihanahnabilah" className="hyperlink">
                    <FontAwesomeIcon icon={ faGithub } className="mode-switch-icon footer-socials"/>
                </a>
                <a href="https://www.linkedin.com/in/hanabilaf/" className="hyperlink">
                    <FontAwesomeIcon icon={ faLinkedin } className="mode-switch-icon footer-socials"/>
                </a>
            </div>
            <div>
                Created on React by <a href="https://twitter.com/hanabilaf" className="hyperlink">Hana Nabilah Fatinah</a>.
            </div>
        </div>
    );
}
export default Footer;