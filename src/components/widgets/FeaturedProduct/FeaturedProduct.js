import React from 'react'
import { Link } from 'react-router-dom'
  
const FeaturedProduct = () => {
    return(
        <div className="">
        <section>
    <h2>
      <span>Featured Products</span>
    </h2>
    <div class="featureditems">
      <div class="item" v-for="product in featuredProducts" :key="product.id">
        <img :src="`/products/${product.img}`" />
        <h3>{{ product.name }}</h3>
        <h4>{{ product.price | dollar }}</h4>
        <Link :to="`/product/${product.id}`">
          <button class="multi-item">View Item ></button>
        </Link>
      </div>
    </div>
  </section>
      </div className="">
    );
}

export default FeaturedProduct;