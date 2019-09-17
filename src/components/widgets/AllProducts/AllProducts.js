import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { withStore } from '../../../store/store'
import data from '../../../assets/storedata.json'

class AllProducts extends Component {
    constructor(){
      super();
      this.state = {products: []}
    }
    componentDidMount() {
      this.setState({products: data});
    }
    render() {
      const { products } = this.state;
      
      return(
        <div>
            <section>
                <div>
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
                <div>
                    <h2>Special Sale</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero iusto nemo laboriosam perferendis voluptas ullam officiis, quibusdam quas quam eveniet est fugit delectus corporis incidunt nam esse suscipit itaque?
                    </p>
                    <h2>
                        Filter By:
                    </h2>
                </div>
            </section>
        </div>
        
    );      
    }
}
export default withStore(AllProducts);