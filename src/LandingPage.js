import React from 'react';
import Slide from 'react-reveal/Slide';
import arrow from '../src/assets/arrowdown.png';

class MyName extends React.Component {
    render() {
        return (
            <section className="namesection">
            <div className="mynamediv">
                <h1 className="name"><span>HARIVANSH MATHUR</span></h1>
                <a href="#about">
                <Slide top>
                    <img className="arrowimg" src={arrow} alt="arrow icon"/>
                </Slide>
                </a>
            </div>
            </section>
        );
    }
}

export default MyName;