import './AboutPage.css'
import profileImage from '../res/images/profile.png';
import SectionLine from '../SectionLine/SectionLine';
import cvPdf from '../res/files/cv.pdf'

function AboutPage() {
    return (
        <>
        <div className='flex-base'>
            <div className='two-column-container'>
                <div className='left-container'>
                    <img className='profile-image' src={profileImage}></img>
                </div>
                <div className='right-container'>
                    <ul className='about-list'>
                        <li className='about-list-element'>Studying M.Sc. Informatics: Games Engineering @ TUM</li>
                        <li className='about-list-element'>Currently on exchange @ Aalto University</li>
                        <li className='about-list-element'>Find me at tech & business events</li>
                        <li className='about-list-element'>FOSS privacy webtech developer</li>
                        <li className='about-list-element'>Outdoor activity entusiast</li>
                    </ul>
                    <a className='cv-download' target="_blank" href={cvPdf}>Get my CV !</a>
                </div>
            </div>
        </div>
        <SectionLine/>
        </> 
    );
}

export default AboutPage;