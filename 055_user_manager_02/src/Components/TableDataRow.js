import React, { Component } from 'react';

class TableDataRow extends Component {

    permissionShow = () => {
        if (parseInt(this.props.permission, 10) === 1) { return "Admin "; }
        else if (parseInt(this.props.permission, 10) === 2) { return "Member "; }
        else { return "Other "; }
    }

    editClick = () => {
        this.props.changeEditUserStatus();
        this.props.editUser();
    }

    deleteButtonClick = (idUser) =>{
        this.props.deleteButtonClick(idUser);
    }


    render() {
        return (
            <tr>
                <td >{this.props.stt + 1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning edit" onClick={() => this.editClick()}><i className="fa fa-edit    ">
                        </i>Sửa</div>
                        <div className="btn btn-danger remove" onClick={(idUser)=>this.deleteButtonClick(this.props.id)}><i className="fa fa-remove" aria-hidden="true" />Xoá</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;