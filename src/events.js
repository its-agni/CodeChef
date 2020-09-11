import React from 'react';
import axios from 'axios';
import './App.css';
import Logo from "./codechef.png";
import Logo2 from "./codechef2.png";
import {Link,withRouter} from 'react-router-dom';
import Carousel from 'nuka-carousel';



class Events extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            result : []
        }
    }
    componentDidMount(){
        axios.get('https://events-63eee.firebaseio.com/.json')
        .then(res => {
            
            var result = res.data.Events;
            var keys = Object.keys(result);
            for(var i=0;i<keys.length;i++){
                var k = keys[i];
                this.setState({
                    result : this.state.result.concat(result[k])
                })
            }
        })
    }

    render(){
        var renderTable = (event) =>{
            return(
                <tr>
                <td className="event">{event.title}</td>
                <td>{event.date}</td>
                </tr>
            );
        } 

         var renderEvent = (event) => {
             return(

                <div>
                    <div class="card mb-3 domaincards" style={{maxWidth: "540px",background:'none'}}>
                <div class="row no-gutters">
                <div class="col-md-4">
                    <img src={event.img} class="card-img" alt="..."></img>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <div className="row">
                            <div className="col-8">
                            <h5 class="card-title">{event.title}</h5>
                            </div>
                            <div className="col-12 col-md-4">
                            <p class="card-text"><small class="text-muted">{event.date}</small></p>
                            </div>
                        </div>
                    <p class="card-text">{event.des}</p>
                    <a href={event.link} class="btn btn-outline-secondary btn-sm" target="_blank">Link</a>
                    </div>
                </div>
                </div>
                </div>
                </div>
                
             );
         }

         var Res = this.state.result.reverse();
        
        return(
            < div className="App">
                 <div class="shadow p-1 mb-5 rounded" style={{background:"none"}}>
            <nav class="navbar navbar-light">
            <a class="navbar-brand mr-5" href="#">
                <img src={Logo} width="180" className="mb-auto" height="35" class="d-inline-block align-top" alt=""></img>
            </a>
            <nav class="nav ml-auto">
            <Link class=" link_my px-5" to="/">HOME</Link>
            <Link class=" link_my px-5" to="/team">TEAM</Link>
            <Link class=" link_my px-5 active" to="/events">EVENTS</Link>
            
            </nav>
            </nav>
            </div>
            <h1 className="text-center" id="about">
                                    Events
                </h1>
                <div id="eventdes">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="container">
                <Carousel>
                    <img src="https://lh3.googleusercontent.com/WQiUGiTTA9AFX1KL9P6ft2FhViCNpbF2Q5GxgcUI1o-mNaq-1V6q7LD9eTlUJm5phcywnsAeuWyCvKmoegKa1EpedVSJXYUmRdsLGd3WCJjfY4kd_9ETpt8H1VMiTWBslQfe1v8VTWEGXHGsE2FWMu7pd7X6DKq_ZpEGzK2B9rEheLScFkTNwg9yxSVyCovpVNSC9Mk8RLNd_-Ad1kZMBh8i4eTt1Fdq3A3TZQGbJrwcAHJ7KBvl5CFLDV4D_okNdoN4-k0LcY8vTHL0rE1RPzIN3vw3ge93Df0tm6byO7eCUA-IMqG0mNkf_4XTOIUbmvDwkuYzAih5XAgI43I63b9XG5jae1p_IoHbA8HXG2IPYOxzv8EiqDf36tbpq6zeFvtcIMtTMRDf3mTJOa8Xarb1Qo2cg3TgexpVpZ6wKDHlzGJ3VLUzovI1UnRshXcNIf0MvgRsmNYePWn9ph2sNRJ4kIhzxPR8cYrJtifWwyYjH3cOFltBXF6VVhan7Pa6xAfgIo8JMgvW9aJbD39J2p534Fcvmvp-UiDVyfIvGSZlMcEg0P4JRUpRmLWLEbtktJ26fEt2PfF8xoyBsGTT9Mw7gdg_pst-9scp15Hg0TS11S82M-J3xS0jz5OEUo6tJ4Wwv9TS917qRgcWuozDo5lfR7h-Wfz81NJf06a9Lvp41PrhDhO0QFx8KwUr=w1469-h979-no?authuser=0" />
                    <img src="https://lh3.googleusercontent.com/UiCqQRKomMPX50FtWw6OTMPQQAyNOEjmNe7qN68ylXV-x2ayKYGeutT40-EozKSYAfFkTtyKXdV2bXVY_DqHGoJR1hfKk0zgemGXj4nrChjsN5OHbqXw-rQx5cddX3PMdYdIk7nrQY-ksRimxwfO8eDimxozVHdE7z4o8r7G4CmFty4cPEil-bkz5a1fEPYeCTlK8Yn8sCCIJK-sLrZmCHhBhL_QdBdi4m_4jhKqsBWn2wwWSr-i_gahWeZK2OU9ZDzvFJfSGFera_QI8besKBUf2OlE8dXGjsKHh6nHsPctvI1aUk8UZosbHniGHOD8fgVewbOqYfc4_CoD_A2slOVM_CL7AoyQncJv7vkYyyfHX-fYFzk8h0c4c8lPTTU5WMDr5aD-MZzq2yzYCA84VFHv_TGPhgGF2yXLDGY0aZ7WHPFIEfzgHhlZYrEQGDYZ2pAmwpe9Qs7uS9qIY2Vf6NJEtytoMyl2LSGQFdEuMaYXf82zJ07g0Ga8BgyL_s15eJm3FHrVc4ObAlkByJ3zlh7SIWgEYWsCvbNr_rvwF-iMNsWXWI__qN3WMD30qMXsdrKu3kNqvDolz2nwNg2nxlgZVT0InjWfs0-4rItp0b1NgXn8e3UomGLD2KHzj3QzV8rV_ugMPrEqDkLQffo2MDkfqBebD9ETD8dS7jlcLMBsGFWtqAIG9x99gk6s=w1306-h979-no?authuser=0" />
                    <img src="https://lh3.googleusercontent.com/XapeJkG0oHTckJVS1c56BosYn1rh-AnXu8kvkCRsQhHPnlzJ18Pp-GNO13LrJxHAytr5fXQEmZAY0bcGtNJYbCk6QloAq6O8hTwy4I2-2d-zx1wYHCpGEUkbAL2C9OWoP3dQIlHQzSMh87Kx5rVj67h-IiIma3efOjtS-1Kvar4cocYXVCIqKWLDte3c2pzMSS6DVBlnEomyJ3zKJTzHB6EGFIjkI32_6wGtoVR_aVsJtTLlfMnzXbjhkiqsMuZsXY6E8HK4oCacLw-jDztp60s3QUxMgEu1t1_yxFVEOqqGjS7rwVAfkV4obBfq0WAEOLo4UCn_m6ne8Svqu07WrEHc4Ks0AqObtm9A8US4m8JBrFBZ4u5WYIhO3Rw-8-6typKm3SNzja_d07F-oCZ0u1oBSMeVKHhZefueUVgmhA39I474OtzH874A41H0VKkqIBtMRby_vNnHtF2Hq5k5yPQwS2X3onES7rgwmQl-btOa2DFgqPJ_AsL21i44152hmGrtwl7mvoKb8NzJKapuZmkeGLCUbYRoe5YlAxcTTNSog8P1e2B5KXEuuS9DYzkDEuxdApetn0a8b_TDsKcAMWIlGXyv_bxdOhDF2-7p6YM36SByrnIrJlVVnnICrS3tNyfMgtUvao3OsZLKxs9hOdt9V0xoa17dBFPOW5ow2sRn3iTsJ9vcqiSOCwWG=w1469-h979-no?authuser=0" />
                    <img src="https://lh3.googleusercontent.com/ALyLAfHgDji-OH4IzOHMw28AOZVPr252GQL_6qN54sOhP6S43ClxR0p2UtTdlMzhAVDhyfe7fI-qlxSALaCz2wni0teRRNLdq3J3Auy5ySyAnBC2G8a8naCgW38Ngw5aIVKrTKf1CQrC41JUsUBJmXPPbO0fbI7BJCJ6f4BWhINVxLbkSR2V5NhMHB3LtALwNGcM4DM0GFzvuLzFWeX5jaLV94HuQwVsPS2ajVEgvzgreaZxqApGjOMV_sJWhVBLdh9KWSRnsGc0EiV3MCmvvxt5GaOca3VHjv7OcikIrsqeH7m0w3mj3qh12U4i_a7ROg0RdP-yrMYjW910T-oYXy2qDXfRL4CHriGp4KSjD1p7EftT-h3xZ3WYofeEoEQ-cqvH0_vxYJYpZTxqcBSk_Qu1HRlnv-sgpPqxNFM7kBVFvpKqyyT4QKa3q4M_mHQnstXVu1PO_MQYus25j3dbiwONcooTf87koopcGiczLaSYhihbLvE4M8uCLBVLbpG5afxg3U4YV51MWF9uTQ8ZweD8cnocYrYKVt_pdEQAZvo6HFOosXvPR74X7PlnyDM8isIB1ME_m5jIS-UJcJm4raLJbwFNsiC2yc9km9EiM24TuApLOa-yNTwR0QkPYmudOZY3-pi7tmqJ_l3OVTOeqTiyzUxq2pBYIst_2kOcnbXXwi4KYOcZEM6SpYJc=w1469-h979-no?authuser=0" />
                </Carousel>
                </div>
            <div>
            </div>
            <div>
            <div className="container">
            <div className="col-12 col-lg-6 offset-lg-3">
            {Res.slice(0,1).map(renderEvent)}
            </div>
            <div className="listofevents">
               
              <h3 id="all" className="text-center">
                  All Events
              </h3>
                <table class="table" style={{background:"none"}}>
                    <thead>
                        <tr>
                        <th scope="col">Event</th>
                        <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Res.map(renderTable)}
                        <tr>
                        <td className="event">Resume Building Webinar</td>
                        <td>2020-07-25</td>
                        </tr>
                        <tr>
                        <td className="event">Bug Crush</td>
                        <td>2020-05-11</td>
                        </tr>
                        <tr>
                        <td className="event">Let's code</td>
                        <td>2020-02-07</td>
                        </tr>
                        <tr>
                        <td className="event">A Pinch Of Code</td>
                        <td>2020-10-11</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
                </div>
                <div className="footer">
                <img src={Logo2} style={{marginLeft:"825px",marginTop:"30px",marginBottom:"50px"}} height="77" width="250"></img>
                <p className="text-center"><span style={{color:"#713e20",fontSize:"18px",fontWeight:800}}>CodeChef SRM 2020</span> <br></br> <span style={{fontWeight:"bold",fontSize:"20"}}>©</span> <br></br> <span className="muted">All Rights Reserved.</span></p>
                <p className="text-center" style={{fontWeight:"400",fontSize:"22px"}}>Contact: <a href="mailto:codechefsrm@gmail.com"><span className="fa fa-envelope fa-lg mx-3"></span></a> | <a href="tel:+918791615165"><span className="fa fa-phone fa-lg mx-3"></span></a></p>
                <p id="line">
                    {"<"}--------------------------------------------------------------------------------------------------------------------{">"}
                </p>
            </div>
            </div>

   
            </div>
        );
    }
}

export default withRouter(Events);