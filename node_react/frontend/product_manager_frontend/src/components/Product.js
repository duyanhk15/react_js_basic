import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            // {/* start col 4 */}
            <div className="col-2 my-3">
                <div className="card text-left">
                    <img className="card-img-top" style={{ height: '50%' }} src={this.props.image} alt="msi gaming" />
                    <div className="card-body">
                        <b className=" float-left">{this.props.product_name}</b>
                        <i className=" float-right">{this.props.product_price}</i>
                    </div>
                </div>
            </div>
            // {/* end col 4 */}
        );
    }
}

export default Product;