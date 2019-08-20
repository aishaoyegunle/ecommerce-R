import React, { Component } from 'react'
import iconPackage from '../../../assets/images/iconPackage.svg'
import iconCal from '../../../assets/images/iconCal.svg'
import iconService from '../../../assets/images/iconService.svg'
class SalesBoxes extends Component {
    constructor(){
      super();
      this.state = boxes
    }
    render() {
        return (
            <ul>
                {boxes.map((box, index) =>
                <li key={index}>
                   <img src={box.icon} alt="service icon" />
                   <h4> {box.heading}</h4>
                    <p>{box.details}</p>
                </li>
                )}
            </ul>
        )
    }
}

const boxes= [
    {
        icon: iconPackage,
        heading: "Free Shipping Globally",
        details: "Delivery in 4 Days"
    },
    {
        icon: iconService,
        heading: "24/7 Customer Service",
        details: "Call us any time"
    },
    {
        icon: iconCal,
        heading: "Easy Online Returns",
        details: "Send Within 30 Days"
    }
];

export default SalesBoxes;