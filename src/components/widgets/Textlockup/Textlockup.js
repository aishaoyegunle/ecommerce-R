import React from 'react'

const Textlockup = ({ img, title, sale, collection, details }) => {
    return (
        <div className="textlockup">
            <div className="img">
                {img}
            </div>
            <div className="title">
                {title}
            </div>
            <div className="sale">
                {sale}
            </div>
            <div className="collection">
                {collection}
            </div>
            <div className="details">
                {details}
            </div>
          </div>
    );
  }

export default Textlockup;