var StudentConstants = require("../constants/student-constants"),
    AppDispatcher = require("../dispatcher/app-dispatcher");

var StudentActions = {
    addStudent: function(student) {
        AppDispatcher.dispatch({
            action: StudentConstants.ACTION_ADD,
            student: student,
        })
    },
    removeStudent: function(index) {
        AppDispatcher.dispatch({
            action: StudentConstants.ACTION_REMOVE,
            index: index,
        })
    },
    editStudent: function(index) {
        AppDispatcher.dispatch({
            action: StudentConstants.ACTION_EDIT,
            index: index,
        })
    },
    updateStudent: function(student) {
        AppDispatcher.dispatch({
            action: StudentConstants.ACTION_UPDATE,
            student: student,
        })
    },
}

module.exports = StudentActions;