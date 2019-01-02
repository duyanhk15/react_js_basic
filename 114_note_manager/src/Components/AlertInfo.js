import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import {connect} from 'react-redux';

class AlertInfo extends Component {

    handleDismis = () => {
        this.props.alertOff();
    }
    render() {
        if(this.props.AlertShow===false){
            return null;
        }
        return (
            <AlertContainer>
                <Alert type={this.props.AlertType} onDismiss={()=>this.handleDismis()} timeout={2500}>
                {this.props.AlertContent}
                </Alert>
            </AlertContainer>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        AlertShow: state.AlertShow,
        AlertContent: state.AlertContent,
        AlertType: state.AlertType
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({type:"ALERT_OFF"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)