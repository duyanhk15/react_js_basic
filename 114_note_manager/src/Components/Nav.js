import React, { Component } from 'react';
import { connect } from 'react-redux';


class Nav extends Component {
    handleAdd = (e) => {
        e.preventDefault();
        this.props.changeEditStatus();
        this.props.changeAddStatus();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark mb-4" style={{ backgroundColor: 'black' }}>
                <a className="navbar-brand" href="/">CYBERSOFT</a>
                <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse d-flex justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a onClick={(e)=>this.handleAdd(e)} className="nav-link" href="/">Thêm ghi chú</a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type:"CHANGE_EDIT_STATUS"
            })
        },
        changeAddStatus: () => {
            dispatch({
                type:"CHANGE_ADD_STATUS"
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(Nav);