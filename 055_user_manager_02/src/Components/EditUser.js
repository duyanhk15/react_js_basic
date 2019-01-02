import React, { Component } from 'react';
// import { log } from 'util';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state={
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            permission:this.props.userEditObject.permission
        }
    }
    

    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    saveButton = ()=>{
        var info={}
        info.id= this.state.id;
        info.name= this.state.name;
        info.tel= this.state.tel;
        info.permission= this.state.permission;

        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }
    render() {
        return (
            <div className="col-12">
                <form method="post">
                    <div className="card text-white bg-warning mb-3 mt-2">
                        <div className="card-header text-center">Thay đổi thông tin user
                        </div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <label >Tên đăng nhập</label>
                                <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <label >Số điện thoại</label>
                                <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control" placeholder="Phone number" />
                            </div>
                            <div className="form-group">
                                <label >Quyền người dùng</label>
                                <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.permission} className="form-control" name="permission" required>
                                    <option value>Chọn quyền người dùng</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Member</option>
                                    <option value={3}>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-block btn-primary" onClick={()=>this.saveButton()}>
                                    <i className="fa fa-floppy-o"></i> Lưu </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;