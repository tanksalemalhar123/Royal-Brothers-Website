import React, { Component } from 'react';
import Logo from './logo.png';
import Search from './search.png';
 
class TestNav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid" style={{backgroundColor:'#363636'}}>
                        <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>                        
                        </button>
                        <a class="navbar-brand" href="#"> <img alt="royalbrothers" id="logoimg" src={Logo} width="160px" height="39px" style={{display:'inline',marginTop:'-10px',marginLeft:'0px',paddingLeft:'1em',paddingRight:'1em'}} /></a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar" style={{backgroundColor:'#363636'}}>
                        <ul class="nav navbar-nav">
                            <li class="dropdown">
                            <a style={{color:'white',fontFamily:'Montserrat,sans-serif',fontSize:'1em'}} class="dropdown-toggle" data-toggle="dropdown" href="#">Bikes in Agra <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Page 1-1</a></li>
                                <li><a href="#">Page 1-2</a></li>
                                <li><a href="#">Page 1-3</a></li>
                            </ul>
                            </li>
                           
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a style={{color:'white',fontFamily:'Montserrat,sans-serif',fontSize:'1em'}} href="#">Tariff</a></li>
                            <li><a style={{color:'white',fontFamily:'Montserrat,sans-serif',fontSize:'1em'}} href="#">
                            <img alt="search" src={Search} style={{width:'16px',height:'16px',fontFamily:'Montserrat,sans-serif'}}/>
                            Search</a></li>
                            <li class="dropdown">
                            <a style={{color:'white',fontFamily:'Montserrat,sans-serif',fontSize:'1em'}} class="dropdown-toggle" data-toggle="dropdown" href="#">Menu <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Bikes in Bangalore</a></li>
                                <li><a href="#">Bikes in Pondicherry</a></li>
                                <li><a href="#">Bikes in Delhi</a></li>
                            </ul>
                            </li>
                            <li><a style={{color:'white',fontFamily:'Montserrat,sans-serif',fontSize:'1em'}} href="#">SignUp</a></li>
                            <li><a style={{color:'white',fontFamily:'Montserrat,sans-serif',fontSize:'1em'}} href="#">Login</a></li>
                        </ul>
                        </div>
                    </div>
                    </nav>
            </div>
        );
    }
}

export default TestNav;