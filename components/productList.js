import React, { Component } from 'react'
import axios from "axios";
import config from '../config';
import Product from './product';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        let productList;
        axios.get(
            `https://api.cosmicjs.com/v1/${
            config.bucket.slug
            }/object-type/products?sort=created_at&read_key=${config.bucket.read_key}`
        )
            .then(response => {
                productList = response.data.objects;
                console.log(productList);
                this.setState({
                    products: productList
                });
            });

    }
    render() {
        return (
            <div>
                <div className="card-deck">
                    {this.state.products && this.state.products.map((product, index) =>
                        <Product product={product} key={index} />
                    )}
                </div>
            </div>
        )
    }
}