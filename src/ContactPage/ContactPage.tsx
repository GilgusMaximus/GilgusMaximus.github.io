import './Contact.css'
import SectionLine from "../SectionLine/SectionLine";

import emailLogo from "../res/images/mail.png"
import linkedLogo from "../res/images/linkedin.png"
import twitterLogo from "../res/images/Twitter_Logo_Blue.png"
import githubLogo from "../res/images/github.png"

function ContactPage() {
    return (
        <>
            <div className="base">
                <p className="contact-text">
                    Get in contact with me
                </p>
                <div className='two-column-container-contact'>
                <div className='left-container-contact'>
                    <div className="two-row-wrapper">
                        <img className="email-logo" src={emailLogo}></img>
                        <a href='mailto:business@lucahohmann.com'>business@lucahohmann.com</a>
                        </div>
                    </div>
                    <div className='right-container-contact'>
                        <div className="two-row-wrapper">
                            <img className="linked-logo" src={linkedLogo}></img>
                            <a target="_blank" href='https://de.linkedin.com/in/luca-hohmann'>luca-hohmann</a>
                        </div>
                    </div>
                </div>
                <div className='two-column-container-contact'>
                    <div className='left-container-contact'>
                        <div className="two-row-wrapper">
                        <img className="github-logo" src={githubLogo}></img>
                        <a target="_blank" href='https://github.com/gilgusmaximus'>GilgusMaximus</a>
                        </div>
                    </div>
                    <div className='right-container-contact'>
                    <div className="two-row-wrapper">
                            <img className="twitter-logo" src={twitterLogo}></img>
                        <a target="_blank" href='https://twitter.com/lucahohmann'>lucahohmann</a>
                    </div>
                    </div>
                </div>
            </div>
            <SectionLine/>
        </>
    );
}

export default ContactPage;