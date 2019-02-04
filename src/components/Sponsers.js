import React, { Component } from 'react';
import YourStory from './yourstory.png';
import TOI from './toi.png';
import Economics from './economics.png';
import Hindu from './hindu.png';

class Sponsers extends Component {
    render() {
        return (
        <div className="row mainDiv" style={{paddingTop:'5em',background:'#eeeeee',marginBottom:'0px',marginLeft:'auto',marginRight:'auto'}}>
           <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <a style={{cursor:'pointer'}}>
                        <img src={YourStory} style={{maxWidth:'100%',height:'auto'}}/>
                    </a>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-12">
                    <a style={{cursor:'pointer'}}>
                        <img src={TOI} style={{maxWidth:'100%',height:'auto'}}/>
                    </a>
                </div>


                <div className="col-lg-3 col-md-3 col-sm-12">
                    <a style={{cursor:'pointer'}}>
                        <img src={Economics} style={{maxWidth:'100%',height:'auto'}}/>
                    </a>
                </div>


                <div className="col-lg-3 col-md-3 col-sm-12">
                    <a style={{cursor:'pointer'}}>
                        <img src={Hindu} style={{maxWidth:'100%',height:'auto'}}/>
                    </a>
                </div>


           </div>
        </div>
        );
    }
}

export default Sponsers;