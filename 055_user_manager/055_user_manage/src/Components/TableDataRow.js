import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if (this.props.auth == 1) {
            return "Quản trị viên";
        } else if(this.props.auth == 2){
            return "Nhân viên"
        } else {
            return "Khác"
        }
    }
    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser);
    }
    render() {
        return (
            <tr>
                <td className="text-center">{this.props.sst+1}</td>
                <td className="text-center">{this.props.userName}</td>
                <td className="text-center">{this.props.sdt}</td>
                <td className="text-center">{this.permissionShow()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning edit" onClick={()=> this.editClick()}><i className="fa fa-edit    ">
                        </i>Sửa</div>
                        <div className="btn btn-danger remove" onClick={(idUser)=> this.deleteButtonClick(this.props.id)}><i className="fa fa-remove" aria-hidden="true" />Xoá</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;