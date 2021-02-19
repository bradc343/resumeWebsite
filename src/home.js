import React, { Component } from 'react';
// import BradsMenu from './BradsMenu';
import './Portfoilo.css';
// import logo from './signature.svg';
import curated from './curated.JPG';
import freshview from './ourfreshview.JPG';
import brad from './bradciechanowski.JPG';
import mobilecurated from './mobilecurated.JPG';
import mobilefreshview from './mobileourfreshview.JPG';
import mobilebrad from './mobilebradciechanowski.JPG';
import overdrive from './overdrive.JPG'
import mobileOverdrive from './mobileOverdrive.JPG'

class Home extends Component {
    
  componentDidMount(){
    this.updateMobileMenu2();
    window.addEventListener("resize", this.updateMobileMenu2.bind(this));
  }
  componentWillUnmount(){
    window.removeEventListener("resize", this.updateMobileMenu2.bind(this));
  }
  updateMobileMenu2() {
    if(window.innerWidth < 960) {
      this.setState({ mobilecard: true });
    } else {
      this.setState({ mobilecard: false });
    }
    console.log(this.state.mobilecard);
    console.log("hi");
  }
  
  state = {
    experience: [
      {id:1,company:'Purple Land Management',link: null, title:'Software Engineer', desc: "Purple Land Management is a Land Management company in the oil and gas industry. I am currently developing inter-company software that tracks projects, employee pay, and time which allows the company to run more efficiently.",tech:"Git, React, Redux, Node.js, Azure, Html/CSS/SCSS, express, SQL", img: overdrive, img2: mobileOverdrive},
      {id:2,company:'Curated Trades',link:'curatedtrades.com', title: 'Full-Stack Developer', desc: "Curated Trades sells profitable options trades to followers across the United States. It integrates custom JavaScript and python code on wix.com to track live trades in a trader’s portfolio. We developed algorithms in different financial markets to predict movements and place trades and is compatible across three platforms",tech:"Google Cloud Services, Python, Golang, C#, ThinkScript, Html/CSS/JavaScript, Git", img:curated, img2: mobilecurated},
      {id:3,company:'OurFreshView',link:'ourfreshview.com', title:'Full-Stack Developer', desc: "OurFreshView is a travel blog that guides travelers through unfamiliar and exotic places around the world. It features 3D design written in JavaScript and a fully functional travel app that sells some of the most budget friendly plane tickets on the internet, all custom designed and integrated into Square Space content manager.",tech:"Three.js, Node, React, Git, Square Space", img: freshview, img2: mobilefreshview},
      {id:4,company:'Bradciechanowki.com',link:'bradciechanowski.com', title:'Full-Stack Developer', desc: "Brad Ciechanowski is my portfolio page that uses some of the most popular tech. It is designed a scalable react resume app, which means it can be sold as a template and easily implement changes in work history and new projects.",tech:"Git, React, Redux, Node.js, AWS, Html/CSS/SCSS", img: brad, img2: mobilebrad}
    ],
    mobilecard: false
  };
    render() {
      

      let flipcards = this.state.mobilecard ? (
        this.state.experience.map(exper=>{
          return(
            // this is mobile
            <div className="mobileflip-card" key={exper.id}>
                <div className="mobileflip-card-inner">
                    <div className="mobileflip-card-front">
                    <img src={exper.img2} alt={exper.company} style={{width:'350px', height:'647px'}}/>
                    </div>
                    <div className="mobileflip-card-back">
                    <h1 className="mobileExpercompany">{exper.company}</h1> 
                    <p>{exper.title}</p> 
                    <p>{exper.desc}</p>
                    <a href={exper.link} style={{color:'#09d3ac'}}>{exper.link}</a>
                    <p>Tech Used:</p>
                    <p>{exper.tech}</p>
                    </div>
                </div>
            </div>
          )
        })
      ):(
        this.state.experience.map(exper=>{
          return(
            <div className="flip-card" key={exper.id}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={exper.img} alt={exper.company} style={{width:'100%', height:'100%'}}/>
                    </div>
                    <div className="flip-card-back">
                    <h1 className="Expercompany">{exper.company}</h1> 
                    <p>{exper.title}</p> 
                    <p>{exper.desc}</p>
                    <a href={exper.link} style={{color:'#09d3ac'}}>{exper.link}</a>
                    <p>Tech Used:</p>
                    <p>{exper.tech}</p>
                    </div>
                </div>
            </div>
          )
        })
      )

      // let experienceList = this.state.experience.map(exper=>{
      //   return(
      //     <div className="flip-card" key={exper.id}>
      //         <div className="flip-card-inner">
      //             <div className="flip-card-front">
      //             <img src={exper.img} alt={exper.company} style={{width:'700px', height:'400px'}}/>
      //             </div>
      //             <div className="flip-card-back">
      //             <h1 className="Expercompany">{exper.company}</h1> 
      //             <p>{exper.title}</p> 
      //             <p>{exper.desc}</p>
      //             <a href={exper.link} style={{color:'#09d3ac'}}>{exper.link}</a>
      //             <p>Tech Used:</p>
      //             <p>{exper.tech}</p>
      //             </div>
      //         </div>
      //     </div>
      //   )
      // })
    
  
      const Aux = (props) => {
        return props.children;
      };
  
      return (
        <Aux>
        
        <div className="portlist">
          {/* {experienceList} */}
          {flipcards}
        </div>
        </Aux>
      );
    }
  }
  
 

export default Home;
