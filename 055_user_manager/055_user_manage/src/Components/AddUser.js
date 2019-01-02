import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""
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
                <div className="col-12">
                    <div className="card border-primary mb-3 mt-3">
                        <div className="card-header text-center">Thêm mới user vào hệ thống</div>
                        <form>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <label >Tên đăng nhập</label>
                                    <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <label >Số điện thoại</label>
                                    <input type="text" onChange={(event) => this.isChange(event)} name="tel" className="form-control" placeholder="Phone number" />
                                </div>
                                <div className="form-group">
                                    <label >Quyền hạn</label><br />
                                    <div className="form-group">
                                        <select className="custom-select" name="permission" onChange={(event) => this.isChange(event)} required>
                                            <option value>Chọn quyền mặc định</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Member</option>
                                            <option value={3}>Guest</option>
                                        </select>
                                    </div>
                                    <input type="reset" value="Thêm mới" className="btn btn-block btn-primary"
                                        onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} />
                                </div>
                            </div>
                        </form>
                    </div>
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