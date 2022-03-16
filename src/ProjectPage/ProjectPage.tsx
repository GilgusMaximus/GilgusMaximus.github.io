import SectionLine from '../SectionLine/SectionLine';
import './ProjectPage.css'

import freetubeLogo from '../res/images/freetube.png'
import stackoverflowLogo from '../res/images/stackoverflow.png'

import seminarPaper from '../res/files/Seminar_Paper_DataAnalytics_Polarity_Mining_Of_StackOverflow_v2.2.pdf'
function ProjectPage() {
    return (
        <>
            <div className="base">
                <p className="contact-text">
                    My past and current projects
                </p>
                <div className='two-column-container-contact'>
                <div className='left-container-contact'>
                    <div className="two-row-wrapper-project">
                        <img className="email-logo" src={freetubeLogo}></img>
                        <a target="_blank" href='https://github.com/FreeTubeApp/FreeTube'>Freetube on Github</a>
                        <p>Open source, desktop YouTube client perserving the users privacy while aiming for minimal compromise in usability (2020-now)</p>
                        </div>
                    </div>
                    <div className='right-container-contact'>
                        <div className="two-row-wrapper-project">
                            <img className="linked-logo" src={stackoverflowLogo}></img>
                            <a target="_blank" href='https://github.com/GilgusMaximus/PolarityMining-StackOverflow'>StackOverflow Polarity</a>
                            <p>Seminar project analysing Stackoverflow Python & C community on their stereotype of evolving into hostile environments. (2019) <a target="_blank" href={seminarPaper} className="paper-download" id='paper'>Download PDF</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <SectionLine/>
        </>
    );
}

export default ProjectPage;