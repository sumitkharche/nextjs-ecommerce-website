import React, { Component } from 'react'
import { withRouter, RouterProps } from 'next/router'

class Product extends Component {
    render() {
        return (

            <div className="card">
                <img className="card-img-top card-image" src={this.props.product.metadata.image.imgix_url + "?w=290&h=200"} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.product.title}</h5>
                    <p className="card-text">${this.props.product.metadata.price.toFixed(2)}</p>
                    <button
                        className="btn bg-primary snipcart-add-item"
                        data-item-id={this.props.product._id}
                        data-item-name={this.props.product.title}
                        data-item-price={this.props.product.metadata.price}
                        data-item-url={this.props.router.pathname}
                        data-item-image={this.props.product.metadata.image.imgix_url}>
                        Add to cart
                        </button>
                </div>
                <style jsx>{`
                    .card-main{
                        width:290px;
                    }
                    .card-image{
                        padding: 8px;
                        height:260px;
                    }
                
                `}</style>
            </div>
        )
    }

};
export default withRouter(Product)