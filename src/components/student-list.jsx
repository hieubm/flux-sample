var React = require("react"),
    StudentStore = require("../stores/student-store"),
    StudentActions = require("../actions/student-actions");

var StudentList = React.createClass({
    render: function() {
        var studentList = this.props.students.map(function(student, index) {
            return (
                <tr key={index}>
                    <td>{student.name}</td>
                    <td className="col-md-1"><input type="button" value="Edit" className="btn btn-success" onClick={StudentActions.editStudent.bind(null, index)} /></td>
                    <td className="col-md-1"><input type="button" value="Remove" className="btn btn-danger" onClick={StudentActions.removeStudent.bind(null, index)} /></td>
                </tr>
            );
        }.bind(this));

        return (
            <div>
                <table className="table">
                    <tbody>
                        {studentList}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = StudentList;