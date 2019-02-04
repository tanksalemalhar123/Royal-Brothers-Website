import React, { Component } from 'react';
import Logo from './logo.png';
import './Navigation.css'
import Search from './search.png';

class Navigation extends Component {
    render() {
        return (
            <div className="navigate" style={{height:'3.3em'}}>
                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12" style={{background:'#363636'}}>
                <img alt="royalbrothers" id="logoimg" src={Logo} width="130px" height="33px" style={{display:'inline',marginTop:'9px',marginLeft:'0px',paddingLeft:'1em',paddingRight:'1em'}} />
                </div>
                <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12" style={{background:'#363636'}}>
                <select style={{width:'100px',marginTop:'14px',display:'inline',background:'#363636',color:'white',fontFamily:'Montserrat,sans-serif',fontSize:'12px',boxShadow:'none',border:'none'}}>
                <option value="volvo">Bikes in Agra</option>
                    <option value="saab">Bikes in ..</option>
                    <option value="opel">Bikes in ..</option>
                    <option value="audi">Bikes in ..</option>
                </select>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{background:'#363636'}}>
                <a style={{cursor:'pointer'}}>
                <h5 style={{color:'white',fontFamily:'Montserrat,sans-serif',fontSize:'12px',float:'left',paddingTop:'0.5em'}}>
                   
               </h5>
               </a>
                </div>

                <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12" style={{background:'#363636'}}>
                <a style={{cursor:'pointer'}}>
                <h5 style={{color:'white',fontFamily:'Montserrat,sans-serif',fontSize:'12px',float:'left',paddingTop:'0.5em'}}>
                   Tariff
               </h5>
                </a>
                </div>

                <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12" style={{background:'#363636'}}>
                <a style={{cursor:'pointer'}}>
                <h5 style={{color:'white',fontFamily:'Montserrat,sans-serif',fontSize:'12px',float:'left',paddingTop:'0.5em'}}>
                   <img alt="search" src={Search} style={{width:'16px',height:'16px'}}/>Search
               </h5>
                </a>
                </div>

                <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12" style={{background:'#363636'}}>
                <select style={{paddingBottom:'0.5em',float:'left',width:'60px',marginTop:'14px',display:'inline',background:'#363636',color:'white',fontFamily:'Montserrat,sans-serif',fontSize:'12px',boxShadow:'none',border:'none'}}>
                <option value="volvo">Menu</option>
                    <option value="saab">Blog</option>
                    <option value="opel">Rides</option>
                    <option value="audi">Bike Tour</option>
                    <option value="audi">FAQ</option>
                    <option value="audi">Privacy Policy</option>
                    <option value="audi">Terms and Conditions</option>
                    <option value="audi">Partner With US</option>
                    <option value="audi">Reach Us</option>
                    <option value="audi">About Us</option>
                </select>
                </div>

                <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12" style={{background:'#363636'}}>
                <a style={{cursor:'pointer'}}>
                <h5 style={{color:'white',fontFamily:'Montserrat,sans-serif',fontSize:'12px',float:'left',paddingTop:'0.5em'}}>
                   SignUp
               </h5>
                </a>
                
                </div>
                <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12" style={{background:'#363636'}}>
                <a style={{cursor:'pointer'}}>
                <h5 style={{color:'white',fontFamily:'Montserrat,sans-serif',fontSize:'12px',float:'left',paddingTop:'0.5em'}}>
                   Login
               </h5>
               </a>
                </div>
            </div>
        );
    }
}

export default Navigation;