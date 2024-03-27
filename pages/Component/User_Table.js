import React from 'react';

function UserTable() {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>
                        <span className="custom-checkbox">
                            <input type="checkbox" id="selectAll" />
                            <label htmlFor="selectAll"></label>
                        </span>
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <span className="custom-checkbox">
                            <input type="checkbox" id="data_checkbox1" className="data_checkbox" name="data_checkbox" value="" />
                            <label htmlFor="data_checkbox1"></label>
                        </span>
                    </td>
                    <td>Anand Raj</td>
                    <td>Rajanand9039@gmail.com</td>
                    <td>
                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="custom-checkbox">
                            <input type="checkbox" id="data_checkbox2" className="data_checkbox" name="data_checkbox" value="" />
                            <label htmlFor="data_checkbox2"></label>
                        </span>
                    </td>
                    <td>Anand Raj</td>
                    <td>Rajanand@gmail.com</td>
                    <td>
                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="custom-checkbox">
                            <input type="checkbox" id="data_checkbox3" className="data_checkbox" name="data_checkbox" value="" />
                            <label htmlFor="data_checkbox3"></label>
                        </span>
                    </td>
                    <td>Anand Raj</td>
                    <td>Rajanand@gmail.com</td>
                    <td>
                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="custom-checkbox">
                            <input type="checkbox" id="data_checkbox4" className="data_checkbox" name="data_checkbox" value="" />
                            <label htmlFor="data_checkbox4"></label>
                        </span>
                    </td>
                    <td>Anand Raj</td>
                    <td>Rajanand@gmail.com</td>
                    <td>
                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default UserTable;
