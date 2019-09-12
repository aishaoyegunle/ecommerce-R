import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import { withStore } from '../../../store/store';
import data from '../../../assets/storedata.json'
class FeaturedProduct extends Component {
  constructor(){
    super();
    this.state = {products: []}
  }
  componentDidMount() {
    this.setState({products: data.slice(0, 3)});
  }
  render() {
    const { products } = this.state;

    return(
      <div className="">
        <section>
          <h2>
            <span>Featured Products</span>
          </h2>
          <div className="featured-items">
            {console.log(products)}
            {products.map((product, i) =>
              <div key={i}>
                <img src={product.img} alt="product"/>
                <h3>{ product.name }</h3>
                <h4>{ product.price }</h4>
                <Link to={product.id}>
                  <button className="multi-item">View Item</button>
                </Link>
              </div>
              )}
          </div>
          </section>
        </div>
  );
  }
}


export default withStore(FeaturedProduct);