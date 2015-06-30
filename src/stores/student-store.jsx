var _ = require("underscore"),
    StudentConstants = require("../constants/student-constants"),
    AppDispatcher = require("../dispatcher/app-dispatcher"),
    EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';
var CHANGE_EDIT_EVENT = 'change_edit';

var _students = [{name: 'Nguyen Van A'}, {name: 'Bui Thi B'}];
var _editingIndex = -1;

function _addStudent(student) {
    _students.push(student);
}

function _removeStudent(index) {
    _students.splice(index, 1);
}

function _editStudent(index) {
    _editingIndex = index;
}

function _updateStudent(student) {
    _students[_editingIndex] = student;
    _editingIndex = -1;
}

var StudentStore  = _.extend(EventEmitter.prototype, {
    getStudents: function() {
        return _students;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    getEditingStudent: function() {
        if (_editingIndex < 0) {
            return null;
        }
        return _students[_editingIndex];
    },
    emitEditStudent: function(callback) {
        this.emit(CHANGE_EDIT_EVENT, callback);
    },
    addEditStudentListener: function(callback) {
        this.on(CHANGE_EDIT_EVENT, callback);
    },
});

AppDispatcher.register(function(payload) {
    switch (payload.action) {
        case StudentConstants.ACTION_ADD:
            _addStudent(payload.student);
            StudentStore.emitChange();
            break;

        case StudentConstants.ACTION_REMOVE:
            _removeStudent(payload.index);
            StudentStore.emitChange();
            break;

        case StudentConstants.ACTION_EDIT:
            _editStudent(payload.index);
            StudentStore.emitEditStudent();
            break;

        case StudentConstants.ACTION_UPDATE:
            _updateStudent(payload.student);
            StudentStore.emitEditStudent();
            StudentStore.emitChange();
            break;
    }
});

module.exports = StudentStore;