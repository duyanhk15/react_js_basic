import { noteData } from './firebaseConnect';

var redux = require('redux');
const noteInitialState = {
    isEdit: false,
    editItem: {},
    isAdd: false,
    AlertShow: false,
    AlertContent:'',
    AlertType:''
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.testItem);
            console.log("thêm dữ liệu thành công: " + JSON.stringify(action.testItem));
            return state
        case "CHANGE_EDIT_STATUS":
            return { ...state, isEdit: !state.isEdit }
        case "CHANGE_ADD_STATUS":
            return { ...state, isAdd: !state.isAdd }
        case "GET_EDIT_DATA":
            return { ...state, editItem: action.editObject }
        case "EDIT_DATA":
            // update data onto firebase database
            noteData.child(action.getItem.id).update({
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent
            })
            console.log("Đã cập nhật dữ liệu: " + JSON.stringify(action.getItem) + " thành công");
            return { ...state, editItem: {} }
        case "GET_DELETE_DATA":
            noteData.child(action.deleteId).remove();
            console.log("Phần tử đã xóa có ID là: " + action.deleteId);
            return state;
        case "ALERT_ON":
            return { ...state, AlertShow: true, AlertContent:action.alertOn, AlertType:action.alertType }
        case "ALERT_OFF":
            return { ...state, AlertShow: false }
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function () {
    console.log(JSON.stringify(store.getState()));
});
export default store;