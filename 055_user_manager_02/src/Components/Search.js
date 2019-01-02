import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempValue: "",
            userObj: {}
        }
    }

    isShowEdit = ()=>{
        if(this.props.editUserStatus === true){
            return <EditUser
            getUserEditInfo={(info)=>this.getUserEditInfo(info)}
            changeEditUserStatus={()=>this.props.changeEditUserStatus()}
            userEditObject={this.props.userEditObject}
            
            />
        }
    }

   
    getUserEditInfo = (info) =>{
        this.setState({
            userObj:info
        });
        this.props.getUserEditInfoApp(info)
    }

    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue);
    }

    hienThi = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div>
                    <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}>Đóng lại</div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()} >Thêm mới </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="col-12">
            {this.isShowEdit()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="Nhập nội dung cần tìm" />
                        <div className="btn btn-info search"><i className="fa fa-search" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}> Tìm kiếm</i></div>
                    </div>
                    <div className="btn-group1">
                        {this.hienThi()}
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Search;