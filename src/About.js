import React from 'react';
import Fade from 'react-reveal/Fade';
import myprofilepic from '../src/assets/myprofilepic-c.jpg';

class Aboutme extends React.Component {
    render() {
        return (
            <section id="about" className="aboutsection">
            <div className="aboutheadingdiv">
                <Fade bottom>
                    <h1>About Me</h1>
                </Fade>
            </div>
            <div className="contentdiv">     
                <Fade bottom>  
                <img className="myphoto" src={myprofilepic} alt="my photo"/>
                <div className="paracontent">
                <p>I am a passionate front-end developer<br/>trying to learn new things and stay updated in the field of technology.
                <br/>Currently a 4th year CS Student at UPES Dehradun
                <br/>Apart from programming, I have a keen interest in outer-space and heavenly bodies</p>
                </div>
                </Fade>
            </div>
            </section>
        );
    }
}

export default Aboutme;