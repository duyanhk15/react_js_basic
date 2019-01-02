import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    // Cách 1
    // Cách 2 đang sử dụng
    /* mappingDataUser = () => this.props.dataUserProps.map((value, key) => (
        <TableDataRow key={key} stt={key} userName={value.name} tel={value.tel} permission={value.permission} />
        ))*/


    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser);
    }

    render() {
        let mappingDataUser = this.props.dataUserProps.map((value, key) => {
            return <TableDataRow 
            key={key} 
            stt={key}
            id={value.id} 
            userName={value.name} 
            tel={value.tel} 
            permission={value.permission}
            deleteButtonClick = {(idUser)=>this.deleteButtonClick(idUser)}
            editUser={(user)=>this.props.editUser(value)} 
            changeEditUserStatus={()=>this.props.changeEditUserStatus()}
            />
        })
        return (
            <div className="col">
                <table className="table table-striped table-hover table-{1:striped|sm|bordered|hover|inverse}">
                    <thead className="thead-inverse|thead-default text-center">
                        <tr>
                            <th>Số thứ tự</th>
                            <th>Tên</th>
                            <th>Số điện thoại</th>
                            <th>Authority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Sử dụng cho cách 1 - viết hàm */}
                        {/* {this.mappingDataUser()} */}
                        {mappingDataUser}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;