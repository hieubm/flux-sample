var React = require("react"),
    StudentActions = require("../actions/student-actions"),
    StudentStore = require("../stores/student-store"),
    StudentForm = require("./student-form"),
    StudentList = require("./student-list");

var Main = React.createClass({
    _onChange: function() {
        this.setState({
            students: StudentStore.getStudents(),
        })
    },
    getInitialState: function() {
        return {
            students: StudentStore.getStudents(),
        }
    },
    componentDidMount: function() {
        StudentStore.addChangeListener(this._onChange);
    },
    render: function() {
        return (
            <div className="row">
                <h1 className="text-center">Student Management</h1>
                <div className="col-md-4 col-md-offset-4">
                    <StudentForm />
                    <StudentList students={this.state.students} />
                </div>
            </div>
        );
    }
});

module.exports = Main;