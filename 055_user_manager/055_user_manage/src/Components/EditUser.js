import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }

    render() {
        return (
            <div className="col-12">
                <div className="card text-white bg-warning mb-3 mt-3">
                    <div className="card-header text-center">Sửa thông tin user trong hệ thống</div>
                    <form>
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
                                <label >Quyền hạn</label><br />
                                <div className="form-group">
                                    <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.permission} className="custom-select" name="permission" required>
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Member</option>
                                        <option value={3}>Guest</option>
                                    </select>
                                </div>
                                <input type="button" value="Lưu lại" className="btn btn-block btn-danger" onClick={()=>this.saveButton()}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;