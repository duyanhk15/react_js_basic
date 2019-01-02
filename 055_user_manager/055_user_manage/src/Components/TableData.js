import React, { Component } from 'react';
import TableDataRow from './TableDataRow'

class TableData extends Component {

    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser);
    }

    mappingDataUser = () => this.props.dataUserProps.map((value, key) => (
        <TableDataRow
            deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)}
            changeEditUserStatus={() => this.props.changeEditUserStatus()}
            editFunClick={(user) => this.props.editFun(value)}
            key={key}
            userName={value.name}
            sst={key}
            sdt={value.tel}
            auth={value.permission}
            id={value.id}
        />
    ))

    render() {
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
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default TableData;