import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
            id: ''
        }
    }

    componentWillMount = () => {
        if (this.props.editItem) {
            this.setState({
                noteTitle: this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent,
                id: this.props.editItem.id
            })
        }
    }

    onReset = () => {
        this.setState({
            noteTitle: '',
            noteContent: ''
        });
    }

    onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    submitSaveButtonPreventDefault = (e) => {
        e.preventDefault();
    }

    addData = (noteTitle, noteContent) => {
        if (this.state.id) {
            var editObject = {};
            editObject.id = this.state.id;
            editObject.noteTitle = this.state.noteTitle;
            editObject.noteContent = this.state.noteContent;
            this.props.editDataStore(editObject);
            this.props.changeEditStatus();
            this.props.alertOn("Đã sửa dữ liệu thành công","info");
        } else { 
            var item = {};
            if (this.state.noteTitle != null && this.state.noteContent != null) {
                item.noteTitle = this.state.noteTitle;
                item.noteContent = this.state.noteContent;
                this.props.addDataStore(item);
                this.props.changeEditStatus();
                this.props.alertOn("Đã thêm dữ liệu thành công","success");
            } else {
                this.props.alertOn("Không có dữ liệu để thêm. Vui lòng nhập dữ liệu trước khi lưu","warning");
                this.props.changeEditStatus();
            }
        }
    }

    handleClick = (e, noteTitle, noteContent) => {
        this.addData(noteTitle, noteContent);
        this.submitSaveButtonPreventDefault(e);
        this.onReset();
    }

    changeTitle = () => {
        if (this.props.isAdd) {
            return <h4>Thêm mới nội dung ghi chú</h4>
        } else {
            return <h4>Sửa nội dung ghi chú</h4>
        }
    }

    render() {
        return (
            <div className="col-4">
                {this.changeTitle()}
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề ghi chú</label>
                        <input defaultValue={this.props.editItem.noteTitle} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" onChange={(event) => this.onChange(event)} placeholder="nhập tiêu đề cần sửa của ghi chú" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="noteContent">Nội dung ghi chú</label>
                        <textarea defaultValue={this.props.editItem.noteContent} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" placeholder="nhập nội dung cần sửa của ghi chú" onChange={(event) => this.onChange(event)} />
                        <small id="helpIdNoteContent" className="form-text text-muted">Điền nội dung vào đây</small>
                    </div>
                    <button type="reset" onClick={(e, noteTitle, noteContent) => this.handleClick(e, noteTitle, noteContent)} className="btn btn-primary btn-block">Lưu</button>
                </form>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        isAdd: state.isAdd
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (testItem) => {
            dispatch({ type: "ADD_DATA", testItem })
        },
        editDataStore: (getItem) => {
            dispatch({ type: "EDIT_DATA", getItem })
        },
        changeEditStatus: () => {
            dispatch({ type: "CHANGE_EDIT_STATUS" })
        },
        alertOn: (alertOn,alertType) => {
            dispatch({ type: "ALERT_ON", alertOn, alertType})
        },
        alertOff: () => {
            dispatch({ type: "ALERT_OFF" })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);