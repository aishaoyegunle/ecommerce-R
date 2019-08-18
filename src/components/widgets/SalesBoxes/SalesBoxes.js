import React from 'react'

const ListItems = (props) => {
    return <li>{props.value}</li>;
}
const SalesBoxes = (props) => {
    const listItems = boxes.map((box, index) =>
        <ListItems key={index} value={box.heading} >
            {/* <img src="{box.icon}" alt="service icon" /> */}
            <h4>{ box.details }</h4>
            <p>{ box.details }</p>
        </ListItems>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const boxes= [
    {
        icon: "/icon-package.svg",
        heading: "Free Shipping Globally",
        details: "Delivery in 4 Days"
    },
    {
        icon: "/icon-cal.svg",
        heading: "24/7 Customer Service",
        details: "Call us any time"
    },
    {
        icon: "/icon-service.svg",
        heading: "Easy Online Returns",
        details: "Send Within 30 Days"
    }
];

export default SalesBoxes;