import React from 'react';
import twitter from '../src/assets/twitter.png';
import facebook from '../src/assets/facebook.png';
import github from '../src/assets/github.png';
import mail from '../src/assets/email.png';
import instagram from '../src/assets/instagram.png';
import linkedin from '../src/assets/linkedin.png';
import Slide from 'react-reveal';

class ContactMe extends React.Component {
    render() {
        return(
            <section className="contactsection">
                <div className="contactdivheading">
                <h1>Contact Me</h1>
                </div>
                <div className="contactdiv">
                    <a href="https://twitter.com/Harivansh811">
                    <Slide left>
                        <img className="socialicons" src={twitter} alt="twitter logo" title="Twitter"/>
                    </Slide>
                    </a>
                    <a href="mailto:mathurharivansh811@gmail.com">
                    <Slide right>
                        <img className="socialicons" src={mail} alt="mail logo" title="E-Mail"/>
                    </Slide>
                    </a>
                    <a href="https://www.linkedin.com/in/harivansh-mathur-a01736175/">
                    <Slide left>
                        <img className="socialicons" src={linkedin} alt="linkedin logo" title="LinkedIn"  />
                    </Slide>
                    </a>
                    <a href="https://github.com/Harivansh8888">
                    <Slide right>
                        <img className="socialicons" src={github} alt="github logo" title="GitHub"/>
                    </Slide>
                    </a>
                    <a href="https://www.facebook.com/harivanshmathur.811">
                    <Slide left>
                        <img className="socialicons" src={facebook} alt="facebook logo" title="Facebook"/>
                    </Slide>
                    </a>
                    <a href="https://www.instagram.com/thisisharivansh/">
                    <Slide right>
                        <img className="socialicons" src={instagram} alt="instagram logo" title="Instagram"/>
                    </Slide>
                    </a>
                </div>
            </section>
        );
    }
}

export default ContactMe;