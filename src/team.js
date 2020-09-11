import React from 'react';
import './App.css';
import Logo from "./codechef.png";
import Logo2 from "./codechef2.png";
import {Link,withRouter} from "react-router-dom";

class Team extends React.Component{
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
            <Link class=" link_my px-5" to="/">HOME</Link>
            <a class=" link_my px-5 active" href="#">TEAM</a>
            <Link class=" link_my px-5" to="/events">EVENTS</Link>
            </nav>
            </nav>
            </div>
           
            <div className="team">
                <h1 className="text-center" id="about">
                                    Board
                </h1>
                <div className="contain">
                    <div class="card-deck text-center">
                        <div className="col-3"></div>
                                <div class="card" style={{background:"none",border:"none",marginBottom:"30px",marginTop:"30px"}}>
                                    <img class="card-img-top rounded-circle" src="https://lh3.googleusercontent.com/pw/ACtC-3fN_I1N7ceC-s1SGIAmHQhWy292AZaTlYyhRxqTC2dNP28HrqU-Y6w1gCX2qKAgbm8R3yJ1vN52iEKM38cWCwkCiyfR58HdIWI63No0nA8sxnRZwdaNziezQ5EdS08vuORdMNVApT4MDOKfzyK0d7Nf=w938-h930-no?authuser=0" alt="Card image cap" width="100" height="250"></img>
                                    <div class="card-body">
                                    <h5 class="card-title">Devansh Goswami</h5>
                                    <p class="card-text">President</p>
                                    <div className="link_my">
                                        <a href=""><span className="fa fa-github mx-2"></span></a>
                                        <a href=""><span className="fa fa-linkedin mx-2"></span></a>
                                    </div>
                                    </div>
                                </div>
                                <div class="card" style={{background:"none",border:"none",marginBottom:"30px",marginTop:"30px"}}>
                                    <img class="card-img-top rounded-circle" src="https://lh3.googleusercontent.com/8NSe0dzsCAcrhIPUH-yNutAorJfmF0qw2do97CJAsEKaLA_whcGXsDV2DLuZmRFIcjhak5i_pBcVUqqU-ptDAR0LQyvkq4h8coPupejCc8fA17w96jWqmc-StMwAbEUhaDG4xqh1nrRkXOO061Hp845RCCheOlMuVo1AtKrjwDtiOWs9neoCrklUmjWEEqSjztiWG2JxXFXkKDKloo2SQwc6nsrXMHIFXQi23fSaLdm8r_U4ZafzuyN8Gc2KeHiFXgbmq1X3TaO9tYa1epiJTagwCm6iKfdGKlf-3e3zzo2mMkiraAexLcpWtR6skzTaAUDT-TkzJklYNAljnMgElNippyanZQAA6lP-f3x2UnWp74tqpJoCOnFAfw2DQVwvQQA_gVJlEcmZBEHdwrt89mv-RcthuL3DVeNdZz533V-ZS-VZtaX43wqr7qGBw-OpSICLMkaCDpwyE1Y6683CF8WYKY1FKUN4aDd3KlHhPxjUipn3dF-dGGM5M38a0rfV0O3SxWEPWx6ViHDSMesHJxLQmqn39SfOqxoZivWDIlj9_jl8qjm7OcRLbxPA4jlEwfHtDvUqyTeLBfjZPekvAmMdv_pvzq-UD1g7Al73k4LY2BxIgrWRvoWq68fXKIOloZjVK1TsyaZK8ABrKNARRTVSA6H-aHvbWMDSsWrWu04PCWwTZG1aCd-1CQDq=w1006-h930-no?authuser=0" alt="Card image cap" width="100" height="250"></img>
                                    <div class="card-body">
                                    <h5 class="card-title">Nirav Agarwal</h5>
                                    <p class="card-text">President</p>
                                    <div className="link_my">
                                        <a href=""><span className="fa fa-github mx-2"></span></a>
                                        <a href=""><span className="fa fa-linkedin mx-2"></span></a>
                                    </div>
                                    </div>
                                </div>
                            <div className="col-3"></div>    
                        </div>
                        <div class="card-deck text-center">
                        <div className="col-2"></div>
                                <div class="card" style={{background:"none",border:"none",marginBottom:"30px"}}>
                                    <img class="card-img-top rounded-circle" src="https://lh3.googleusercontent.com/wPPp-K-HSXvKvpbC_mLBbwGZ50LRf0jU95Mvuo1RybaQ3iNpVRltZ31NtfObdQi0o01grjT2MakgNnfbvtCUK6pjUO4njjJ1jJEeFrek5Ohxc-f9-v-i9RhYb0j_IEIxXl9f7Z4_k0X52cMs8WmdPHKK-x831IamW3-p1ozInT1pDzepjve-2gQ5TEH--UdS3v4n9M3CFnNNRXNA9DpMk1H38iOipxRpUvxoZ7UjwS2Ud5dgs3WINPP5Vi2GcY-0KAoiX2IbvOSqjR7uKmrC7nhdigar_MZXDlqDAlcw40Z5twDSNv6NA3SdyJMosoLIl49nh7uh4EjWFW4FwnoiuL6ZXT930lX_VCIzq3uccqDDO7YOG4FNUT-dSVxt3bamZ1PR79poAEKQ6DYS_Er6vFpifwWyZBFkEXXofeYGQ8H5q6z8us_EQZJ_Q26hpYMSyVXHHz7SJNb09nlVk1gm5xsozK2ItrTjHVPoWWe09QYhriX0m878V1VfGIj3bSD4ODopFUtS-Uo8GixzN4bCWFH7bH2ArUnowvJHbLIOSO9hLM7pvuBrP2w5o8mccpQCBuDMxa_PbtgZTo9QP0Rw-2Kbu8_TbCHRKEaXbfd_PqZ1fpoCPkipahtxDnYkX1z95kTMQEaFdRXVTpa2wjBy1vcj4bqLskJ86m9suXAc8ItTE_Yhx9URYb6NyUKA=w359-h326-no?authuser=0" alt="Card image cap" width="100" height="250"></img>
                                    <div class="card-body">
                                    <h5 class="card-title">Kaartikeya Bajpai</h5>
                                    <p class="card-text">Technical Director</p>
                                    <div className="link_my">
                                        <a href=""><span className="fa fa-github mx-2"></span></a>
                                        <a href=""><span className="fa fa-linkedin mx-2"></span></a>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-2"></div>
                                <div class="card" style={{background:"none",border:"none",marginBottom:"30px"}}>
                                    <img class="card-img-top rounded-circle" src="https://lh3.googleusercontent.com/MxEyEQemZV8Htu-PuLnuIPzMZGSypMj3z1CbE0zEbgKfnQnOqqjPXkUKpEjBkwuB_RJIbyCFGgoEUyaXLtVePmqypozXLn_ntD3ikQLFjDT5UgYkQ0sicxwjSQYQL1aFYcmbpZC7f40022cRvllmTLH6dDeWhnEA2dlxeJW2ysL_Rcs5bp7p8HTLcKktFow4aPjhF5PpBVsq9ZvgUR8-U_YkOyDyGXMtNhlYznPgx1t4N6mbsI6EsXe8PzGPEqHlSuc1YA4pLvg-rxJLD-PcGmzrCk8WqQRyShSS4KtFHN8Qqxmf2xeSS-cccUTbKUfqcyVOFlO8TTOHLH_4N0X0TtFmIk-3VMuqwMnuQrx7eBInCkOwUeg1-QFg4u0yK9TyZQq2c5s3FuC8zBqKxHp4Ed8zL4rUHzcPon6tke7i9vBB9jsM5wCeAgYP1nlsKV9bO2cIwkq6P1RUiqERA61VQJWFUs5dxEjL_e7-tbrHeLE8FTAjPMH3BLLSLskn_Lm2muBr8nhtrVoS9oGFcdibEMZpOkBXzg6N4AMffFuGp_COGeCo6m3yALK5gGEE3vq3BY79jW1bukn1Q0VxGRSQFA2W2BI9nOni1fSR6pUbpa2XTMha-26Sc8O3Sch0HURBn6oDtnXSU9QSMDNQ2j8mJ6VrNLqeDAgY702R8vgsfJy2ouM-6RqmNsgWggy3=w974-h979-no?authuser=0" alt="Card image cap" width="100" height="250"></img>
                                    <div class="card-body">
                                    <h5 class="card-title">Anas Khan</h5>
                                    <p class="card-text">Technical Director</p>
                                    <div className="link_my">
                                        <a href=""><span className="fa fa-github mx-2"></span></a>
                                        <a href=""><span className="fa fa-linkedin mx-2"></span></a>
                                    </div>
                                    </div>
                                </div>
                        <div className="col-2"></div>
                        </div>
                        </div>
                        <div style={{marginLeft:"725px",marginRight:"725px"}}>
                        <div class="card text-center" style={{background:"none",border:"none"}}>
                                    <img class="card-img-top rounded-circle" src="https://lh3.googleusercontent.com/eVcQj2BenARUPxXXLVWVS1a4pbHHwDaqNYYV2PUYveBdCDM2srJmURkVz00ccitspGh-O_eB4wYBpUZNWoiviVQeEwFtBmS8I55ZVe_QfRjUrjKDyJCiT4flfXxKnFLybd8VcgazStoV8sEm7l-g7R1rHzXbugH_bUqa9YZuvX30aMbfIamCJWestpwjJrSaBInR-BnMbbNwYBUFrPtru7P2S9ZPDVBmaK5mUuKroHceqAet-6eZJPZB-MGvhsxf2cCRc4wJ8Z1UoaLXMCD_5Vv4RCUbZy3astfeAdChb3y6bvlJ61UlYKattAwrkYT_XsW0T6JFyFHZj7uwUG9APIPQIwfv78L4wgJiZLOM9n8h77Bx3lb6-80StX2E0l_PTkngSwvLWa68nERxqHIO_sUaMaUOw8eqdYzq7SghprbfKIonATt6b1sglGkkI2wOAzYaLZ0aXruleFzC_pJufSqjGJiGeaCRlOTxP-gv7cMIXj7mzRZvEo_fG-cPZk6gN844izM3QCzeN1i6Aqz0U0QsLGvyMcoOnPk5z9eoKkyF_CYZOvcwM89HDpu4ODxt3kCf-i4WYqz6DEhusYGtO20n62ustHw1FA9HjPXXzxIPx55KXm-CqPgY9pCgdf0qRUYATq7RV197ZKgjnWOgjucRGNE1sdDD8x4EBH-naSjFO_AbUAheHWdLidlO=s979-no?authuser=0" alt="Card image cap" width="100" height="250"></img>
                                    <div class="card-body">
                                    <h5 class="card-title">Hritik Bhandari</h5>
                                    <p class="card-text">Projects {'&'} Research Director</p>
                                    <div className="link_my">
                                        <a href=""><span className="fa fa-github mx-2"></span></a>
                                        <a href=""><span className="fa fa-linkedin mx-2"></span></a>
                                    </div>
                            </div>
                            </div>
                        </div>
                        <div className="container">
                        <div class="card-deck text-center">
                        <div className="col-2"></div>
                                <div class="card" style={{background:"none",border:"none",marginBottom:"30px"}}>
                                    <img class="card-img-top rounded-circle" src="https://lh3.googleusercontent.com/tSglgFrJxtofoM_F7CcVVzepzx2zYwUi6iUsjQSgrp-r-AJmNWCTBUjbfx4H2pKzI1eZFsEuFcsUM2sZpdntQ2LTE93vsYeMFy5_EgdbcwIT9EeJUMCyZc9I7-JrrSf_XMo3JGRp11OH5KAkHjjmxLlBtm8Qpsja3JKPuMZAYcMikshHWKAEfBXwqf7qsL0436EnoKPnFZYiePZ2PhxkiuXYTAzm3ugsyVblOLc8GW9OrHZ5pPKT4nwQtBymsIiJQ0Gg9d35f7N4iupn7my_eECmYghQQgNCL_0Zvskcw8LMdZ2iGclj1TTqxh1kJSt9h8UPE_U7NXD16LVcSY6JfAMH1a6GRHzRkeZm0kjTMdmeLB2YJQMF53pTYNikPtmjPLWGEOqL7sFySq0A71pNvuTcvVpEb1xJ9sSd9mYuQ_RcTzVGPKB50J0DE03Ieiq54UXcasy64GJdDXP4ZL4aW36k1A2txKely2FP1-EJFP-9POYcVEprwpFuFiBEbE835Du-MM0KC7-58vGjNFmDy2sYWF2561iM5-zhfMM8GbUmGhF1iYWiPksFkCTsVgtDhTc0Olf6SmPxvDWQozt1n9LwRss9bPm1bcMMAl0xB9lxf2Wll8UrextJ8Vc2uz3Kd7qZONoHI_8AkWtZnMA1PXOPRwADc0ilpCtiY4C64oIyrq3J8prl_vLcSdio=w768-h774-no?authuser=0" alt="Card image cap" width="100" height="250"></img>
                                    <div class="card-body">
                                    <h5 class="card-title">Takshil Mittal</h5>
                                    <p class="card-text">Corporate Director</p>
                                    <div className="link_my">
                                        <a href=""><span className="fa fa-github mx-2"></span></a>
                                        <a href=""><span className="fa fa-linkedin mx-2"></span></a>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-2"></div>
                                <div class="card" style={{background:"none",border:"none",marginBottom:"30px"}}>
                                    <img class="card-img-top rounded-circle" src="https://lh3.googleusercontent.com/CkvTcpq9FBfo-STeEy9LxDSXr4AVPPwkMAYO5xjipdvp_22NTGnOxeCe8AGbjMjoncoa3RahxkF-iTBxuMCPDTp9PHAcjOPutBh3LXDsTgVeoR3vOcifaAONWtoffKj0aMmvizLUFHifceWsR6hTCDtv_u_tfS_lacH8Dmf3mIZYgOz5AlmAJVfoARu-A5LB-_-_8ktTjnmSYao6LehvtdrclaQ_0_BDVSuT6i855EUvKcJAH6omXMPjpAOZ98_ZXWHnCF93OSKisziBwWnUWRz4Hdc3OhUBtNiihtKoZ167YwqiU4kr8HjpZDGrJikGybaPSyoR-85l3FAk6OS4im3bR7eam_-Nsx7ldKmLYNiYUYVxYD-1zmm8yqmicvNYn-SH3zvhxTrbUUbogC4Fnh7524JHvL4Je8ZWR2IbxxHFeOIBvz19pP1EiUDHrJq8DiFU0DIOdQIm0_XKAx-06RBuL69hOkztlafqHuLjz3Ov1L8fKOBgXXupROxNdHRO1n_3aiH36Yw2Gb084565pXexA8XF2yfR4DvSEhC1mn5CmhGPvNUVFaKTGsv2G9jqdKu3lYU-nyszkaukpZOc1sQu-OnQgD5vViynqYiSsGUTgBnj8KF69GOtnehJ9z4UaMAXnC9cQXGzqTT1EkJmRwv0j7OuBn0_44ZpiIVUiO-1uOvBXCB4xmy7ci9I=w985-h979-no?authuser=0" alt="Card image cap" width="100" height="250"></img>
                                    <div class="card-body">
                                    <h5 class="card-title">Prateek Ahlawat</h5>
                                    <p class="card-text">Corporate Director</p>
                                    <div className="link_my">
                                        <a href=""><span className="fa fa-github mx-2"></span></a>
                                        <a href=""><span className="fa fa-linkedin mx-2"></span></a>
                                    </div>
                                    </div>
                                </div>
                        <div className="col-2"></div>
                        </div>   
                        </div>
                        <div style={{marginLeft:"725px",marginRight:"725px"}}>
                        <div class="card text-center" style={{background:"none",border:"none",marginBottom:"30px"}}>
                                    <img class="card-img-top rounded-circle" src="https://lh3.googleusercontent.com/oEtWhj5bT_PnTygbdaeOZSbGAoiMNvRK_XxYIm5x2nPsSfYAYEouWrobPncha3qHWnXxw-XBl1rKiU2Qv8MdK7bKgr1xwmf3RsRYHFZSY9g123x5soHUJgcfwkjRrYpX79onybc6Ux18vmDxvpbFO_4G3MZAm_RDHekbofmIciPkeDApgsJMZkVRmxFMDJyLyF7Ugzgd9ORu7UHJsF9AyoVXxIqqNH4XWsXoSA8JGmKuEwasz51UM63HC7dpb7mhMNlevizPEg7EhDFfgnm8mP5oRoUDvkUwZ0ADus_e4c4FQhR834jCcf6mJMTx8GG3caEMe4AzeGF5WUhtJNir7gEdurI1n9ejOlINT5yYO3Tv951QYAwmjjJLt0jPHQhODfKcviZ_avjyO42m2BiPnisTui7DVYL9ByZkrprsfO9Dy91LJXYSLgq_20qOVrm50Uq1qzsIv06iFW1n6eMNYWexXlGncXNo7RUGjwX6uXr6vrxXEvzA4eNuHB_Dwzz6rTzFUjPXJkhWIPQlYPD418dD1RerOpYWBq_5GGB4F_fJ4OUd_-aIn8R7cXppmQq9xQnughy4EL_3XfecGiTGfqJobcFz5OeOpjCkaatXwzs7BboaGnL2J2GD5locih0mHZD2fFLHj1GPnv-D2OnlXM18_NtbHHjUu1r-5cyedykEPVCTAO_hMM9EYhQu=w1051-h979-no?authuser=0" alt="Card image cap" width="100" height="250"></img>
                                    <div class="card-body">
                                    <h5 class="card-title">Aditi Patel</h5>
                                    <p class="card-text">Creatives Director</p>
                                    <div className="link_my">
                                        <a href=""><span className="fa fa-github mx-2"></span></a>
                                        <a href=""><span className="fa fa-linkedin mx-2"></span></a>
                                    </div>
                            </div>
                            </div>
                            </div>
                <div className="container">
                <div class="card-deck text-center">
                        <div className="col-2"></div>
                                <div class="card" style={{background:"none",border:"none",marginBottom:"30px"}}>
                                    <img class="card-img-top rounded-circle" src="https://lh3.googleusercontent.com/3hupvrc4OTW1LGR1GRS9gw88V1l0dxlWPzIS13fSUpWmKVoJBDXloAB-mR72UFMRGx53LGycJ4dZSkE81A2XbtKVuSpH_iXujWO47lQ4Dc49fQKpa0b-NGaAGQ5Sep1ok-CFqjrahKOwGjghs-p_lCurSd6M_YCUoJveUeKfttrB058geN34hcOxnuqVt5nJZ8b0FG4uubvaSP5Ycp4ssdE6padPu7w3jncbnXXr-GbVMjscS7ZTG-IT93pCwvQl1BOhiYhCZbg80N8-rCC_PFK776dzdDJT7-wIne2qNjybOaxjhef8tDnMj_RJ_X5I2SEQMIK9RSBAELPFADUXDJJito7fk0BnmOH5n_aXOYNPN1J4R2uVC4ZG-wVe5r5a-am7OUXg_DRzTs6e5MJy3FLXF0qavqgHbxDYHt7yteSpf-nTmAZG3izgvmQN551Ep6TyDNYT4JAA1Ebe-fRxMBma579ujr5DRRV8bosRUO76uBPqbcOpSuAr4t8nwgLP6jPtOBhYcNf1BF5Ye6wKYOAOAwdSEJPwK562zQJWoyKbJJK17GtIUgY5zbxmDwGms0aviq7E1m1Wi1ldn58-4R2Nbpr83I6CRWRRSJhY-avAY0zO6hPgwYkbl6yx5cg4MI_V9ej53BrAr_bzuJVfyWUvXkbGQCdLRyEbchXEBmhjJEqh75m0bp4OXy8z=s200-no?authuser=0" alt="Card image cap" width="100" height="250"></img>
                                    <div class="card-body">
                                    <h5 class="card-title">Yash Narang</h5>
                                    <p class="card-text">Web Master</p>
                                    <div className="link_my">
                                        <a href=""><span className="fa fa-github mx-2"></span></a>
                                        <a href=""><span className="fa fa-linkedin mx-2"></span></a>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-2"></div>
                                <div class="card" style={{background:"none",border:"none",marginBottom:"30px"}}>
                                    <img class="card-img-top rounded-circle" src="https://lh3.googleusercontent.com/CZLHtZ4R2RcpsGSZoGqtpUSxePd3ve1rzbqNQ6IvdRF8yWVj8dUIPZlKmNaskJoHzfEYFggvEI2uljavP-RRYkaCC-gs-_rzlNoZSUVHlSiE4m2Vw6Ou4hdHrrBOqqCdG85QjtJfA2rjGh6dmLYyVHCsEmHJCdnVazffVllxSVQvZqaY_3s3LQmr8vweUJJqKyq10igTkEcF75g4ZvqsFNKpg-4Qr2MwUX6VB11YBLWo2fH_ACjrtpKbP4R9wDeIDTuGoyjMLQ-0erJ5y_KxnGBxRKJ8R52LDCk26nAZ7gE0tEcNk39gfKxV9oH8fqvhMcLHRm7ydcuVJVL5bjnTmukostKlmX9nQoZ2aSQOpAfV5Y0Q4nm1UoprMDAFoOuBNqOpOrKEYsm4aBZXUEWiEfQcTVZ5YGASS363okZuOXJ47ZB1TTGYSOiAnvOeUjClAI9CD8_gCZs-a7n7mGA1-phFAisF8A8oAWCiJQ21q-0nk-iSgfICeiYfOlSKjKtemjaduwtdgrSdrsF55dAfPnz1uX3qtU5MqiFwCQeJ6MwuDB08gxUyhZgMeUtCrysTP_VR-4vKOTaragLJEDbO2OAmVE9J3-IqAcQPf4EAi5XfUzlPxsiuq6wy38ykQcTz_G94cIrOG0-4zi4BZ65F1rVNnJWTv4LgLoprUeMccfMgjsD06OKvPzDEK19l=w300-h297-no?authuser=0" alt="Card image cap" width="100" height="250"></img>
                                    <div class="card-body">
                                    <h5 class="card-title">Lavisha Gera</h5>
                                    <p class="card-text">Web Master</p>
                                    <div className="link_my">
                                        <a href=""><span className="fa fa-github mx-2"></span></a>
                                        <a href=""><span className="fa fa-linkedin mx-2"></span></a>
                                    </div>
                                    </div>
                                </div>
                        <div className="col-2"></div>
                        </div>   
                </div>
                <div style={{marginLeft:"725px",marginRight:"725px"}}>
                <div class="card text-center" style={{background:"none",border:"none",marginBottom:"30px"}}>
                                    <img class="card-img-top rounded-circle" src="https://lh3.googleusercontent.com/bYwaelsxLD9yZog2zwgksqSrphVUjDXP7MtRjBunUN33mn-9_MxYh8h0rQSm7GiUQ-tA-PsCIRU247qE1RXiJC3oR73MkoIAhyc8stPdJabaZUAvSvrlPkWwN-v6DurHrEbOSfLV148n8FfT3pp7Y4XxZEnkXVwBsP8bEoa8pCIpZtN91jwaVofhwTHYoIbT_0mL-1CY2nboKpwCWx7W8RIByaLp92uOPzXD_adDzXfWSqfhRlOrYY8ruzorI8fh4MqjmQVwU-vydqT8CW2RyGoxagGp9qFCH2EZBOPp7P3pY3mwm75f4940HSTKTT81Ieoyg1IFysMC6Za0HV1GvA8mA7HK2b0jx6Ecd3xl-s4fCijiNjlbGVuMZK5b7W7OObpJ5Y2Z9RElNgTojJ43lUBSHxa77KyD9n5d74OC3h87bbddFScB50b1LxcZa-bUNBj9bDZ5PD1qYN8O6f9LlVqNl9ShU-5dX1pABG3cMQmi7G2s0s46NFNcOSe3ro5C6f5VYIFvB3sU3i64wL3v3Hi7fBhLIFeiQ0Ylc8UpiDigVz1ls9IOIFkcFN9JsFRpHk75KISvycHuXOq0mReUNkq09sFLCS4bhYMfJpArTWYVaa3oJ6_-9Bd1s1F7HiUWZi6qZ7aqNC9OlNIB3xSv31w8NvWZ-7e6ye54D2k3FJ_dj0LNGOHixukRk7Yu=w960-h968-no?authuser=0" alt="Card image cap" width="100" height="250"></img>
                                    <div class="card-body">
                                    <h5 class="card-title">Rohan Rajput</h5>
                                    <p class="card-text">Chief Editor</p>
                                    <div className="link_my">
                                        <a href=""><span className="fa fa-github mx-2"></span></a>
                                        <a href=""><span className="fa fa-linkedin mx-2"></span></a>
                                    </div>
                        </div>
                        </div>
                        </div>
                <div className="container">
                <div class="card-deck text-center">
                        <div className="col-2"></div>
                                <div class="card" style={{background:"none",border:"none",marginBottom:"30px"}}>
                                    <img class="card-img-top rounded-circle" src="https://lh3.googleusercontent.com/R2lcQRa_A-clpVO_9lZ681hPE8mtvODsQl5Kx4-9_cS_E2HwM2LUtagLarla4LfS67DB0VY7Fc8UQkowgFajiPT3tUO4IGLnG6KfmvQSDmiPEqv0ZYuGBYFVOnbVY9uJey5d4sqVI8PqeWDmYDFsezwxAkiigB2O2VVbPC2zHp14c27YIN_Fy9p-HujXu_o3AKR_K_alLkafuQ7RwnPFdNHD9en0P-cmDg9KdXNT_SwuhoBkHMo4HVhkUMMkEu5lf-mqFR7dDabTh3xXApixVvI8X9e1aLPFbSFqhS8hBHpAmurvh9ZXRRgkRkm4HGS7CUGgO2IbblzWDriPtP4w0uE3ss7xUb0EnPW9o9eEYbYJYOHzbzmzYVQvOUGWE5WMkZCANv5T-qCtH4OyKoADU7onT2e3_axLfzIvSOxIcVgFGOvOmJjQqFHAJIBhvvRO1jCjkwOFILLzuaNafLLFJ2kZtCHWusVCR3FxmH9JqPK4K52lUHGSYO6n7zlJb80dy9mLHDc1g21JVV3PnnlFnGfK0zw6SxKkcYS2Tzfjk6PPu1dKQ0KvbHmIIYrweCOz-5LA9Q7RJItOJxKxj0qBIiSn3n4pa-qDK3zXQ7tmmVW9JqjW2D8dPtfQiyZCS6fQ96BCWa6nTb81TrO5Xmr7OhZv1vUxD9iO9DCocZCQk-Zxb09TkSe0kEElKTkx=w994-h980-no?authuser=0" alt="Card image cap" width="100" height="250"></img>
                                    <div class="card-body">
                                    <h5 class="card-title">Sachin Agarwal</h5>
                                    <p class="card-text">Sponsorship Head</p>
                                    <div className="link_my">
                                        <a href=""><span className="fa fa-github mx-2"></span></a>
                                        <a href=""><span className="fa fa-linkedin mx-2"></span></a>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-2"></div>
                                <div class="card" style={{background:"none",border:"none",marginBottom:"30px"}}>
                                    <img class="card-img-top rounded-circle" src="https://lh3.googleusercontent.com/9VeodCCUtlu-ncCY9QisXKj-9_o0ud-FjPFuMY8jX0gqkuKA4vGEt04bbe9DpncBrHUdzxgQK7shRNjuhOF7zPDZAsfqghhtarOJzLsba9B_vTk14HXgTgTp0AAq1cqzV2oxBRjKFClKkpsPnfhxeD0P5M6ap7B23tuEu39Ouy7cZIRtZFFCKL8C74nzaW6fSGiQHt8wxku-th_-__LEpMes4Iehgsfq_95BFX5_Sc4RMk_TEt8uZ-Y-2DP-c23zwelRVVPNmdTm5oMnsUs7PW-sxnJr2H-3rJUcgZTNnDnV1OEBP63A3UwGIKV0qsJWY4CNvGcKRvXdLYU39WOHyXsNJstqTuY_GSifhRVCgpntx9xNjpAGxPDvd_W5H3huMUG-QAlPA2LLGLILLsWpxFo2CP5d0lboWIdeMXv7S6aqJ8wjmyHs5xA0SnAlo_4IRTd2GZDtAH51PxJ-2Z8tGNhhVYi8qsiXxAMKMAfeOJ_Ka9NWLrgJYvxViCFQ1hei60uCLiAz7aM423oyQzPLxgyWn8Z403IMb5zjNfRz7WnNk86ITomIi4av9OZMMYug038YL22JfSSLPgcPsOszwSrRc3qP7kXgFgSKZK7GZ5m4A1TdemwR-lOfmVSGK37BcIaHtn79IkxvH5cN2HGCzykq9v-Uwjv1MSvvtm6hV2F3not9W9o7iSmsrtLW=w769-h815-no?authuser=0" alt="Card image cap" width="100" height="250"></img>
                                    <div class="card-body">
                                    <h5 class="card-title">Dhruvraj Rathore</h5>
                                    <p class="card-text">Sponsorship Head</p>
                                    <div className="link_my">
                                        <a href=""><span className="fa fa-github mx-2"></span></a>
                                        <a href=""><span className="fa fa-linkedin mx-2"></span></a>
                                    </div>
                                    </div>
                                </div>
                        <div className="col-2"></div>
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

export default withRouter(Team);