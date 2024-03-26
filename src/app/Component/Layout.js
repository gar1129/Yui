import React from 'react';
import Alert from './Alert';
import UserTable from './User_Table';
import Pagiiation from './Pagination';
import Navbar from './Navbar';


function Layout() {
  return (
    <>
      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form action="#" method="POST">
              <div className="modal-header">
                <h4 className="modal-title">Add Employee</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="username" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" name="email" required />
                </div>
              </div>
              <div className="modal-footer">
                <input type="button" className="btn btn-default" name="submit" data-dismiss="modal" value="Cancel" />
                <input type="submit" className="btn btn-success" value="Add" />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Edit Modal HTML */}
      <div id="editEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form action="#" method="POST">
              <div className="modal-header">
                <h4 className="modal-title">Edit Employee</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div className="modal-body">
                <input type="hidden" name="updateId" className="updateId" />
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control updateUsername" name="username" required />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="text" className="form-control updatePassword" name="password" required />
                </div>
              </div>
              <div className="modal-footer">
                <input type="button" name="submit" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                <input type="submit" className="btn btn-info" value="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="container-xl">
	<div class="table-responsive d-flex flex-column">
        <Alert/>
        <div className="table-wrapper">
          <Narbar/>
          <Pagiiation/>
          <UserTable/>

        </div>
  </div>
    </>
  );
}

export default Layout;
