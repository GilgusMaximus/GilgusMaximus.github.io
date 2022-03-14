import './Contact.css'
import SectionLine from "../SectionLine/SectionLine";

function ContactPage() {
    return (
        <>
            <div className="base">
                <div className='two-column-container'>
                    <div className='left-containter'>
                        helo 1
                    </div>
                    <div className='right-container'>
                        helo 4
                    </div>
                </div>
                <div className='two-column-container'>
                    <div className='left-containter'>
                        helo 3
                    </div>
                    <div className='right-container'>
                        helo4
                    </div>
                </div>
            </div>
            <SectionLine/>
        </>
    );
}

export default ContactPage;