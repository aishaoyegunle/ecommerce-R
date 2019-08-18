import React from 'react'
// import { Link } from 'react-router-dom'
import Header from '../widgets/Header/Header'
import Textlockup from '../widgets/Textlockup/Textlockup'
import shoe1 from '../../assets/images/shoe1.jpg'
import SalesBoxes from '../widgets/SalesBoxes/SalesBoxes';

const HomePage = () => {
    return(
        <div>
            <Header/>
            {/* <Textlockup/> */}
            <Textlockup 
            img={<img src={shoe1} alt="shoe"/>}
            title={<div>New</div>}
            sale={<div>Men Shoes</div>}
            collection={<div>Collection</div>}
            details={<div>Street Style New Fashion</div>}
            ></Textlockup>
            <SalesBoxes />
        </div>
        
    );
}

export default HomePage;