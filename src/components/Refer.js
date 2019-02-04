import React, { Component } from 'react';
import Image from './phone1.png';
import './Refer.css'

class Refer extends Component {
    render() {
        return (
            <div className="Refercomponent" style={{opacity:'0.8',background:'#363636',width:'100%',height:'1.4em',zIndex:998,paddingTop:'0.2em',marginRight:'auto'}}>
               <h5 style={{margin:'0',fontSize:'14px',display:'inline',float:'right',color:'white',fontFamily:'Montserrat,sans-serif',fontWeight: 400,paddingRight:'0.5em'}}>
                +91-7306747474
                </h5>
            <h5 style={{display:'inline',fontSize:'14px',float:'right',margin:'0',color:'white',fontFamily:'Montserrat,sans-serif',fontWeight: 400}}>
                    /
            </h5>
            <h5 style={{float:'right',fontSize:'14px',paddingRight:'0.5em',margin:'0',color:'white',fontFamily:'Montserrat,sans-serif',fontWeight: 400}}>
                +91-9019595595
                </h5>                
                <img src={Image} alt="phone" style={{display:'inline',float:'right',paddingRight:'0.5em',color:'white'}}/>
                <h5 style={{margin:'0',fontSize:'14px',display:'inline',float:'right',paddingRight:'0.5em',color:'white',fontFamily:'Montserrat,sans-serif',fontWeight: 400}}>
                Refer Friends
                </h5>
               
              
            </div>
        );
    }
}

export default Refer;