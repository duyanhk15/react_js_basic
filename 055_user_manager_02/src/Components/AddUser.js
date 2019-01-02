import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            tel: '',
            permission: ''
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });

    }

    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <form>
                        <div className="card border-primary mb-3 mt-2">
                            <div className="card-header text-center">Thêm mới user vào hệ thống
                        </div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <label >Tên đăng nhập</label>
                                    <input type="text" name="name" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <label >Số điện thoại</label>
                                    <input type="text" name="tel" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Phone number" />
                                </div>
                                <div className="form-group">
                                    <label >Quyền người dùng</label>
                                    <select className="form-control" name="permission" onChange={(event) => this.isChange(event)} required>
                                        <option value>Chọn quyền người dùng</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Member</option>
                                        <option value={3}>Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button type="reset" className="btn btn-block btn-primary" onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} >
                                        <i className="fa fa-plus-circle"></i> Thêm mới</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }

    render() {

        return (
            <div>
                {this.kiemTraTrangThai()}
            </div>
        );
    }
}

export default AddUser;