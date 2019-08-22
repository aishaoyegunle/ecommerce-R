import React from 'react'
import { Link } from 'react-router-dom'
import { withStore } from '../../../store/store';
import data from '../../../assets/storedata.json'
class FeaturedProduct extends Component {
  componentDidMount() {
    this.props.store.set("storedata", "data");
  }
  render() {
    // return <div>Hello {this.props.store.name}</div>;
    return(
      <div className="">
        <section>
          <h2>
            <span>Featured Products</span>
          </h2>
          <div class="featureditems">
            {/* <div class="item" v-for="product in featuredProducts" :key="product.id">
              <img :src="`/products/${product.img}`" />
              <h3>{{ product.name }}</h3>
              <h4>{{ product.price | dollar }}</h4>
              <Link :to="`/product/${product.id}`">
                <button class="multi-item">View Item ></button>
              </Link>
            </div> */}
          </div>
          </section>
        </div>
  );
  }
}


export default withStore(FeaturedProduct);