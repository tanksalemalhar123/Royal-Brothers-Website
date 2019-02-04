import React, { Component } from 'react';
import City from './city.png';
import Star from './star.png'; 
import './Info.css';

class Info extends Component {
    render() {
        return (
            <div className="row describe" style={{paddingTop:'5em',marginLeft:'auto',background:'#f3f3f3',paddingBottom:'4%',marginBottom:'0px !important',marginRight:'auto'}}>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    

                <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="card1" style={{fontFamily:'Montserrat,sans-serif',color:'#333',margin:'auto',fontSize:'30px',fontWeight:'700',padding:'5% 10%',backgroundSize:'cover',backgroundColor:'#E3E1E1',backgroundPosition:'bottom',backgroundRepeat:'no-repeat'}}>
                                40 +            
                                <br/>
                                <span style={{fontSize:'11px'}}>
                                    CITIES
                                </span>
                        </div>  
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="card2" style={{fontFamily:'Montserrat,sans-serif',color:'#333',margin:'auto',fontSize:'30px',fontWeight:'700',padding:'5% 10%',backgroundSize:'cover',backgroundColor:'#E3E1E1',backgroundPosition:'bottom',backgroundRepeat:'no-repeat'}}>
                                5M
                                <br/>
                                <span style={{fontSize:'11px'}}>
                                    KILOMETERS
                                </span>
                        </div>   
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12" style={{cursor:'pointer'}}>
                        <div className="card3" style={{fontFamily:'Montserrat,sans-serif',color:'#333',margin:'auto',fontSize:'30px',fontWeight:'700',padding:'5% 10%',backgroundSize:'cover',backgroundColor:'#E3E1E1',backgroundPosition:'bottom',backgroundRepeat:'no-repeat'}}>
                                4.6
                                <img src={Star} alt="star"/>
                                <br/>
                                <span style={{fontSize:'11px'}}>
                                    ON FACEBOOK
                                </span>
                        </div>      
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12" style={{cursor:'pointer'}}>
                        <div className="card4" style={{fontFamily:'Montserrat,sans-serif',color:'#333',margin:'auto',fontSize:'30px',fontWeight:'700',padding:'5% 10%',backgroundSize:'cover',backgroundColor:'#E3E1E1',backgroundPosition:'bottom',backgroundRepeat:'no-repeat'}}>
                                4.5
                                <img src={Star} alt="star"/>
                                <br/>
                                <span style={{fontSize:'11px'}}>
                                    ON GOOGLE
                                </span>
                        </div>  
                    </div>

                   

                </div>
            </div>
        );
    }
}

export default Info;