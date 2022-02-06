import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";


export default class TeacherModal extends Component {
  render() {
    return (
    
        <Modal>
    
        
    {/* <!-- add Modal --> */}
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Add New Teacher</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <Modal.Body>
            <div className="modal-body">
                <form action="">
                <div className="mb-3">
                    <label for="fname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="fname" placeholder="Ragnar"/>
                </div>
                <div className="mb-3">
                    <label for="lname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lname" placeholder="Lothbrok"/>
        
                </div>
        
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="lname" placeholder="name@example.com"/>
        
                </div>
        
                </form>
            </div>
          </Modal.Body>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
    
    
    
    
    
    
    {/* <!-- edit Modal --> */}
    <div className="modal fade" id="editStudent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="editStudentLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editStudentLabel">Add Teacher profile</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form action="">
              <div className="mb-3">
                <label for="fname" className="form-label">First Name</label>
                <input type="text" className="form-control" id="fname" placeholder="Ragnar"/>
              </div>
              <div className="mb-3">
                <label for="lname" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lname" placeholder="Lothbrok"/>
    
              </div>
    
              <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="lname" placeholder="name@example.com" />
    
              </div>
    
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
    
    
    
        </Modal>
    
        );
  }
}
