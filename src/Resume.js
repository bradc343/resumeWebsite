import React, { Component } from 'react';
import BradsMenu from './BradsMenu';
import './Portfoilo.css';
import logo from './signature.svg';
import './home.scss';
import './brad (2).jpg';
import './bartender.jpg';
import './falls.jpg';
import './tiger.jpg';


class Resume extends Component {
  id = 2;
  
      render() {
        let links = [
          { label: 'Home', link: 'Home' },
          { label: 'Resume', link: 'Resume', active: true  },
          { label: 'Products', link: 'Products' },
          { label: 'Contact', link: 'Contact'},
        ];
        const Aux = (props) => {
            return props.children;
          };
        return (
            <Aux>
            <div className="container center">
              <BradsMenu links={links} logo={logo}/>
            </div>
            <div className="wrapper1 center">
                <div className="column">
                    <div className="center">
                    <img src={require('./brad (2).jpg')} alt="bar"/>
                    </div>
                    <div>
                        <div className="section-wrapper">
                            <h3 className="section-title">Skills</h3>
                            <div className="skill-percentage">HTML / HTML5</div> 
                            <div className="skill-percentage">CSS / CSS3 / SASS</div>
                            <div className="skill-percentage">Javascript</div>
                            <div className="skill-percentage">Jquery</div>
                            <div className="skill-percentage">Websocket APIs</div>
                            <div className="skill-percentage">Rest APIs</div>
                            <div className="skill-percentage">C++</div>
                            <div className="skill-percentage">Photoshop</div>
                            <div className="skill-percentage">React.js</div>
                            <div className="skill-percentage">Node.js</div>
                            <div className="skill-percentage">C#</div>
                            <div className="skill-percentage">Python</div>
                            <div className="skill-percentage">Golang</div>
                            <div className="skill-percentage">Git</div>
                            <div className="skill-percentage">Angular</div>
                        </div>
                    </div>
                </div>
                <div className="column expcolumn">
                    <div>
                        <section className="experience section-padding">
                            <div className="container">
                                <h3 className="experience-title">Experience</h3>
                            
                                <div className="experience-wrapper">
                                    <div className="company-wrapper">
                                        <div className="experience-title">Curated Trades</div> 
                                        <div className="time">Nov 2015 - Present</div>
                                    </div>
                                
                                    <div className="job-wrapper ">
                                        <div className="experience-title">Developer/Lead Trader </div>
                                        <div className="company-description">
                                            <p>Implemented a cross-platform website with React,js, Html/CSS and JavaScript to reach customers across the U.S. Developed financial algorithm to analyze markets trends in C#, Golang and Python. </p>
                                        </div>
                                    </div>
                                    
                                    <div className="company-wrapper ">
                                        <div className="experience-title">Our Fresh View</div>
                                        <div className="time">Jan 2018 - Oct 2019</div>
                                    </div>
                                    
                                    <div className="job-wrapper ">
                                        <div className="experience-title">Front-End Developer</div>
                                        <div className="company-description">
                                            <p>Designed and coded a stunning interactive 3D website for a travel blog and made it compatible with Squarespace. Created a flight Inspiration app in python that integrated Rest and WebSocket APIs.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="company-wrapper">
                                        <div className="experience-title">Rutland Tire & Wheel</div>
                                        <div className="time">Jun 2006 - Sept 2016</div>
                                    </div> 
                                    
                                    <div className="job-wrapper ">
                                        <div className="experience-title">IT Technician</div>
                                        <div className="company-description">
                                            <p>Providing a comprehensive tech support for all company computers and devices. Accurately scanned and entered car data to databases. Provided front-end development services to support and enhance company website.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <h3 className="experience-title">Education</h3>
                            
                                <div className="experience-wrapper">
                                    <div className="company-wrapper ">
                                        <div className="experience-title">Purdue University</div> 
                                        <div className="time">Jan 2016 - Dec 2019</div>
                                    </div>
                                
                                    <div className="job-wrapper">
                                        <div className="experience-title">Bachelor of Computer Science</div>
                                        <div className="company-description">
                                            <p>Graduated with Bachelors of Computer Science in Information Technology. 3.95 GPA and President's List for 6 Semesters. Completed Research in Server Communication and completed training in Project Management.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <form className="spacing" method="get" action="BradCiechanowskiDeveloper.docx">
                <button className="button1" type="submit">Download Resume</button>
            </form>
                </Aux>
            
        );
    }
} 
  export default Resume;
  