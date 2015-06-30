var React = require("react"),
    StudentStore = require("../stores/student-store"),
    StudentActions = require("../actions/student-actions");

var StudentForm = React.createClass({
    _onClickAdd: function() {
        StudentActions.addStudent({name: this.state.name});

        this.setState({
            name: "",
        });
    },
    _onClickUpdate: function() {
        var editingStudent = this.state.editingStudent;
        StudentActions.updateStudent({name: this.state.name});

        this.setState({
            name: "",
        });
    },
    _onChangeName: function(e) {
        this.setState({
            name: e.target.value,
        });
    },
    _onEdit: function() {
        var editingStudent = StudentStore.getEditingStudent();

        this.setState({
            editingStudent: editingStudent,
        });

        if (editingStudent) {
            this.setState({
                name: editingStudent.name,
            });
        }
    },
    getInitialState: function() {
        return {
            name: "",
            editingStudent: null,
        }
    },
    componentDidMount: function() {
        StudentStore.addEditStudentListener(this._onEdit);
    },
    render: function() {
        var btnAdd = (<input type="button" value="Add" className="btn btn-primary" onClick={this._onClickAdd} />);
        var btnUpdate = (<input type="button" value="Update" className="btn btn-primary" onClick={this._onClickUpdate} />);

        return (
            <div className="row" style={{margin: "10px"}}>
                <div className="col-md-2">
                    Name:
                </div>
                <div className="col-md-6">
                    <input value={this.state.name} onChange={this._onChangeName} />
                </div>
                <div className="col-md-2">
                    {this.state.editingStudent ? btnUpdate : btnAdd}
                </div>
            </div>
        );
    }
});

module.exports = StudentForm;