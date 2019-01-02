import React, { Component } from 'react';
import './App.css';
import HeadTitle from './HeadTitle';
import Product from './Product';
import AddProduct from './AddProduct';

const getProductData = () => {
  return axios.get('/getdata01')
    .then((res) => res.data)
    .catch(console.log)
}
const axios = require('axios');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentWillMount = () => {
    if (this.state.data === null) {
      getProductData()
        .then((res) => {
          this.setState({
            data: res
          })
        })
    }
  }


  printData = () => {
    if (this.state.data !== null) {
      return (this.state.data.map((value, key) => {
        return <Product
          key={key}
          product_name={value.product_name}
          product_price={value.product_price}
          image={value.image}
        />
      })
      )
    }
  }

  render() {
    return (
      <div>
        <HeadTitle />

        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="row">{this.printData()}
              </div>
            </div>
            <div className="col-2">
              <AddProduct data={this.state.data}
              printData1={()=>this.printData()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
