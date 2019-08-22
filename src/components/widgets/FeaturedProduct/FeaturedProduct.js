import React, { Component} from 'react'
// import { Link } from 'react-router-dom'
import { withStore } from '../../../store/store';
import data from '../../../assets/storedata.json'
class FeaturedProduct extends Component {
  // getInitialState(){
  //   return {storedata: {data:[]}};
  // }
  componentDidMount() {
    this.props.store.set("storedata", data);
  }
  render() {
    return(
      <div className="">
        <section>
          <h2>
            <span>Featured Products</span>
          </h2>
          <div className="featured-items">
            {/* {console.log(this.props.store.storedata)} */}
            {this.props.store.storedata.map((product) =>
              <div>
                {/* <img src={product.img} alt="product"/> */}
                <h3>{ product.name }</h3>
                {/* <h4>{ product.price }</h4>
                <Link to={product.id}>
                  <button className="multi-item">View Item</button>
                </Link> */}
              </div>
              )}
          </div>
          </section>
        </div>
  );
  }
}


export default withStore(FeaturedProduct);