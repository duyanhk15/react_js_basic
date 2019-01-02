import React, { Component } from 'react';
const axios = require('axios');

const addProductAction = (product_name, product_price, image) => {
    return (
    axios.post('/addproducts',{product_name, product_price, image})
    .then((resp)=>resp.data)
    )
}

class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.state={
            product_name:'',
            product_price:'',
            image:''
        }
    }

    isChange=(event)=>{
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        // console.log(JSON.stringify(this.state));
        var count=0;
        var dataTemp = [];
        var item = {};
        item.product_name = this.state.product_name;
        item.product_price = this.state.product_price;
        item.image = this.state.image;
        dataTemp= this.props.data;
        // console.log("Data temp: "+JSON.stringify(dataTemp));
        if(item.product_name !== ''){
            dataTemp.push(item);
            this.props.printData1(()=>{
                this.setState({
                    data: dataTemp
                })
            })
        }
        console.log("\nData temp lần 2: "+JSON.stringify(dataTemp));
        for(var i=0;i<dataTemp.length; i++){
            count++;
        }
        console.log("tổng số sản phẩm là: "+count);

        addProductAction(this.state.product_name, this.state.product_price, this.state.image).then((response)=>{
            console.log(response);
        })
    }
    
    render() {
        return (
            <div className="container-fluid sticky-top">
                <div className="row">
                    <div >
                        <form>
                            <div className="form-group">
                                <label htmlFor="product_name">Tên sản phẩm</label>
                                <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="product_name" id="product_name" aria-describedby="name_text" placeholder="nhập tên sản phẩm" />
                                <small id="name_text" className="form-text text-muted">input name of product</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="product_price">Giá sản phẩm</label>
                                <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="product_price" id="product_price" aria-describedby="price" placeholder="nhập giá sản phẩm" />
                                <small id="price" className="form-text text-muted">input price of product</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="image">Đường link ảnh</label>
                                <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="image" id="image" aria-describedby="image_link" placeholder="nhập link ảnh sản phẩm" />
                                <small id="image_link" className="form-text text-muted">input link of product's image</small>
                            </div>

                            <button type="reset" onClick={()=>this.handleClick()} className="btn btn-block btn-info">Thêm mới</button>

                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default AddProduct;