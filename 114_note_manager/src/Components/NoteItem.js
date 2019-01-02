import React, { Component } from 'react';
import { connect } from 'react-redux';


class NoteItem extends Component {

    deleteData = () => {
        this.props.getDeleteData(this.props.note.id);
        this.props.alertOn("Đã xóa dữ liệu với tiêu đề: " + this.props.note.noteTitle +" thành công","danger")
    }

    handleClick = () => {
        this.props.changeEditStatus()
        this.props.getEditData(this.props.note)
    }
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id={this.props.index}>
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.index} aria-expanded="true" aria-controls="noteContent1">
                            {this.props.noteTitle};
                        </a>
                        <div className="btn-group float-right">
                            <button className="btn btn-outline-info mr-2" onClick={()=>this.handleClick()}>Sửa</button>
                            <button className="btn btn-outline-secondary" onClick={()=>this.deleteData()}>Xóa</button>
                        </div>
                    </h5>
                </div>
                <div id={"number" + this.props.index} className="collapse in" role="tabpanel" aria-labelledby={this.props.index}>
                    <div className="card-body">
                        {this.props.noteContent};
                    </div>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        getEditData: (editObject) => {
            dispatch({
                type: "GET_EDIT_DATA",
                editObject
            })
        },
        getDeleteData: (deleteId) => {
            dispatch({
                type: "GET_DELETE_DATA",
                deleteId
            })
        },
        alertOn: (alertOn,alertType) => {
            dispatch({
                type: "ALERT_ON",
                alertOn,
                alertType
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(NoteItem);