import React, { Component } from 'react';
import Image2 from './bodyimg.jpg'; 


class ImageBody extends Component {
    render() {
        return (
            <div style={{marginTop:'-20px'}}> 
                <img src={Image2}  alt="traffic" style={{width:'100%',backgroundSize:'cover',backgroundPosition:'center',height:'500px',marginRight:'auto'}}>
                </img>
                
                <div className="search-bar" style={{opacity:'0.9',color:'white',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',zIndex:'2',width:'100%',paddingTop:'15em'}}>
                    <div className="container hide-on-small-and-down container-size" style={{background:'#000000',width:'100% !important' }}>
                        <div select-box style={{margin:'5px'}}>
                        <form acceptCharset="UTF-8" method="GET">
                            <div className="col-lg-12 col-sm-12 col-md-12">
                            <div className="col-lg-3 col-md-3 col-sm-12" style={{position:'relative',marginTop:'1rem',display:'inline'}}>
                                <input placeholder="Pickup Date" type="text" className="picker-input" style={{color:'white',backgroundColor:'transparent',border:'none',borderBottom:'1px solid #9e9e9e',borderRadius:'0', outline:'none',height:'3rem',fontSize:'2rem',margin:'0 0 20px 0',padding:'0',boxShadow:'none',boxSizing:'content-box',transition:'0.3s'}}/>
                                
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-12" style={{position:'relative',marginTop:'1rem',display:'inline'}}>
                                <input placeholder="Time" type="text" className="picker-input" style={{color:'white',backgroundColor:'transparent',border:'none',borderBottom:'1px solid #9e9e9e',borderRadius:'0', outline:'none',height:'3rem',fontSize:'2rem',margin:'0 0 20px 0',padding:'0',boxShadow:'none',boxSizing:'content-box',transition:'0.3s'}}/>
                                
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-12" style={{position:'relative',marginTop:'1rem',display:'inline'}}>
                                <input placeholder="DropOff Date" type="text" className="picker-input" style={{color:'white',backgroundColor:'transparent',border:'none',borderBottom:'1px solid #9e9e9e',borderRadius:'0', outline:'none',height:'3rem',fontSize:'2rem',margin:'0 0 20px 0',padding:'0',boxShadow:'none',boxSizing:'content-box',transition:'0.3s'}}/>
                                
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-12" style={{position:'relative',marginTop:'1rem',display:'inline'}}>
                                <input placeholder="Time" type="text" className="picker-input" style={{backgroundColor:'transparent',border:'none',borderBottom:'1px solid #9e9e9e',borderRadius:'0', outline:'none',height:'3rem',fontSize:'2rem',margin:'0 0 20px 0',padding:'0',boxShadow:'none',boxSizing:'content-box',transition:'0.3s'}}/>
                                </div>

                            <center>
                                <button style={{position:'relative',cursor:'pointer'
                                ,display:'inline-block',overflow:'hidden',userSelect:'none'
                                ,verticalAlign:'middle',zIndex:'1',textDecoration:'none'
                                ,backgroundColor:'#fdd835',textAlign:'center',letterSpacing:'0.5px'
                                ,fontSize:'1rem',outline:'0',border:'none',borderRadius:'2px',height:'36px'
                                ,lineHeight:'36px',padding:'0 2rem',textTransform:'uppercase',color:'black'
                                ,fontFamily:'Montserrat, sans-serif',fontWeight:'400',WebkitAppearance:'button'
                                ,font:'inherit',margin:'0',marginBottom:'15px',marginTop:'10px'}}>
                                    Search
                                </button>
                            </center>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageBody;