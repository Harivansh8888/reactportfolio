import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from '../src/LandingPage';
import About from '../src/About';
import Skill from '../src/Skills';
import MyProjects from '../src/Projects';
import ContactMe from '../src/Contact';
import { WaveLoading } from 'react-loadingg';



const Loading =()=>
  <div className="loading">
    <div></div>
    <div></div>
  </div>  



class App extends React.Component {
  state = {
    loading: true,
  };
  
  componentDidMount(){
    this.isLoading = setTimeout(()=>{this.setState({loading: false})}, 2300);
  }
  componentWillUnmount() {
     clearTimeout(this.isLoading);
  }
  
  timer = () => setTimeout(()=>{
    this.setState({loading: false})
  }, 2300);

  render() {
    const {loading} = this.state;
    return (
      loading ? (<WaveLoading color="#cbff00" size="large"/>)
      :(<div className="content">
          <MyName />
          <About />
          <Skill />
          <MyProjects />
          <ContactMe />
      </div>)
    )
  }
}

export default App;