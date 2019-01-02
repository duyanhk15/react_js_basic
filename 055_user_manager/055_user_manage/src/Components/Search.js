import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj: {}
        }
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserEditInfoApp(info);
    }

    isShowEditForm = () => {
        if(this.props.editUserStatus === true)
        return <EditUser
        getUserEditInfo = {(info)=>this.getUserEditInfo(info)} 
        userEditObject = {this.props.userEditObject}
        changeEditUserStatus={()=>this.props.changeEditUserStatus()}/>;
    }


    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue);
    }

    hienThiNut = () => {
        if (this.props.hienThiForm === true) {
            return <div className="btn btn-block btn-outline-secondary ml-3" onClick={() => this.props.ketNoi()}>Đóng lại</div>;
        } else {
            return <div className="btn btn-block btn-outline-info ml-3 mt-0" onClick={() => this.props.ketNoi()}>Thêm mới</div>;
        }
    }

    render() {
        return (
            <div className="col-12">
            {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="Nhập nội dung cần tìm" />
                        <div className="btn btn-info search"><i className="fa fa-search    " aria-hidden="true" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}> Tìm kiếm</i></div>
                        {this.hienThiNut()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;