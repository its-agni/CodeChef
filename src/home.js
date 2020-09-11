import React from 'react';
import './App.css';
import Logo from "./codechef.png";
import Logo2 from "./codechef2.png";
import Dish from "./dish.png";
import CP from "./Logos/CP.png";
import DS from "./Logos/DS.png";
import Corp from "./Logos/corporate.png";
import AppDev from "./Logos/appdev.png";
import WebDev from "./Logos/webdev.png";
import Create from "./Logos/creatives.png";
import {Link,withRouter} from 'react-router-dom';


class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="App">
            <div class="shadow p-1 mb-5 rounded" style={{background:"none"}}>
            <nav class="navbar navbar-light">
            <a class="navbar-brand mr-5" href="#">
                <img src={Logo} width="180" className="mb-auto" height="35" class="d-inline-block align-top" alt=""></img>
            </a>
            <nav class="nav ml-auto">
            <a class=" link_my px-5 active" href="#">HOME</a>
            <Link class=" link_my px-5" to="/team">TEAM</Link>
            <Link class=" link_my px-5" to="/events">EVENTS</Link>
            </nav>
            </nav>
            </div>
            <div className="mx-5">
                <div className="row landing" >
                    <div className="col-6">
                        <h1 id="head">
                            CodeChef <br></br>SRM Chapter
                        </h1>
                        <div id="head-text">
                                <p>Cooking delicious code since <span class="sept">September 2019.</span></p><hr className="my-4"></hr>
                                <p style={{fontSize:"20px"}}>Boring coding sessions, low grades and hours of debugging... life feels off right?<br></br> Well, we have something to help you with this situation.</p>
                        </div>
                        <div id="head-social" className="row">
                        <div className="col-3"><a id="social" href = "https://www.instagram.com/codechefsrm/"><span className = "fa fa-instagram fa-2x"></span></a></div>
                        <div className="col-3"><a id="social" href = "https://www.facebook.com/CodeChefSRM"><span className = "fa fa-facebook fa-2x"></span></a></div>
                        <div className="col-3"><a id="social" href = "https://twitter.com/CodeChefSRM"><span className = "fa fa-twitter fa-2x"></span></a></div>
                        <div className="col-3"><a id="social" href = "https://www.linkedin.com/company/ccscsrm/"><span className = "fa fa-linkedin fa-2x"></span></a></div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <img src={Dish} width="634" height="350" style={{marginTop:"200px",marginLeft:"90px"}}></img>
                    </div>
                </div>
                <hr className="my-5"></hr>
                <div className="about">
                   <h1 className="text-center" id="about">
                      About Us 
                   </h1>
                   <p id="aboutus">
                   <span class="sept">CodeChef SRM</span> is a non-profital technical student's chapter under the alliance of <span class="sept">CodeChef</span>,
                   a product of Unacademy.Our main motive is to spread and promote competitive coding on our campus.
                   The chapter is a group of people brought together in order to gain knowledge and learn new skills.
                   We organize various events like <span class="sept">Coding</span> and <span class="sept">Debugging</span> competition to give students the correct exposure required to become better programmer.
                   The workshops we conduct have reknown speakers to provide the best learning environment to the students.
                   In order to discover new aspects we undertake various projects in different fields such as <span class="sept">Android Development</span>,
                   <span class="sept">Web Development</span>, <span class="sept">Data Science</span> etc. 
                   </p>
                </div>
                <hr className="my-5"></hr>
                <div className="domains">
                <h1 className="text-center" id="about">
                      Domains
                   </h1> 
                   <div className="domaincard container">
                   <div class="card-deck">
                    <div style={{background:"none"}} class="card shadow p-3 mb-5 bg-white rounded domaincards">
                        <img class="card-img-top" src={CP} alt="Card image cap" height="230" width="50"></img>
                        <div class="card-body">
                        <h5 class="card-title">Competitive Coding</h5>
                        </div>
                    </div>
                    <div style={{background:"none"}} class="card shadow p-3 mb-5 bg-white rounded domaincards">
                        <img class="card-img-top" src={WebDev} alt="Card image cap" height="230" width="50"></img>
                        <div class="card-body">
                        <h5 class="card-title">Web Development</h5>
                        </div>
                    </div>
                    <div style={{background:"none"}} class="card shadow p-3 mb-5 bg-white rounded domaincards">
                        <img class="card-img-top" src={AppDev} alt="Card image cap" height="230" width="15"></img>
                        <div class="card-body">
                        <h5 class="card-title">App Development</h5>
                        </div>
                    </div>
                    <div style={{background:"none"}} class="card shadow p-3 mb-5 bg-white rounded domaincards">
                        <img class="card-img-top" src={DS} alt="Card image cap" height="230" width="50"></img>
                        <div class="card-body">
                        <h5 class="card-title">Data Science</h5>
                        </div>
                    </div>
                    </div>
                    <div class="card-deck">
                    <div className="col-3"></div>
                    <div style={{background:"none"}} class="card shadow p-3 mb-5 bg-white rounded domaincards">
                        <img class="card-img-top" src={Corp} alt="Card image cap" height="230" width="50"></img>
                        <div class="card-body">
                        <h5 class="card-title">Corporate</h5>
                        </div>
                    </div>
                    <div style={{background:"none"}} class="card shadow p-3 mb-5 bg-white rounded domaincards">
                        <img class="card-img-top" src={Create} alt="Card image cap" height="230" width="50"></img>
                        <div class="card-body">
                        <h5 class="card-title">Creatives</h5>
                        </div>
                    </div>
                    <div className="col-3"></div>
                    </div>
                   </div>
                </div>
            </div>
            <hr className="my-5"></hr>
            <div className="footer">
                <img src={Logo2} style={{marginLeft:"825px",marginTop:"30px",marginBottom:"50px"}} height="77" width="250"></img>
                <p className="text-center"><span style={{color:"#713e20",fontSize:"18px",fontWeight:800}}>CodeChef SRM 2020</span> <br></br> <span style={{fontWeight:"bold",fontSize:"20"}}>©</span> <br></br> <span className="muted">All Rights Reserved.</span></p>
                <p className="text-center" style={{fontWeight:"400",fontSize:"22px"}}>Contact: <a href="mailto:codechefsrm@gmail.com"><span className="fa fa-envelope fa-lg mx-3"></span></a> | <a href="tel:+918791615165"><span className="fa fa-phone fa-lg mx-3"></span></a></p>
                <p id="line">
                    {"<"}--------------------------------------------------------------------------------------------------------------------{">"}
                </p>
            </div>
            </div>
        );
    }
}

export default withRouter(Home);