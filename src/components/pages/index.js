import React from 'react'
// import { Link } from 'react-router-dom'
import Header from '../widgets/Header/Header'
import Textlockup from '../widgets/Textlockup/Textlockup'
import shoe1 from '../../assets/images/shoe1.jpg'
import bag from '../../assets/images/bag.jpg'
import SalesBoxes from '../widgets/SalesBoxes/SalesBoxes';
import Footer from '../widgets/Footer/Footer';

const HomePage = () => {
    return(
        <div>
            <Header/>
            <Textlockup 
            img={<img src={shoe1} alt="shoe"/>}
            title={<div>New</div>}
            sale={<div>Men Shoes</div>}
            collection={<div>Collection</div>}
            details={<div>Street Style New Fashion</div>}
            ></Textlockup>
            <SalesBoxes />
            <Textlockup 
            img={<img src={bag} alt="bag"/>}
            title={<div>50%</div>}
            sale={<div>Storewide Sale</div>}
            collection={<div>Summer</div>}
            details={<div>All Accessories</div>}
            ></Textlockup>
            <Footer />
        </div>
        
    );
}

export default HomePage;