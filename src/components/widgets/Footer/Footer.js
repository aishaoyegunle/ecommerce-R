import React from 'react'
// import { Link } from 'react-router-dom'
import FooterLinks from '../FooterLinks/FooterLinks';
  
const Footer = () => {
    return(
        <footer>
    <section class="callout">
      <h2>"The surprising styles of Skyline Ivy are advanced for all seasons."</h2>
      <p>Hansel Andersen</p>
    </section>
    <FooterLinks />
    <div class="aishalink">
        <p>
        This project is 
        <a href="https://github.com/sdras/ecommerce-netlify"> open source on github</a> made with love by Sarah Drasner,
        <a href="https://github.com/aishaoyegunle/ecommerce-R"> rebuilt using react</a>, by Aisha Oyegunle 
        <a
          href="https://twitter.com/Eshaa_O"
        > @Eshaa_O (twitter)</a> ,
        <a href="https://github.com/aishaoyegunle"> @aishaoyegunle (github)</a> &
        hosted with
        <a href="https://bit.ly/2G29YwK"> Netlify</a>
      </p>
    </div>
  </footer>
    );
}

export default Footer;