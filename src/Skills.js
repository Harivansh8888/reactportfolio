import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from 'react-visibility-sensor';


class Skill extends React.Component {
    render() {
        return (
            <section className="skillsection">
            <Fade bottom>
            <div className="headingdiv">
            <h1 className="skillheading">Skills</h1>
            </div>
            </Fade>
            <div className="allskillsfirst">
            <Zoom top>
            <div className="skillsdiv">    
            <VisibilitySensor>
            {({ isVisible }) => {
              const c = isVisible ? 60 : 0;
              return (
                <CircularProgressbar
                  value={c}
                  text={`C`}
                  strokeWidth={4}
                  styles={{
                    path: {
                      stroke: '#cbff00',
                      strokeLinecap: 'butt',
                    },
                    trail: {
                      stroke: '#eeeeee',
                      strokeLinecap: 'butt',
                    },
                    text: {
                      fill: 'white',
                      fontSize: '15px',
                    }
                  }}
                />
              );
            }}
            </VisibilitySensor>
            </div>
            <div className="skillsdiv">    
            <VisibilitySensor>
            {({ isVisible }) => {
              const cplusplus = isVisible ? 70 : 0;
              return (
                <CircularProgressbar
                  value={cplusplus}
                  text={`C++`}
                  strokeWidth={4}
                  styles={{
                    path: {
                      stroke: '#cbff00',
                      strokeLinecap: 'butt',
                    },
                    trail: {
                      stroke: '#eeeeee',
                      strokeLinecap: 'butt',
                    },
                    text: {
                      fill: 'white',
                      fontSize: '15px',
                    }
                  }}
                />
              );
            }}
            </VisibilitySensor>
            </div>
            <div className="skillsdiv">    
            <VisibilitySensor>
            {({ isVisible }) => {
              const java = isVisible ? 65 : 0;
              return (
                <CircularProgressbar
                  value={java}
                  text={`Java`}
                  strokeWidth={4}
                  styles={{
                    path: {
                      stroke: '#cbff00',
                      strokeLinecap: 'butt',
                    },
                    trail: {
                      stroke: '#eeeeee',
                      strokeLinecap: 'butt',
                    },
                    text: {
                      fill: 'white',
                      fontSize: '15px',
                    }
                  }}
                />
              );
            }}
            </VisibilitySensor>
            </div>
            <div className="skillsdiv">    
            <VisibilitySensor>
            {({ isVisible }) => {
              const python = isVisible ? 70 : 0;
              return (
                <CircularProgressbar
                  value={python}
                  text={`Python`}
                  strokeWidth={4}
                  styles={{
                    path: {
                      stroke: '#cbff00',
                      strokeLinecap: 'butt',
                    },
                    trail: {
                      stroke: '#eeeeee',
                      strokeLinecap: 'butt',
                    },
                    text: {
                      fill: 'white',
                      fontSize: '15px',
                    }
                  }}
                />
              );
            }}
            </VisibilitySensor>
            </div>
            </Zoom>
            </div>
            <div className="allskills">
            <Zoom top>
            <div className="skillsdiv">    
            <VisibilitySensor>
            {({ isVisible }) => {
              const html = isVisible ? 70 : 0;
              return (
                <CircularProgressbar
                  value={html}
                  text={`HTML`}
                  strokeWidth={4}
                  styles={{
                    path: {
                      stroke: '#cbff00',
                      strokeLinecap: 'butt',
                    },
                    trail: {
                      stroke: '#eeeeee',
                      strokeLinecap: 'butt',
                    },
                    text: {
                      fill: 'white',
                      fontSize: '15px',
                    }
                  }}
                />
              );
            }}
            </VisibilitySensor>
            </div>
            <div className="skillsdiv">    
            <VisibilitySensor>
            {({ isVisible }) => {
              const css = isVisible ? 75 : 0;
              return (
                <CircularProgressbar
                  value={css}
                  text={`CSS`}
                  strokeWidth={4}
                  styles={{
                    path: {
                      stroke: '#cbff00',
                      strokeLinecap: 'butt',
                    },
                    trail: {
                      stroke: '#eeeeee',
                      strokeLinecap: 'butt',
                    },
                    text: {
                      fill: 'white',
                      fontSize: '15px',
                    }
                  }}
                />
              );
            }}
            </VisibilitySensor>
            </div>
            <div className="skillsdiv">    
            <VisibilitySensor>
            {({ isVisible }) => {
              const js = isVisible ? 60 : 0;
              return (
                <CircularProgressbar
                  value={js}
                  text={`JavaScript`}
                  strokeWidth={4}
                  styles={{
                    path: {
                      stroke: '#cbff00',
                      strokeLinecap: 'butt',
                    },
                    trail: {
                      stroke: '#eeeeee',
                      strokeLinecap: 'butt',
                    },
                    text: {
                      fill: 'white',
                      fontSize: '15px',
                    }
                  }}
                />
              );
            }}
            </VisibilitySensor>
            </div>
            <div className="skillsdiv">    
            <VisibilitySensor>
            {({ isVisible }) => {
              const react = isVisible ? 55 : 0;
              return (
                <CircularProgressbar
                  value={react}
                  text={`React`}
                  strokeWidth={4}
                  styles={{
                    path: {
                      stroke: '#cbff00',
                      strokeLinecap: 'butt',
                    },
                    trail: {
                      stroke: '#eeeeee',
                      strokeLinecap: 'butt',
                    },
                    text: {
                      fill: 'white',
                      fontSize: '15px',
                    }
                  }}
                />
              );
            }}
            </VisibilitySensor>
            </div>
            </Zoom>
            </div>
            <div className="allskills">
            <Zoom top>
            <div className="skillsdiv">    
            <VisibilitySensor>
            {({ isVisible }) => {
              const bootstrap = isVisible ? 60 : 0;
              return (
                <CircularProgressbar
                  value={bootstrap}
                  text={`Bootstrap`}
                  strokeWidth={4}
                  styles={{
                    path: {
                      stroke: '#cbff00',
                      strokeLinecap: 'butt',
                    },
                    trail: {
                      stroke: '#eeeeee',
                      strokeLinecap: 'butt',
                    },
                    text: {
                      fill: 'white',
                      fontSize: '15px',
                    }
                  }}
                />
              );
            }}
            </VisibilitySensor>
            </div>
            <div className="skillsdiv">    
            <VisibilitySensor>
            {({ isVisible }) => {
              const dart = isVisible ? 55 : 0;
              return (
                <CircularProgressbar
                  value={dart}
                  text={`Dart`}
                  strokeWidth={4}
                  styles={{
                    path: {
                      stroke: '#cbff00',
                      strokeLinecap: 'butt',
                    },
                    trail: {
                      stroke: '#eeeeee',
                      strokeLinecap: 'butt',
                    },
                    text: {
                      fill: 'white',
                      fontSize: '15px',
                    }
                  }}
                />
              );
            }}
            </VisibilitySensor>
            </div>
            <div className="skillsdiv">    
            <VisibilitySensor>
            {({ isVisible }) => {
              const git = isVisible ? 70 : 0;
              return (
                <CircularProgressbar
                  value={git}
                  text={`Git`}
                  strokeWidth={4}
                  styles={{
                    path: {
                      stroke: '#cbff00',
                      strokeLinecap: 'butt',
                    },
                    trail: {
                      stroke: '#eeeeee',
                      strokeLinecap: 'butt',
                    },
                    text: {
                      fill: 'white',
                      fontSize: '15px',
                    }
                  }}
                />
              );
            }}
            </VisibilitySensor>
            </div>
            <div className="skillsdiv">    
            <VisibilitySensor>
            {({ isVisible }) => {
              const linux = isVisible ? 60 : 0;
              return (
                <CircularProgressbar
                  value={linux}
                  text={`Linux`}
                  strokeWidth={4}
                  styles={{
                    path: {
                      stroke: '#cbff00',
                      strokeLinecap: 'butt',
                    },
                    trail: {
                      stroke: '#eeeeee',
                      strokeLinecap: 'butt',
                    },
                    text: {
                      fill: 'white',
                      fontSize: '15px',
                    }
                  }}
                />
              );
            }}
            </VisibilitySensor>
            </div>
            </Zoom>
            </div>
            </section>
        );
    }
}

export default Skill;