import React from 'react';
import './footer.css'

//The icons
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedinIcon from '@material-ui/icons/LinkedIn';


function func(){
    return(
    <div className="footer-div" id="contact">
    <div style={{paddingTop: 30}}>
    <a href="https://www.instagram.com" className="items"><InstagramIcon /></a>
    <a href="https://www.instagram.com" className="items"><FacebookIcon /></a>
    <a href="https://www.instagram.com" className="items"><LinkedinIcon /></a>
    <h5 style={{paddingTop:5}}> CFI Shop | Copyright 2021</h5>
    </div>
    </div>);
}

export default func;