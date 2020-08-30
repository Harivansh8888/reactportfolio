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
                        <h3>A Web application made using React and OpenWeatherMap API</h3>
                    </div>
                    </Slide>
                    </a>
                    <a href="https://github.com/Harivansh8888/TwitterBot">
                    <Slide right>
                    <div className="projectdiv">
                        <h3>A Bot written in Python using Tweepy API for retweeting and liking tweets</h3>
                    </div>
                    </Slide>
                    </a>
                    <a href="https://github.com/Harivansh8888/Voice-Assistant">
                    <Slide left>
                    <div className="projectdiv">
                        <h3>An Assistant made using Python, Google Speech Recognition and TTS API</h3>
                    </div>
                    </Slide>
                    </a>
                    <a href="https://github.com/Harivansh8888/real-time-face-detection">
                    <Slide right>
                    <div className="projectdiv">
                        <h3>Made using OpenCV library in Python which can detect faces and smiles</h3>
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