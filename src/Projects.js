import React from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

class MyProjects extends React.Component {
    render() {
        return(
            <section className="projectsection">
                <div className="prodivheading">
                <Fade bottom>
                    <h1>Projects</h1>
                    </Fade>
                </div>
                <div className="prodiv">
                    <div className="mainprodiv">
                    <a href="https://hm-weather.netlify.app/">
                    <Slide left>
                    <div className="projectdiv">
                        <p className="prop">A Web application made using React and OpenWeatherMap API</p>
                    </div>
                    </Slide>
                    </a>
                    <a href="https://github.com/Harivansh8888/TwitterBot">
                    <Slide right>
                    <div className="projectdiv">
                        <p className="prop">A Bot written in Python using Tweepy API which like/retweet tweets</p>
                    </div>
                    </Slide>
                    </a>
                    <a href="https://github.com/Harivansh8888/Voice-Assistant">
                    <Slide left>
                    <div className="projectdiv">
                        <p className="prop">An Assistant made using Python, Google SR and TTS API</p>
                    </div>
                    </Slide>
                    </a>
                    <a href="https://github.com/Harivansh8888/real-time-face-detection">
                    <Slide right>
                    <div className="projectdiv">
                        <p className="prop">Made using OpenCV library in Python which can detect faces and smiles</p>
                    </div>
                    </Slide>
                    </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default MyProjects;