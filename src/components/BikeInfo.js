import React, { Component } from 'react';
import Bike1 from './bike1.png';
import Bike2 from './benelli.png';
import Bike3 from './harley.png';
import Bike4 from './classic.png';
import Bike5 from './himalayan.png';
import Bike6 from './dominar.png';
import Bike7 from './avenger.png';
import Bike8 from './activa.png';
import Bike9 from './classicc.png';
import Bike10 from './yamaha.png';
import Bike11 from './duke.png';

class BikeInfo extends Component {
    render() {
        return (
            <div className="row" style={{backgroundColor:'#eeeeee',marginBottom:'0 !important',paddingBottom:'35px !important',marginLeft:'auto',marginRight:'auto',display:'block',color:'rgba(0,0,0,0.87)'}}>
                <h5 className="col-lg-12 col-md-12 col-sm-12" style={{paddingTop:'2%',fontWeight:'700',fontSize:'2.2rem',lineHeight:'110%',fontFamily:'Montserrat, sans-serif'}}>
                    <strong>
                        <center>
                        OUR FLEET
                        </center>
                    </strong>
                </h5>

                <div className="col-lg-12 col-md-12 col-sm-12" style={{paddingTop:'2%',paddingBottom:'2%'}}>
                    <div className="col-lg-3" style={{borderBottom:'5px solid grey',background:'white',padding:'1em',diplay:'inline-block',verticalAlign:'top',marginLeft:'auto',left:'auto',right:'auto',height:'220px',boxSizing:'border-box',padding:'0 0.75rem',minHeight:'1px'}}>
                    
                         <div style={{background:'white',position:'relative',top:'20px',fontWeight:'700',fontSize:'13px',textAlign:'center',boxSizing:'inherit'}}>
                                Triumph Street Twin
                        </div>

                        <a style={{background:'white',textDecoration:'none',color:'#039be5',WebkitTapHighlightColor:'transparent',backgroundColor:'transparent',cursor:'pointer',boxSizing:'inherit'}}>
                            <img src={Bike1} style={{maxWidth:'100%',height:'90%',border:'0',width:'100%',cursor:'pointer'}}/>
                        </a>
                    </div>



                    <div className="col-lg-3" style={{borderBottom:'5px solid grey',background:'white',height:'220px',padding:'1em',diplay:'inline-block',verticalAlign:'top',marginLeft:'auto',left:'auto',right:'auto',boxSizing:'border-box',padding:'0 0.75rem',minHeight:'1px'}}>
                    
                    <div style={{position:'relative',top:'20px',fontWeight:'700',fontSize:'13px',textAlign:'center',boxSizing:'inherit'}}>
                    Benelli TNT 600 i

                        </div>

                        <a style={{textDecoration:'none',color:'#039be5',WebkitTapHighlightColor:'transparent',backgroundColor:'transparent',cursor:'pointer',boxSizing:'inherit'}}>
                            <img src={Bike2} style={{maxWidth:'100%',height:'90%',border:'0',width:'100%',cursor:'pointer'}}/>
                        </a>
                    </div>



                    <div className="col-lg-3" style={{borderBottom:'5px solid grey',background:'white',height:'220px',padding:'1em',diplay:'inline-block',verticalAlign:'top',marginLeft:'auto',left:'auto',right:'auto',boxSizing:'border-box',padding:'0 0.75rem',minHeight:'1px'}}>
                    
                    <div style={{position:'relative',top:'20px',fontWeight:'700',fontSize:'13px',textAlign:'center',boxSizing:'inherit'}}>
                    Harley Davidson Iron 883

                        </div>

                        <a style={{textDecoration:'none',color:'#039be5',WebkitTapHighlightColor:'transparent',backgroundColor:'transparent',cursor:'pointer',boxSizing:'inherit'}}>
                            <img src={Bike3} style={{maxWidth:'100%',height:'90%',border:'0',width:'100%',cursor:'pointer'}}/>
                        </a>
                    </div>

                    
                   
                    <div className="col-lg-3" style={{borderBottom:'5px solid grey',background:'white',height:'220px',padding:'1em',diplay:'inline-block',verticalAlign:'top',marginLeft:'auto',left:'auto',right:'auto',boxSizing:'border-box',padding:'0 0.75rem',minHeight:'1px'}}>
                    
                    <div style={{position:'relative',top:'20px',fontWeight:'700',fontSize:'13px',textAlign:'center',boxSizing:'inherit'}}>
                    Himalayan

                        </div>

                        <a style={{textDecoration:'none',color:'#039be5',WebkitTapHighlightColor:'transparent',backgroundColor:'transparent',cursor:'pointer',boxSizing:'inherit'}}>
                            <img src={Bike5} style={{maxWidth:'100%',height:'90%',border:'0',width:'100%',cursor:'pointer'}}/>
                        </a>
                    </div>

                  
                   

                    <div className="col-lg-3" style={{borderBottom:'5px solid grey',borderTop:'5px solid #eeeeee',background:'white',height:'220px',padding:'1em',diplay:'inline-block',verticalAlign:'top',marginLeft:'auto',left:'auto',right:'auto',boxSizing:'border-box',padding:'0 0.75rem',minHeight:'1px'}}>
                    
                    <div style={{position:'relative',top:'20px',fontWeight:'700',fontSize:'13px',textAlign:'center',boxSizing:'inherit'}}>
                    Himalayan

                        </div>

                        <a style={{textDecoration:'none',color:'#039be5',WebkitTapHighlightColor:'transparent',backgroundColor:'transparent',cursor:'pointer',boxSizing:'inherit'}}>
                            <img src={Bike5} style={{maxWidth:'100%',height:'90%',border:'0',width:'100%',cursor:'pointer'}}/>
                        </a>
                    </div>


                    <div className="col-lg-3" style={{borderBottom:'5px solid grey',borderTop:'5px solid #eeeeee',background:'white',height:'220px',padding:'1em',diplay:'inline-block',verticalAlign:'top',marginLeft:'auto',left:'auto',right:'auto',boxSizing:'border-box',padding:'0 0.75rem',minHeight:'1px'}}>
                    
                    <div style={{position:'relative',top:'20px',fontWeight:'700',fontSize:'13px',textAlign:'center',boxSizing:'inherit'}}>
                    Dominar 400

                        </div>

                        <a style={{textDecoration:'none',color:'#039be5',WebkitTapHighlightColor:'transparent',backgroundColor:'transparent',cursor:'pointer',boxSizing:'inherit'}}>
                            <img src={Bike6} style={{maxWidth:'100%',height:'90%',border:'0',width:'100%',cursor:'pointer'}}/>
                        </a>
                    </div>


                    <div className="col-lg-3" style={{borderBottom:'5px solid grey',borderTop:'5px solid #eeeeee',background:'white',height:'220px',padding:'1em',diplay:'inline-block',verticalAlign:'top',marginLeft:'auto',left:'auto',right:'auto',boxSizing:'border-box',padding:'0 0.75rem',minHeight:'1px'}}>
                    
                    <div style={{position:'relative',top:'20px',fontWeight:'700',fontSize:'13px',textAlign:'center',boxSizing:'inherit'}}>
                    Avenger Cruise 220

                        </div>

                        <a style={{textDecoration:'none',color:'#039be5',WebkitTapHighlightColor:'transparent',backgroundColor:'transparent',cursor:'pointer',boxSizing:'inherit'}}>
                            <img src={Bike7} style={{maxWidth:'100%',height:'90%',border:'0',width:'100%',cursor:'pointer'}}/>
                        </a>
                    </div>


                    <div className="col-lg-3" style={{borderBottom:'5px solid grey',borderTop:'5px solid #eeeeee',background:'white',height:'220px',padding:'1em',diplay:'inline-block',verticalAlign:'top',marginLeft:'auto',left:'auto',right:'auto',boxSizing:'border-box',padding:'0 0.75rem',minHeight:'1px'}}>
                    
                    <div style={{position:'relative',top:'20px',fontWeight:'700',fontSize:'13px',textAlign:'center',boxSizing:'inherit'}}>
                    Activa

                        </div>

                        <a style={{textDecoration:'none',color:'#039be5',WebkitTapHighlightColor:'transparent',backgroundColor:'transparent',cursor:'pointer',boxSizing:'inherit'}}>
                            <img src={Bike8} style={{maxWidth:'100%',height:'90%',border:'0',width:'100%',cursor:'pointer'}}/>
                        </a>
                    </div>


                    <div className="col-lg-3" style={{borderBottom:'5px solid grey',borderTop:'5px solid #eeeeee',background:'white',height:'220px',padding:'1em',diplay:'inline-block',verticalAlign:'top',marginLeft:'auto',left:'auto',right:'auto',boxSizing:'border-box',padding:'0 0.75rem',minHeight:'1px'}}>
                    
                    <div style={{position:'relative',top:'20px',fontWeight:'700',fontSize:'13px',textAlign:'center',boxSizing:'inherit'}}>
                    Classic 350

                        </div>

                        <a style={{textDecoration:'none',color:'#039be5',WebkitTapHighlightColor:'transparent',backgroundColor:'transparent',cursor:'pointer',boxSizing:'inherit'}}>
                            <img src={Bike9} style={{maxWidth:'100%',height:'90%',border:'0',width:'100%',cursor:'pointer'}}/>
                        </a>
                    </div>


                    <div className="col-lg-3" style={{borderBottom:'5px solid grey',borderTop:'5px solid #eeeeee',background:'white',height:'220px',padding:'1em',diplay:'inline-block',verticalAlign:'top',marginLeft:'auto',left:'auto',right:'auto',boxSizing:'border-box',padding:'0 0.75rem',minHeight:'1px'}}>
                    
                    <div style={{position:'relative',top:'20px',fontWeight:'700',fontSize:'13px',textAlign:'center',boxSizing:'inherit'}}>
                    Yamaha FZ

                        </div>

                        <a style={{textDecoration:'none',color:'#039be5',WebkitTapHighlightColor:'transparent',backgroundColor:'transparent',cursor:'pointer',boxSizing:'inherit'}}>
                            <img src={Bike10} style={{maxWidth:'100%',height:'90%',border:'0',width:'100%',cursor:'pointer'}}/>
                        </a>
                    </div>


                    <div className="col-lg-3" style={{borderBottom:'5px solid grey',borderTop:'5px solid #eeeeee',background:'white',height:'220px',padding:'1em',diplay:'inline-block',verticalAlign:'top',marginLeft:'auto',left:'auto',right:'auto',boxSizing:'border-box',padding:'0 0.75rem',minHeight:'1px'}}>
                    
                    <div style={{position:'relative',top:'20px',fontWeight:'700',fontSize:'13px',textAlign:'center',boxSizing:'inherit'}}>
                    Duke 200

                        </div>

                        <a style={{textDecoration:'none',color:'#039be5',WebkitTapHighlightColor:'transparent',backgroundColor:'transparent',cursor:'pointer',boxSizing:'inherit'}}>
                            <img src={Bike11} style={{maxWidth:'100%',height:'90%',border:'0',width:'100%',cursor:'pointer'}}/>
                        </a>
                    </div>

               </div>
                
            </div>
        );
    }
}

export default BikeInfo;