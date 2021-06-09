import React from 'react';
import twitter from '../src/assets/twitter.png';
import facebook from '../src/assets/facebook.png';
import github from '../src/assets/github.png';
import mail from '../src/assets/email.png';
import instagram from '../src/assets/instagram.png';
import linkedin from '../src/assets/linkedin.png';
import Slide from 'react-reveal';
import { SocialIcon } from 'react-social-icons';

class ContactMe extends React.Component {
    render() {
        return(
            <section className="contactsection">
                <div className="contactdivheading">
                <h1>Contact Me</h1>
                </div>
                <div className="contactdiv">
                    <div className="singlecontactdiv">
                    <Slide left>
                        <SocialIcon url="https://twitter.com/Harivansh811" network="twitter" bgColor="#cbff00" />
                    </Slide>
                    </div>
                    
                    <div className="singlecontactdiv">
                    <Slide right>
                        <SocialIcon url="mailto:mathurharivansh811@gmail.com" network="email" bgColor="#cbff00" />
                    </Slide>
                    </div>
                    
                    <div className="singlecontactdiv">
                    <Slide left>
                        <SocialIcon url="https://www.linkedin.com/in/harivansh-mathur-a01736175/" network="linkedin" bgColor="#cbff00" />
                    </Slide>
                    </div>
                    
                    <div className="singlecontactdiv">
                    <Slide right>
                        <SocialIcon url="https://github.com/Harivansh8888" network="github" bgColor="#cbff00" />
                    </Slide>
                    </div>
                    
                    <div className="singlecontactdiv">
                    <Slide left>
                        <SocialIcon url="https://www.facebook.com/harivanshmathur.811" network="facebook" bgColor="#cbff00" />
                    </Slide>
                    </div>
                    
                    <div className="singlecontactdiv">
                    <Slide right>
                        <SocialIcon url="https://www.instagram.com/thisisharivansh/" network="instagram" bgColor="#cbff00" />
                    </Slide>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactMe;